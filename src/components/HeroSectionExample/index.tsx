import React from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';

export interface HeroSectionExampleProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundImage?: string;
  descriptionPosition?: 'top' | 'bottom';
}

export const HeroSectionExample = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  descriptionPosition = 'bottom',
}: HeroSectionExampleProps) => {
  return (
    <section className={styles.container}>
      {backgroundImage && (
        <div className={styles.backgroundImageWrapper} aria-hidden="true">
          <img src={backgroundImage} alt="" className={styles.backgroundImage} />
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.textContainer}>
          {descriptionPosition === 'top' && (
            <p className={styles.description}>
              {description}
            </p>
          )}
          
          <h2 className={styles.heading}>
            {title}
          </h2>

          {descriptionPosition === 'bottom' && (
            <p className={styles.description}>
              {description}
            </p>
          )}
        </div>

        <div className={styles.buttonContainer}>
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
    </section>
  );
};

