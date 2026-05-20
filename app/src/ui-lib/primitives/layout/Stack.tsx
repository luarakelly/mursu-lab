import React from "react";

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: React.CSSProperties["gap"];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
};

export function Stack({
  gap = "12px",
  align,
  justify,
  style,
  children,
  ...props
}: StackProps) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
    >
      {children}
    </div>
  );
}