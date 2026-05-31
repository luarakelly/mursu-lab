// Should I use slots here?
// Add hability to style the buttons
import * as React from "react";

import { Stack } from "../../primitives/layout/Stack";
import { Button } from "../../primitives/inputs/Button";

export type PaginationProps = {
  currentPage: number;

  onPrevious?: () => void;
  onNext?: () => void;

  hasPrevious?: boolean;
  hasNext?: boolean;

  previousLabel?: React.ReactNode;
  nextLabel?: React.ReactNode;
  currentLabel?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
};

export function Pagination({
  currentPage,

  onPrevious,
  onNext,

  hasPrevious = true,
  hasNext = true,

  previousLabel = "Previous",
  nextLabel = "Next",
  currentLabel,

  className,
  style,
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={className}
      style={style}
    >
      <Stack
        direction="row"
        align="center"
        justify="center"
        wrap="wrap"
        gap="4"
        style={{
          width: "100%",
          minWidth: 0,
        }}
      >
        {/* PREVIOUS */}
        <Button
          onClick={onPrevious}
          disabled={!hasPrevious}
          style={{
            opacity: hasPrevious ? 1 : 0.5,
            cursor: hasPrevious
              ? "pointer"
              : "not-allowed",
          }}
        >
          {previousLabel}
        </Button>

        {/* CURRENT */}
        <span
          aria-current="page"
          style={{
            fontWeight: 600,
            padding: "0 var(--space-3)",
            minWidth: 0,
          }}
        >
          {currentLabel ?? currentPage}
        </span>

        {/* NEXT */}
        <Button
          onClick={onNext}
          disabled={!hasNext}
          style={{
            opacity: hasNext ? 1 : 0.5,
            cursor: hasNext
              ? "pointer"
              : "not-allowed",
          }}
        >
          {nextLabel}
        </Button>
      </Stack>
    </nav>
  );
}