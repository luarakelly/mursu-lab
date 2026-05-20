import React from "react";

import {
  spacing,
  radius,
  colors,
  shadows,
} from "../../design-tokens";

type Space = "xs" | "sm" | "md" | "lg";
type Radius = "sm" | "md" | "lg" | "full";
type Shadow = "sm" | "md" | "lg";

type BoxElement = React.ElementType;

const spaceValues: Record<Space, string> = {
  xs: spacing.inline.xs,
  sm: spacing.inline.sm,
  md: spacing.inline.md,
  lg: spacing.inline.lg,
};

const radiusValues: Record<Radius, string> = {
  sm: radius.sm,
  md: radius.md,
  lg: radius.lg,
  full: radius.full,
};

const shadowValues: Record<Shadow, string> = {
  sm: shadows.sm,
  md: shadows.md,
  lg: shadows.lg,
};

export interface BoxProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: BoxElement;

  padding?: Space;
  paddingX?: Space;
  paddingY?: Space;

  margin?: Space;
  marginX?: Space;
  marginY?: Space;

  radius?: Radius;

  shadow?: Shadow;

  backgroundColor?: string;

  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
}

export function Box({
  as: Component = "div",

  padding,
  paddingX,
  paddingY,

  margin,
  marginX,
  marginY,

  radius: radiusSize,

  shadow,

  backgroundColor,

  width,
  height,

  style,
  children,
  ...props
}: BoxProps) {
  return (
    <Component
      {...props}
      style={{
        padding:
          padding !== undefined
            ? spaceValues[padding]
            : undefined,

        paddingInline:
          paddingX !== undefined
            ? spaceValues[paddingX]
            : undefined,

        paddingBlock:
          paddingY !== undefined
            ? spaceValues[paddingY]
            : undefined,

        margin:
          margin !== undefined
            ? spaceValues[margin]
            : undefined,

        marginInline:
          marginX !== undefined
            ? spaceValues[marginX]
            : undefined,

        marginBlock:
          marginY !== undefined
            ? spaceValues[marginY]
            : undefined,

        borderRadius:
          radiusSize !== undefined
            ? radiusValues[radiusSize]
            : undefined,

        boxShadow:
          shadow !== undefined
            ? shadowValues[shadow]
            : undefined,

        backgroundColor,

        width,
        height,

        ...style,
      }}
    >
      {children}
    </Component>
  );
}