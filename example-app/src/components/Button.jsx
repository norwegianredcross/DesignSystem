import React from 'react';

const Button = ({ children, variant = 'primary', onClick }) => {
  const className = `button button-${variant}`;
  
  // Define styles based on the RedCross design system tokens
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--ds-color-primary-border-default)',
          color: 'var(--ds-color-primary-base-contrast-default)'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--ds-color-neutral-border-default)',
          color: 'var(--ds-color-neutral-base-contrast-default)'
        };
      case 'accent':
        return {
          backgroundColor: 'var(--ds-color-accent-border-default)',
          color: 'var(--ds-color-accent-base-contrast-default)'
        };
      case 'success':
        return {
          backgroundColor: 'var(--ds-color-success-border-default)',
          color: 'var(--ds-color-success-base-contrast-default)'
        };
      case 'warning':
        return {
          backgroundColor: 'var(--ds-color-warning-border-default)',
          color: 'var(--ds-color-warning-base-contrast-default)'
        };
      case 'danger':
        return {
          backgroundColor: 'var(--ds-color-danger-border-default)',
          color: 'var(--ds-color-danger-base-contrast-default)'
        };
      default:
        return {
          backgroundColor: 'var(--ds-color-primary-border-default)',
          color: 'var(--ds-color-primary-base-contrast-default)'
        };
    }
  };
  
  return (
    <button 
      className={className} 
      onClick={onClick}
      style={getButtonStyles()}
    >
      {children}
    </button>
  );
};

export default Button;
