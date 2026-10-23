import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { EXPERIMENTAL_FileUpload } from './index';
import { UploadExample } from './UploadExample';
import uploadExampleSource from './UploadExample.tsx?raw';

// Show the actual example implementation with public package imports. The
// Storybook-only layout class is omitted so copied code has no local dependencies.
const publicExampleSource = uploadExampleSource
  .replace(/from '(?:\.\.\/[^']+|\.\/index)'/g, "from '@norwegianredcross/designsystem'")
  .replace(/^import styles from .*;\n/m, '')
  .replace(' className={styles.example}', '');

function sourceFor(usage = '<UploadExample />') {
  return { type: 'code' as const, code: `'use client';\n\n${publicExampleSource}\n${usage}` };
}

const meta = {
  title: 'Experimental/FileUpload',
  component: EXPERIMENTAL_FileUpload,
  tags: ['autodocs'],
  argTypes: {
    'data-size': {
      description: 'Størrelse fra Digdir.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    'data-color': {
      description: 'Fargetema fra designsystemet.',
      control: 'select',
      options: ['primary-color-red', 'secondary-color-rust', 'neutral'],
    },
    children: { description: 'Et merket, vanlig filfelt og synlig innhold.', control: false },
  },
  parameters: {
    docs: {
      source: sourceFor(),
      description: {
        component:
          'Eksperimentell filvelger med Digdirs Field-oppsett. Eksemplene viser filvalg, ikke opplasting eller egen filnavnvisning. Konsumenten må tilby mottak og validering på serveren.',
      },
    },
  },
  render: (args) => <UploadExample uploadProps={args} />,
} satisfies Meta<typeof EXPERIMENTAL_FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// Populate the browser's real FileList. Mocked upload helpers replace it and
// prevent native form.reset() from exercising the browser's reset behavior.
function selectFiles(input: HTMLInputElement, names: string[]) {
  const transfer = new DataTransfer();
  for (const name of names) transfer.items.add(new File([name], name, { type: 'application/pdf' }));
  input.files = transfer.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

export const Default: Story = {};

export const Multiple: Story = {
  parameters: { docs: { source: sourceFor('<UploadExample multiple />') } },
  render: (args) => <UploadExample uploadProps={args} multiple />,
};

export const Disabled: Story = {
  parameters: { docs: { source: sourceFor('<UploadExample disabled />') } },
  render: (args) => <UploadExample uploadProps={args} disabled />,
};

export const Error: Story = {
  parameters: {
    docs: {
      source: sourceFor('<UploadExample error="Filen er for stor. Velg en fil under 5 MB." />'),
    },
  },
  render: (args) => (
    <UploadExample uploadProps={args} error="Filen er for stor. Velg en fil under 5 MB." />
  ),
};

export const TestLabelAndKeyboard: Story = {
  name: 'Test: Label And Keyboard',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Vedlegg');
    await expect(input).toHaveAccessibleDescription(
      'Velg eller slipp en fil her PDF, maks 5 MB per fil.'
    );
    input.focus();
    await expect(input).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'Tilbakestill' })).toHaveFocus();
  },
};

export const TestMultipleFiles: Story = {
  name: 'Test: Multiple Files And Form Submission',
  parameters: Multiple.parameters,
  render: (args) => <UploadExample uploadProps={args} multiple />,
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByLabelText<HTMLInputElement>('Vedlegg');
    await expect(input).toHaveAttribute('multiple');
    selectFiles(input, ['første.pdf', 'andre.pdf']);
    const submitted = new FormData(input.form!).getAll('attachments');
    await expect(submitted.map((file) => (file instanceof File ? file.name : file))).toEqual([
      'første.pdf',
      'andre.pdf',
    ]);
    await expect(input).toHaveAccessibleDescription(
      'Velg eller slipp filer her PDF, maks 5 MB per fil.'
    );
  },
};
export const TestDisabledState: Story = {
  name: 'Test: Disabled State',
  parameters: Disabled.parameters,
  render: (args) => <UploadExample uploadProps={args} disabled />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>('Vedlegg');
    await expect(input).toBeDisabled();
    input.focus();
    await expect(input).not.toHaveFocus();
    await expect(new FormData(input.form!).has('attachments')).toBe(false);
    await expect(canvas.getByRole('button', { name: 'Tilbakestill' })).toBeDisabled();
  },
};
export const TestErrorAssociation: Story = {
  name: 'Test: Error Association',
  parameters: Error.parameters,
  render: (args) => (
    <UploadExample uploadProps={args} error="Filen er for stor. Velg en fil under 5 MB." />
  ),
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByLabelText('Vedlegg');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription(
      'Filen er for stor. Velg en fil under 5 MB. Velg eller slipp en fil her PDF, maks 5 MB per fil.'
    );
  },
};

export const TestFileSelectionAndReset: Story = {
  name: 'Test: File Selection And Reset',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>('Vedlegg');
    await step('Select a file for native multipart submission', async () => {
      await expect(input.form).toHaveAttribute('method', 'post');
      await expect(input.form).toHaveAttribute('enctype', 'multipart/form-data');
      selectFiles(input, ['vedlegg.pdf']);
      await expect(input.files).toHaveLength(1);
      await expect(new FormData(input.form!).get('attachments')).toMatchObject({
        name: 'vedlegg.pdf',
        type: 'application/pdf',
      });
    });
    await step('Reset clears the actual native file selection', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Tilbakestill' }));
      await expect(input.files).toHaveLength(0);
      await expect(input).toHaveValue('');
      await expect(new FormData(input.form!).get('attachments')).toMatchObject({
        name: '',
        size: 0,
      });
    });
  },
};

export const TestIndependentFields: Story = {
  name: 'Test: Independent Fields And Reset',
  parameters: { docs: { source: sourceFor('<><UploadExample /><UploadExample /></>') } },
  render: (args) => (
    <>
      <UploadExample uploadProps={args} />
      <UploadExample uploadProps={args} />
    </>
  ),
  play: async ({ canvasElement }) => {
    const inputs = within(canvasElement).getAllByLabelText<HTMLInputElement>('Vedlegg');
    const [first, second] = inputs;
    await expect(inputs).toHaveLength(2);
    if (!first || !second)
      throw new globalThis.Error('Expected two independently labelled file inputs');
    await expect(first.id).not.toBe(second.id);
    selectFiles(first, ['første.pdf']);
    selectFiles(second, ['andre.pdf']);
    await userEvent.click(within(first.form!).getByRole('button', { name: 'Tilbakestill' }));
    await expect(first.files).toHaveLength(0);
    await expect(second.files).toHaveLength(1);
    await expect(new FormData(second.form!).get('attachments')).toMatchObject({
      name: 'andre.pdf',
    });
  },
};
