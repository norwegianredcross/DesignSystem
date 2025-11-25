import type { StoryContext } from '@storybook/react-vite';
import type { Plugin } from 'prettier';
import * as EstreePlugin from 'prettier/plugins/estree';
import * as HtmlPlugin from 'prettier/plugins/html';
import * as TypescriptPlugin from 'prettier/plugins/typescript';
import { format as prettierFormat } from 'prettier/standalone';
import { extractRenderedHtml } from './extractRenderedHtml.ts';

/**
 * Bruk dette som parameters.docs.source.transform ved behov for bedre formatering av React-kode.
 * Ikke aktivert som standard for å unngå unødvendig ytelsesbelastning.
 */
export const formatReactSource = async (src: string, ctx: StoryContext) => {
  if (ctx.globals.codePreview === 'react') {
    return formatWithPrettier('typescript', src);
  }
  return transformSource(src, ctx);
};

const getStoryElement = (storyId: string) =>
  document.getElementById(`story--${storyId}-inner`) ??
  document.getElementById(`story--${storyId}--primary-inner`);

export const transformSource = async (src: string, ctx: StoryContext) => {
  if (ctx.globals.codePreview === 'html') {
    const formattedHtml = new Promise<string>((resolve) => {
      const storyElement = getStoryElement(ctx.id);
      if (storyElement) {
        const raw = extractRenderedHtml(storyElement);
        resolve(formatWithPrettier('html', raw));
      }
    });
    return formattedHtml;
  }
  return src;
};

async function formatWithPrettier(
  format: 'html' | 'typescript',
  unformatted: string,
) {
  const parserPlugins = {
    html: [HtmlPlugin] as Plugin[],
    typescript: [EstreePlugin, TypescriptPlugin] as Plugin[],
  };

  return prettierFormat(unformatted, {
    parser: format,
    plugins: parserPlugins[format],
  });
}