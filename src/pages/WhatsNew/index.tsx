import changelogRaw from '../../../CHANGELOG.md?raw';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Tag } from '../../components/Tag';
import { Link } from '../../components/Link';
import { useLanguage } from '../../context/LanguageContext';
import styles from './styles.module.css';

const REPO_URL = 'https://github.com/norwegianredcross/DesignSystem';

interface ReleaseItem {
  /** Conventional-commit type (fix/feat/docs/…) shown as a tag */
  kind: string;
  text: string;
  prNumber?: string;
}

interface Release {
  version: string;
  date: string;
  items: ReleaseItem[];
}

// Avledet fra CHANGELOG.md ved byggetid (?raw-import) — siden kan aldri
// drifte fra den faktiske utgivelseshistorikken, for release-workflowen er
// den eneste som skriver til changeloggen.
function parseChangelog(raw: string): Release[] {
  const releases: Release[] = [];
  let current: Release | null = null;

  for (const line of raw.split('\n')) {
    const heading = line.match(/^## (\d+\.\d+\.\d+) \(([^)]+)\)/);
    if (heading) {
      current = { version: heading[1], date: heading[2], items: [] };
      releases.push(current);
      continue;
    }
    const bullet = line.match(/^- (.+)$/);
    if (bullet && current) {
      // Formen er «type(scope): melding (#PR) (commit)» — commit-hashen er
      // støy her, PR-nummeret blir en lenke.
      let text = bullet[1].replace(/\s*\([0-9a-f]{7,40}\)\s*$/, '');
      const pr = text.match(/\s*\(#(\d+)\)\s*$/);
      if (pr) text = text.slice(0, pr.index);
      const kindMatch = text.match(/^([a-z]+)(?:\([^)]*\))?!?:\s*/);
      const kind = kindMatch ? kindMatch[1] : 'annet';
      if (kindMatch) text = text.slice(kindMatch[0].length);
      current.items.push({ kind, text, prNumber: pr?.[1] });
    }
  }
  return releases;
}

const releases = parseChangelog(changelogRaw);

export const WhatsNewPage = () => {
  const { t } = useLanguage();

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.heroPanel}>
          <Heading level={1} className={styles.title}>
            {t('whatsNew.title')}
          </Heading>
          <Paragraph className={styles.introText}>{t('whatsNew.intro')}</Paragraph>
        </header>

        {releases.map((release) => (
          <section key={release.version} className={styles.release} aria-labelledby={`release-${release.version}`}>
            <div className={styles.releaseHeader}>
              <Heading level={2} data-size="md" id={`release-${release.version}`}>
                v{release.version}
              </Heading>
              <span className={styles.releaseDate}>{release.date}</span>
              <Link
                href={`${REPO_URL}/releases/tag/v${release.version}`}
                target="_blank"
                rel="noreferrer"
              >
                {t('whatsNew.releaseLink')}
              </Link>
            </div>
            <ul className={styles.itemList}>
              {release.items.map((item, i) => (
                <li key={i} className={styles.item}>
                  <Tag data-size="sm" data-color="neutral" className={styles.kindTag}>
                    {item.kind}
                  </Tag>
                  <span className={styles.itemText}>
                    {item.text}
                    {item.prNumber && (
                      <>
                        {' '}
                        <Link href={`${REPO_URL}/pull/${item.prNumber}`} target="_blank" rel="noreferrer">
                          #{item.prNumber}
                        </Link>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};
