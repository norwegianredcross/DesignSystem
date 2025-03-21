import React from 'react';
import Button from './Button';

const ButtonShowcase = () => {
  return (
    <div className="section">
      <h2>Buttons</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="accent">Accent Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="warning">Warning Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>
    </div>
  );
};

export default ButtonShowcase;
