import { ReactNode } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

interface ArticleLayoutProps {
  title: string;
  intro?: string;
  category?: string;
  children?: ReactNode;
}

export const ArticleLayout = ({ title, intro, category, children }: ArticleLayoutProps) => (
  <div className="article-max-width animate-fade-in">
    {category && (
      <div style={{ 
        fontSize: 'var(--ds-font-size-sm)', 
        textTransform: 'uppercase', 
        letterSpacing: '0.05em', 
        color: 'var(--ds-color-neutral-text-subtle)', 
        marginBottom: 'var(--ds-size-2)',
        fontWeight: 'bold'
      }}>
        {category}
      </div>
    )}
    <Heading level={1} data-size="xl" style={{ marginBottom: 'var(--ds-size-4)', color: 'var(--ds-color-primary-color-red-text-default)' }}>{title}</Heading>
    {intro && (
      <Paragraph data-size="lg" style={{ color: 'var(--ds-color-primary-color-red-text-default)', marginBottom: 'var(--ds-size-6)' }}>
        {intro}
      </Paragraph>
    )}
    <hr style={{ border: 0, borderTop: '2px solid var(--ds-color-primary-color-red-base-default)', width: 'var(--ds-size-30)', marginLeft: 0, marginBottom: 'var(--ds-size-6)' }} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ds-size-6)', marginBottom: 'var(--ds-size-10)', fontSize: 'var(--ds-font-size-2)', color: 'var(--ds-color-neutral-text-subtle)' }}>
      <span>Oppdatert juli 2026</span>
      <a
        href="https://github.com/norwegianredcross/DesignSystem/issues/new/choose"
        target="_blank"
        rel="noreferrer"
        style={{ color: 'var(--ds-color-primary-color-red-text-default)' }}
      >
        Send innspill på GitHub
      </a>
    </div>
    {children}
  </div>
);

export const ArticleImage = ({ src, alt, caption }: { src: string, alt: string, caption?: string }) => {
  const fullSrc = src.startsWith('/') && !src.startsWith(import.meta.env.BASE_URL)
    ? `${import.meta.env.BASE_URL}${src.slice(1)}`
    : src;

  return (
    <div className="article-image" style={{ marginBottom: 'var(--ds-size-6)' }}>
      <img src={fullSrc} alt={alt} style={{ maxWidth: '100%', borderRadius: 'var(--ds-border-radius-md)', border: '1px solid var(--ds-color-neutral-border-subtle)' }} />
      {caption && (
        <p style={{ 
          fontSize: 'var(--ds-font-size-sm)', 
          color: 'var(--ds-color-neutral-text-subtle)', 
          fontStyle: 'italic',
          marginTop: 'var(--ds-size-2)'
        }}>
          {caption}
        </p>
      )}
    </div>
  );
};
