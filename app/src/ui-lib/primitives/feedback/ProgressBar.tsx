import React from "react";

import {
  colors,
  radius,
} from "../../design-tokens";

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export function ProgressBar({
  value = 0,

  className,
  style,

  ...props
}: ProgressBarProps) {
  return (
    <div
      {...props}
      className={className}
      style={{
        width: "100%",

        overflow: "hidden",

        borderRadius:
          radius.full,

        background:
          colors.background.muted,

        ...style,
      }}
    >
      <div
        style={{
          width: `${value}%`,

          background:
            colors.action.primary.bg,
        }}
      />
    </div>
  );
}