import React from 'react';
import Card from './Card';

const CardShowcase = () => {
  return (
    <div className="section">
      <h2>Cards</h2>
      <div>
        <Card title="Primary Card" variant="primary">
          <p>This card uses the primary colors from the RedCross design system.</p>
        </Card>
        
        <Card title="Accent Card" variant="accent">
          <p>This card uses the accent colors from the RedCross design system.</p>
        </Card>
        
        <Card title="Success Card" variant="success">
          <p>This card uses the success colors from the RedCross design system.</p>
        </Card>
        
        <Card title="Warning Card" variant="warning">
          <p>This card uses the warning colors from the RedCross design system.</p>
        </Card>
        
        <Card title="Danger Card" variant="danger">
          <p>This card uses the danger colors from the RedCross design system.</p>
        </Card>
      </div>
    </div>
  );
};

export default CardShowcase;
