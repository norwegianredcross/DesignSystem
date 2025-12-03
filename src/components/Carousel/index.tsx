import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './styles.module.css';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import { ChevronLeftIcon, ChevronRightIcon } from '@navikt/aksel-icons';
import { Button } from '../Button';
import { Spinner } from '../SpinnerLoader';

// --- Typer ---
export type CarouselProps = MergeRight<
  DefaultProps,
  {
    images: { src: string; alt: string }[];
    autoPlay?: boolean;
    autoDelay?: number; // sekunder
    showArrows?: boolean;
    showDots?: boolean;
    variant?: string;
    slidesPerView?: number;
    slideSpacing?: number; // px
    cornerRadius?: number; // px
  }
>;

/**
 * Carousel-komponent for å vise en bildeserie.
 * Bruker embla-carousel-react for funksjonalitet.
 */
export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = false,
  autoDelay = 5,
  showArrows = true,
  showDots = true,
  variant,
  slidesPerView = 1,
  slideSpacing = 16,
  cornerRadius = 0,
  'data-color': dataColor,
  'data-size': dataSize,
}) => {
  // Options for Embla
  const options = {
    loop: true,
    align: 'start' as const,
    containScroll: 'trimSnaps' as const,
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [loadedFlags, setLoadedFlags] = useState<boolean[]>([]);

  // Reset loaded flags when images change
  useEffect(() => {
    setLoadedFlags(new Array(images?.length || 0).fill(false));
  }, [images]);

  const markImageLoaded = useCallback((index: number) => {
    setLoadedFlags((prev) => {
      const newFlags = [...prev];
      newFlags[index] = true;
      return newFlags;
    });
  }, []);

  // Konverterer forsinkelse fra sekunder til millisekunder
  const autoDelayMs = useMemo(() => autoDelay * 1000, [autoDelay]);

  // Håndterer oppdatering av valgt indeks når karusellen scroller
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Hjelpefunksjoner for navigering
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Setter opp lyttere for carousel-hendelser
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

  // Re-initialiserer karusellen hvis bilder endres eller layout endres
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, [emblaApi, images, slidesPerView, slideSpacing]);

  // Håndterer automatisk avspilling
  useEffect(() => {
    if (!autoPlay || !emblaApi || !images || images.length <= 1) return;
    const timer = window.setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, autoDelayMs);
    return () => {
      window.clearInterval(timer);
    };
  }, [autoPlay, autoDelayMs, emblaApi, images]);

  // Beregn layout
  const safeSlideCount = Math.max(1, slidesPerView);
  const slideFlexBasis = `${100 / safeSlideCount}%`;
  const halfSpacing = slideSpacing / 2;

  return (
    <div 
      className={styles.carouselContainer} 
      data-color={dataColor} 
      data-size={dataSize}
      data-variant={variant}
    >
      <div className={styles.viewport} ref={emblaRef}>
        <div 
          className={styles.slides}
          style={{ 
            marginLeft: `-${halfSpacing}px`, 
            marginRight: `-${halfSpacing}px` 
          }}
        >
          {images && images.length > 0 ? (
            images.map((image, index) => (
              <div 
                className={styles.slide} 
                key={`image-${index}-${image.src}`}
                style={{
                  flex: `0 0 ${slideFlexBasis}`,
                  paddingLeft: `${halfSpacing}px`,
                  paddingRight: `${halfSpacing}px`,
                  borderRadius: cornerRadius > 0 ? `${cornerRadius}px` : undefined,
                  overflow: 'hidden' // Ensure radius clips content
                }}
              >
                <div className={styles.slideInner} style={{ borderRadius: `${cornerRadius}px`, overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
                   {!loadedFlags[index] && (
                    <div className={styles.loaderOverlay}>
                      <Spinner aria-label="Laster bilde" />
                    </div>
                  )}
                  <img
                    className={`${styles.image} ${loadedFlags[index] ? styles.loaded : styles.loadingImage}`}
                    src={image.src}
                    alt={image.alt}
                    loading={index < safeSlideCount ? 'eager' : 'lazy'}
                    crossOrigin="anonymous"
                    onLoad={() => markImageLoaded(index)}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      markImageLoaded(index); // Hide loader even if error
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className={styles.slide} style={{ flex: '0 0 100%' }}>
              <div className={styles.empty}>
                Ingen bilder
              </div>
            </div>
          )}
        </div>
      </div>

      {(showArrows || (showDots && images && images.length > 1)) && (
        <div className={styles.controls} aria-hidden="false">
          {showArrows && (
            <div className={styles.arrows}>
              <Button
                variant="primary"
                icon={true}
                aria-label="Forrige bilde"
                onClick={scrollPrev}
                disabled={!images || images.length <= 1}
              >
                <ChevronLeftIcon aria-hidden />
              </Button>
              <Button
                variant="primary"
                icon={true}
                aria-label="Neste bilde"
                onClick={scrollNext}
                disabled={!images || images.length <= 1}
              >
                <ChevronRightIcon aria-hidden />
              </Button>
            </div>
          )}

          {showDots && images && images.length > 1 && (
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
