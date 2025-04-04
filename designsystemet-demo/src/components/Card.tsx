import React from 'react';

export const Card = ({ title, content }: { title: string; content: string }) => (
  <div
    style={{
      border: '1px solid var(--ds-color-neutral-border-default)',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: 'var(--ds-color-neutral-surface-default)',
      color: 'var(--ds-color-neutral-text-default)',
      fontFamily: 'inherit', // Inherit the global font
    }}
  >
    <h3 style={{ marginBottom: '8px' }}>{title}</h3>
    <p>{content}</p>
  </div>
);
