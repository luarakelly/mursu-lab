import React from "react";

type BoxElement = React.ElementType;

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: BoxElement;

  padding?: React.CSSProperties["padding"];
  margin?: React.CSSProperties["margin"];

  borderRadius?: React.CSSProperties["borderRadius"];
  boxShadow?: React.CSSProperties["boxShadow"];

  backgroundColor?: React.CSSProperties["backgroundColor"];
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
}

export function Box({
  as: Component = "div",
  style,
  children,
  ...props
}: BoxProps) {
  return (
    <Component
      {...props}
      style={{
        ...style,
      }}
    >
      {children}
    </Component>
  );
}