import * as React from "react";

import { SpaceToken } from "../../types/cssTokens";
import { space } from "../../utils/cssTokensResolver";

type ElementType = React.ElementType;

export type GridProps<C extends ElementType = "div"> = {
  as?: C;

  minColumnWidth?: string;

  columns?: React.CSSProperties["gridTemplateColumns"];
  rows?: React.CSSProperties["gridTemplateRows"];

  autoFlow?: React.CSSProperties["gridAutoFlow"];
  autoRows?: React.CSSProperties["gridAutoRows"];
  autoColumns?: React.CSSProperties["gridAutoColumns"];

  gap?: SpaceToken;

  justifyItems?: React.CSSProperties["justifyItems"];
  alignItems?: React.CSSProperties["alignItems"];

  justifyContent?: React.CSSProperties["justifyContent"];
  alignContent?: React.CSSProperties["alignContent"];

  fullWidth?: boolean;
  fullHeight?: boolean;

  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];

  minWidth?: React.CSSProperties["minWidth"];
  minHeight?: React.CSSProperties["minHeight"];

  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];

  className?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
};

export function Grid<C extends ElementType = "div">({
  as,

  minColumnWidth = "20rem",

  columns,
  rows,

  autoFlow,
  autoRows,
  autoColumns,

  gap = "4",

  justifyItems,
  alignItems,

  justifyContent,
  alignContent,

  fullWidth = true,
  fullHeight = false,

  width,
  height,

  minWidth = 0,
  minHeight = 0,

  maxWidth,
  maxHeight,

  className,
  style,

  children,

  ...rest
}: GridProps<C>) {
  const Component = as || "div";

  return (
    <Component
      {...rest}
      className={className}
      style={{
        display: "grid",

        gridTemplateColumns:
          columns ??
          `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`,

        gridTemplateRows: rows,

        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridAutoColumns: autoColumns,

        gap: space(gap),

        justifyItems,
        alignItems,

        justifyContent,
        alignContent,

        width: fullWidth ? "100%" : width,
        height: fullHeight ? "100%" : height,

        minWidth,
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
