import * as React from "react";

import { Pagination } from "../../../ui-lib/patterns/interactive/Pagination1";

export default function BlogPagination() {
  const [page, setPage] = React.useState(1);

  return (
    <Pagination
      currentPage={page}
      totalPages={12}
      onPageChange={setPage}

      className="w-full"

      listClassName="
        justify-center
        gap-2
      "

      buttonClassName="
        min-w-9
        h-9

        px-3

        rounded-md
        border

        transition-colors

        hover:bg-white/5
      "

      activeClassName="
        bg-[var(--accent)]
        text-black
        border-[var(--accent)]
      "

      disabledClassName="
        opacity-40
        cursor-not-allowed
      "
    />
  );
}