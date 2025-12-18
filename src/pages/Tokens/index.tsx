import { useEffect, useState, useMemo, useRef } from 'react';
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

export const TokensPage = () => {
  const { t } = useLanguage();
  const [tokens, setTokens] = useState<Token[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Extract all CSS custom properties from the document
    const rootStyles = getComputedStyle(document.documentElement);
    const allTokens: Token[] = [];
    
    // Get all CSS custom properties
    for (let i = 0; i < rootStyles.length; i++) {
      const property = rootStyles[i];
      if (property.startsWith('--ds-')) {
        const value = rootStyles.getPropertyValue(property).trim();
        if (value) {
          // Parse token structure: --ds-category-group-subgroup-property
          const parts = property.replace('--ds-', '').split('-');
          
          let category = 'other';
          let group = '';
          let subGroup = '';
          
          if (parts[0] === 'color') {
            category = 'colors';
            // --ds-color-neutral-text-default -> group: neutral, subGroup: text
            // --ds-color-primary-color-red-base-default -> group: primary-color-red, subGroup: base
            if (parts.length >= 3) {
              // Known subgroups that mark the end of the group name
              const knownSubGroups = ['base', 'text', 'background', 'border', 'surface', 'focus', 'link', 'hover', 'active', 'visited', 'subtle', 'default', 'strong', 'inner', 'outer'];
              
              // Find where the subgroup starts
              let subGroupIndex = -1;
              for (let i = 1; i < parts.length; i++) {
                if (knownSubGroups.includes(parts[i])) {
                  subGroupIndex = i;
                  break;
                }
              }
              
              if (subGroupIndex > 0) {
                // Group is everything between parts[1] and subGroupIndex
                group = parts.slice(1, subGroupIndex).join('-');
                subGroup = parts[subGroupIndex];
              } else {
                // Fallback: assume parts[1] is group, parts[2] is subgroup
                group = parts[1];
                subGroup = parts[2] || '';
              }
            }
          } else if (parts[0] === 'size') {
            category = 'sizes';
            group = 'spacing';
          } else if (parts[0] === 'font' || parts[0] === 'body' || parts[0] === 'heading') {
            category = 'typography';
            group = parts[0]; // font, body, heading
            if (parts.length > 1) {
              subGroup = parts[1]; // size, weight, etc.
            }
          } else if (parts[0] === 'border') {
            category = 'borders';
            if (parts.length > 1) {
              group = parts[1]; // radius, width
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
    
    // Sort tokens by category, group, subgroup, and name
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
      
      return a.name.localeCompare(b.name);
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
    
    // Sort tokens within each group: base-default first, then base states, then other subgroups
    Object.keys(categoryGroups).forEach(category => {
      Object.keys(categoryGroups[category]).forEach(groupKey => {
        const group = categoryGroups[category][groupKey];
        group.tokens.sort((a, b) => {
          // Helper function to extract variant from token name (last part after subgroup)
          const getVariant = (token: Token): string => {
            if (!token.subGroup) return '';
            const parts = token.name.replace('--ds-', '').split('-');
            const subGroupIndex = parts.findIndex((part, idx) => 
              idx > 0 && part === token.subGroup
            );
            if (subGroupIndex >= 0 && subGroupIndex < parts.length - 1) {
              const variant = parts.slice(subGroupIndex + 1).join('-');
              return variant;
            }
            // Fallback: check if name ends with the subgroup followed by something
            const suffix = token.name.split(`-${token.subGroup}-`)[1] || '';
            return suffix || '';
          };
          
          // Check if variant is exactly "default" (not "contrast-default" or similar)
          const isDefaultVariant = (token: Token, variant: string): boolean => {
            // Only return true if variant is exactly "default"
            // Check both the extracted variant and if the token name ends with "-{subgroup}-default"
            if (variant === 'default') return true;
            // Also check if it ends with "-{subgroup}-default" pattern (not "-{subgroup}-something-default")
            if (token.subGroup && token.name.endsWith(`-${token.subGroup}-default`)) {
              return true;
            }
            return false;
          };
          
          const subGroupA = a.subGroup || '';
          const subGroupB = b.subGroup || '';
          const variantA = getVariant(a);
          const variantB = getVariant(b);
          
          // Priority order for subgroups: base first, then others
          const subGroupPriority: Record<string, number> = {
            'base': 0,
            'text': 1,
            'background': 2,
            'surface': 3,
            'border': 4,
          };
          
          const priorityA = subGroupPriority[subGroupA] ?? 999;
          const priorityB = subGroupPriority[subGroupB] ?? 999;
          
          // Sort by subgroup priority first
          if (priorityA !== priorityB) {
            return priorityA - priorityB;
          }
          
          // Within same subgroup, prioritize variants in specific order: default, hover, focus, active, then others
          const variantPriorityOrder: Record<string, number> = {
            'default': 0,
            'hover': 1,
            'focus': 2,
            'active': 3,
            // All other variants get priority 999 and will be sorted alphabetically
          };
          
          const variantPriorityA = variantPriorityOrder[variantA] ?? 999;
          const variantPriorityB = variantPriorityOrder[variantB] ?? 999;
          
          // Sort by variant priority first
          if (variantPriorityA !== variantPriorityB) {
            return variantPriorityA - variantPriorityB;
          }
          
          // If both have same priority (both are 999 or both are same priority), sort alphabetically
          if (variantA !== variantB) {
            return variantA.localeCompare(variantB);
          }
          
          // Finally, sort by full name alphabetically
          return a.name.localeCompare(b.name);
        });
      });
    });
    
    return categoryGroups;
  }, [tokens]);

  const categoryLabels: Record<string, string> = {
    colors: 'Colors',
    sizes: 'Sizes & Spacing',
    typography: 'Typography',
    borders: 'Borders',
    shadows: 'Shadows',
    effects: 'Effects',
    other: 'Other'
  };

  const categoryOrder = ['colors', 'sizes', 'typography', 'borders', 'shadows', 'effects', 'other'];

  // Define priority order for color groups (most important first)
  const colorGroupOrder = [
    'primary-color-red', // PRIMARY COLORS FIRST - Brand colors
    'neutral',           // Neutral colors second
    'success',           // Semantic colors
    'danger',
    'warning',
    'info',
    'accent',
    'brand1',
    'brand2',
    'brand3',
  ];

  // Define priority order for other category groups
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

  // Sort groups within a category by priority
  const sortGroups = (category: string, groups: string[]): string[] => {
    const priorityOrder = groupPriorityOrders[category];
    
    return groups.sort((a, b) => {
      // Use priority order first (primary colors come first)
      if (priorityOrder) {
        const indexA = priorityOrder.indexOf(a);
        const indexB = priorityOrder.indexOf(b);
        // If group not found in priority order, put it at the end
        if (indexA === -1 && indexB === -1) {
          // If neither in priority order, check for base tokens
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
      
      // If no priority order defined, sort alphabetically
      return a.localeCompare(b);
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here if needed
    });
  };

  // Scroll to category section
  const scrollToCategory = (category: string) => {
    const element = categoryRefs.current[category];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveCategory(category);
    }
  };

  // Sort categories according to the defined order, filter out empty categories
  const sortedCategories = Object.keys(structuredGroups)
    .filter(category => {
      // Filter out empty categories
      const groups = structuredGroups[category];
      return groups && Object.keys(groups).length > 0;
    })
    .sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      // If category not found in order, put it at the end
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  // Build sidebar menu items from categories
  const menuItems = useMemo(() => {
    return [
      {
        title: 'Categories',
        items: sortedCategories.map(category => ({
          label: categoryLabels[category],
          id: category,
        })),
      },
    ];
  }, [sortedCategories]);

  // Set up intersection observer to highlight active category
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const category = entry.target.getAttribute('data-category');
            if (category) {
              setActiveCategory(category);
            }
          }
        });
      },
      {
        rootMargin: '-100px 0px -50% 0px',
        threshold: [0, 0.5, 1],
      }
    );

    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sortedCategories]);

  return (
    <main className={`container ${styles.docLayout}`}>
      {/* --- SIDEBAR --- */}
      <aside className={styles.sidebar}>
        <nav className={styles.nav}>
          {menuItems.map((group, index) => (
            <div key={index} className={styles.group}>
              <div className={styles.groupTitle}>{group.title}</div>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <button
                      type="button"
                      className={`${styles.link} ${activeCategory === item.id ? styles.linkActive : ''}`}
                      onClick={() => scrollToCategory(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className={styles.docContent}>
        <Heading level={1} className={styles.pageTitle}>Design Tokens</Heading>
        <Paragraph className={styles.pageDescription}>
          All design tokens available from theme.css. These CSS custom properties can be used throughout your application.
        </Paragraph>

        {sortedCategories.map(category => (
          <section
            key={category}
            ref={(el) => {
              categoryRefs.current[category] = el;
            }}
            data-category={category}
            id={`category-${category}`}
            className={styles.categorySection}
          >
            <Heading level={2} data-size="lg" className={styles.categoryTitle}>
              {categoryLabels[category]}
            </Heading>
            
            {sortGroups(category, Object.keys(structuredGroups[category])).map(groupKey => {
              const group = structuredGroups[category][groupKey];
              return (
                <div key={groupKey} className={styles.tokenGroup}>
                  <Heading level={3} data-size="sm" className={styles.groupTitle}>
                    {formatGroupName(group.name)}
                  </Heading>
                  
                  <div className={styles.tokensGrid}>
                    {group.tokens.map((token, index) => (
                      <Card key={index} className={styles.tokenCard} data-color="neutral">
                        <CardBlock>
                          {category === 'colors' && (
                            <div className={styles.colorSwatchContainer}>
                              <span 
                                className={styles.colorSwatch}
                                style={{ backgroundColor: token.value }}
                                aria-label={`Color preview: ${token.value}`}
                              />
                              <button
                                className={styles.copyButton}
                                onClick={() => copyToClipboard(token.name)}
                                aria-label={`Copy ${token.name} to clipboard`}
                                title={`Copy ${token.name}`}
                              >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.5 4.5V3.5C5.5 2.67157 6.17157 2 7 2H12.5C13.3284 2 14 2.67157 14 3.5V9C14 9.82843 13.3284 10.5 12.5 10.5H11.5M5.5 4.5H3.5C2.67157 4.5 2 5.17157 2 6V12.5C2 13.3284 2.67157 14 3.5 14H9C9.82843 14 10.5 13.3284 10.5 12.5V10.5M5.5 4.5C5.5 5.32843 6.17157 6 7 6H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            </div>
                          )}
                          <div className={styles.tokenInfo}>
                            <code className={styles.tokenName} title={token.name}>
                              {token.name}
                            </code>
                            <code className={styles.tokenValue} title={token.value}>
                              {token.value}
                            </code>
                          </div>
                          {category !== 'colors' && (
                            <button
                              className={styles.copyButtonInline}
                              onClick={() => copyToClipboard(token.name)}
                              aria-label={`Copy ${token.name} to clipboard`}
                              title={`Copy ${token.name}`}
                            >
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 4.5V3.5C5.5 2.67157 6.17157 2 7 2H12.5C13.3284 2 14 2.67157 14 3.5V9C14 9.82843 13.3284 10.5 12.5 10.5H11.5M5.5 4.5H3.5C2.67157 4.5 2 5.17157 2 6V12.5C2 13.3284 2.67157 14 3.5 14H9C9.82843 14 10.5 13.3284 10.5 12.5V10.5M5.5 4.5C5.5 5.32843 6.17157 6 7 6H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          )}
                        </CardBlock>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        ))}
      </div>
    </main>
  );
};

