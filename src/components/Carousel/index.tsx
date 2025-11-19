import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './styles.module.css';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import { ChevronLeftIcon, ChevronRightIcon } from '@navikt/aksel-icons';
import { Button as DigDirButton } from '@digdir/designsystemet-react';

// --- Types ---
export type CarouselProps = MergeRight<
  DefaultProps,
  {
    images: { src: string; alt: string }[];
    autoPlay?: boolean;
    autoDelay?: number; // seconds
    showArrows?: boolean;
    showDots?: boolean;
  }
>;

export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = false,
  autoDelay = 5,
  showArrows = true,
  showDots = true,
  'data-color': dataColor,
  'data-size': dataSize,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoDelayMs = useMemo(() => autoDelay * 1000, [autoDelay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi && images.length > 0) {
      emblaApi.reInit();
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, [emblaApi, images]);

  useEffect(() => {
    if (!autoPlay || !emblaApi || images.length === 0) return;
    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, autoDelayMs);
    return () => {
      window.clearInterval(timer);
    };
  }, [autoPlay, autoDelayMs, emblaApi, images]);

  return (
    <div className={styles.carouselContainer} data-color={dataColor} data-size={dataSize}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.slides}>
          {images && images.length > 0 ? (
            images.map((image, index) => (
              <div className={styles.slide} key={`image-${index}`}>
                <img
                  className={styles.image}
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  crossOrigin="anonymous"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))
          ) : (
            <div className={styles.slide}>
              <div className={styles.empty}>
                Ingen bilder
              </div>
            </div>
          )}
        </div>
      </div>

      {(showArrows || (showDots && images.length > 1)) && (
        <div className={styles.controls} aria-hidden="false">
          {showArrows && (
            <div className={styles.arrows}>
              <DigDirButton
                variant="primary"
                icon
                aria-label="Forrige bilde"
                onClick={scrollPrev}
                disabled={images.length <= 1}
              >
                <ChevronLeftIcon aria-hidden />
              </DigDirButton>
              <DigDirButton
                variant="primary"
                icon
                aria-label="Neste bilde"
                onClick={scrollNext}
                disabled={images.length <= 1}
              >
                <ChevronRightIcon aria-hidden />
              </DigDirButton>
            </div>
          )}

          {showDots && images.length > 1 && (
            <div className={styles.dots} role="tablist" aria-label="Bildeposisjon">
              {scrollSnaps.map((_, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
                    onClick={() => scrollTo(index)}
                    aria-label={`Gå til bilde ${index + 1}`}
                    aria-selected={isActive}
                    role="tab"
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Carousel.displayName = 'Carousel';


