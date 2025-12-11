import { useState, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card, CardBlock } from '../../components/Card';
import styles from './styles.module.css';

export const ComponentsPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter components based on search query
  const filteredComponents = useMemo(() => {
    return components.filter((comp) =>
      comp.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [components, searchQuery]);

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <div className={styles.header}>
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
        </div>

        {/* Grid Section */}
        {filteredComponents.length > 0 ? (
          <div className={styles.cardsGrid}>
            {filteredComponents.map((comp) => (
              <a
                key={comp}
                href={`${import.meta.env.BASE_URL}storybook/?path=/docs/components-${comp.toLowerCase()}--docs`}
                className={styles.cardLink}
                target="_blank"
                rel="noreferrer"
              >
                <Card variant="tinted" className={styles.cardOverride}>
                  <CardBlock>
                    <div className={styles.cardContent}>
                      <div className={styles.cardIconWrapper}>
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
                      <Heading level={2} className={styles.cardTitle}>{comp}</Heading>
                    </div>
                  </CardBlock>
                </Card>
              </a>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className={styles.emptyState}>
            <Paragraph>{t('components.noResults')} "{searchQuery}"</Paragraph>
          </div>
        )}
      </div>
    </main>
  );
};


