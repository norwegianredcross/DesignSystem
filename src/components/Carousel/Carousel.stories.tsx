import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import React from 'react';
import { Carousel, type CarouselProps } from './index';
import { Spinner } from '../SpinnerLoader';
import { expect, within, userEvent, waitFor } from 'storybook/test';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    autoPlay: {
      control: 'boolean',
      description: 'Automatically advance slides',
      defaultValue: false,
    },
    autoDelay: {
      control: 'number',
      description: 'Autoplay delay in seconds',
      defaultValue: 5,
    },
    showArrows: {
      control: 'boolean',
      description: 'Show previous/next arrow buttons',
      defaultValue: true,
    },
    showDots: {
      control: 'boolean',
      description: 'Show position dots',
      defaultValue: true,
    },
    images: { table: { disable: true } },
    variant: {
      control: 'text',
      description: 'Variant of the carousel (optional)',
    },
    slidesPerView: {
      control: { type: 'number', min: 1, max: 5, step: 0.1 },
      description: 'Number of slides to show at once',
      defaultValue: 1,
    },
    slideSpacing: {
      control: 'number',
      description: 'Spacing between slides in px',
      defaultValue: 16,
    },
    cornerRadius: {
      control: 'number',
      description: 'Corner radius for images in px',
      defaultValue: 0,
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size token',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral', 'danger'],
      description: 'Color token',
    },
  } as ArgTypes<CarouselProps>,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: [
      {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
        alt: 'Solnedgang',
      },
      {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
        alt: 'Fjell',
      },
      {
        src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
        alt: 'Skog',
      },
    ],
    autoPlay: false,
    autoDelay: 5,
    showArrows: true,
    showDots: true,
    slidesPerView: 1,
    slideSpacing: 16,
    cornerRadius: 0,
  },
  render: (args) => (
    <div style={{ 
      width: '900px', 
      height: '520px', 
      margin: '0 auto', // Center horizontally
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Carousel {...args} />
    </div>
  ),
};

export const MultipleSlides: Story = {
  args: {
    ...Default.args,
    slidesPerView: 2.5,
    slideSpacing: 20,
    cornerRadius: 12,
  },
  render: (args) => (
    <div style={{ 
      width: '1000px', 
      height: '400px', 
      padding: '20px',
      margin: '0 auto', // Center horizontally
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Carousel {...args} />
    </div>
  ),
};

// --- Supabase-powered Story (example feeding images in) ---
type Page =
  | 'Hd'
  | 'Noytralitet'
  | 'Frivillighet'
  | 'Enhet'
  | 'Uavhenighet'
  | 'Humanitet'
  | 'Upartiskhet'
  | 'Konferanselokaler'
  | 'Moterom';

const DEFAULT_STORAGE_BASE_URL =
  'https://fusvxvxrpryswlszwljt.supabase.co/storage/v1/object/public/rodekorskonferanse';

const IMG_EXT = ['jpg', 'jpeg', 'png'];

const folderByPage: Record<string, { path: string; isSpacesFolder: boolean }> = {
  Hd: { path: 'images/spaces/Hd', isSpacesFolder: true },
  Noytralitet: { path: 'images/spaces/Noytralitet', isSpacesFolder: true },
  Frivillighet: { path: 'images/spaces/Frivillighet', isSpacesFolder: true },
  Enhet: { path: 'images/spaces/Enhet', isSpacesFolder: true },
  Uavhenighet: { path: 'images/spaces/Uavhenighet', isSpacesFolder: true },
  Humanitet: { path: 'images/spaces/Humanitet', isSpacesFolder: true },
  Upartiskhet: { path: 'images/spaces/Upartiskhet', isSpacesFolder: true },
  Konferanselokaler: { path: 'images/Konferanselokaler', isSpacesFolder: false },
  Moterom: { path: 'images/Moterom', isSpacesFolder: false },
};

const formatAltText = (filename: string) =>
  filename
    .replace(/\.[^.]+$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

function getImageUrl(storageBaseUrl: string, page: string, filename: string): string {
  const folderInfo = folderByPage[page];
  if (!folderInfo) {
    return `${storageBaseUrl}/images/spaces/${page}/${filename}`;
  }
  return `${storageBaseUrl}/${folderInfo.path}/${filename}`;
}

function createImageLoader() {
  const cache = new Map<string, boolean>();
  const pendingChecks = new Map<string, Promise<boolean>>();
  return function checkImageUrl(url: string): Promise<boolean> {
    if (cache.has(url)) return Promise.resolve(cache.get(url) as boolean);
    if (pendingChecks.has(url)) return pendingChecks.get(url) as Promise<boolean>;
    const p = new Promise<boolean>((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      const done = (ok: boolean) => {
        cache.set(url, ok);
        pendingChecks.delete(url);
        resolve(ok);
      };
      const timeout = window.setTimeout(() => {
        img.src = '';
        done(false);
      }, 5000);
      img.onload = () => {
        window.clearTimeout(timeout);
        done(true);
      };
      img.onerror = () => {
        window.clearTimeout(timeout);
        done(false);
      };
      img.src = url;
    });
    pendingChecks.set(url, p);
    return p;
  };
}
const checkImageUrl = createImageLoader();

async function discoverImagesForPage(storageBaseUrl: string, page: Page) {
  const results: { src: string; alt: string }[] = [];
  const expectedCount = 6;
  for (let i = 1; i <= expectedCount; i++) {
    const num = i.toString().padStart(2, '0');
    let found = false;
    for (const ext of IMG_EXT) {
      const filename = `${page}_${num}.${ext}`;
      const url = getImageUrl(storageBaseUrl, page, filename);
      if (!found && (await checkImageUrl(url))) {
        results.push({ src: url, alt: formatAltText(filename) });
        found = true;
        break;
      }
      const lowerFilename = `${page.toLowerCase()}_${num}.${ext}`;
      const lowerUrl = getImageUrl(storageBaseUrl, page, lowerFilename);
      if (!found && (await checkImageUrl(lowerUrl))) {
        results.push({ src: lowerUrl, alt: formatAltText(lowerFilename) });
        found = true;
        break;
      }
    }
  }
  return results;
}

export const WithSupabase: Story = {
  args: {
    autoPlay: false,
    autoDelay: 4,
    showArrows: true,
    showDots: true,
  },
  render: (args) => <SupabaseExample {...args} />,
};

function SupabaseExample(args: Omit<CarouselProps, 'images'>) {
  const [images, setImages] = React.useState<{ src: string; alt: string }[] | null>(null);
  const page: Page = 'Konferanselokaler';
  const base = DEFAULT_STORAGE_BASE_URL;

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const found = await discoverImagesForPage(base, page);
      if (!cancelled) setImages(found);
    })();
    return () => {
      cancelled = true;
    };
  }, [base, page]);

  return (
    <div style={{
      width: '900px',
      height: '520px',
      margin: '0 auto', // Center horizontally
      display: 'flex',
      justifyContent: 'center'
    }}>
      {images === null ? (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Spinner aria-label="Laster bilder" aria-hidden={true} data-size="sm" />
          Laster bilder…
        </div>
      ) : (
        <Carousel {...(args as CarouselProps)} images={images} slidesPerView={1} />
      )}
    </div>
  );
}

// --- INTERACTION TESTS ---

// Test images that load reliably (using placeholder service)
const testImages = [
  { src: 'https://picsum.photos/seed/test1/800/600', alt: 'Test bilde 1' },
  { src: 'https://picsum.photos/seed/test2/800/600', alt: 'Test bilde 2' },
  { src: 'https://picsum.photos/seed/test3/800/600', alt: 'Test bilde 3' },
];

/**
 * Tests that next/previous arrow buttons navigate between slides.
 */
export const TestArrowNavigation: Story = {
  name: 'Test: Arrow Navigation',
  args: {
    images: testImages,
    showArrows: true,
    showDots: true,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Carousel {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for carousel to initialize
    await waitFor(() => {
      expect(canvas.getByRole('button', { name: /neste/i })).toBeInTheDocument();
    });

    // Find the navigation buttons
    const nextButton = canvas.getByRole('button', { name: /neste/i });
    const prevButton = canvas.getByRole('button', { name: /forrige/i });

    // Find all dot buttons to track position
    const dots = canvas.getAllByRole('tab');
    expect(dots.length).toBe(3);

    // Initially, first dot should be selected
    expect(dots[0]).toHaveAttribute('aria-selected', 'true');

    // Click next button
    await userEvent.click(nextButton);

    // Wait for the carousel to update
    await waitFor(() => {
      expect(dots[1]).toHaveAttribute('aria-selected', 'true');
    });

    // Click next again
    await userEvent.click(nextButton);

    await waitFor(() => {
      expect(dots[2]).toHaveAttribute('aria-selected', 'true');
    });

    // Click previous to go back
    await userEvent.click(prevButton);

    await waitFor(() => {
      expect(dots[1]).toHaveAttribute('aria-selected', 'true');
    });
  },
};

/**
 * Tests that clicking on dots navigates to the corresponding slide.
 */
export const TestDotNavigation: Story = {
  name: 'Test: Dot Navigation',
  args: {
    images: testImages,
    showArrows: true,
    showDots: true,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Carousel {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for carousel to initialize
    await waitFor(() => {
      expect(canvas.getAllByRole('tab').length).toBe(3);
    });

    const dots = canvas.getAllByRole('tab');

    // Initially, first dot should be selected
    expect(dots[0]).toHaveAttribute('aria-selected', 'true');

    // Click on the third dot
    await userEvent.click(dots[2]);

    await waitFor(() => {
      expect(dots[2]).toHaveAttribute('aria-selected', 'true');
    });

    // Click on the first dot to go back
    await userEvent.click(dots[0]);

    await waitFor(() => {
      expect(dots[0]).toHaveAttribute('aria-selected', 'true');
    });
  },
};

/**
 * Tests that arrows are disabled when there's only one image.
 */
export const TestSingleImageDisabledArrows: Story = {
  name: 'Test: Single Image (Disabled Arrows)',
  args: {
    images: [testImages[0]],
    showArrows: true,
    showDots: true,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Carousel {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for carousel to initialize
    await waitFor(() => {
      expect(canvas.getByRole('button', { name: /neste/i })).toBeInTheDocument();
    });

    // Find the navigation buttons
    const nextButton = canvas.getByRole('button', { name: /neste/i });
    const prevButton = canvas.getByRole('button', { name: /forrige/i });

    // Arrows should be disabled with only one image
    expect(nextButton).toBeDisabled();
    expect(prevButton).toBeDisabled();

    // Dots should not be shown with only one image
    const dots = canvas.queryAllByRole('tab');
    expect(dots.length).toBe(0);
  },
};

/**
 * Tests that arrows can be hidden via showArrows prop.
 */
export const TestHiddenArrows: Story = {
  name: 'Test: Hidden Arrows',
  args: {
    images: testImages,
    showArrows: false,
    showDots: true,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Carousel {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for dots to appear (indicates carousel is ready)
    await waitFor(() => {
      expect(canvas.getAllByRole('tab').length).toBe(3);
    });

    // Arrows should not be present
    const nextButton = canvas.queryByRole('button', { name: /neste/i });
    const prevButton = canvas.queryByRole('button', { name: /forrige/i });

    expect(nextButton).not.toBeInTheDocument();
    expect(prevButton).not.toBeInTheDocument();

    // Dots should still work
    const dots = canvas.getAllByRole('tab');
    expect(dots.length).toBe(3);
  },
};

/**
 * Tests that dots can be hidden via showDots prop.
 */
export const TestHiddenDots: Story = {
  name: 'Test: Hidden Dots',
  args: {
    images: testImages,
    showArrows: true,
    showDots: false,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Carousel {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for arrows to appear
    await waitFor(() => {
      expect(canvas.getByRole('button', { name: /neste/i })).toBeInTheDocument();
    });

    // Dots should not be present
    const dots = canvas.queryAllByRole('tab');
    expect(dots.length).toBe(0);

    // Arrows should still work
    const nextButton = canvas.getByRole('button', { name: /neste/i });
    expect(nextButton).toBeInTheDocument();
  },
};

/**
 * Tests that empty state is handled gracefully.
 */
export const TestEmptyState: Story = {
  name: 'Test: Empty State',
  args: {
    images: [],
    showArrows: true,
    showDots: true,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Carousel {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    // Check that the empty message is displayed
    expect(canvasElement.textContent).toContain('Ingen bilder');
  },
};

/**
 * Tests that images have proper alt text for accessibility.
 */
export const TestImageAltText: Story = {
  name: 'Test: Image Alt Text',
  args: {
    images: testImages,
    showArrows: true,
    showDots: true,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Carousel {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for images to be rendered
    await waitFor(() => {
      const images = canvas.getAllByRole('img');
      expect(images.length).toBeGreaterThan(0);
    });

    // Check that images have alt text
    const images = canvas.getAllByRole('img');
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  },
};

/**
 * Tests dot navigation has proper ARIA attributes.
 */
export const TestDotsAccessibility: Story = {
  name: 'Test: Dots Accessibility',
  args: {
    images: testImages,
    showArrows: true,
    showDots: true,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
      <Carousel {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for carousel to initialize
    await waitFor(() => {
      expect(canvas.getAllByRole('tab').length).toBe(3);
    });

    // Check that dots container has proper role
    const tablist = canvas.getByRole('tablist');
    expect(tablist).toBeInTheDocument();
    expect(tablist).toHaveAttribute('aria-label');

    // Check that each dot has proper attributes
    const dots = canvas.getAllByRole('tab');
    dots.forEach((dot, index) => {
      expect(dot).toHaveAttribute('aria-label');
      expect(dot).toHaveAttribute('aria-selected');
    });
  },
};
