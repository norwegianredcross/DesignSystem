// src/types/digdir-augmentation.d.ts
import React from 'react'; // Import React for ReactNode
import '@digdir/designsystemet-react';

// Augment the original module declaration
declare module '@digdir/designsystemet-react' {
  // Re-declare the ButtonProps interface to add ALL potentially missing properties
  // based on the component's documentation/storybook.
  export interface ButtonProps {
    // Properties confirmed missing or causing errors:
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger'; // Add specific variants
    icon?: React.ReactNode; // Add icon prop

    // Include other documented props just in case they are also missing
    // (Check Storybook for exact types if needed)
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    asChild?: boolean;

    // Keep allowing other standard HTML attributes implicitly
    // (TypeScript usually handles merging with HTMLAttributes)
  }
}
