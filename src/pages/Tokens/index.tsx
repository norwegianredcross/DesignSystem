import { useEffect, useState, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card, CardBlock } from '../../components/Card';
import styles from './styles.module.css';

interface Token {
  name: string;
  value: string;
  category: string;
  group: string;
  subGroup?: string;
}

interface TokenGroup {
  name: string;
  tokens: Token[];
}

// Compares strings so embedded numbers sort numerically (size-2 before size-10).
const naturalCompare = (a: string, b: string): number =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 4.5V3.5C5.5 2.67157 6.17157 2 7 2H12.5C13.3284 2 14 2.67157 14 3.5V9C14 9.82843 13.3284 10.5 12.5 10.5H11.5M5.5 4.5H3.5C2.67157 4.5 2 5.17157 2 6V12.5C2 13.3284 2.67157 14 3.5 14H9C9.82843 14 10.5 13.3284 10.5 12.5V10.5M5.5 4.5C5.5 5.32843 6.17157 6 7 6H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TokensPage = () => {
  const { t } = useLanguage();
  const [tokens, setTokens] = useState<Token[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('colors');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Extract all CSS custom properties from the document
    const rootStyles = getComputedStyle(document.documentElement);
    const allTokens: Token[] = [];

    for (let i = 0; i < rootStyles.length; i++) {
      const property = rootStyles[i];
      if (property.startsWith('--ds-')) {
        const value = rootStyles.getPropertyValue(property).trim();
        if (value) {
          const parts = property.replace('--ds-', '').split('-');

          let category = 'other';
          let group = '';
          let subGroup = '';

          if (parts[0] === 'color') {
            category = 'colors';
            if (parts.length >= 3) {
              const knownSubGroups = ['base', 'text', 'background', 'border', 'surface', 'focus', 'link', 'hover', 'active', 'visited', 'subtle', 'default', 'strong', 'inner', 'outer'];
              let subGroupIndex = -1;
              for (let j = 1; j < parts.length; j++) {
                if (knownSubGroups.includes(parts[j])) {
                  subGroupIndex = j;
                  break;
                }
              }
              if (subGroupIndex > 0) {
                group = parts.slice(1, subGroupIndex).join('-');
                subGroup = parts[subGroupIndex];
              } else {
                group = parts[1];
                subGroup = parts[2] || '';
              }
            }
          } else if (parts[0] === 'size') {
            category = 'sizes';
            group = 'spacing';
          } else if (parts[0] === 'font' || parts[0] === 'body' || parts[0] === 'heading') {
            category = 'typography';
            group = parts[0];
            if (parts.length > 1) {
              subGroup = parts[1];
            }
          } else if (parts[0] === 'border') {
            category = 'borders';
            if (parts.length > 1) {
              group = parts[1];
            }
          } else if (parts[0] === 'shadow') {
            category = 'shadows';
            group = 'shadows';
          } else if (parts[0] === 'opacity' || parts[0] === 'spacing') {
            category = parts[0] === 'opacity' ? 'effects' : 'sizes';
            group = parts[0];
          }

          allTokens.push({
            name: property,
            value: value,
            category: category,
            group: group || 'general',
            subGroup: subGroup
          });
        }
      }
    }

    allTokens.sort((a, b) => {
      const categoryOrder = ['colors', 'sizes', 'typography', 'borders', 'shadows', 'effects', 'other'];
      const categoryDiff = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
      if (categoryDiff !== 0) return categoryDiff;

      const groupDiff = a.group.localeCompare(b.group);
      if (groupDiff !== 0) return groupDiff;

      const subGroupA = a.subGroup || '';
      const subGroupB = b.subGroup || '';
      const subGroupDiff = subGroupA.localeCompare(subGroupB);
      if (subGroupDiff !== 0) return subGroupDiff;

      return naturalCompare(a.name, b.name);
    });

    setTokens(allTokens);
  }, []);

  const structuredGroups = useMemo(() => {
    const categoryGroups: Record<string, Record<string, TokenGroup>> = {};

    tokens.forEach(token => {
      if (!categoryGroups[token.category]) {
        categoryGroups[token.category] = {};
      }

      const groupKey = token.group;
      if (!categoryGroups[token.category][groupKey]) {
        categoryGroups[token.category][groupKey] = {
          name: groupKey,
          tokens: []
        };
      }

      categoryGroups[token.category][groupKey].tokens.push(token);
    });

    // Sort tokens within each group
    Object.keys(categoryGroups).forEach(category => {
      Object.keys(categoryGroups[category]).forEach(groupKey => {
        const group = categoryGroups[category][groupKey];
        group.tokens.sort((a, b) => {
          const getVariant = (token: Token): string => {
            if (!token.subGroup) return '';
            const parts = token.name.replace('--ds-', '').split('-');
            const subGroupIndex = parts.findIndex((part, idx) =>
              idx > 0 && part === token.subGroup
            );
            if (subGroupIndex >= 0 && subGroupIndex < parts.length - 1) {
              return parts.slice(subGroupIndex + 1).join('-');
            }
            const suffix = token.name.split(`-${token.subGroup}-`)[1] || '';
            return suffix || '';
          };

          const subGroupA = a.subGroup || '';
          const subGroupB = b.subGroup || '';
          const variantA = getVariant(a);
          const variantB = getVariant(b);

          const subGroupPriority: Record<string, number> = {
            'base': 0,
            'text': 1,
            'background': 2,
            'surface': 3,
            'border': 4,
          };

          const priorityA = subGroupPriority[subGroupA] ?? 999;
          const priorityB = subGroupPriority[subGroupB] ?? 999;

          if (priorityA !== priorityB) {
            return priorityA - priorityB;
          }

          const variantPriorityOrder: Record<string, number> = {
            'default': 0,
            'hover': 1,
            'focus': 2,
            'active': 3,
          };

          const variantPriorityA = variantPriorityOrder[variantA] ?? 999;
          const variantPriorityB = variantPriorityOrder[variantB] ?? 999;

          if (variantPriorityA !== variantPriorityB) {
            return variantPriorityA - variantPriorityB;
          }

          // Natural-sort fallback: compare trailing number so --ds-size-2 beats --ds-size-10
          // and --ds-body-2xs-font-size stays next to its siblings.
          return naturalCompare(a.name, b.name);
        });
      });
    });

    return categoryGroups;
  }, [tokens]);

  const categoryLabels: Record<string, string> = {
    colors: t('tokensPage.categories.colors'),
    sizes: t('tokensPage.categories.sizes'),
    typography: t('tokensPage.categories.typography'),
    borders: t('tokensPage.categories.borders'),
    shadows: t('tokensPage.categories.shadows'),
    effects: t('tokensPage.categories.effects'),
    other: t('tokensPage.categories.other')
  };

  const categoryOrder = ['colors', 'sizes', 'typography', 'borders', 'shadows', 'effects', 'other'];

  const colorGroupOrder = [
    'primary-color-red',
    'neutral',
    'success',
    'danger',
    'warning',
    'info',
    'accent',
    'brand1',
    'brand2',
    'brand3',
  ];

  const groupPriorityOrders: Record<string, string[]> = {
    colors: colorGroupOrder,
    typography: ['font', 'body', 'heading'],
    sizes: ['spacing', 'size'],
  };

  const formatGroupName = (name: string): string => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const sortGroups = (category: string, groups: string[]): string[] => {
    const priorityOrder = groupPriorityOrders[category];

    return groups.sort((a, b) => {
      if (priorityOrder) {
        const indexA = priorityOrder.indexOf(a);
        const indexB = priorityOrder.indexOf(b);
        if (indexA === -1 && indexB === -1) {
          if (category === 'colors') {
            const groupA = structuredGroups[category][a];
            const groupB = structuredGroups[category][b];
            const aHasBase = groupA?.tokens.some(t => t.subGroup === 'base') || false;
            const bHasBase = groupB?.tokens.some(t => t.subGroup === 'base') || false;

            if (aHasBase && !bHasBase) return -1;
            if (!aHasBase && bHasBase) return 1;
          }
          return a.localeCompare(b);
        }
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
      }

      return a.localeCompare(b);
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here if needed
    });
  };

  const sortedCategories = Object.keys(structuredGroups)
    .filter(category => {
      const groups = structuredGroups[category];
      return groups && Object.keys(groups).length > 0;
    })
    .sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  // If the initial active category isn't in the available list once tokens load, fall back to the first one.
  useEffect(() => {
    if (sortedCategories.length > 0 && !sortedCategories.includes(activeCategory)) {
      setActiveCategory(sortedCategories[0]);
    }
  }, [sortedCategories, activeCategory]);

  const renderPreview = (token: Token) => {
    const { category, name, value } = token;

    if (category === 'sizes') {
      return (
        <div className={styles.sizeBarWrapper}>
          <div className={styles.sizeBar} style={{ width: value }} />
        </div>
      );
    }

    if (category === 'borders') {
      if (name.includes('radius')) {
        return <div className={styles.radiusBox} style={{ borderRadius: value }} />;
      }
      return <div className={styles.borderLine} style={{ borderTopWidth: value }} />;
    }

    if (category === 'shadows') {
      return <div className={styles.shadowBox} style={{ boxShadow: value }} />;
    }

    if (category === 'effects' && name.includes('opacity')) {
      return <div className={styles.opacityBox} style={{ opacity: value }} />;
    }

    if (category === 'typography') {
      if (name.includes('weight')) {
        return <span className={styles.typeSample} style={{ fontWeight: value as React.CSSProperties['fontWeight'] }}>Aa</span>;
      }
      if (name.includes('line-height')) {
        return <span className={styles.typeSample} style={{ lineHeight: value }}>Aa</span>;
      }
      if (name.includes('family')) {
        return <span className={styles.typeSample} style={{ fontFamily: value }}>Aa</span>;
      }
      // default: treat as font-size
      return <span className={styles.typeSample} style={{ fontSize: value }}>Aa</span>;
    }

    return null;
  };

  const currentGroupKeys = structuredGroups[activeCategory]
    ? sortGroups(activeCategory, Object.keys(structuredGroups[activeCategory]))
    : [];

  return (
    <main className={`container ${styles.docLayout}`}>
      {/* --- SIDEBAR TOGGLE (mobile only) --- */}
      <button
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-expanded={sidebarOpen}
      >
        {categoryLabels[activeCategory] || t('tokensPage.categoriesLabel')}
      </button>

      {/* --- SIDEBAR --- */}
      <aside className={`${styles.sidebar} ${!sidebarOpen ? styles.sidebarCollapsed : ''}`}>
        <nav className={styles.nav}>
          <div className={styles.group}>
            <div className={styles.navGroupLabel}>{t('tokensPage.categoriesLabel')}</div>
            <ul className={styles.list}>
              {sortedCategories.map((category) => (
                <li key={category} className={styles.listItem}>
                  <button
                    type="button"
                    className={`${styles.link} ${activeCategory === category ? styles.linkActive : ''}`}
                    onClick={() => {
                      setActiveCategory(category);
                      setSidebarOpen(false);
                    }}
                  >
                    {categoryLabels[category]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className={styles.docContent}>
        <Heading level={1} data-size="xl" className={styles.pageTitle}>{t('tokensPage.title')}</Heading>
        <Paragraph data-size="lg" className={styles.pageDescription}>
          {t('tokensPage.description')}
        </Paragraph>
        <hr className={styles.pageDivider} />

        {structuredGroups[activeCategory] && (
          <section className={styles.categorySection}>
            <Heading level={2} data-size="lg" className={styles.categoryTitle}>
              {categoryLabels[activeCategory]}
            </Heading>

            {currentGroupKeys.map(groupKey => {
              const group = structuredGroups[activeCategory][groupKey];
              return (
                <div key={groupKey} className={styles.tokenGroup}>
                  <Heading level={3} data-size="sm" className={styles.groupHeading}>
                    {formatGroupName(group.name)}
                  </Heading>

                  {activeCategory === 'colors' ? (
                    <div className={styles.tokensGrid}>
                      {group.tokens.map((token, index) => (
                        <Card key={index} className={styles.tokenCard} data-color="neutral">
                          <CardBlock>
                            <div className={styles.colorSwatchContainer}>
                              <span
                                className={styles.colorSwatch}
                                style={{ backgroundColor: token.value }}
                                aria-label={t('tokensPage.colorPreviewLabel').replace('{value}', token.value)}
                              />
                              <button
                                className={styles.copyButton}
                                onClick={() => copyToClipboard(token.name)}
                                aria-label={t('tokensPage.copyTokenLabel').replace('{name}', token.name)}
                                title={`Copy ${token.name}`}
                              >
                                <CopyIcon />
                              </button>
                            </div>
                            <div className={styles.tokenInfo}>
                              <code className={styles.tokenName} title={token.name}>
                                {token.name}
                              </code>
                              <code className={styles.tokenValue} title={token.value}>
                                {token.value}
                              </code>
                            </div>
                          </CardBlock>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <ul className={styles.tokenList}>
                      {group.tokens.map((token, index) => (
                        <li key={index} className={styles.tokenRow}>
                          <code className={styles.tokenRowName} title={token.name}>
                            {token.name}
                          </code>
                          <div className={styles.tokenRowPreview}>
                            {renderPreview(token)}
                          </div>
                          <code className={styles.tokenRowValue} title={token.value}>
                            {token.value}
                          </code>
                          <button
                            className={styles.copyButtonInline}
                            onClick={() => copyToClipboard(token.name)}
                            aria-label={t('tokensPage.copyTokenLabel').replace('{name}', token.name)}
                            title={`Copy ${token.name}`}
                          >
                            <CopyIcon />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
};
