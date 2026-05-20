import React from "react";

import {
  colors,
  spacing,
  radius,
  borders,
  typography,
} from "../../design-tokens";

export interface SuccessProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Success({
  className,
  style,

  children,
  ...props
}: SuccessProps) {
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
          colors.feedback.success.border,

        borderRadius:
          radius.md,

        background:
          colors.feedback.success.bg,

        color:
          colors.feedback.success.text,

        fontFamily:
          typography.fontFamily.sans,

        ...style,
      }}
    >
      {children}
    </div>
  );
}