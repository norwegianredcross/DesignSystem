import type { Meta, StoryObj } from '@storybook/react';
import { ErrorSummary } from '@digdir/designsystemet-react';

type ErrorSummaryProps = React.ComponentProps<typeof ErrorSummary>;

const meta: Meta<ErrorSummaryProps> = {
  title: 'Components/ErrorSummary',
  component: ErrorSummary,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <ErrorSummary.Heading>There are 2 errors in the form</ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#error1">First name is required</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#error2">Email is invalid</ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<ErrorSummaryProps>;

export const Default: Story = {};

export const WithMultipleErrors: Story = {
  args: {
    children: (
      <>
        <ErrorSummary.Heading>There are 3 errors in the form</ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#error1">First name is required</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#error2">Email is invalid</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#error3">Password must be at least 8 characters</ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </>
    ),
  },
};

export const WithoutLinks: Story = {
  args: {
    children: (
      <>
        <ErrorSummary.Heading>There are 2 errors in the form</ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>First name is required</ErrorSummary.Item>
          <ErrorSummary.Item>Email is invalid</ErrorSummary.Item>
        </ErrorSummary.List>
      </>
    ),
  },
};
