/**
 * Henter ut rendret HTML fra et element, og tar hensyn til dekoratører.
 * Brukes for å vise HTML-kildekode i Storybook.
 */
export function extractRenderedHtml(canvasElement: HTMLElement) {
  const decorators = canvasElement.querySelectorAll(
    '[data-storybook-decorator]',
  );
  const innerDecorator = Array.from(decorators).at(decorators.length - 1);
  const html = innerDecorator?.innerHTML || canvasElement.innerHTML;
  return html;
}