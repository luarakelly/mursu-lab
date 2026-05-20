import React from "react";

import {
  colors,
  spacing,
  radius,
  borders,
  typography,
} from "../../design-tokens";

export interface ErrorProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Error({
  className,
  style,

  children,
  ...props
}: ErrorProps) {
  return (
    <div
      {...props}
      className={className}
      style={{
        padding:
          spacing.stack.md,

        borderWidth:
          borders.width.thin,

        borderStyle:
          borders.style.solid,

        borderColor:
          colors.feedback.error.border,

        borderRadius:
          radius.md,

        background:
          colors.feedback.error.bg,

        color:
          colors.feedback.error.text,

        fontFamily:
          typography.fontFamily.sans,

        ...style,
      }}
    >
      {children}
    </div>
  );
}