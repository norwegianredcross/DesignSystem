import { useMemo } from 'react';
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
    <main className={styles.container}>
      <div className={styles.header}>
        <Heading level={1} data-size="xl">
          Søkeresultater <span className={styles.query}>for "{decodedQuery}"</span>
        </Heading>
        <Paragraph data-size="lg">
          {results.length} {results.length === 1 ? 'treff' : 'treff'} funnet
        </Paragraph>
      </div>

      {results.length > 0 ? (
        <ul className={styles.resultList}>
          {results.map((result) => (
            <li key={result.id}>
              <Card asChild variant="default">
                <a
                  href="#"
                  className={styles.resultLink}
                  onClick={(e) => handleResultClick(e, result.path)}
                >
                  <span className={styles.resultCategory}>{result.category}</span>
                  <Heading level={2} data-size="md">{result.title}</Heading>
                  {result.description && (
                    <Paragraph data-size="sm">{result.description}</Paragraph>
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
    </main>
  );
};

