import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { GraphicElement, GraphicElementProps, GraphicElementShape } from './index';

const ALL_SHAPES: GraphicElementShape[] = ['square', 'corner', 'angle', 'heart', 'tee', 'bar', 'cross'];
// Color scopes defined by the rk-design-tokens theme
const ALL_COLORS = [
  'primary-color-red',
  'secondary-color-orange',
  'secondary-color-rust',
  'secondary-color-pink',
  'additional-color-ocean',
  'additional-color-jungle',
  'neutral',
] as const;

const meta: Meta<typeof GraphicElement> = {
  title: 'Components/GraphicElement',
  component: GraphicElement,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ALL_SHAPES,
      description:
        'Which graphic element to render. All shapes are compositions of the cross arm squares.',
      table: {
        defaultValue: { summary: 'corner' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'isometric'],
      description:
        'Visuell stil: fylt (solid), tynn strek (outline) eller isometriske 3D-kuber (isometric). isometric er tilgjengelig for formene square, corner, angle, heart og bar.',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description:
        'Orientering. For solid/outline: hvilket hjørne grafikken peker mot. For isometric: velger mellom stående/liggende (corner, angle) og horisontal/vertikal (bar).',
      table: {
        defaultValue: { summary: 'top-left' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Size of the base grid. For the corner shape: sm: 48px, md: 68px, lg: 96px. Larger shapes (tee, bar, cross) scale proportionally so the arm square stays the same size.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    mirrored: {
      control: 'boolean',
      description:
        'Speilvender hjertet (dybden vender mot venstre). Gjelder kun variant="isometric" med shape="heart".',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    'data-color': {
      control: 'select',
      options: [...ALL_COLORS],
      description:
        'Color scope from the rk-design-tokens theme: primary-color-red, secondary-color-orange, secondary-color-rust, secondary-color-pink, additional-color-ocean, additional-color-jungle or neutral.',
      table: {
        defaultValue: { summary: 'inherits scope (resolves to primary-color-red)' },
      },
    },
    'aria-hidden': {
      control: 'boolean',
      description: 'Whether the graphic is hidden from assistive technologies.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the graphic (if not purely decorative).',
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name.',
    },
  } as ArgTypes<GraphicElementProps>,
  parameters: {
    docs: {
      description: {
        component:
          'Grafiske elementer fra Røde Kors\' designretning, avledet av korsets grunnform. Korsets fire armer deles opp og brukes som selvstendige grafiske elementer - vinkler, hjørner, hjerter og stolper. Elementene kan fungere som visuelle koblinger på tvers av digitale produkter, i ulike farger, størrelser og komposisjoner. Tre stiler: `solid` (fylt), `outline` (tynn strek) og `isometric` (3D-kuber med tre tokenstyrte flater). `isometric` er tilgjengelig for formene square, corner, angle, heart og bar; `position` velger mellom stående/liggende (corner, angle) og horisontal/vertikal (bar), og `mirrored` speilvender hjertet. Den gamle CrossCorner-formen tilsvarer `shape="angle"`; `CrossCorner` er nå et deprecated alias for GraphicElement.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GraphicElement>;

// --- Default ---
export const Default: Story = {
  name: 'Default',
  args: {
    shape: 'corner',
    variant: 'solid',
    position: 'top-left',
    size: 'md',
  },
};

// --- Gallery: All Shapes x Variants ---
export const AllShapesAndVariants: Story = {
  name: 'Gallery: All Shapes and Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['solid', 'outline'] as const).map((variant) => (
        <div key={variant}>
          <p style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>{variant}</p>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
            {ALL_SHAPES.map((shape) => (
              <div key={shape} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    height: '110px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GraphicElement shape={shape} variant={variant} position="top-right" />
                </div>
                <p style={{ marginTop: '8px', fontSize: '12px' }}>{shape}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div>
        <p style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          isometric
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          {(
            [
              ['square', <GraphicElement variant="isometric" shape="square" />],
              ['corner stående', <GraphicElement variant="isometric" shape="corner" position="top-right" />],
              ['angle stående', <GraphicElement variant="isometric" shape="angle" position="top-right" />],
              ['corner liggende', <GraphicElement variant="isometric" shape="corner" position="bottom-right" />],
              ['angle liggende', <GraphicElement variant="isometric" shape="angle" position="bottom-right" />],
              ['heart', <GraphicElement variant="isometric" shape="heart" />],
              ['heart speilvendt', <GraphicElement variant="isometric" shape="heart" mirrored />],
              ['bar horisontal', <GraphicElement variant="isometric" shape="bar" position="top-right" />],
              ['bar vertikal', <GraphicElement variant="isometric" shape="bar" position="top-left" />],
            ] as const
          ).map(([label, element]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  height: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {element}
              </div>
              <p style={{ marginTop: '8px', fontSize: '12px' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// --- All Shapes ---
export const AllShapes: Story = {
  name: 'All Shapes',
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
      {ALL_SHAPES.map((shape) => (
        <div key={shape} style={{ textAlign: 'center' }}>
          <div
            style={{
              height: '110px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <GraphicElement shape={shape} position="top-right" />
          </div>
          <p style={{ marginTop: '8px', fontSize: '12px' }}>{shape}</p>
        </div>
      ))}
    </div>
  ),
};

// --- Outline Variant ---
export const Outline: Story = {
  name: 'Variant: Outline',
  args: {
    shape: 'corner',
    variant: 'outline',
  },
};

// --- Isometric Variant ---
export const Isometric: Story = {
  name: 'Variant: Isometric',
  args: {
    shape: 'corner',
    variant: 'isometric',
  },
};

// --- All Positions ---
export const AllPositions: Story = {
  name: 'All Positions',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <GraphicElement position="top-left" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>top-left</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GraphicElement position="top-right" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>top-right</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GraphicElement position="bottom-right" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>bottom-right</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GraphicElement position="bottom-left" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>bottom-left</p>
      </div>
    </div>
  ),
};

// --- All Sizes ---
export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
      <div style={{ textAlign: 'center' }}>
        <GraphicElement size="sm" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>sm (48px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GraphicElement size="md" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>md (68px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <GraphicElement size="lg" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>lg (96px)</p>
      </div>
    </div>
  ),
};

// --- Color Variants ---
export const ColorVariants: Story = {
  name: 'Color Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      {ALL_COLORS.map((color) => (
        <div key={color} style={{ textAlign: 'center', width: '150px' }}>
          <GraphicElement shape="heart" data-color={color} />
          <p style={{ marginTop: '8px', fontSize: '12px' }}>{color}</p>
        </div>
      ))}
    </div>
  ),
};

// --- Usage Example: Corner Accents ---
export const CornerAccents: Story = {
  name: 'Usage: Corner Accents',
  render: () => (
    <div
      style={{
        position: 'relative',
        width: '400px',
        height: '250px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <GraphicElement position="top-left" size="sm" />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <GraphicElement position="top-right" size="sm" />
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
        <GraphicElement position="bottom-left" size="sm" />
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <GraphicElement position="bottom-right" size="sm" />
      </div>
      <p style={{ color: '#666' }}>Content with corner accents</p>
    </div>
  ),
};

// --- Test: renders decorative svg with default attributes ---
export const TestDefaultAttributes: Story = {
  name: 'Test: Default Attributes',
  tags: ['!autodocs'],
  args: {},
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    // Decorative by default: hidden from assistive technologies
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).not.toHaveAttribute('role');
    // Defaults: corner shape (2x2 grid minus the top-left cell), solid variant
    await expect(svg).toHaveAttribute('data-shape', 'corner');
    await expect(svg).toHaveAttribute('data-variant', 'solid');
    await expect(svg).toHaveAttribute('viewBox', '0 0 68 68');
    await expect(svg).toHaveAttribute('width', '68');
    await expect(svg).toHaveAttribute('height', '68');
    const path = svg?.querySelector('path');
    await expect(path).toHaveAttribute('d', 'M34 0H68V68H0V34H34V0Z');
  },
};

// --- Test: shape, variant and color data attributes ---
export const TestShapeAndVariantAttributes: Story = {
  name: 'Test: Shape and Variant Attributes',
  tags: ['!autodocs'],
  args: {
    shape: 'cross',
    variant: 'outline',
    size: 'md',
    'data-color': 'secondary-color-rust',
  },
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('data-shape', 'cross');
    await expect(svg).toHaveAttribute('data-variant', 'outline');
    await expect(svg).toHaveAttribute('data-color', 'secondary-color-rust');
    // Cross spans 3x3 grid cells: proportionally larger than the 2x2 corner
    await expect(svg).toHaveAttribute('viewBox', '0 0 102 102');
    await expect(svg).toHaveAttribute('width', '102');
    await expect(svg).toHaveAttribute('height', '102');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    // Outline variant renders the open partial-stroke path (gapped cross axes)
    const path = svg?.querySelector('path');
    await expect(path).toHaveAttribute('d', 'M51 0V102M0 51H34M68 51H102');
  },
};

// --- Test: isometric variant renders three face colors ---
export const TestIsometricFaces: Story = {
  name: 'Test: Isometric Faces',
  tags: ['!autodocs'],
  args: {
    shape: 'square',
    variant: 'isometric',
  },
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).toHaveAttribute('data-shape', 'square');
    await expect(svg).toHaveAttribute('data-variant', 'isometric');
    // A single unit cube renders exactly three faces: front, top, right
    const paths = Array.from(svg?.querySelectorAll('path') ?? []);
    await expect(paths).toHaveLength(3);
    // Each face resolves to its own token-driven color
    const fills = paths.map((p) => getComputedStyle(p).fill);
    await expect(new Set(fills).size).toBe(3);
  },
};

// --- Test: unsupported isometric shape falls back to solid ---
export const TestIsometricFallback: Story = {
  name: 'Test: Isometric Fallback',
  tags: ['!autodocs'],
  // Invalid combo forced past the type union, simulating a JS consumer.
  // The component must fall back to solid - never invent geometry.
  args: { shape: 'cross', variant: 'isometric' } as unknown as Story['args'],
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('data-shape', 'cross');
    // Rendered as solid, with the solid cross geometry
    await expect(svg).toHaveAttribute('data-variant', 'solid');
    const paths = Array.from(svg?.querySelectorAll('path') ?? []);
    await expect(paths).toHaveLength(1);
    await expect(paths[0]).toHaveAttribute(
      'd',
      'M34 0H68V34H34V0ZM0 34H34V68H0V34ZM68 34H102V68H68V34ZM34 68H68V102H34V68Z'
    );
  },
};

// --- Test: vertical column is its own geometry, not a rotation ---
export const TestIsometricColumn: Story = {
  name: 'Test: Isometric Column',
  tags: ['!autodocs'],
  args: {
    shape: 'bar',
    variant: 'isometric',
    position: 'top-left',
  },
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('data-variant', 'isometric');
    // The column has its own tall geometry...
    await expect(svg).toHaveAttribute('viewBox', '0 0 58.89 136');
    // ...and no CSS rotation
    await expect(svg?.style.transform ?? '').not.toContain('rotate');
    // Three stacked cubes: 3 fronts + 3 rights + 1 top rhombus
    const paths = Array.from(svg?.querySelectorAll('path') ?? []);
    await expect(paths).toHaveLength(7);
  },
};
