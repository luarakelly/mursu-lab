import { useState, useMemo } from "react";

/**
 * Handles pagination logic for any array of items.
 *
 * @example
 * const { paginated, page, totalPages, goNext, goPrevious, goTo } =
 *   usePagination({ items: posts, perPage: 4 });
 */
export function usePagination<T>({
  items,
  perPage = 10,
}: {
  items: T[];
  perPage?: number;
}) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));

  // clamp page if items shrink (e.g. after filtering)
  const safePage = Math.min(page, totalPages);

  const paginated = useMemo(
    () => items.slice((safePage - 1) * perPage, safePage * perPage),
    [items, safePage, perPage]
  );

  function goTo(n: number) {
    setPage(Math.min(Math.max(1, n), totalPages));
  }

  function goNext() {
    goTo(safePage + 1);
  }

  function goPrevious() {
    goTo(safePage - 1);
  }

  function reset() {
    setPage(1);
  }

  return {
    paginated,
    page: safePage,
    totalPages,
    hasPrevious: safePage > 1,
    hasNext: safePage < totalPages,
    goTo,
    goNext,
    goPrevious,
    reset,
  };
}