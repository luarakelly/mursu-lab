import * as React from "react";

type ElementType = React.ElementType;

type GridProps<C extends ElementType = "div"> = {
  as?: C;

  /* ===== STRUCTURE ===== */

  columns?: React.CSSProperties["gridTemplateColumns"];
  rows?: React.CSSProperties["gridTemplateRows"];

  autoFlow?: React.CSSProperties["gridAutoFlow"];
  autoRows?: React.CSSProperties["gridAutoRows"];
  autoColumns?: React.CSSProperties["gridAutoColumns"];

  /* ===== ALIGNMENT ===== */

  justifyItems?: React.CSSProperties["justifyItems"];
  alignItems?: React.CSSProperties["alignItems"];

  justifyContent?: React.CSSProperties["justifyContent"];
  alignContent?: React.CSSProperties["alignContent"];

  /* ===== CONSTRAINTS ===== */

  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];

  minWidth?: React.CSSProperties["minWidth"];
  minHeight?: React.CSSProperties["minHeight"];

  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];

  /* ===== POLYMORPHIC / STYLE ===== */

  className?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
};

export function Grid<C extends ElementType = "div">({
  as,
  columns = "repeat(auto-fit, minmax(240px, 1fr))",
  rows,

  autoFlow,
  autoRows,
  autoColumns,

  justifyItems,
  alignItems,
  justifyContent,
  alignContent,

  width,
  height,

  minWidth,
  minHeight,
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
      className={className}
      style={{
        display: "grid",

        /* structure */
        gridTemplateColumns: columns,
        gridTemplateRows: rows,

        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridAutoColumns: autoColumns,

        /* alignment */
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,

        /* sizing constraints */
        width,
        height,

        minWidth,
        minHeight,
        maxWidth,
        maxHeight,

        /* safety */
        boxSizing: "border-box",

        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
