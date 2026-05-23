import * as React from "react";

type ElementType = React.ElementType;

type FlexProps<C extends ElementType = "div"> = {
  as?: C;

  direction?: React.CSSProperties["flexDirection"];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  wrap?: React.CSSProperties["flexWrap"];

  grow?: React.CSSProperties["flexGrow"];
  shrink?: React.CSSProperties["flexShrink"];
  basis?: React.CSSProperties["flexBasis"];

  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];

  minWidth?: React.CSSProperties["minWidth"];
  maxWidth?: React.CSSProperties["maxWidth"];

  inline?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;

  style?: React.CSSProperties;
  className?: string;

  children?: React.ReactNode;
};

export function Flex<C extends ElementType = "div">({
  as,
  direction = "row",
  align,
  justify,
  wrap,

  grow,
  shrink,
  basis,

  width,
  height,
  minWidth,
  maxWidth,

  inline = false,
  fullWidth = false,
  fullHeight = false,

  style,
  className,
  children,
  ...rest
}: FlexProps<C>) {
  const Component = as || "div";

  return (
    <Component
      className={className}
      style={{
        display: inline ? "inline-flex" : "flex",

        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,

        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,

        width: fullWidth ? "100%" : width,
        height: fullHeight ? "100%" : height,

        minWidth: 0,
        maxWidth,

        boxSizing: "border-box",

        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}