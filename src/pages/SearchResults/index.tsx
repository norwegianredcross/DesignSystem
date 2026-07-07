import { useMemo } from 'react';
import { ArrowRightIcon } from '@navikt/aksel-icons';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card } from '../../components/Card';
import styles from './styles.module.css';
import { searchIndex } from '../../utils/search-index';

interface SearchResultsPageProps {
  query: string;
  setPage: (page: string) => void;
}

export const SearchResultsPage = ({ query, setPage }: SearchResultsPageProps) => {
  const decodedQuery = decodeURIComponent(query || '');

  const results = useMemo(() => {
    if (!decodedQuery.trim()) return [];
    const lowerQuery = decodedQuery.toLowerCase();
    return searchIndex.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description?.toLowerCase().includes(lowerQuery)
    );
  }, [decodedQuery]);

  const handleResultClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setPage(path);
  };

  return (
    <main className={styles.pageWrapper}>
      {/* Hero: inset rounded cream panel (design retning pattern) */}
      <div className={styles.container}>
        <header className={styles.heroPanel}>
          <Heading level={1} className={styles.title}>
            Søkeresultater <span className={styles.query}>for "{decodedQuery}"</span>
          </Heading>
          <Paragraph data-size="lg" className={styles.resultCount}>
            {results.length} {results.length === 1 ? 'treff' : 'treff'} funnet
          </Paragraph>
        </header>
      </div>

      <div className={styles.container}>
        {results.length > 0 ? (
          <ul className={styles.resultList}>
            {results.map((result) => (
              <li key={result.id}>
                <Card asChild variant="default" className={styles.resultCard}>
                  <a
                    href="#"
                    className={styles.resultLink}
                    onClick={(e) => handleResultClick(e, result.path)}
                  >
                    <span className={styles.resultCategory}>{result.category}</span>
                    <Heading level={2} data-size="md" className={styles.resultTitle}>
                      <span className={styles.resultAction}>
                        {result.title}
                        <ArrowRightIcon aria-hidden="true" className={styles.resultArrow} />
                      </span>
                    </Heading>
                    {result.description && (
                      <Paragraph data-size="sm" className={styles.resultDescription}>
                        {result.description}
                      </Paragraph>
                    )}
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noResults}>
            <Paragraph data-size="lg">Ingen resultater funnet for "{decodedQuery}". Prøv et annet søkeord.</Paragraph>
          </div>
        )}
      </div>
    </main>
  );
};
