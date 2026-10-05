import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './styles.module.css';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from '@navikt/aksel-icons';
import { Button } from '../Button';
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
    /**
     * Accessible name for the carousel region (APG carousel pattern).
     * Falls back to the translated "Bildekarusell"; pass something specific
     * when a page has more than one carousel.
     */
    'aria-label'?: string;
    /**
     * Forwarded to every <img>. OFF by default: it used to be forced to
     * "anonymous", which makes the browser send a CORS request — and images
     * from any host that does not answer with CORS headers then fail to
     * load entirely, even though a plain <img> would have shown them. Opt in
     * only when the images are known to be CORS-enabled (e.g. for canvas
     * readback).
     */
    crossOrigin?: 'anonymous' | 'use-credentials';
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
  'aria-label': ariaLabel,
  crossOrigin,
  'data-color': dataColor,
  'data-size': dataSize,
}) => {
  const { t } = useLanguageOptional();

  // Server and first client render use the same native gallery. Browser
  // preferences and stylesheet availability are checked only after hydration.
  const [motionAllowed, setMotionAllowed] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const update = () => setMotionAllowed(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const [stylesReady, setStylesReady] = useState(false);
  const initialSlide = useRef(0);
  useEffect(() => {
    const track = viewport?.firstElementChild;
    if (!viewport || !(track instanceof HTMLElement) || typeof ResizeObserver === 'undefined') return;
    const checkLayout = () => {
      const ready = getComputedStyle(track).display === 'flex';
      if (ready && viewport.scrollLeft) {
        const slides = Array.from(track.children);
        const first = slides[0]?.getBoundingClientRect().left ?? 0;
        let nearest = Infinity;
        slides.forEach((slide, index) => {
          const distance = Math.abs(slide.getBoundingClientRect().left - first - viewport.scrollLeft);
          if (distance < nearest) {
            nearest = distance;
            initialSlide.current = index;
          }
        });
      }
      setStylesReady(ready);
    };
    checkLayout();
    // CSS arriving late or being removed changes the track's layout. Reuse
    // that signal instead of injecting another stylesheet or polling the DOM.
    const observer = new ResizeObserver(checkLayout);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, [viewport]);

  // Options for Embla
  const options = {
    active: stylesReady && (showArrows || showDots),
    duration: motionAllowed ? 25 : 0,
    loop: true,
    align: 'start' as const,
    containScroll: 'trimSnaps' as const,
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const attachViewport = useCallback((node: HTMLDivElement | null) => {
    setViewport(node);
    emblaRef(node);
  }, [emblaRef]);
  const enhanced = stylesReady && (showArrows || showDots) && Boolean(emblaApi);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  // Which slides are actually visible, straight from Embla — with
  // slidesPerView > 1 and loop that is not derivable from selectedIndex
  // alone. Everything else is hidden from assistive technology (see the
  // slide markup), otherwise a screen reader reads all N images as one
  // long list regardless of what is on screen.
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  // Konverterer forsinkelse fra sekunder til millisekunder
  const autoDelayMs = useMemo(() => autoDelay * 1000, [autoDelay]);

  // Håndterer oppdatering av valgt indeks når karusellen scroller
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSlidesInView(emblaApi.slidesInView());
  }, [emblaApi]);

  // Keyboard focus stops rotation until an explicit restart (APG).
  // Hover suspends it only while the pointer is inside.
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const pointerPauseAction = useRef<boolean | null>(null);

  // Hjelpefunksjoner for navigering
  const scrollTo = useCallback((index: number) => {
    setUserPaused(true);
    emblaApi?.scrollTo(index);
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    setUserPaused(true);
    emblaApi?.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    setUserPaused(true);
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Setter opp lyttere for carousel-hendelser
  useEffect(() => {
    if (!enhanced || !emblaApi) return;
    const stopRotation = () => setUserPaused(true);
    emblaApi.on('pointerDown', stopRotation);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    // Fires as slides scroll into/out of view (also mid-drag), so the
    // hidden-from-AT set tracks what is on screen, not just the snap.
    emblaApi.on('slidesInView', onSelect);
    const root = emblaApi.rootNode();
    root.scrollLeft = 0;
    emblaApi.scrollTo(initialSlide.current, true);
    onSelect();
    // Focus acquired before hydration must also stop automatic rotation.
    if (root.parentElement?.contains(document.activeElement)) setUserPaused(true);
    return () => {
      emblaApi.off('pointerDown', stopRotation);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('slidesInView', onSelect);
    };
  }, [emblaApi, enhanced, onSelect]);

  // Re-initialiserer karusellen hvis bilder endres eller layout endres
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, [emblaApi, images, slidesPerView, slideSpacing]);

  const autoplayActive = enhanced && autoPlay && motionAllowed && !userPaused && !hoverPaused;

  useEffect(() => {
    if (!autoplayActive || !emblaApi || !images || images.length <= 1) return;
    const timer = window.setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, autoDelayMs);
    return () => {
      window.clearInterval(timer);
    };
  }, [autoplayActive, autoDelayMs, emblaApi, images]);

  // Beregn layout
  const safeSlideCount = Math.max(1, slidesPerView);
  const slideFlexBasis = `${100 / safeSlideCount}%`;
  const halfSpacing = slideSpacing / 2;

  // The native gallery exposes all images. Only a working carousel may
  // hide off-screen slides from assistive technology.
  const isSlideVisible = (index: number) =>
    !enhanced || (slidesInView.length > 0 ? slidesInView.includes(index) : index < safeSlideCount);
  const imageCount = images?.length ?? 0;
  const slideOf = (index: number) =>
    t('carousel.slideOf').replace('{index}', String(index + 1)).replace('{total}', String(imageCount));
  const hasMultiple = imageCount > 1;
  // The pause control is a WCAG 2.2.2 requirement of autoplay itself, so
  // it renders whenever autoplay is on — it used to live inside the dots
  // branch, which made autoPlay + showDots={false} an unstoppable rotation.
  const showPauseControl = autoPlay && hasMultiple;
  const showDotControls = showDots && hasMultiple;

  return (
    // APG carousel pattern: a labelled region with the "carousel" role
    // description, slides as labelled groups, and a live position status.
    <div
      className={styles.carouselContainer}
      role="region"
      aria-roledescription={enhanced ? 'carousel' : undefined}
      data-enhanced={enhanced || undefined}
      aria-label={ariaLabel ?? t('carousel.label')}
      data-color={dataColor}
      data-size={dataSize}
      data-variant={variant}
      onMouseEnter={autoPlay ? () => setHoverPaused(true) : undefined}
      onMouseLeave={autoPlay ? () => setHoverPaused(false) : undefined}
      onFocus={autoPlay ? (event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setUserPaused(true);
      } : undefined}
    >
      {enhanced && (showArrows || showDotControls || showPauseControl) && (
        <div className={styles.controls} aria-hidden="false">

          {(showDotControls || showPauseControl) && (
            // One translucent pill holds the pause control and the dots; the
            // dots alone form the labelled "Bildeposisjon" group so the
            // pause button is not announced as part of the position picker.
            <div className={styles.dots}>
              {showPauseControl && (
                <button
                  type="button"
                  className={styles.playPause}
                  disabled={!motionAllowed}
                  onPointerDown={() => { pointerPauseAction.current = !userPaused; }}
                  onPointerCancel={() => { pointerPauseAction.current = null; }}
                  onClick={(event) => {
                    setUserPaused(event.detail > 0 ? pointerPauseAction.current ?? !userPaused : !userPaused);
                    pointerPauseAction.current = null;
                  }}
                  aria-label={!motionAllowed || userPaused ? t('carousel.resumeAutoplay') : t('carousel.pauseAutoplay')}
                >
                  {!motionAllowed || userPaused ? <PlayIcon aria-hidden /> : <PauseIcon aria-hidden />}
                </button>
              )}
              {showDotControls && (
                <div className={styles.dotGroup} role="group" aria-label={t('carousel.imagePosition')}>
                  {scrollSnaps.map((_, index) => {
                    const isActive = index === selectedIndex;
                    return (
                      <button
                        key={`dot-${index}`}
                        type="button"
                        className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
                        onClick={isActive ? undefined : () => scrollTo(index)}
                        aria-disabled={isActive || undefined}
                        aria-label={`${t('carousel.goToImage')} ${index + 1}`}
                        aria-current={isActive || undefined}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {showArrows && (
            <div className={styles.arrows}>
              <Button
                variant="primary"
                icon={true}
                aria-label={t('carousel.previousImage')}
                onClick={scrollPrev}
                disabled={!hasMultiple}
              >
                <ChevronLeftIcon aria-hidden />
              </Button>
              <Button
                variant="primary"
                icon={true}
                aria-label={t('carousel.nextImage')}
                onClick={scrollNext}
                disabled={!hasMultiple}
              >
                <ChevronRightIcon aria-hidden />
              </Button>
            </div>
          )}

        </div>
      )}

      <div className={styles.viewport} ref={attachViewport} tabIndex={-1}>
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
                role="group"
                tabIndex={enhanced ? -1 : 0}
                aria-roledescription={enhanced ? 'slide' : undefined}
                aria-label={slideOf(index)}
                // Native Tab navigation reveals each baseline slide. Once
                // enhanced, controls navigate and only visible slides are read.
                aria-hidden={isSlideVisible(index) ? undefined : true}
                style={{
                  flex: `0 0 ${slideFlexBasis}`,
                  paddingLeft: `${halfSpacing}px`,
                  paddingRight: `${halfSpacing}px`,
                  borderRadius: cornerRadius > 0 ? `${cornerRadius}px` : undefined,
                  overflow: 'hidden' // Ensure radius clips content
                }}
              >
                <div className={styles.slideInner} style={{ borderRadius: `${cornerRadius}px`, overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
                  {/* Native image loading also works before hydration. Do not
                      gate visibility or alternative text on a JS load event. */}
                  <img
                    className={styles.image}
                    src={image.src}
                    alt={image.alt}
                    loading={index < safeSlideCount ? 'eager' : 'lazy'}
                    crossOrigin={crossOrigin}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className={styles.slide} style={{ flex: '0 0 100%' }}>
              <div className={styles.empty}>{t('carousel.empty')}</div>
            </div>
          )}
        </div>
      </div>

      {/* Position announcements for screen readers. Polite while the user
          drives the carousel; switched OFF while autoplay is rotating, as the
          APG pattern requires — a live region that fires every few seconds
          on its own would talk over everything else on the page. */}
      {enhanced && hasMultiple && (
        <div role="status" aria-live={autoplayActive ? 'off' : 'polite'} className={styles.srOnly}>
          {slideOf(selectedIndex)}
          {images[selectedIndex]?.alt ? `: ${images[selectedIndex].alt}` : ''}
        </div>
      )}


    </div>
  );
};

Carousel.displayName = 'Carousel';
