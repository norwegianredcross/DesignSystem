import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '@digdir/designsystemet-react';

type BreadcrumbsProps = React.ComponentProps<typeof Breadcrumbs>;

const meta: Meta<BreadcrumbsProps> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Breadcrumbs aria-label="Du er her:">
          <Breadcrumbs.Link aria-label="Tilbake til Nivå 3" href="#">
            Nivå 3
          </Breadcrumbs.Link>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Nivå 1</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Nivå 2</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Nivå 3</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Nivå 4</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsProps>;

export const Default: Story = {};

export const Preview: Story = {};

export const ListOnly: Story = {
  args: {
    children: (
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Nivå 1</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Nivå 2</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Nivå 3</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Nivå 4</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    ),
  },
};

export const BackOnly: Story = {
  args: {
    children: (
      <Breadcrumbs.Link aria-label="Tilbake til Nivå 3" href="#">
        Nivå 3
      </Breadcrumbs.Link>
    ),
  },
};

export const LongItems: Story = {
  args: {
    children: (
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">
            Dette er et veldig langt element som går over flere linjer
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">
            Dette er et annet veldig langt element som går over flere linjer
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    ),
  },
};

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // Use Storybook's mobile viewport preset
    },
  },
};
