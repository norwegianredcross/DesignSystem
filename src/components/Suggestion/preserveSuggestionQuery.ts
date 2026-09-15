type PendingSelection = {
  input: HTMLInputElement;
  query: string;
  value: string;
};

/**
 * Preserve queries across u-combobox 2.1.4's temporary option-value writes.
 * https://github.com/u-elements/u-elements/pull/46
 * Remove once supported Digdir versions require the corrected dependency.
 */
export function preserveSuggestionQuery(root: HTMLElement): () => void {
  const view = root.ownerDocument.defaultView;
  let pending: PendingSelection | undefined;

  const isMultiple = () => {
    const multiple = root.getAttribute('data-multiple');
    return multiple !== null && multiple !== 'false';
  };

  const beforeInput = (event: Event) => {
    if (
      !view ||
      !isMultiple() ||
      !(event instanceof view.InputEvent) ||
      event.isTrusted ||
      event.isComposing ||
      event.inputType !== '' ||
      event.data === null
    ) {
      return;
    }

    const input = root.querySelector('input');
    if (!input || input.parentElement !== root || event.target !== input) return;

    const selection = { input, query: input.value, value: event.data };
    pending = selection;
    // Selection events are synchronous; don't reuse snapshots for later edits.
    queueMicrotask(() => {
      if (pending === selection) pending = undefined;
    });
  };

  const beforeSelect = (event: Event) => {
    if (
      !view ||
      !pending ||
      !isMultiple() ||
      event.target !== root ||
      !(event instanceof view.CustomEvent)
    ) {
      return;
    }

    const selection = pending;
    pending = undefined;
    const item: unknown = event.detail;
    if (
      !(item instanceof view.HTMLDataElement) ||
      item.value !== selection.value ||
      root.querySelector('input') !== selection.input ||
      selection.input.parentElement !== root ||
      selection.input.value !== selection.value
    ) {
      return;
    }

    // Restore before Digdir's callback; the value setter also updates its cache.
    if (selection.input.value !== selection.query) {
      selection.input.value = selection.query;
    }
  };

  root.addEventListener('beforeinput', beforeInput, true);
  root.addEventListener('comboboxbeforeselect', beforeSelect, true);
  return () => {
    pending = undefined;
    root.removeEventListener('beforeinput', beforeInput, true);
    root.removeEventListener('comboboxbeforeselect', beforeSelect, true);
  };
}
