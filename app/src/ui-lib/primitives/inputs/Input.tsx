import React from "react";

import {
  colors,
  spacing,
  typography,
  radius,
  transitions,
  borders,
} from "../../design-tokens";

type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;

  fullWidth?: boolean;
}

const inputSizeStyles: Record<
  InputSize,
  React.CSSProperties
> = {
  sm: {
    fontSize: typography.fontSize.sm,
    paddingInline: spacing.inline.sm,
    paddingBlock: spacing.stack.xs,
  },

  md: {
    fontSize: typography.fontSize.md,
    paddingInline: spacing.inline.md,
    paddingBlock: spacing.stack.sm,
  },

  lg: {
    fontSize: typography.fontSize.lg,
    paddingInline: spacing.inline.lg,
    paddingBlock: spacing.stack.md,
  },
};

export function Input({
  inputSize = "md",

  fullWidth = false,

  className,
  style,

  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={className}
      style={{
        width: fullWidth
          ? "100%"
          : undefined,

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

        lineHeight:
          typography.lineHeight.normal,

        outline: "none",

        transition: `
          border-color
          ${transitions.duration.fast}
          ${transitions.easing.easeOut}
        `,

        ...inputSizeStyles[inputSize],

        ...style,
      }}
    />
  );
}