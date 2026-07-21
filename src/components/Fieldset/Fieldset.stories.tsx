// src/components/Fieldset/Fieldset.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { Fieldset, FieldsetProps } from './index';
import { Checkbox, Radio, Textfield, Textarea, Label } from '@digdir/designsystemet-react';
import { Field } from '../Field';

const meta: Meta<typeof Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Fieldset groups related form controls, often with a legend.',
      },
    },
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
    children: {
      control: false,
      description:
        'Fieldset content, typically Fieldset.Legend, Fieldset.Description, and form controls.',
    },
    legend: { table: { disable: true } },
    description: { table: { disable: true } },
    error: { table: { disable: true } },
  } as ArgTypes<FieldsetProps>,
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

// --- Example with Textfields using Field component inside ---
export const WithTextfields: Story = {
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Skriv inn dine svar</Fieldset.Legend>
        <Fieldset.Description>
          Gi en kort beskrivelse i begge feltene
        </Fieldset.Description>

        <Field>
          <Label id="short-desc-label" htmlFor="short-desc">
            Kort beskrivelse
          </Label>
          <Textfield id="short-desc" aria-labelledby="short-desc-label" />
        </Field>

        <Field>
          <Label id="long-desc-label" htmlFor="long-desc">
            Lang beskrivelse
          </Label>
          <Textarea id="long-desc" aria-labelledby="long-desc-label" />
        </Field>
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'brand1',
  },
  name: 'With Textfields',
};

// --- Example with Checkboxes ---
export const WithCheckbox: Story = {
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Hvilke nyhetsbrev ønsker du?</Fieldset.Legend>
        <Fieldset.Description>Velg ett eller flere alternativer</Fieldset.Description>
        <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="checkbox" /> Produktnyheter
        </label>
        <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="checkbox" /> Blogginnlegg
        </label>
        <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="checkbox" /> Invitasjoner til webinar
        </label>
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'With Checkbox',
};

// --- Legend as Heading Example ---
export const LegendAsHeading: Story = {
  render: (args) => (
    <form>
      <Fieldset {...args}>
        {/* @ts-expect-error asChild not in Fieldset.Legend types but supported at runtime */}
        <Fieldset.Legend asChild>
          <h3 style={{ margin: 0 }}>Hvor bor du nå?</h3>
        </Fieldset.Legend>
        <Field>
          <Label id="address-line1-label" htmlFor="address-line1">Adresse</Label>
          <Textfield id="address-line1" aria-labelledby="address-line1-label" />
        </Field>
        <Field>
          <Label id="zip-label" htmlFor="zip">Postnummer</Label>
          <Textfield id="zip" aria-labelledby="zip-label" size={6} />
        </Field>
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
  },
  name: 'Legend as Heading',
};
// --- INTERACTION TESTS ---

/**
 * Tests fieldset semantics: the legend gives the fieldset its group role and
 * accessible name, and the description is included in the group's
 * aria-labelledby wiring (handled asynchronously by designsystemet-web).
 */
export const TestGroupSemantics: Story = {
  name: 'Test: Legend And Group Semantics',
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Kontaktinformasjon</Fieldset.Legend>
        <Fieldset.Description>
          Vi bruker dette til å kontakte deg om medlemskapet
        </Fieldset.Description>
        <Checkbox label="E-post" value="epost" name="kontakt-kanal" />
        <Checkbox label="Post" value="post" name="kontakt-kanal" />
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The fieldset is exposed as a group named by its legend
    const group = canvas.getByRole('group', { name: /Kontaktinformasjon/ });
    const legend = canvas.getByText('Kontaktinformasjon');
    const description = canvas.getByText(
      'Vi bruker dette til å kontakte deg om medlemskapet',
    );

    // designsystemet-web links legend + description via aria-labelledby
    await waitFor(() => {
      expect(legend).toHaveAttribute('id');
      expect(description).toHaveAttribute('id');
      const labelledBy = group.getAttribute('aria-labelledby') ?? '';
      expect(labelledBy).toContain(legend.id);
      expect(labelledBy).toContain(description.id);
    });

    // The checkboxes belong to the named group
    const checkbox = await waitFor(() =>
      canvas.getByRole('checkbox', { name: 'E-post' }),
    );
    expect(group).toContainElement(checkbox);
  },
};

/**
 * Tests that disabling the fieldset propagates to all child inputs
 * (native fieldset behavior): they are disabled, cannot be toggled,
 * and no change events fire.
 */
export const TestDisabledPropagates: Story = {
  name: 'Test: Disabled Propagates To Children',
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Samtykker</Fieldset.Legend>
        <Checkbox label="Nyhetsbrev" value="nyhetsbrev" name="samtykke" />
        <Checkbox label="SMS-varsler" value="sms" name="samtykke" />
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
    disabled: true,
    // Change events from child inputs bubble up to the fieldset
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const newsletter = await waitFor(() =>
      canvas.getByRole('checkbox', { name: 'Nyhetsbrev' }),
    );
    const sms = canvas.getByRole('checkbox', { name: 'SMS-varsler' });

    // Disabled state propagates from the fieldset to every child input
    expect(newsletter).toBeDisabled();
    expect(sms).toBeDisabled();

    // Clicking a disabled checkbox must be a no-op
    await userEvent.click(newsletter);
    expect(newsletter).not.toBeChecked();
    expect(args.onChange).not.toHaveBeenCalled();
  },
};

/**
 * Tests that checkboxes remain fully operable inside an (enabled) fieldset:
 * toggling by mouse, toggling by keyboard (Space), and unchecking again.
 */
export const TestCheckboxOperability: Story = {
  name: 'Test: Checkbox Operability Within Fieldset',
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Hvilke nyhetsbrev ønsker du?</Fieldset.Legend>
        <Fieldset.Description>Velg ett eller flere alternativer</Fieldset.Description>
        <Checkbox label="Produktnyheter" value="produkt" name="nyhetsbrev" />
        <Checkbox label="Blogginnlegg" value="blogg" name="nyhetsbrev" />
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const product = await waitFor(() =>
      canvas.getByRole('checkbox', { name: 'Produktnyheter' }),
    );
    const blog = canvas.getByRole('checkbox', { name: 'Blogginnlegg' });

    // Mouse: toggle on
    await userEvent.click(product);
    expect(product).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(1);

    // Keyboard: focus + Space toggles the other checkbox
    blog.focus();
    await userEvent.keyboard(' ');
    expect(blog).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(2);

    // Selections are independent; unchecking works too
    await userEvent.click(product);
    expect(product).not.toBeChecked();
    expect(blog).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(3);
  },
};

/**
 * Tests radio buttons grouped by a fieldset: single-selection semantics,
 * and native arrow-key navigation between radios in the same group.
 */
export const TestRadioGroup: Story = {
  name: 'Test: Radio Group Within Fieldset',
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Foretrukket kontaktmåte</Fieldset.Legend>
        <Radio label="E-post" value="epost" name="kontaktmaate" />
        <Radio label="Telefon" value="telefon" name="kontaktmaate" />
        <Radio label="SMS" value="sms" name="kontaktmaate" />
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const email = await waitFor(() =>
      canvas.getByRole('radio', { name: 'E-post' }),
    );
    const phone = canvas.getByRole('radio', { name: 'Telefon' });
    const sms = canvas.getByRole('radio', { name: 'SMS' });

    // Selecting one radio...
    await userEvent.click(phone);
    expect(phone).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(1);

    // ...and then another deselects the first (single-selection semantics)
    await userEvent.click(sms);
    expect(sms).toBeChecked();
    expect(phone).not.toBeChecked();

    // Arrow keys move selection within the radio group
    await userEvent.keyboard('{ArrowUp}');
    expect(phone).toBeChecked();
    expect(phone).toHaveFocus();
    expect(sms).not.toBeChecked();
    expect(email).not.toBeChecked();
  },
};
