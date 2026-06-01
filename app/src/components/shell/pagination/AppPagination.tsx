import * as React from "react";
import { Pagination } from "../../../ui-lib/patterns/interactive/Pagination";

export default function AppPagination() {
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
    />
  );
}
