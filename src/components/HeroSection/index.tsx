import { useEffect } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import styles from './styles.module.css';
import classNames from 'classnames';

export interface HeroCard {
  imageUrl: string;
  imageAlt?: string;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundImage?: string;
  descriptionPosition?: 'top' | 'bottom';
  image?: string;
  imageAlt?: string;
  layout?: 'centered' | 'bottom-image' | 'side-by-side' | 'cards';
  cards?: HeroCard[];
}

export const HeroSection = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  descriptionPosition = 'bottom',
  image,
  imageAlt = '',
  layout = 'centered',
  cards = [],
}: HeroSectionProps) => {
  // Fallback: inject minimal HeroSection styles if consumer did not import the CSS bundle.
  useEffect(() => {
    const styleId = 'rk-herosection-inline-styles';
    if (typeof document === 'undefined') return;
    if (document.getElementById(styleId)) return;
    const css = buildInlineCss(styles);
    const tag = document.createElement('style');
    tag.id = styleId;
    tag.textContent = css;
    document.head.appendChild(tag);
  }, []);

  const isSideBySide = layout === 'side-by-side';
  const isCards = layout === 'cards';

  return (
    <section 
      className={classNames(styles.container, {
        [styles.containerSideBySide]: isSideBySide,
        [styles.containerCards]: isCards,
      })}
    >
      {backgroundImage && !isSideBySide && !isCards && (
        <div className={styles.backgroundImageWrapper} aria-hidden="true">
          <img src={backgroundImage} alt="" className={styles.backgroundImage} />
        </div>
      )}
      
      <div 
        className={classNames(styles.content, {
          [styles.contentSideBySide]: isSideBySide,
          [styles.contentWrapperCards]: isCards,
        })}
      >
        <div 
          className={classNames(styles.textContainer, {
            [styles.textContainerSideBySide]: isSideBySide,
            // Cards layout reuses default centered text styles but inside a wrapper
          })}
        >
          {descriptionPosition === 'top' && (
            <Paragraph data-size="xl">
              {description}
            </Paragraph>
          )}
          
          <Heading level={2} data-size="2xl">
            {title}
          </Heading>

          {descriptionPosition === 'bottom' && (
            <Paragraph data-size="xl">
              {description}
            </Paragraph>
          )}
        </div>

        <div 
          className={classNames(styles.buttonContainer, {
            [styles.buttonContainerSideBySide]: isSideBySide,
          })}
        >
          {primaryButtonText && (
            <Button variant="primary" onClick={onPrimaryClick}>
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && (
            <Button variant="secondary" onClick={onSecondaryClick}>
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>

      {image && layout === 'bottom-image' && (
        <img src={image} alt={imageAlt} className={styles.bottomImage} />
      )}

      {image && isSideBySide && (
        <img src={image} alt={imageAlt} className={styles.sideImage} />
      )}

      {isCards && cards.length > 0 && (
        <div className={styles.cardGrid}>
          {cards.slice(0, 4).map((card, index) => (
            <img 
              key={index}
              src={card.imageUrl} 
              alt={card.imageAlt || ''} 
              className={styles.cardImage}
            />
          ))}
        </div>
      )}
    </section>
  );
};

// Fallback CSS injection function
function buildInlineCss(s: Record<string, string>): string {
  return `
.${s.container} {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-size-30, 120px) var(--ds-size-15, 60px);
  gap: var(--ds-size-12, 48px);
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: var(--ds-color-primary-color-red-background-default, #ffffff);
}
.${s.containerSideBySide} {
  flex-direction: row;
  justify-content: space-between;
  gap: var(--ds-size-10, 40px);
  text-align: left;
}
.${s.containerCards} {
  padding: 0 !important;
  gap: 0 !important;
  max-width: 100%;
}
.${s.backgroundImageWrapper} {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.${s.backgroundImage} {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
}
.${s.content} {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-8, 32px);
  width: 100%;
  max-width: 960px;
  text-align: center;
}
.${s.contentSideBySide} {
  align-items: flex-start;
  text-align: left;
  max-width: 50%;
}
.${s.contentWrapperCards} {
  padding: var(--ds-size-30, 120px) var(--ds-size-15, 60px) var(--ds-size-18, 72px) var(--ds-size-15, 60px);
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  gap: var(--ds-size-8, 32px);
  box-sizing: border-box;
}
.${s.textContainer} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-6, 24px);
  width: 100%;
  align-items: center;
}
.${s.textContainerSideBySide} {
  align-items: flex-start;
}
.${s.buttonContainer} {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ds-size-4, 16px);
  justify-content: center;
}
.${s.buttonContainerSideBySide} {
  justify-content: flex-start;
}
.${s.bottomImage} {
  width: 100%;
  max-width: 922px;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--ds-border-radius-default, 8px);
  z-index: 1;
}
.${s.sideImage} {
  width: 100%;
  max-width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: var(--ds-border-radius-default, 8px);
  z-index: 1;
}
.${s.cardGrid} {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--ds-size-6, 24px);
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 var(--ds-size-15, 60px) var(--ds-size-30, 120px) var(--ds-size-15, 60px);
  z-index: 1;
  justify-content: flex-start;
  overflow-x: auto;
  box-sizing: border-box;
}
@media (min-width: 1360px) {
  .${s.cardGrid} {
    justify-content: center;
    overflow-x: visible;
  }
}
.${s.cardImage} {
  width: 100%;
  max-width: 278px;
  height: 400px;
  object-fit: cover;
  border-radius: var(--ds-border-radius-lg, 12px);
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .${s.container} {
    padding: var(--ds-size-10, 40px) var(--ds-size-5, 20px);
    gap: var(--ds-size-10, 40px);
  }
  .${s.containerCards} {
    padding: 0 !important;
    gap: 0 !important;
  }
  .${s.contentWrapperCards} {
    padding: var(--ds-size-10, 40px) var(--ds-size-5, 20px);
  }
  .${s.containerSideBySide} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .${s.contentSideBySide} {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
  .${s.textContainerSideBySide} {
    align-items: center;
  }
  .${s.buttonContainerSideBySide} {
    justify-content: center;
  }
  .${s.sideImage} {
    max-width: 100%;
  }
  .${s.cardGrid} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--ds-size-4, 16px);
    padding: var(--ds-size-10, 40px) var(--ds-size-5, 20px);
  }
  .${s.cardImage} {
    max-width: 100%;
    height: 300px;
  }
}
@media (max-width: 480px) {
  .${s.container} {
    padding: var(--ds-size-6, 24px) var(--ds-size-3, 12px);
  }
  .${s.contentWrapperCards} {
    padding: var(--ds-size-6, 24px) var(--ds-size-3, 12px);
  }
  .${s.cardGrid} {
    grid-template-columns: 1fr;
  }
  .${s.cardImage} {
    height: 220px;
  }
}
`;
}
