import React from "react";

import {
  typography,
  colors,
} from "../../design-tokens";

type FontSizeKey =
  keyof typeof typography.fontSize;

type FontWeightKey =
  keyof typeof typography.fontWeight;

export interface TextProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;

  size?: FontSizeKey;

  weight?: FontWeightKey;

  color?: string;

  align?:
    React.CSSProperties["textAlign"];

  truncate?: boolean;
}

export function Text({
  as: Component = "p",

  size = "md",

  weight = "regular",

  color =
    colors.text.primary,

  align,

  truncate = false,

  className,
  style,

  children,
  ...props
}: TextProps) {
  return (
    <Component
      {...props}
      className={className}
      style={{
        fontFamily:
          typography.fontFamily.sans,

        fontSize:
          typography.fontSize[size],

        fontWeight:
          typography.fontWeight[weight],

        lineHeight:
          typography.lineHeight.normal,

        color,

        textAlign: align,

        ...(truncate && {
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }),

        ...style,
      }}
    >
      {children}
    </Component>
  );
}