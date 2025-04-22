// src/components/DatePicker/DatePicker.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './index';
import { action } from '@storybook/addon-actions';
import { subDays } from 'date-fns';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'], // Optional: Generates documentation
  parameters: {
    // Optional: Add any parameters specific to this component's stories
  },
  argTypes: {
    // Optional: Configure how controls appear in Storybook
    initialDate: {
      control: { type: 'date' }, // Storybook date control
      description: 'Initial month to display in the picker.',
    },
    selectedDate: {
      control: { type: 'date' },
      description: 'The currently selected date.',
    },
    onDateSelect: { action: 'dateSelected' }, // Show action in the Actions tab
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Default state story
export const Default: Story = {
  args: {
    initialDate: new Date(), // Default to today's month
    selectedDate: null, // No date selected initially
    onDateSelect: action('dateSelected'), // Log date selections
  },
};

// Story with a pre-selected date
export const WithSelectedDate: Story = {
  args: {
    ...Default.args, // Inherit default args
    selectedDate: new Date(), // Select today's date
  },
};

// Story starting in a previous month
export const StartingInPreviousMonth: Story = {
    args: {
        ...Default.args,
        initialDate: subDays(new Date(), 40), // Show a month in the past
    }
}

// Story with a specific date selected in a different month than the initial
export const SelectedDateInDifferentMonth: Story = {
    args: {
        initialDate: new Date(), // Start in the current month
        selectedDate: subDays(new Date().setMonth(new Date().getMonth() + 2), 5), // Select a date two months ahead
        onDateSelect: action('dateSelected'),
    }
}

// You can add more stories to showcase different scenarios
// For example:
// export const DisabledPreviousMonth: Story = {
//   args: {
//     ...Default.args,
//     initialDate: new Date(), // The previous month button should be disabled
//   },
// };
