import * as React from "react";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;

  /**
   * called when a page changes
   */
  onPageChange?: (page: number) => void;

  /**
   * how many pages to show around current page
   */
  siblingCount?: number;

  /**
   * optional custom labels
   */
  previousLabel?: React.ReactNode;
  nextLabel?: React.ReactNode;

  /**
   * optional page renderer
   */
  renderPage?: (
    page: number,
    isActive: boolean
  ) => React.ReactNode;

  className?: string;
  style?: React.CSSProperties;

  listClassName?: string;
  listStyle?: React.CSSProperties;

  itemClassName?: string;
  itemStyle?: React.CSSProperties;

  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;

  activeClassName?: string;
  activeStyle?: React.CSSProperties;

  disabledClassName?: string;
  disabledStyle?: React.CSSProperties;
};

function range(start: number, end: number) {
  return Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );
}

function buildPages(
  currentPage: number,
  totalPages: number,
  siblingCount: number
) {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= totalPages) {
    return range(1, totalPages);
  }

  const leftSiblingIndex = Math.max(
    currentPage - siblingCount,
    1
  );

  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPages
  );

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis =
    rightSiblingIndex < totalPages - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = range(
      1,
      3 + siblingCount * 2
    );

    return [...leftRange, "...", totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = range(
      totalPages - (3 + siblingCount * 2) + 1,
      totalPages
    );

    return [firstPageIndex, "...", ...rightRange];
  }

  const middleRange = range(
    leftSiblingIndex,
    rightSiblingIndex
  );

  return [
    firstPageIndex,
    "...",
    ...middleRange,
    "...",
    lastPageIndex,
  ];
}

export function Pagination({
  currentPage,
  totalPages,

  onPageChange,

  siblingCount = 1,

  previousLabel = "Previous",
  nextLabel = "Next",

  renderPage,

  className,
  style,

  listClassName,
  listStyle,

  itemClassName,
  itemStyle,

  buttonClassName,
  buttonStyle,

  activeClassName,
  activeStyle,

  disabledClassName,
  disabledStyle,
}: PaginationProps) {
  const pages = buildPages(
    currentPage,
    totalPages,
    siblingCount
  );

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPages) return;
    if (page === currentPage) return;

    onPageChange?.(page);
  }

  const isPreviousDisabled = currentPage <= 1;
  const isNextDisabled =
    currentPage >= totalPages;

  return (
    <nav
      aria-label="Pagination"
      className={className}
      style={{
        width: "100%",
        ...style,
      }}
    >
      <ul
        className={listClassName}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",

          padding: 0,
          margin: 0,

          listStyle: "none",

          ...listStyle,
        }}
      >
        {/* PREVIOUS */}
        <li
          className={itemClassName}
          style={itemStyle}
        >
          <button
            type="button"
            aria-label="Go to previous page"
            disabled={isPreviousDisabled}
            onClick={() =>
              handlePageChange(currentPage - 1)
            }
            className={[
              buttonClassName,
              isPreviousDisabled
                ? disabledClassName
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              cursor: isPreviousDisabled
                ? "not-allowed"
                : "pointer",

              opacity: isPreviousDisabled
                ? 0.5
                : 1,

              ...buttonStyle,

              ...(isPreviousDisabled
                ? disabledStyle
                : {}),
            }}
          >
            {previousLabel}
          </button>
        </li>

        {/* PAGES */}
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <li
                key={`ellipsis-${index}`}
                aria-hidden="true"
                className={itemClassName}
                style={itemStyle}
              >
                <span>…</span>
              </li>
            );
          }

          const pageNumber = page as number;
          const isActive =
            pageNumber === currentPage;

          return (
            <li
              key={pageNumber}
              className={itemClassName}
              style={itemStyle}
            >
              <button
                type="button"
                aria-label={`Go to page ${pageNumber}`}
                aria-current={
                  isActive ? "page" : undefined
                }
                onClick={() =>
                  handlePageChange(pageNumber)
                }
                className={[
                  buttonClassName,
                  isActive
                    ? activeClassName
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  cursor: isActive
                    ? "default"
                    : "pointer",

                  ...buttonStyle,

                  ...(isActive
                    ? activeStyle
                    : {}),
                }}
              >
                {renderPage
                  ? renderPage(
                      pageNumber,
                      isActive
                    )
                  : pageNumber}
              </button>
            </li>
          );
        })}

        {/* NEXT */}
        <li
          className={itemClassName}
          style={itemStyle}
        >
          <button
            type="button"
            aria-label="Go to next page"
            disabled={isNextDisabled}
            onClick={() =>
              handlePageChange(currentPage + 1)
            }
            className={[
              buttonClassName,
              isNextDisabled
                ? disabledClassName
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              cursor: isNextDisabled
                ? "not-allowed"
                : "pointer",

              opacity: isNextDisabled
                ? 0.5
                : 1,

              ...buttonStyle,

              ...(isNextDisabled
                ? disabledStyle
                : {}),
            }}
          >
            {nextLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
}