import React from "react";

import {
  colors,
  spacing,
  radius,
  shadows,
  typography,
} from "../../design-tokens";

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Toast({
  className,
  style,

  children,
  ...props
}: ToastProps) {
  return (
    <div
      {...props}
      className={className}
      style={{
        padding:
          spacing.stack.md,

        borderRadius:
          radius.md,

        background:
          colors.background.elevated,

        color:
          colors.text.primary,

        boxShadow:
          shadows.md,

        fontFamily:
          typography.fontFamily.sans,

        ...style,
      }}
    >
      {children}
    </div>
  );
}