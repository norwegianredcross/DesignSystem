import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React, { useState } from 'react'; // Import useState for controlled example
import { Pagination, PaginationProps, usePagination } from './index'; // Import component and hook
import { Link } from '../Link'; // Assuming you have a Link component for the WithLinks story

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Pagination provides navigation between pages of information.',
      },
    },
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
    'aria-label': {
      control: 'text',
      description: 'Sets the screen reader label for the Pagination area',
      defaultValue: 'Sidenavigering',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    children: { control: false },
    currentPage: { table: { disable: true } },
    totalPages: { table: { disable: true } },
    onChange: { table: { disable: true } },
  } as ArgTypes<PaginationProps>,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

// --- Default Controlled Example ---
export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(4);
    const totalPages = 10;
    const { pages, prevButtonProps, nextButtonProps } = usePagination({
      currentPage,
      totalPages,
      onChange: (event, page) => setCurrentPage(page),
    });

    return (
      <Pagination {...args}>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button {...prevButtonProps} aria-label="Forrige side">
              Forrige
            </Pagination.Button>
          </Pagination.Item>

          {/* FIX: Check typeof page instead of type property */}
          {pages.map(({ page, itemKey, buttonProps }) => (
            <Pagination.Item key={itemKey}>
              {typeof page === 'number' ? (
                <Pagination.Button {...buttonProps} aria-label={`Side ${page}`}>
                  {page}
                </Pagination.Button>
              ) : (
                <span>...</span> // Render ellipsis if not a number
              )}
            </Pagination.Item>
          ))}
          {/* END FIX */}

          <Pagination.Item>
            <Pagination.Button {...nextButtonProps} aria-label="Neste side">
              Neste
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>
    );
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
    'aria-label': 'Sidenavigering',
  },
};

// --- Example Rendering Links ---
export const WithLinks: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(4);
    const totalPages = 10;
    const { pages, prevButtonProps, nextButtonProps } = usePagination({
      currentPage,
      totalPages,
    });

    const generateHref = (page: number | string | undefined) => {
      if (typeof page === 'number') return `#/page-${page}`;
      return '#';
    };

    return (
      <Pagination {...args}>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button
              {...prevButtonProps}
              asChild
              aria-label="Forrige side"
            >
              {/* Use your Link component or a simple anchor */}
              <Link href={generateHref(currentPage - 1)}>Forrige</Link>
            </Pagination.Button>
          </Pagination.Item>

          {/* FIX: Check typeof page instead of type property */}
          {pages.map(({ page, itemKey, buttonProps }) => (
            <Pagination.Item key={itemKey}>
              {typeof page === 'number' ? (
                <Pagination.Button
                  {...buttonProps}
                  asChild
                  aria-label={`Side ${page}`}
                >
                  <Link href={generateHref(page)}>{page}</Link>
                </Pagination.Button>
              ) : (
                <span>...</span> // Render ellipsis if not a number
              )}
            </Pagination.Item>
          ))}
          {/* END FIX */}

          <Pagination.Item>
            <Pagination.Button
              {...nextButtonProps}
              asChild
              aria-label="Neste side"
            >
              <Link href={generateHref(currentPage + 1)}>Neste</Link>
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>
    );
  },
  args: {
    'data-size': 'md',
    'data-color': 'accent',
    'aria-label': 'Sidenavigering (lenker)',
  },
  name: 'With Links (asChild)',
};
