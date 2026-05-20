import React from "react";

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  columns?: number;
  gap?: React.CSSProperties["gap"];
  minItemWidth?: string;
};

export function Grid({
  columns,
  gap = "16px",
  minItemWidth = "200px",
  style,
  children,
  ...props
}: GridProps) {
  return (
    <div
      {...props}
      style={{
        display: "grid",
        gap,
        gridTemplateColumns: columns
          ? `repeat(${columns}, minmax(0, 1fr))`
          : `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}