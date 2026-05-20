import React from "react";

import {
  colors,
  borders,
} from "../../design-tokens";

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement> {}

export function Divider({
  className,
  style,

  ...props
}: DividerProps) {
  return (
    <hr
      {...props}
      className={className}
      style={{
        border: "none",

        borderTopWidth:
          borders.width.thin,

        borderTopStyle:
          borders.style.solid,

        borderTopColor:
          colors.border.default,

        ...style,
      }}
    />
  );
}