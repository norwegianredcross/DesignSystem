import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './styles.module.css';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import { ChevronLeftIcon, ChevronRightIcon } from '@navikt/aksel-icons';
import { Button } from '../Button';
import { Spinner } from '../SpinnerLoader';
import { useLanguageOptional } from '../../context/LanguageContext';

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
  const { t } = useLanguageOptional();

  // Fallback: inject minimal Carousel styles if consumer did not import the CSS bundle.
  useEffect(() => {
    const styleId = 'rk-carousel-inline-styles';
    if (typeof document === 'undefined') return;
    if (document.getElementById(styleId)) return;
    const css = buildCarouselInlineCss(styles);
    const tag = document.createElement('style');
    tag.id = styleId;
    tag.textContent = css;
    document.head.appendChild(tag);
  }, []);

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
                      <Spinner aria-label={t('carousel.loading')} />
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
                aria-label={t('carousel.previousImage')}
                onClick={scrollPrev}
                disabled={!images || images.length <= 1}
              >
                <ChevronLeftIcon aria-hidden />
              </Button>
              <Button
                variant="primary"
                icon={true}
                aria-label={t('carousel.nextImage')}
                onClick={scrollNext}
                disabled={!images || images.length <= 1}
              >
                <ChevronRightIcon aria-hidden />
              </Button>
            </div>
          )}

          {showDots && images && images.length > 1 && (
            <div className={styles.dots} role="tablist" aria-label={t('carousel.imagePosition')}>
              {scrollSnaps.map((_, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
                    onClick={() => scrollTo(index)}
                    aria-label={`${t('carousel.goToImage')} ${index + 1}`}
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

// Build a minimal CSS fallback using the hashed class names from the CSS module.
function buildCarouselInlineCss(s: Record<string, string>): string {
  return `
.${s.carouselContainer} {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background-color: var(--ds-color-background-default, #fff);
  color: var(--ds-color-text-default, #2b2b2b);
  border-radius: var(--ds-border-radius-md, 4px);
  box-sizing: border-box;
  max-width: 100%;
}
.${s.viewport} {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.${s.slides} {
  display: flex;
  height: 100%;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.${s.slide} {
  position: relative;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.${s.slideInner} {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--ds-color-neutral-surface-subtle, #f5f5f5);
  overflow: hidden;
}
.${s.loaderOverlay} {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 2;
}
.${s.image} {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
}
.${s.image}.${s.loaded} {
  opacity: 1;
}
.${s.loading} {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-size-2, 8px);
  color: var(--ds-color-text-subtle, #5d5d5d);
  font-size: var(--ds-font-size-sm, 14px);
}
.${s.empty} {
  color: var(--ds-color-text-subtle, #5d5d5d);
  font-size: var(--ds-font-size-sm, 14px);
  text-align: center;
}
.${s.controls} {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
}
.${s.arrows} {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 var(--ds-size-4, 16px);
  box-sizing: border-box;
  pointer-events: auto;
}
.${s.dots} {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--ds-size-3, 12px);
  display: inline-flex;
  gap: var(--ds-size-2, 8px);
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  padding: var(--ds-size-1, 4px) var(--ds-size-2, 8px);
  border-radius: 999px;
}
.${s.dot} {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #d6d6d6);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.${s.dotActive} {
  background-color: var(--primary-color-red-10);
  border-color: var(--primary-color-red-10);
  transform: scale(1.1);
}
@media (max-width: 640px) {
  .${s.carouselContainer} {
    height: auto;
    min-height: 150px;
    aspect-ratio: 16 / 9;
  }
  .${s.viewport} {
    aspect-ratio: 16 / 9;
    height: auto;
  }
  .${s.slides} {
    height: auto;
    min-height: 150px;
  }
  .${s.slide} {
    height: auto;
    min-height: 150px;
  }
  .${s.slideInner} {
    aspect-ratio: 16 / 9;
    height: auto;
  }
  .${s.arrows} {
    padding: 0 var(--ds-size-2, 8px);
  }
  .${s.dots} {
    bottom: var(--ds-size-2, 8px);
    gap: var(--ds-size-1, 4px);
  }
  .${s.dot} {
    width: 10px;
    height: 10px;
  }
}
@media (max-width: 400px) {
  .${s.carouselContainer} {
    min-height: 120px;
  }
  .${s.arrows} {
    padding: 0 var(--ds-size-1, 4px);
  }
  .${s.arrows} button {
    transform: scale(0.85);
  }
}
`;
}
