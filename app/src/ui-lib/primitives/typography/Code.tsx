import React from "react";

import {
  typography,
  colors,
  spacing,
  radius,
} from "../../design-tokens";

type FontSizeKey =
  keyof typeof typography.fontSize;

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement> {
  size?: FontSizeKey;
}

export function Code({
  size = "sm",

  className,
  style,

  children,
  ...props
}: CodeProps) {
  return (
    <code
      {...props}
      className={className}
      style={{
        paddingInline:
          spacing.inline.xs,

        paddingBlock:
          spacing.stack.xs,

        borderRadius:
          radius.sm,

        background:
          colors.background.subtle,

        color:
          colors.text.primary,

        fontFamily:
          typography.fontFamily.mono,

        fontSize:
          typography.fontSize[size],

        ...style,
      }}
    >
      {children}
    </code>
  );
}