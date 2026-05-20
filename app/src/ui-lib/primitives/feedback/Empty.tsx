import React from "react";

import {
  colors,
  typography,
} from "../../design-tokens";

export interface EmptyProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Empty({
  className,
  style,

  children,
  ...props
}: EmptyProps) {
  return (
    <div
      {...props}
      className={className}
      style={{
        textAlign: "center",

        color:
          colors.text.secondary,

        fontFamily:
          typography.fontFamily.sans,

        ...style,
      }}
    >
      {children}
    </div>
  );
}