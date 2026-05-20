import React from "react";

import {
  spacing,
} from "../../design-tokens";

type SpaceKey =
  keyof typeof spacing.stack;

export interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpaceKey;

  axis?: "vertical" | "horizontal";
}

export function Spacer({
  size = "md",

  axis = "vertical",

  className,
  style,

  ...props
}: SpacerProps) {
  return (
    <div
      {...props}
      className={className}
      style={{
        width:
          axis === "horizontal"
            ? spacing.stack[size]
            : undefined,

        height:
          axis === "vertical"
            ? spacing.stack[size]
            : undefined,

        flexShrink: 0,

        ...style,
      }}
    />
  );
}