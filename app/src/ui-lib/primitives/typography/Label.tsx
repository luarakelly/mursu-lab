import React from "react";

import {
  typography,
  colors,
  spacing,
} from "../../design-tokens";

type FontSizeKey =
  keyof typeof typography.fontSize;

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: FontSizeKey;

  required?: boolean;
}

export function Label({
  size = "sm",

  required = false,

  className,
  style,

  children,
  ...props
}: LabelProps) {
  return (
    <label
      {...props}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",

        gap:
          spacing.inline.xs,

        fontFamily:
          typography.fontFamily.sans,

        fontSize:
          typography.fontSize[size],

        fontWeight:
          typography.fontWeight.medium,

        lineHeight:
          typography.lineHeight.normal,

        color:
          colors.text.primary,

        ...style,
      }}
    >
      {children}

      {required && (
        <span
          aria-hidden="true"
          style={{
            color:
              colors.feedback.error.text,
          }}
        >
          *
        </span>
      )}
    </label>
  );
}