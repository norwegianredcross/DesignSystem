import type { StoryFn } from "@storybook/react";

/**
 * Oppretter en historie som viser rå HTML-innhold.
 * Nyttig for å vise hvordan komponenter rendres som ren HTML.
 */
export function createHtmlStory(htmlContent: string, options?: any): StoryFn {
  const story: StoryFn = () => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };
  
  story.parameters = {
    htmlSource: htmlContent, // Lagre HTML-kilde for faneark-velgeren
    docs: {
      source: {
        code: htmlContent,
        language: 'html',
        type: 'code'
      }
    },
    ...options
  };
  
  return story;
}