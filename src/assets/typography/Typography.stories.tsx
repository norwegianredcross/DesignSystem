// src/design-system/Typography.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';


// Define a simple component to render the showcase
const TypographyShowcase = () => {
  // Helper function to create style objects (optional, but keeps JSX cleaner)
  const getStyle = (type: string, size: string) => ({
    fontFamily: 'var(--ds-font-family)', // Apply base font family
    fontWeight: `var(--ds-${type}-${size}-font-weight)`,
    fontSize: `var(--ds-${type}-${size}-font-size)`,
    lineHeight: `var(--ds-${type}-${size}-line-height)`,
    letterSpacing: `var(--ds-${type}-${size}-letter-spacing)`,
    marginBottom: '0.5em', // Add some space below each example
  });

  const getBodyStyle = (type: string, size: string) => ({
    fontFamily: 'var(--ds-font-family)',
    fontWeight: `var(--ds-${type}-${size}-font-weight)`,
    fontSize: `var(--ds-${type}-${size}-font-size)`,
    lineHeight: `var(--ds-${type}-${size}-line-height)`,
    letterSpacing: `var(--ds-${type}-${size}-letter-spacing)`,
    marginBottom: '1em', // More space after body paragraphs
  });

  return (
    <div style={{ fontFamily: 'var(--ds-font-family)' }}>
      <h1>Typography Showcase (Myriad Variable)</h1>
      <p>
        This story displays text styled using the defined CSS variables for
        headings and body text. Ensure your theme CSS file containing these
        variables is loaded globally in Storybook (e.g., via `preview.ts`).
      </p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>Headings</h2>
      {/* --- Heading Examples --- */}
      <h1 style={getStyle('heading', '2xl')}>Heading 2XL</h1>
      <p style={{ fontSize: '0.8em', color: '#555', marginTop: '-0.5em', marginBottom: '1.5em' }}>
        Size: var(--ds-heading-2xl-font-size) | Weight: var(--ds-heading-2xl-font-weight)
      </p>

      <h2 style={getStyle('heading', 'xl')}>Heading XL</h2>
      <p style={{ fontSize: '0.8em', color: '#555', marginTop: '-0.5em', marginBottom: '1.5em' }}>
        Size: var(--ds-heading-xl-font-size) | Weight: var(--ds-heading-xl-font-weight)
      </p>

      <h3 style={getStyle('heading', 'lg')}>Heading LG</h3>
      <p style={{ fontSize: '0.8em', color: '#555', marginTop: '-0.5em', marginBottom: '1.5em' }}>
        Size: var(--ds-heading-lg-font-size) | Weight: var(--ds-heading-lg-font-weight)
      </p>

      <h4 style={getStyle('heading', 'md')}>Heading MD</h4>
      <p style={{ fontSize: '0.8em', color: '#555', marginTop: '-0.5em', marginBottom: '1.5em' }}>
        Size: var(--ds-heading-md-font-size) | Weight: var(--ds-heading-md-font-weight)
      </p>

      <h5 style={getStyle('heading', 'sm')}>Heading SM</h5>
      <p style={{ fontSize: '0.8em', color: '#555', marginTop: '-0.5em', marginBottom: '1.5em' }}>
        Size: var(--ds-heading-sm-font-size) | Weight: var(--ds-heading-sm-font-weight)
      </p>

      <h6 style={getStyle('heading', 'xs')}>Heading XS</h6>
      <p style={{ fontSize: '0.8em', color: '#555', marginTop: '-0.5em', marginBottom: '1.5em' }}>
        Size: var(--ds-heading-xs-font-size) | Weight: var(--ds-heading-xs-font-weight)
      </p>

      {/* Using a p tag for the smallest heading visually */}
      <p style={getStyle('heading', '2xs')}>Heading 2XS (rendered as p)</p>
      <p style={{ fontSize: '0.8em', color: '#555', marginTop: '-0.5em', marginBottom: '1.5em' }}>
        Size: var(--ds-heading-2xs-font-size) | Weight: var(--ds-heading-2xs-font-weight)
      </p>

      <hr style={{ margin: '2rem 0' }} />

      {/* --- Body Examples --- */}
      <h2>Body (Default - Line Height 1.5)</h2>
      <p style={getBodyStyle('body', 'xl')}>
        Body XL: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        risus.
      </p>
      <p style={getBodyStyle('body', 'lg')}>
        Body LG: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        risus.
      </p>
      <p style={getBodyStyle('body', 'md')}>
        Body MD: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        risus.
      </p>
      <p style={getBodyStyle('body', 'sm')}>
        Body SM: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        risus.
      </p>
      <p style={getBodyStyle('body', 'xs')}>
        Body XS: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        risus.
      </p>

      <hr style={{ margin: '2rem 0' }} />

      {/* --- Body Short Examples --- */}
      <h2>Body Short (Line Height 1.3)</h2>
      <p style={getBodyStyle('body-short', 'xl')}>
        Body Short XL: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p style={getBodyStyle('body-short', 'lg')}>
        Body Short LG: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p style={getBodyStyle('body-short', 'md')}>
        Body Short MD: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p style={getBodyStyle('body-short', 'sm')}>
        Body Short SM: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p style={getBodyStyle('body-short', 'xs')}>
        Body Short XS: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <hr style={{ margin: '2rem 0' }} />

      {/* --- Body Long Examples --- */}
      <h2>Body Long (Line Height 1.7)</h2>
      <p style={getBodyStyle('body-long', 'xl')}>
        Body Long XL: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
        malesuada.
      </p>
      <p style={getBodyStyle('body-long', 'lg')}>
        Body Long LG: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
        malesuada.
      </p>
      <p style={getBodyStyle('body-long', 'md')}>
        Body Long MD: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
        malesuada.
      </p>
      <p style={getBodyStyle('body-long', 'sm')}>
        Body Long SM: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
        malesuada.
      </p>
      <p style={getBodyStyle('body-long', 'xs')}>
        Body Long XS: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
        malesuada.
      </p>
    </div>
  );
};

// Storybook Meta Configuration
const meta: Meta = {
  title: 'Design System/Typography', // Set a suitable title
  component: TypographyShowcase, // Render the showcase component
  parameters: {
    layout: 'padded',
  },
  // No argTypes needed for a static showcase
};

export default meta;

// Define the story object
type Story = StoryObj<typeof TypographyShowcase>;

export const Showcase: Story = {
  // No args needed for this story
};
