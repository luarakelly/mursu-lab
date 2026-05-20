import React from "react";

import {
  typography,
  colors,
} from "../../design-tokens";

type HeadingTag =
  "h1" |
  "h2" |
  "h3" |
  "h4" |
  "h5" |
  "h6";

type FontWeightKey =
  keyof typeof typography.fontWeight;

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;

  size?:
    keyof typeof typography.fontSize;

  weight?: FontWeightKey;

  color?: string;

  align?:
    React.CSSProperties["textAlign"];
}

export function Heading({
  as: Component = "h2",

  size = "2xl",

  weight = "bold",

  color =
    colors.text.primary,

  align,

  className,
  style,

  children,
  ...props
}: HeadingProps) {
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
          typography.lineHeight.tight,

        color,

        textAlign: align,

        margin: 0,

        ...style,
      }}
    >
      {children}
    </Component>
  );
}