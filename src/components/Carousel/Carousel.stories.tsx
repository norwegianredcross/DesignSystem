import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import React from 'react';
import { Carousel, type CarouselProps } from './index';
import { Spinner } from '../SpinnerLoader';

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
