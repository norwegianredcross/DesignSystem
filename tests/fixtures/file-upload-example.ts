import { createElement, useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { UploadExample } from '../../src/components/FileUpload/UploadExample';

function Example({ multiple }: { multiple: boolean }) {
  useEffect(() => {
    document.documentElement.dataset.hydrated = 'true';
  }, []);
  return createElement(UploadExample, { multiple });
}

export function renderUploadExample(multiple = false) {
  return createElement(Example, { multiple });
}

if (!import.meta.env.SSR) {
  hydrateRoot(
    document.getElementById('example')!,
    renderUploadExample(location.search.includes('multiple'))
  );
}
