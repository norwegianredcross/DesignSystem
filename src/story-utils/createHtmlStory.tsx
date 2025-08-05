import type { StoryFn } from "@storybook/react";

export function createHtmlStory(htmlContent: string, options?: any): StoryFn {
  const story: StoryFn = () => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };
  
  story.parameters = {
    htmlSource: htmlContent, // Store HTML source for the tab switcher
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