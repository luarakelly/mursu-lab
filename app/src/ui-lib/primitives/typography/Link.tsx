import React from "react";

import {
  typography,
  colors,
  transitions,
} from "../../design-tokens";

type FontSizeKey =
  keyof typeof typography.fontSize;

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: FontSizeKey;

  color?: string;
}

export function Link({
  size = "md",

  color =
    colors.text.brand,

  className,
  style,

  children,
  ...props
}: LinkProps) {
  return (
    <a
      {...props}
      className={className}
      style={{
        fontFamily:
          typography.fontFamily.sans,

        fontSize:
          typography.fontSize[size],

        lineHeight:
          typography.lineHeight.normal,

        color,

        textDecoration: "none",

        transition: `
          color
          ${transitions.duration.fast}
          ${transitions.easing.easeOut}
        `,

        ...style,
      }}
    >
      {children}
    </a>
  );
}