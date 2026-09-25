// Aksel 8.17.1 (2026-09-25) was published without compiled icon modules.
// npm matches override selectors against requested ranges, not just resolved
// versions. Keep the replacement a range too, so future fixed 8.x releases
// remain eligible. See the consumer workaround in README.
export const consumerOverrides = {
  '@navikt/aksel-icons@8.17.1': '^8.16.1 <8.17.1 || ^8.17.2',
};
