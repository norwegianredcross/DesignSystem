// src/components/Dialog/Dialog.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { useRef } from 'react';
import { Dialog, DialogProps } from './index';
import { Button } from '../Button';
import { Heading, Paragraph, Textfield } from '@digdir/designsystemet-react';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'neutral',
    },
    closeButton: {
      control: 'text', 
      description:
        'Screen reader label of close button. Set false to hide the close button.',
      defaultValue: 'Lukk dialogvindu',
    },
    closedby: {
      control: 'select',
      options: ['none', 'closerequest', 'any'],
      description:
        'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',
      defaultValue: 'closerequest',
    },
    modal: {
      control: 'boolean',
      description: 'Toggle modal and non-modal dialog.',
      defaultValue: true,
    },
    open: {
      control: 'boolean',
      description:
        'Controls the open/closed state (primarily for programmatic control).',
      table: { disable: true },
    },
    onClose: {
      action: 'closed',
      description: 'Callback that is called when the dialog is closed.',
      table: { disable: true },
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    children: {
      control: false,
      description: 'Dialog content, often using Dialog.Block',
    },
  } as ArgTypes<DialogProps>,
};

export default meta;

type Story = StoryObj<typeof Dialog>;

// --- Basic Example with Trigger ---
export const DefaultTrigger: Story = {
  render: (args) => (
    <Dialog.TriggerContext>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog {...args}>
        <Dialog.Block>
          <Heading data-size="xs">Dialog Header</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Paragraph>This is the main content of the dialog.</Paragraph>
        </Dialog.Block>
        <Dialog.Block>
          <Button variant="secondary" type="button">
            Close
          </Button>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>
  ),
  args: {
    modal: true,
    closedby: 'closerequest',
    closeButton: 'Lukk dialogvindu',
    'data-color': 'neutral',
  },
  name: 'Basic (Trigger)',
};

// --- Programmatic Control with Ref ---
export const ProgrammaticRef: Story = {
  render: (args) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    return (
      <>
        <Button onClick={() => dialogRef.current?.showModal()}>
          Open Dialog with ref
        </Button>
        <Dialog ref={dialogRef} {...args}>
          <Dialog.Block>
            <Heading data-size="xs">Programmatic Dialog</Heading>
          </Dialog.Block>
          <Dialog.Block>
            <Paragraph>
              This dialog was opened using a ref and showModal().
            </Paragraph>
            <Paragraph>
              Use the Escape key or the close button (if enabled) to close.
            </Paragraph>
          </Dialog.Block>
          <Dialog.Block>
            <Button
              variant="secondary"
              type="button"
              onClick={() => dialogRef.current?.close()}
            >
              Close Programmatically
            </Button>
          </Dialog.Block>
        </Dialog>
      </>
    );
  },
  args: {
    modal: true,
    closeButton: 'Lukk dialogvindu',
    
  },
  name: 'Programmatic (Ref)',
};

// --- Close on Backdrop Click ---
export const CloseOnBackdrop: Story = {
  render: (args) => (
    <Dialog.TriggerContext>
      <Dialog.Trigger>Open (Close on Backdrop)</Dialog.Trigger>
      <Dialog {...args}>
        <Dialog.Block>
          <Heading data-size="xs">Backdrop Close</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Paragraph>Click outside this dialog to close it.</Paragraph>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>
  ),
  args: {
    modal: true,
    closedby: 'any',
    closeButton: 'Lukk dialogvindu',
  },
  name: 'Close on Backdrop',
};

// --- Non-Modal Example ---
export const NonModal: Story = {
  render: (args) => (
    <Dialog.TriggerContext>
      <Dialog.Trigger>Open Non-Modal</Dialog.Trigger>
      <Dialog {...args}>
        <Dialog.Block>
          <Heading data-size="xs">Non-Modal Dialog</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Paragraph>
            You can interact with the page behind this dialog.
          </Paragraph>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>
  ),
  args: {
    modal: false,
    closeButton: 'Lukk dialogvindu',
  },
  name: 'Non-Modal',
};

// --- Example with Form ---
export const WithForm: Story = {
  render: (args) => (
    <Dialog.TriggerContext>
      <Dialog.Trigger>Open Form Dialog</Dialog.Trigger>
      <Dialog {...args}>
        <form
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
        >
          <Dialog.Block>
            <Heading data-size="xs">Enter Details</Heading>
          </Dialog.Block>
          <Dialog.Block>
            <Textfield
              label="Your Name"
              name="your-name"
              autoFocus 
            />
          </Dialog.Block>
          <Dialog.Block>
            <div style={{ display: 'flex', gap: 'var(--ds-spacing-3)' }}>
              <Button variant="secondary" type="reset"> 
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Dialog.Block>
        </form>
      </Dialog>
    </Dialog.TriggerContext>
  ),
  args: {
    modal: true,
    closeButton: 'Lukk dialogvindu',
  },
  name: 'With Form',
};

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  render: () => (
    <Dialog.TriggerContext>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog modal={true} closeButton="Lukk dialogvindu">
        <Dialog.Block>
          <Heading data-size="xs">Test Dialog</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Paragraph>Dialog content for testing.</Paragraph>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click trigger to open dialog
    const trigger = canvas.getByRole('button', { name: /open dialog/i });
    await userEvent.click(trigger);

    // Dialog should be visible
    const body = within(document.body);
    await waitFor(() => {
      expect(body.getByRole('dialog')).toBeInTheDocument();
    });

    // Close button should be present and work
    const dialog = body.getByRole('dialog');
    const dialogCanvas = within(dialog);
    const closeButton = dialogCanvas.getByRole('button', { name: /lukk/i });
    expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);

    // Dialog should close
    await waitFor(() => {
      expect(dialog).not.toHaveAttribute('open');
    });
  },
};

export const TestKeyboardDismissAndFocusReturn: Story = {
  name: 'Test: Keyboard Close And Focus Return',
  render: (args) => (
    <Dialog.TriggerContext>
      <Dialog.Trigger>Åpne registrering</Dialog.Trigger>
      <Dialog {...args} modal closeButton="Lukk registrering">
        <Dialog.Block>
          <Heading data-size="xs">Registrer navn</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Textfield label="Navn" autoFocus />
          <Button type="button">Lagre</Button>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>
  ),
  args: {
    onClose: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: 'Åpne registrering' });

    trigger.focus();
    await userEvent.keyboard('{Enter}');

    const dialog = await within(document.body).findByRole('dialog');
    expect(within(dialog).getByRole('textbox', { name: 'Navn' })).toBeInTheDocument();
    await waitFor(() => {
      expect(dialog).toHaveAttribute('open');
      expect(dialog).toContainElement(document.activeElement as HTMLElement);
    });
    const closeButton = within(dialog).getByRole('button', {
      name: 'Lukk registrering',
    });
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard('{Enter}');

    await waitFor(() => {
      expect(dialog).not.toHaveAttribute('open');
      expect(args.onClose).toHaveBeenCalledTimes(1);
      expect(trigger).toHaveFocus();
    });
  },
};

export const TestModalContainsTabFocus: Story = {
  name: 'Test: Modal Contains Tab Focus',
  render: () => (
    <>
      <Button type="button">Før dialogen</Button>
      <Dialog.TriggerContext>
        <Dialog.Trigger>Åpne fokusdialog</Dialog.Trigger>
        <Dialog modal closeButton="Lukk fokusdialog">
          <Dialog.Block>
            <Textfield label="Fornavn" autoFocus />
            <Button type="button">Bekreft</Button>
          </Dialog.Block>
        </Dialog>
      </Dialog.TriggerContext>
      <Button type="button">Etter dialogen</Button>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Åpne fokusdialog' }),
    );

    const dialog = await within(document.body).findByRole('dialog');
    await waitFor(() =>
      expect(dialog).toContainElement(document.activeElement as HTMLElement),
    );

    for (let step = 0; step < 5; step += 1) {
      await userEvent.tab();
      expect(dialog).toContainElement(document.activeElement as HTMLElement);
    }

    expect(canvas.getByRole('button', { name: 'Etter dialogen' })).not.toHaveFocus();
  },
};
