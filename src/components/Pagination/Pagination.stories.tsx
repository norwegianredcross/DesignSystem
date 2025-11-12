import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { useState } from 'react'; 
import { Pagination, PaginationProps, usePagination } from './index'; 
import { Link } from '../Link';

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
      onChange: (_e, page) => setCurrentPage(page),
    });

    return (
      <Pagination {...args}>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button {...prevButtonProps} aria-label="Forrige side">
              Forrige
            </Pagination.Button>
          </Pagination.Item>

          {pages.map(({ page, itemKey, buttonProps }) => (
            <Pagination.Item key={itemKey}>
              {typeof page === 'number' ? (
                <Pagination.Button {...buttonProps} aria-label={`Side ${page}`}>
                  {page}
                </Pagination.Button>
              ) : (
                <span>...</span>
              )}
            </Pagination.Item>
          ))}

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
    const [currentPage] = useState(4);
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
              <Link href={generateHref(currentPage - 1)}>Forrige</Link>
            </Pagination.Button>
          </Pagination.Item>

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
                <span>...</span>
              )}
            </Pagination.Item>
          ))}

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

// --- Mobile (Truncated) Example ---
export const Mobile: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(6);
    const totalPages = 12;
    const { pages, prevButtonProps, nextButtonProps } = usePagination({
      currentPage,
      totalPages,
      onChange: (_e, page) => setCurrentPage(page),
    });

    // Show only current and ±1, keep ellipsis at ends
    const visibleSet = new Set([currentPage - 1, currentPage, currentPage + 1]);

    return (
      <div style={{ maxWidth: 320 }}>
        <Pagination {...args} aria-label="Sidenavigering (mobil)">
          <Pagination.List>
            <Pagination.Item>
              <Pagination.Button {...prevButtonProps} aria-label="Forrige side">
                Forrige
              </Pagination.Button>
            </Pagination.Item>

            {pages.map(({ page, itemKey, buttonProps }, idx) => {
              if (typeof page === 'number') {
                if (!visibleSet.has(page)) {
                  // Show first and last pages as anchors
                  if (page === 1 || page === totalPages) {
                    return (
                      <Pagination.Item key={itemKey}>
                        <Pagination.Button {...buttonProps} aria-label={`Side ${page}`}>
                          {page}
                        </Pagination.Button>
                      </Pagination.Item>
                    );
                  }
                  // Replace hidden ranges by sparse ellipsis
                  if (
                    (page < currentPage - 1 && idx === 1) ||
                    (page > currentPage + 1 && idx > pages.length - 3)
                  ) {
                    return (
                      <Pagination.Item key={itemKey}>
                        <span>…</span>
                      </Pagination.Item>
                    );
                  }
                  return null;
                }
                return (
                  <Pagination.Item key={itemKey}>
                    <Pagination.Button {...buttonProps} aria-label={`Side ${page}`}>
                      {page}
                    </Pagination.Button>
                  </Pagination.Item>
                );
              }
              // Condense generic ellipsis in mobile
              return null;
            })}

            <Pagination.Item>
              <Pagination.Button {...nextButtonProps} aria-label="Neste side">
                Neste
              </Pagination.Button>
            </Pagination.Item>
          </Pagination.List>
        </Pagination>
      </div>
    );
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Mobile (Truncated)',
};