import * as React from "react";

export type Direction = "row" | "column";

export type StepFragmentProps = {
  direction: Direction;
  icon?: React.ReactNode;
  labelColumnWidth?: number; // width of the label in StepItem, default 16
  className?: string;
  style?: React.CSSProperties;
};

export function StepFragment({
  direction,
  icon,
  labelColumnWidth = 16,
  className,
  style,
}: StepFragmentProps) {
  const isColumn = direction === "column";

  // centers the connector line under the label icon
  const offset = Math.round(labelColumnWidth / 2);

  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        paddingLeft: isColumn ? `${offset}px` : undefined,
        paddingTop: !isColumn ? `${offset}px` : undefined,
        ...style,
      }}
    >
      {icon ?? (
        <span
          style={{
            display: "block",
            width: isColumn ? "1px" : "24px",
            height: isColumn ? "24px" : "2px",
            background: "currentColor",
          }}
        />
      )}
    </span>
  );
}