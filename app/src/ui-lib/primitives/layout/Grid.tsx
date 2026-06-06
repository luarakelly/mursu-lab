import * as React from "react";

import { SpaceToken } from "../../types/cssTokens";
import { space } from "../../utils/cssTokensResolver";

type ElementType = React.ElementType;

type ResponsiveValue<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
};

export type GridProps<C extends ElementType = "div"> = {
  as?: C;

  // legacy (still supported)
  minColumnWidth?: string;
  columns?: React.CSSProperties["gridTemplateColumns"];

  // NEW responsive API
  responsiveColumns?: ResponsiveValue<string>;

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

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
};

function useResponsiveGridColumns(
  id: string,
  responsive?: ResponsiveValue<string>,
  fallback?: React.CSSProperties["gridTemplateColumns"]
) {
  const base = responsive?.base ?? String(fallback ?? "1fr");

  const styles = `
    .grid-${id} {
      grid-template-columns: ${base};
    }

    ${
      responsive?.sm
        ? `@media (min-width: ${breakpoints.sm}px) {
            .grid-${id} {
              grid-template-columns: ${responsive.sm};
            }
          }`
        : ""
    }

    ${
      responsive?.md
        ? `@media (min-width: ${breakpoints.md}px) {
            .grid-${id} {
              grid-template-columns: ${responsive.md};
            }
          }`
        : ""
    }

    ${
      responsive?.lg
        ? `@media (min-width: ${breakpoints.lg}px) {
            .grid-${id} {
              grid-template-columns: ${responsive.lg};
            }
          }`
        : ""
    }
  `;

  return styles;
}

export function Grid<C extends ElementType = "div">({
  as,
  minColumnWidth,
  columns,

  responsiveColumns,

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

  const id = React.useId().replace(/:/g, "");

  const fallbackColumns =
    columns ??
    (minColumnWidth
      ? `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`
      : "1fr");

  const responsiveStyleTag =
    responsiveColumns
      ? useResponsiveGridColumns(id, responsiveColumns, fallbackColumns)
      : null;

  return (
    <>
      {responsiveStyleTag && (
        <style dangerouslySetInnerHTML={{ __html: responsiveStyleTag }} />
      )}

      <Component
        {...rest}
        className={[
          className,
          responsiveColumns ? `grid-${id}` : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          display: "grid",

          // fallback or fixed columns
          gridTemplateColumns: responsiveColumns
            ? undefined
            : fallbackColumns,

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
    </>
  );
}

/**
 * import * as React from "react";

type Responsive<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
};

type ElementType = React.ElementType;

export type GridProps<C extends ElementType = "div"> = {
  as?: C;

  columns?: string | Responsive<string>;
  rows?: string | Responsive<string>;

  gap?: string;

  justifyItems?: React.CSSProperties["justifyItems"];
  alignItems?: React.CSSProperties["alignItems"];

  fullWidth?: boolean;

  className?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
};

const breakpointMap = {
  base: "",
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
};

function resolveResponsive(
  value: string | Responsive<string> | undefined,
  fallback: string
) {
  if (!value) return { base: fallback };

  if (typeof value === "string") {
    return { base: value };
  }

  return {
    base: value.base ?? fallback,
    sm: value.sm,
    md: value.md,
    lg: value.lg,
  };
}

export function Grid<C extends ElementType = "div">({
  as,
  columns,
  rows,
  gap = "1rem",
  justifyItems,
  alignItems,
  fullWidth = true,
  className,
  style,
  children,
  ...rest
}: GridProps<C>) {
  const Component = as || "div";

  const col = resolveResponsive(columns, "1fr");
  const row = resolveResponsive(rows, "auto");

  const baseStyle: React.CSSProperties = {
    display: "grid",
    width: fullWidth ? "100%" : undefined,
    gap,
    justifyItems,
    alignItems,
    gridTemplateColumns: col.base,
    gridTemplateRows: row.base,
    ...style,
  };

  // simple media injection (no library needed)
  return (
    <Component className={className} style={baseStyle} {...rest}>
      <style>
        {`
          @media (min-width: 640px) {
            .grid-sm-${className} {
              grid-template-columns: ${col.sm ?? col.base};
              grid-template-rows: ${row.sm ?? row.base};
            }
          }

          @media (min-width: 768px) {
            .grid-md-${className} {
              grid-template-columns: ${col.md ?? col.sm ?? col.base};
              grid-template-rows: ${row.md ?? row.sm ?? row.base};
            }
          }

          @media (min-width: 1024px) {
            .grid-lg-${className} {
              grid-template-columns: ${col.lg ?? col.md ?? col.base};
              grid-template-rows: ${row.lg ?? row.md ?? row.base};
            }
          }
        `}
      </style>

      {children}
    </Component>
  );
}
 */