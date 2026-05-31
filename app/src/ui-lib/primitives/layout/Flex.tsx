import * as React from "react";
import type { SpaceToken, MinWidthToken } from "../../types/cssTokens";
import { space, minWidth as resolveMinWidth } from "../../utils/cssTokensResolver";

type ElementType = React.ElementType;

export type FlexProps<C extends ElementType = "div"> = {
  as?: C;
  direction?: React.CSSProperties["flexDirection"];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  wrap?: React.CSSProperties["flexWrap"];
  gap?: SpaceToken;
  grow?: React.CSSProperties["flexGrow"];
  shrink?: React.CSSProperties["flexShrink"];
  basis?: React.CSSProperties["flexBasis"];
  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  minWidth?: MinWidthToken;
  minHeight?: React.CSSProperties["minHeight"];
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];
  inline?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function Flex<C extends ElementType = "div">({
  as,
  direction = "row",
  align,
  justify,
  wrap = "nowrap",
  gap,
  grow,
  shrink,
  basis,
  fullWidth = false,
  fullHeight = false,
  width,
  height,
  minWidth = "0",
  minHeight,
  maxWidth,
  maxHeight,
  inline = false,
  className,
  style,
  children,
  ...rest
}: FlexProps<C>) {
  const Component = as || "div";

  return (
    <Component
      {...rest}
      className={className}
      style={{
        display: inline ? "inline-flex" : "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap: space(gap),
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        width: fullWidth ? "100%" : width,
        height: fullHeight ? "100%" : height,
        minWidth: resolveMinWidth(minWidth),
        minHeight,
        maxWidth,
        maxHeight,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </Component>
  );
}