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
