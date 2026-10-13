import { createElement } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Carousel, type CarouselProps } from '../../src/components/Carousel';

const src = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"><rect width="600" height="300" fill="red"/></svg>',
);

export function renderCarousel(props: Partial<CarouselProps> = {}) {
  return createElement('div', { style: { maxWidth: 600, height: 300 } },
    createElement(Carousel, {
      images: ['First image', 'Second image', 'Third image'].map((alt) => ({ src, alt })),
      ...props,
    }));
}

export function hydrateCarousel(props: Partial<CarouselProps> = {}) {
  hydrateRoot(document.getElementById('root')!, renderCarousel(props));
}
