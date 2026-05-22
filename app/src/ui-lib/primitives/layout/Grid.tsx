import React from "react";

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  columns?: React.CSSProperties["gridTemplateColumns"];
  rows?: React.CSSProperties["gridTemplateRows"];
  gap?: React.CSSProperties["gap"];
  align?: React.CSSProperties["alignItems"];
};

export function Grid({
  columns,
  rows,
  style,
  children,
  ...props
}: GridProps) {
  return (
    <div
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        ...style,
      }}
    >
      {children}
    </div>
  );
}