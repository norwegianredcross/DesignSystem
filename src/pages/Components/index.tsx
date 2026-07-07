import { useState, useMemo } from 'react';
import { ArrowRightIcon } from '@navikt/aksel-icons';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import styles from './styles.module.css';

const components = [
    'Alert', 'Avatar', 'Badge', 'Breadcrumbs', 'Button', 'Card', 'Carousel', 'Checkbox', 'Chip',
    'DateInput', 'DatePicker', 'Details', 'Dialog', 'Divider', 'Dropdown', 'ErrorSummary',
    'Field', 'Fieldset', 'Header', 'HeroSection', 'Input', 'Link', 'List', 'Pagination', 'Popover', 'Radio',
    'Search', 'Select', 'SkeletonLoader', 'SkipLink', 'SpinnerLoader', 'Suggestion',
    'Switch', 'Table', 'Tabs', 'Tag', 'Textarea', 'Textfield', 'ToggleGroup', 'Tooltip'
];

const iconMap: Record<string, string> = {
    Alert: 'alert.svg',
    Avatar: 'avatar.svg',
    Badge: 'badge.svg',
    Breadcrumbs: 'breadcrumb.svg',
    Button: 'button.svg',
    Card: 'card.svg',
    Carousel: 'carousel.svg',
    Checkbox: 'checkbox.svg',
    Chip: 'chip.svg',
    DateInput: 'dateinput.svg',
    DatePicker: 'datepicker.svg',
    Details: 'details.svg',
    Dialog: 'dialog.svg',
    Divider: 'divider.svg',
    Dropdown: 'dropdown.svg',
    ErrorSummary: 'errorsummary.svg',
    Field: 'field.svg',
    Fieldset: 'fieldset.svg',
    Input: 'textfield.svg',
    Link: 'link.svg',
    List: 'list.svg',
    Pagination: 'pagination.svg',
    Popover: 'popover.svg',
    Radio: 'radio.svg',
    Search: 'search.svg',
    Select: 'selectdropdown.svg',
    SkeletonLoader: 'loader.svg',
    SkipLink: 'skiplink.svg',
    SpinnerLoader: 'loader.svg',
    Suggestion: 'suggestion.svg',
    Switch: 'switch.svg',
    Table: 'table.svg',
    Tabs: 'tabs.svg',
    Tag: 'tag.svg',
    Textarea: 'textarea.svg',
    Textfield: 'textfield.svg',
    ToggleGroup: 'togglegroup.svg',
    Tooltip: 'tooltip.svg',
};

export const ComponentsPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter components based on search query
  const filteredComponents = useMemo(() => {
    return components.filter((comp) =>
      comp.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <main className={styles.pageWrapper}>
      {/* Hero: inset rounded cream panel (design retning pattern) */}
      <div className={styles.container}>
        <header className={styles.heroPanel}>
          <Heading level={1} className={styles.title}>
            {t('components.title')}
          </Heading>
          <Paragraph className={styles.introText}>
            {t('components.intro')}
          </Paragraph>

          {/* Search Input */}
          <div className={styles.searchWrapper}>
            <input
              type="search"
              placeholder={t('components.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label={t('components.searchAriaLabel')}
            />
          </div>
        </header>
      </div>

      <div className={styles.container}>
        {/* Grid Section */}
        {filteredComponents.length > 0 ? (
          <div className={styles.cardsGrid}>
            {filteredComponents.map((comp) => (
              <Card key={comp} asChild variant="default" className={styles.cardLink}>
                <a
                  href={`${import.meta.env.BASE_URL}storybook/?path=/docs/components-${comp.toLowerCase()}--docs`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.cardMedia}>
                    {iconMap[comp] ? (
                      <img
                        src={`${import.meta.env.BASE_URL}components/${iconMap[comp]}`}
                        alt=""
                        className={styles.cardIcon}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.iconPlaceholder} aria-hidden="true" />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <Heading level={2} data-size="sm" className={styles.cardTitle}>
                      {comp}
                    </Heading>
                    <hr className={styles.cardDivider} />
                    <span className={styles.cardAction}>
                      {t('components.openLabel')}
                      <ArrowRightIcon aria-hidden="true" className={styles.cardArrow} />
                    </span>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className={styles.emptyState}>
            <Paragraph>{t('components.noResults')} "{searchQuery}"</Paragraph>
          </div>
        )}

        {/* Green CTA banner (design retning pattern) */}
        <aside className={styles.ctaBanner}>
          <div className={styles.ctaBannerText}>
            <Heading level={2} data-size="md" className={styles.ctaBannerTitle}>
              {t('components.ctaTitle')}
            </Heading>
            <Paragraph className={styles.ctaBannerBody}>
              {t('components.ctaText')}
            </Paragraph>
          </div>
          <Button
            asChild
            variant="secondary"
            data-color="main"
            className={styles.ctaBannerButton}
          >
            <a
              href={`${import.meta.env.BASE_URL}storybook/`}
              target="_blank"
              rel="noreferrer"
            >
              {t('components.ctaButton')}
              <ArrowRightIcon aria-hidden="true" />
            </a>
          </Button>
        </aside>
      </div>
    </main>
  );
};


