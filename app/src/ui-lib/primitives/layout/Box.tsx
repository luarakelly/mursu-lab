import * as React from "react";

type ElementType = React.ElementType;

export type BoxProps<C extends ElementType = "div"> = {
  as?: C;

  /* ===== STRUCTURE (in headless Box) ===== */

  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];

  minWidth?: React.CSSProperties["minWidth"];
  minHeight?: React.CSSProperties["minHeight"];

  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];

  /* ===== POSITIONING (still structural, not visual design) ===== */

  position?: React.CSSProperties["position"];
  top?: React.CSSProperties["top"];
  right?: React.CSSProperties["right"];
  bottom?: React.CSSProperties["bottom"];
  left?: React.CSSProperties["left"];
  zIndex?: React.CSSProperties["zIndex"];

  /* ===== FLOW CONTROL (still headless-safe) ===== */

  display?: React.CSSProperties["display"];
  overflow?: React.CSSProperties["overflow"];

  /* ===== SPACING (allowed as structural constraint) ===== */

  padding?: React.CSSProperties["padding"];
  margin?: React.CSSProperties["margin"];

  /* ===== BORDER BOX SAFETY ===== */

  boxSizing?: React.CSSProperties["boxSizing"];

  /* ===== OPTIONAL DEBUG ONLY ===== */

  className?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, "as">;

export function Box<C extends ElementType = "div">({
  as,
  width,
  height,

  minWidth,
  minHeight,
  maxWidth,
  maxHeight,

  position,
  top,
  right,
  bottom,
  left,
  zIndex,

  display,
  overflow,

  padding,
  margin,

  boxSizing,

  className,
  style,
  children,
  ...rest
}: BoxProps<C>) {
  const Component = as || "div";

  return (
    <Component
      className={className}
      style={{
        /* structural layout constraints only */
        width,
        height,

        minWidth,
        minHeight,
        maxWidth,
        maxHeight,

        position,
        top,
        right,
        bottom,
        left,
        zIndex,

        display,
        overflow,

        padding,
        margin,

        boxSizing: boxSizing ?? "border-box",

        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}