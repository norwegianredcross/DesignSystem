import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor } from 'storybook/test';
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

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const { pages, prevButtonProps, nextButtonProps } = usePagination({
      currentPage,
      totalPages,
      onChange: (_e, page) => setCurrentPage(page),
    });

    return (
      <Pagination aria-label="Sidenavigering">
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Page 1 should be current
    const page1 = canvas.getByRole('button', { name: /side 1/i });
    expect(page1).toHaveAttribute('aria-current', 'true');

    // Previous button is aria-hidden on first page
    const prevButton = canvasElement.querySelector('button[aria-label="Forrige side"]') as HTMLButtonElement;
    expect(prevButton).toHaveAttribute('aria-hidden', 'true');

    // Click next
    const nextButton = canvas.getByRole('button', { name: /neste/i });
    await userEvent.click(nextButton);

    // Page 2 should now be current
    await waitFor(() => {
      const page2 = canvas.getByRole('button', { name: /side 2/i });
      expect(page2).toHaveAttribute('aria-current', 'true');
    });

    // Previous should now be visible (not aria-hidden)
    expect(prevButton).toHaveAttribute('aria-hidden', 'false');

    // Click a specific page
    const page4 = canvas.getByRole('button', { name: /side 4/i });
    await userEvent.click(page4);

    await waitFor(() => {
      expect(page4).toHaveAttribute('aria-current', 'true');
    });
  },
};

export const TestBoundaryNavigation: Story = {
  name: 'Test: Boundary Navigation',
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { pages, prevButtonProps, nextButtonProps } = usePagination({
      currentPage,
      totalPages: 5,
      onChange: (_event, page) => setCurrentPage(page),
    });

    return (
      <Pagination aria-label="Resultatsider">
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
                <span aria-hidden>…</span>
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('navigation', { name: 'Resultatsider' })).toBeInTheDocument();

    const previous = canvasElement.querySelector(
      'button[aria-label="Forrige side"]',
    ) as HTMLButtonElement;
    const next = canvas.getByRole('button', { name: 'Neste side' });
    expect(previous).toHaveAttribute('aria-hidden', 'true');

    await userEvent.click(canvas.getByRole('button', { name: 'Side 5' }));
    await waitFor(() => {
      expect(canvas.getByRole('button', { name: 'Side 5' })).toHaveAttribute(
        'aria-current',
        'true',
      );
      expect(next).toHaveAttribute('aria-hidden', 'true');
    });

    const visiblePrevious = canvas.getByRole('button', { name: 'Forrige side' });
    await userEvent.click(visiblePrevious);
    await waitFor(() =>
      expect(canvas.getByRole('button', { name: 'Side 4' })).toHaveAttribute(
        'aria-current',
        'true',
      ),
    );
    expect(next).toHaveAttribute('aria-hidden', 'false');
  },
};

export const TestLinkRenderingContract: Story = {
  name: 'Test: Link Rendering Contract',
  render: () => (
    <Pagination aria-label="Lenkebaserte sider">
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Button asChild aria-current="page">
            <Link href="#side-2">Side 2</Link>
          </Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button asChild>
            <Link href="#side-3">Side 3</Link>
          </Pagination.Button>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const current = canvas.getByRole('link', { name: 'Side 2' });
    const next = canvas.getByRole('link', { name: 'Side 3' });

    expect(current).toHaveAttribute('href', '#side-2');
    expect(current).toHaveAttribute('aria-current', 'page');
    expect(next).toHaveAttribute('href', '#side-3');
    expect(next).not.toHaveAttribute('aria-current');
  },
};
