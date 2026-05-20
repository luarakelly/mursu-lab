import React from "react";

import {
  colors,
  borders,
  transitions,
} from "../../design-tokens";

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: string;
}

export function Loader({
  size = "16px",

  className,
  style,

  ...props
}: LoaderProps) {
  return (
    <div
      {...props}
      className={className}
      style={{
        width: size,
        height: size,

        borderWidth:
          borders.width.thick,

        borderStyle:
          borders.style.solid,

        borderColor:
          colors.border.default,

        borderTopColor:
          colors.text.primary,

        borderRadius: "999px",

        animation: `
          spin
          ${transitions.duration.slow}
          linear
          infinite
        `,

        ...style,
      }}
    />
  );
}