import { useEffect, useMemo, useRef, useState } from 'react';
import { Card, CardBlock } from '../../components/Card';
import { Avatar } from '../../components/Avatar';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import styles from './styles.module.css';

export interface CodeAnimationLabels {
  name: string;
  role: string;
  cta: string;
  fileName: string;
}

export interface CodeAnimationProps {
  labels: CodeAnimationLabels;
  /** Milliseconds per character. Defaults to 28. */
  charMs?: number;
  /** How long to hold the completed state before restarting. */
  holdMs?: number;
}

const CODE_LINES = [
  '<Card>',
  '  <CardBlock>',
  '    <div className="profile">',
  '      <Avatar initials="MH" />',
  '      <Heading level={3}>',
  '        {name}',
  '      </Heading>',
  '      <Tag data-color="success">',
  '        {role}',
  '      </Tag>',
  '      <Button variant="primary">',
  '        {cta}',
  '      </Button>',
  '    </div>',
  '  </CardBlock>',
  '</Card>',
];

// Reveal indices — preview element appears once this line is fully typed.
const REVEAL = {
  card: 0,
  avatar: 3,
  heading: 5,
  tag: 8,
  button: 11,
} as const;

export const CodeAnimation = ({
  labels,
  charMs = 28,
  holdMs = 2400,
}: CodeAnimationProps) => {
  const totalChars = useMemo(
    () => CODE_LINES.reduce((sum, line) => sum + line.length + 1, 0),
    []
  );

  const [charCount, setCharCount] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion.current) {
      setCharCount(totalChars);
    }
  }, [totalChars]);

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    if (charCount < totalChars) {
      const id = window.setTimeout(() => setCharCount((c) => c + 1), charMs);
      return () => window.clearTimeout(id);
    }

    // Reached the end — hold on the finished composition, then reset.
    setIsHolding(true);
    const id = window.setTimeout(() => {
      setIsHolding(false);
      setCharCount(0);
    }, holdMs);
    return () => window.clearTimeout(id);
  }, [charCount, totalChars, charMs, holdMs]);

  // Figure out which lines are fully typed and which line the caret is currently on.
  const { fullyTypedLines, currentLineIndex, currentLineChars } = useMemo(() => {
    let remaining = charCount;
    let fullyTyped = 0;
    for (let i = 0; i < CODE_LINES.length; i++) {
      const lineLen = CODE_LINES[i].length + 1; // include newline
      if (remaining >= lineLen) {
        fullyTyped++;
        remaining -= lineLen;
      } else {
        return {
          fullyTypedLines: fullyTyped,
          currentLineIndex: i,
          currentLineChars: remaining,
        };
      }
    }
    return {
      fullyTypedLines: CODE_LINES.length,
      currentLineIndex: -1,
      currentLineChars: 0,
    };
  }, [charCount]);

  const show = {
    card: fullyTypedLines > REVEAL.card,
    avatar: fullyTypedLines > REVEAL.avatar,
    heading: fullyTypedLines > REVEAL.heading,
    tag: fullyTypedLines > REVEAL.tag,
    button: fullyTypedLines > REVEAL.button,
  };

  return (
    <div className={styles.player}>
      <div className={styles.stage}>
        {/* Editor */}
        <div className={styles.editor}>
          <div className={styles.editorChrome}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotAmber}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
            <span className={styles.fileName}>{labels.fileName}</span>
          </div>
          <pre className={styles.codeBlock} aria-label={labels.fileName}>
            <code>
              {CODE_LINES.map((line, i) => {
                let text = '';
                if (i < currentLineIndex) text = line;
                else if (i === currentLineIndex) text = line.slice(0, currentLineChars);
                else if (i < fullyTypedLines) text = line; // when all typing is done
                else text = '';

                const isActive = i === currentLineIndex;
                const isTyped = i < fullyTypedLines || (isHolding && i < CODE_LINES.length);

                return (
                  <span key={i} className={styles.line}>
                    <span className={styles.lineNumber}>{i + 1}</span>
                    <span className={styles.lineContent}>
                      {renderTokens(text)}
                      {isActive && !prefersReducedMotion.current && (
                        <span className={styles.caret} aria-hidden>▍</span>
                      )}
                      {!isActive && !isTyped && '\u00A0'}
                    </span>
                  </span>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Live preview */}
        <div className={styles.preview}>
          <div className={styles.previewLabel}>Preview</div>
          {show.card ? (
            <Card variant="default" className={styles.previewCard}>
              <CardBlock>
                <div className={styles.previewStack}>
                  <div className={`${styles.previewItem} ${show.avatar ? styles.previewItemVisible : ''}`}>
                    {show.avatar && <Avatar aria-label="Avatar" initials="MH" />}
                  </div>
                  <div className={`${styles.previewItem} ${show.heading ? styles.previewItemVisible : ''}`}>
                    {show.heading && (
                      <Heading level={3} data-size="xs" style={{ margin: 0 }}>
                        {labels.name}
                      </Heading>
                    )}
                  </div>
                  <div className={`${styles.previewItem} ${show.tag ? styles.previewItemVisible : ''}`}>
                    {show.tag && (
                      <Tag data-color="success" data-size="sm">
                        {labels.role}
                      </Tag>
                    )}
                  </div>
                  <div className={`${styles.previewItem} ${show.button ? styles.previewItemVisible : ''}`}>
                    {show.button && (
                      <Button variant="primary" data-size="sm">
                        {labels.cta}
                      </Button>
                    )}
                  </div>
                </div>
              </CardBlock>
            </Card>
          ) : (
            <div className={styles.previewEmpty} aria-hidden />
          )}
        </div>
      </div>
    </div>
  );
};

// Very small syntax coloring — tags, props, strings. Enough to feel alive without a dep.
const TOKEN_RE = /(<\/?[A-Za-z][A-Za-z0-9]*)|([a-zA-Z-]+)(?==)|(=)|("[^"]*")|(\{[^}]*\})|(\/?>)/g;

function renderTokens(text: string) {
  if (!text) return null;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(TOKEN_RE.source, 'g');
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [full, tag, prop, eq, str, expr, close] = match;
    if (tag) nodes.push(<span key={nodes.length} className={styles.tokenTag}>{full}</span>);
    else if (prop) nodes.push(<span key={nodes.length} className={styles.tokenProp}>{full}</span>);
    else if (eq) nodes.push(full);
    else if (str) nodes.push(<span key={nodes.length} className={styles.tokenString}>{full}</span>);
    else if (expr) nodes.push(<span key={nodes.length} className={styles.tokenExpr}>{full}</span>);
    else if (close) nodes.push(<span key={nodes.length} className={styles.tokenTag}>{full}</span>);
    lastIndex = match.index + full.length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}
