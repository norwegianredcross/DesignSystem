import React from 'react';

const Card = ({ title, children, variant = 'primary' }) => {
  // Define styles based on the RedCross design system tokens
  const getCardStyles = () => {
    const baseStyles = {
      padding: '1.5rem',
      borderRadius: '8px',
      marginBottom: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ds-color-primary-surface-default)',
          borderLeft: '4px solid var(--ds-color-primary-border-default)'
        };
      case 'accent':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ds-color-accent-surface-default)',
          borderLeft: '4px solid var(--ds-color-accent-border-default)'
        };
      case 'success':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ds-color-success-surface-default)',
          borderLeft: '4px solid var(--ds-color-success-border-default)'
        };
      case 'warning':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ds-color-warning-surface-default)',
          borderLeft: '4px solid var(--ds-color-warning-border-default)'
        };
      case 'danger':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ds-color-danger-surface-default)',
          borderLeft: '4px solid var(--ds-color-danger-border-default)'
        };
      default:
        return baseStyles;
    }
  };

  const titleStyles = {
    marginTop: 0,
    color: `var(--ds-color-${variant}-text-default)`
  };

  return (
    <div style={getCardStyles()}>
      {title && <h3 style={titleStyles}>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
