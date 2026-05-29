import * as React from "react";

export type Direction = "row" | "column";

export type TimelineFragmentProps = {
  direction: Direction;
  isLast?: boolean;

  /**
   * Optional custom renderer (dot, svg, icon, etc.)
   */
  icon?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
};

export function StepFragmentLayout({
  direction,
  isLast = false,
  icon,
  className,
  style,
}: TimelineFragmentProps) {
  if (isLast) return null;

  const isColumn = direction === "column";

  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--muted)",

        width: isColumn ? "1px" : "12px",
        height: isColumn ? "12px" : "1px",

        ...style,
      }}
    >
      {icon ?? (
        <span
          style={{
            width: isColumn ? "1px" : "12px",
            height: isColumn ? "12px" : "1px",
            background: "currentColor",
            opacity: 0.6,
          }}
        />
      )}
    </span>
  );
}