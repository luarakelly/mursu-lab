import * as React from "react";
import { Pagination } from "../../../ui-lib/patterns/interactive/Pagination";

export default function BlogPagination() {
  const [page, setPage] = React.useState(1);

  const totalPages = 12;

  const hasPrevious = page > 1;
  const hasNext = page < totalPages;

  function goPrevious() {
    if (hasPrevious) setPage(p => p - 1);
  }

  function goNext() {
    if (hasNext) setPage(p => p + 1);
  }

  return (
    <Pagination
      currentPage={page}
      hasPrevious={hasPrevious}
      hasNext={hasNext}
      onPrevious={goPrevious}
      onNext={goNext}

      previousLabel="←"
      nextLabel="→"

      className="w-full"

      containerClassName="
        justify-center
        gap-4
      "

      buttonClassName="
        px-3 py-1
        rounded-md
        border
        text-sm
        hover:bg-white/5
      "

      activeClassName="
        font-bold
        text-[var(--accent)]
      "

      disabledClassName="
        opacity-40
      "
    />
  );
}
