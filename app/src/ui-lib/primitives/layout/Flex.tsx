import React from "react";

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement> {
  direction?: React.CSSProperties["flexDirection"];

  align?: React.CSSProperties["alignItems"];

  justify?: React.CSSProperties["justifyContent"];

  wrap?: React.CSSProperties["flexWrap"];

  gap?: React.CSSProperties["gap"];

  grow?: React.CSSProperties["flexGrow"];

  shrink?: React.CSSProperties["flexShrink"];

  basis?: React.CSSProperties["flexBasis"];
}

export function Flex({
  direction = "row",

  align,
  justify,

  wrap,

  gap,

  grow,
  shrink,
  basis,

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

        flexGrow: grow,

        flexShrink: shrink,

        flexBasis: basis,

        ...style,
      }}
    >
      {children}
    </div>
  );
}