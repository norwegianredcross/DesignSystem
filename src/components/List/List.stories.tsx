import type { Meta, StoryObj} from '@storybook/react';
import { List } from './index'; 
import { Heading, Link } from '@digdir/designsystemet-react';

const meta: Meta = {
  title: 'Components/List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Lists structure content sequentially (Ordered) or non-sequentially (Unordered). Use List.Ordered, List.Unordered, and List.Item.',
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
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
  },
};

export default meta;

export const Unordered: StoryObj<typeof List.Unordered> = {
  render: (args) => (
    <List.Unordered {...args}>
      <List.Item>
        et gjennomsnittlig antall ansatte som tilsvarer ti årsverk eller mer
      </List.Item>
      <List.Item>balansesum som er 27 millioner kroner eller mer</List.Item>
      <List.Item>
        driftsinntekter for sin samlede virksomhet på 7 millioner kroner eller mer
      </List.Item>
    </List.Unordered>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Unordered (ul)',
};

// --- Ordered List Example ---
export const Ordered: StoryObj<typeof List.Ordered> = {
  render: (args) => (
    <List.Ordered {...args}>
      <List.Item>
        Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en
        finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer.
        Papirbiter i maten er ikke noe særlig.
      </List.Item>
      <List.Item>
        Ha salt og pepper på filetene og eventuelt annet krydder for ekstra
        smak. Hvitløkpepper, paprika eller provence kan gi en god smak!
      </List.Item>
      <List.Item>
        Stek filetene på sterk varme i to minutter på hver side. Sett deretter
        på lokk og stek videre på svak varme i syv minutter på hver side.
      </List.Item>
    </List.Ordered>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Ordered (ol)',
};

// --- List with Heading ---
export const WithHeading: StoryObj<typeof List.Unordered> = {
  render: (args) => (
    <div>
      <Heading level={3} data-size={args['data-size'] === 'sm' ? 'xs' : args['data-size'] === 'lg' ? 'sm' : 'xs'}>
        Navigasjon
      </Heading>
      <List.Unordered {...args}>
        <List.Item>Grunnleggende</List.Item>
        <List.Item>God praksis</List.Item>
        <List.Item>Mønstre</List.Item>
      </List.Unordered>
    </div>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'With Heading',
};

// --- Nested Lists ---
export const Nested: StoryObj<typeof List.Unordered> = {
  render: (args) => (
    <List.Unordered {...args}>
      <List.Item>
        List Item 1
        <List.Unordered>
          <List.Item>List Item 1.1</List.Item>
          <List.Item>List Item 1.2</List.Item>
        </List.Unordered>
      </List.Item>
      <List.Item>List Item 2</List.Item>
      <List.Item>
        List Item 3
        <List.Ordered> 
          <List.Item>List Item 3.1</List.Item>
          <List.Item>List Item 3.2</List.Item>
        </List.Ordered>
      </List.Item>
    </List.Unordered>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Nested Lists',
};

// --- List of Links ---
export const ListOfLinks: StoryObj<typeof List.Unordered> = {
  render: (args) => (
    <List.Unordered {...args} style={{ listStyle: 'none', paddingLeft: 0 }}>
      <List.Item>
        <Link href="#">Grunnleggende</Link>
      </List.Item>
      <List.Item>
        <Link href="#">God praksis</Link>
      </List.Item>
      <List.Item>
        <Link href="#">Mønstre</Link>
      </List.Item>
    </List.Unordered>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'accent',
  },
  name: 'List of Links',
};
