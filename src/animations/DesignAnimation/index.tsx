import { useEffect, useLayoutEffect, useRef, useState, ReactNode } from 'react';
import { Avatar } from '../../components/Avatar';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import styles from './styles.module.css';

type ItemId = 'avatar' | 'heading' | 'tag' | 'button';
type TargetKind = 'palette' | 'canvas' | 'center';

export interface DesignAnimationLabels {
  avatar: string;
  heading: string;
  button: string;
  tag: string;
  name: string;
  role: string;
  cta: string;
  paletteTitle: string;
  canvasTitle: string;
}

export interface DesignAnimationProps {
  labels: DesignAnimationLabels;
}

interface Phase {
  target: { kind: TargetKind; id?: ItemId };
  grabbing: ItemId | null;
  placed: ItemId[];
}

interface Coords {
  x: number;
  y: number;
}

type Positions = Partial<Record<ItemId, { palette: Coords; canvas: Coords }>>;

const STEP_MS = 700;

const ITEM_ORDER: ItemId[] = ['avatar', 'heading', 'tag', 'button'];

const timeline: Phase[] = [
  // idle
  { target: { kind: 'center' }, grabbing: null, placed: [] },
  // avatar
  { target: { kind: 'palette', id: 'avatar' }, grabbing: null, placed: [] },
  { target: { kind: 'palette', id: 'avatar' }, grabbing: 'avatar', placed: [] },
  { target: { kind: 'canvas', id: 'avatar' }, grabbing: 'avatar', placed: [] },
  { target: { kind: 'canvas', id: 'avatar' }, grabbing: null, placed: ['avatar'] },
  // heading
  { target: { kind: 'palette', id: 'heading' }, grabbing: null, placed: ['avatar'] },
  { target: { kind: 'palette', id: 'heading' }, grabbing: 'heading', placed: ['avatar'] },
  { target: { kind: 'canvas', id: 'heading' }, grabbing: 'heading', placed: ['avatar'] },
  { target: { kind: 'canvas', id: 'heading' }, grabbing: null, placed: ['avatar', 'heading'] },
  // tag
  { target: { kind: 'palette', id: 'tag' }, grabbing: null, placed: ['avatar', 'heading'] },
  { target: { kind: 'palette', id: 'tag' }, grabbing: 'tag', placed: ['avatar', 'heading'] },
  { target: { kind: 'canvas', id: 'tag' }, grabbing: 'tag', placed: ['avatar', 'heading'] },
  { target: { kind: 'canvas', id: 'tag' }, grabbing: null, placed: ['avatar', 'heading', 'tag'] },
  // button
  { target: { kind: 'palette', id: 'button' }, grabbing: null, placed: ['avatar', 'heading', 'tag'] },
  { target: { kind: 'palette', id: 'button' }, grabbing: 'button', placed: ['avatar', 'heading', 'tag'] },
  { target: { kind: 'canvas', id: 'button' }, grabbing: 'button', placed: ['avatar', 'heading', 'tag'] },
  { target: { kind: 'canvas', id: 'button' }, grabbing: null, placed: ['avatar', 'heading', 'tag', 'button'] },
  // hold finished state
  { target: { kind: 'center' }, grabbing: null, placed: ['avatar', 'heading', 'tag', 'button'] },
  { target: { kind: 'center' }, grabbing: null, placed: ['avatar', 'heading', 'tag', 'button'] },
  { target: { kind: 'center' }, grabbing: null, placed: ['avatar', 'heading', 'tag', 'button'] },
];

export const DesignAnimation = ({ labels }: DesignAnimationProps) => {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [positions, setPositions] = useState<Positions>({});
  const [stageSize, setStageSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const prefersReducedMotion = useRef(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const paletteRefs = useRef<Record<ItemId, HTMLLIElement | null>>({
    avatar: null,
    heading: null,
    tag: null,
    button: null,
  });
  const canvasRefs = useRef<Record<ItemId, HTMLDivElement | null>>({
    avatar: null,
    heading: null,
    tag: null,
    button: null,
  });

  // Measure palette + canvas slot centers relative to the stage container.
  useLayoutEffect(() => {
    const measure = () => {
      const stage = stageRef.current;
      if (!stage) return;
      const stageRect = stage.getBoundingClientRect();
      setStageSize({ w: stageRect.width, h: stageRect.height });
      const next: Positions = {};
      for (const id of ITEM_ORDER) {
        const paletteEl = paletteRefs.current[id];
        const canvasEl = canvasRefs.current[id];
        if (!paletteEl || !canvasEl) continue;
        const pr = paletteEl.getBoundingClientRect();
        const cr = canvasEl.getBoundingClientRect();
        next[id] = {
          palette: {
            x: pr.left - stageRect.left + pr.width / 2,
            y: pr.top - stageRect.top + pr.height / 2,
          },
          canvas: {
            x: cr.left - stageRect.left + cr.width / 2,
            y: cr.top - stageRect.top + cr.height / 2,
          },
        };
      }
      setPositions(next);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion.current) {
      setPhaseIndex(timeline.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setPhaseIndex((p) => (p + 1) % timeline.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  const phase = timeline[phaseIndex];

  const cursorCoords: Coords | null = (() => {
    if (phase.target.kind === 'center') {
      return stageSize.w > 0 ? { x: stageSize.w / 2, y: stageSize.h / 2 } : null;
    }
    const id = phase.target.id!;
    const p = positions[id];
    if (!p) return null;
    return phase.target.kind === 'palette' ? p.palette : p.canvas;
  })();

  const renderCanvasItem = (id: ItemId): ReactNode => {
    switch (id) {
      case 'avatar':
        return <Avatar aria-label={labels.avatar} initials="MH" />;
      case 'heading':
        return (
          <Heading level={4} data-size="xs" style={{ margin: 0 }}>
            {labels.name}
          </Heading>
        );
      case 'tag':
        return (
          <Tag data-color="success" data-size="sm">
            {labels.role}
          </Tag>
        );
      case 'button':
        return (
          <Button variant="primary" data-size="sm">
            {labels.cta}
          </Button>
        );
    }
  };

  const renderPaletteIcon = (id: ItemId): ReactNode => {
    switch (id) {
      case 'avatar':
        return (
          <svg viewBox="0 0 32 32" className={styles.iconSvg} aria-hidden>
            <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.12" />
            <circle cx="16" cy="13" r="5" fill="currentColor" />
            <path d="M6 28c1.5-5 5.5-8 10-8s8.5 3 10 8" fill="currentColor" />
          </svg>
        );
      case 'heading':
        return (
          <svg viewBox="0 0 32 32" className={styles.iconSvg} aria-hidden>
            <rect x="5" y="9" width="22" height="3" rx="1.5" fill="currentColor" />
            <rect x="5" y="15" width="16" height="2" rx="1" fill="currentColor" opacity="0.55" />
            <rect x="5" y="19" width="18" height="2" rx="1" fill="currentColor" opacity="0.35" />
          </svg>
        );
      case 'tag':
        return (
          <svg viewBox="0 0 32 32" className={styles.iconSvg} aria-hidden>
            <path
              d="M4 12a2 2 0 0 1 2-2h10l12 12-10 10L4 18V12z"
              fill="currentColor"
              opacity="0.18"
            />
            <path
              d="M4 12a2 2 0 0 1 2-2h10l12 12-10 10L4 18V12z"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
            />
            <circle cx="10" cy="15" r="1.8" fill="currentColor" />
          </svg>
        );
      case 'button':
        return (
          <svg viewBox="0 0 32 32" className={styles.iconSvg} aria-hidden>
            <rect x="3" y="10" width="26" height="12" rx="6" fill="currentColor" />
            <rect
              x="9"
              y="14"
              width="14"
              height="2"
              rx="1"
              fill="var(--ds-color-neutral-background-default)"
              opacity="0.85"
            />
          </svg>
        );
    }
  };

  const paletteItems: { id: ItemId; label: string }[] = [
    { id: 'avatar', label: labels.avatar },
    { id: 'heading', label: labels.heading },
    { id: 'tag', label: labels.tag },
    { id: 'button', label: labels.button },
  ];

  return (
    <div className={styles.player}>
      <div className={styles.stage} ref={stageRef}>
        {/* Palette column */}
        <div className={styles.palette}>
          <div className={styles.columnLabel}>{labels.paletteTitle}</div>
          <ul className={styles.paletteList}>
            {paletteItems.map((item) => (
              <li
                key={item.id}
                ref={(el) => {
                  paletteRefs.current[item.id] = el;
                }}
                className={`${styles.paletteItem} ${phase.grabbing === item.id ? styles.paletteItemGrabbed : ''}`}
              >
                <div className={styles.paletteIcon}>{renderPaletteIcon(item.id)}</div>
                <span className={styles.paletteLabel}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Canvas column */}
        <div className={styles.canvas}>
          <div className={styles.columnLabel}>{labels.canvasTitle}</div>
          <div className={styles.canvasCard}>
            <div className={styles.canvasStack}>
              {ITEM_ORDER.map((id) => {
                const isFilled = phase.placed.includes(id);
                return (
                  <div
                    key={id}
                    ref={(el) => {
                      canvasRefs.current[id] = el;
                    }}
                    className={`${styles.canvasSlot} ${isFilled ? styles.canvasSlotFilled : ''}`}
                  >
                    {isFilled && renderCanvasItem(id)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating cursor */}
        {cursorCoords && (
          <div
            className={`${styles.cursor} ${phase.grabbing ? styles.cursorGrabbing : ''}`}
            style={{ left: `${cursorCoords.x}px`, top: `${cursorCoords.y}px` }}
            aria-hidden
          >
            <CursorIcon />
          </div>
        )}

        {/* Flying ghost — real component following the cursor while being dragged */}
        {phase.grabbing && cursorCoords && (
          <div
            className={styles.flyingCard}
            style={{ left: `${cursorCoords.x}px`, top: `${cursorCoords.y}px` }}
            aria-hidden
          >
            {renderCanvasItem(phase.grabbing)}
          </div>
        )}
      </div>
    </div>
  );
};

const CursorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 3l14 7-6.2 2-2 6.5L5 3z"
      fill="currentColor"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
