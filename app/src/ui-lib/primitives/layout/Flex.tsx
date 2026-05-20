import React from "react";

type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  wrap?: React.CSSProperties["flexWrap"];
  gap?: React.CSSProperties["gap"];
};

export function Flex({
  direction = "row",
  align,
  justify,
  wrap,
  gap,
  style,
  children,
  ...props
}: FlexProps) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}