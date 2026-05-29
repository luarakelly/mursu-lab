import * as React from "react";

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

  containerClassName?: string;
  buttonClassName?: string;
  activeClassName?: string;
  disabledClassName?: string;
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

  containerClassName,
  buttonClassName,
  activeClassName,
  disabledClassName,
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={className}
      style={style}
    >
      <div
        className={containerClassName}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* PREVIOUS */}
        <button
          type="button"
          onClick={onPrevious}
          disabled={!hasPrevious}
          className={[
            buttonClassName,
            !hasPrevious ? disabledClassName : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            opacity: !hasPrevious ? 0.5 : 1,
            cursor: !hasPrevious
              ? "not-allowed"
              : "pointer",
          }}
        >
          {previousLabel}
        </button>

        {/* CURRENT */}
        <span
          aria-current="page"
          className={[
            buttonClassName,
            activeClassName,
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            fontWeight: 600,
          }}
        >
          {currentLabel ?? currentPage}
        </span>

        {/* NEXT */}
        <button
          type="button"
          onClick={onNext}
          disabled={!hasNext}
          className={[
            buttonClassName,
            !hasNext ? disabledClassName : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            opacity: !hasNext ? 0.5 : 1,
            cursor: !hasNext
              ? "not-allowed"
              : "pointer",
          }}
        >
          {nextLabel}
        </button>
      </div>
    </nav>
  );
}