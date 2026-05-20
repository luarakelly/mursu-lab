import React from "react";

import {
  colors,
  spacing,
  typography,
  radius,
  transitions,
  borders,
} from "../../design-tokens";

type FontSizeKey =
  keyof typeof typography.fontSize;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: FontSizeKey;

  fullWidth?: boolean;
}

export function Button({
  size = "md",

  fullWidth = false,

  className,
  style,

  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        gap: spacing.inline.sm,

        width: fullWidth
          ? "100%"
          : undefined,

        paddingInline: spacing.inline.lg,
        paddingBlock: spacing.stack.sm,

        borderWidth:
          borders.width.thin,

        borderStyle:
          borders.style.solid,

        borderColor:
          colors.border.default,

        borderRadius:
          radius.control,

        background:
          colors.background.surface,

        color:
          colors.text.primary,

        fontFamily:
          typography.fontFamily.sans,

        fontSize:
          typography.fontSize[size],

        fontWeight:
          typography.fontWeight.medium,

        lineHeight:
          typography.lineHeight.normal,

        cursor: "pointer",

        transition: `
          background-color
          ${transitions.duration.fast}
          ${transitions.easing.easeOut}
        `,

        ...style,
      }}
    >
      {children}
    </button>
  );
}