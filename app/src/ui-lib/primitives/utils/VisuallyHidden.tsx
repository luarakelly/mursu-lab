import React from "react";

export interface VisuallyHiddenProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export function VisuallyHidden({
  className,
  style,

  children,
  ...props
}: VisuallyHiddenProps) {
  return (
    <span
      {...props}
      className={className}
      style={{
        position: "absolute",

        width: "1px",
        height: "1px",

        padding: 0,
        margin: "-1px",

        overflow: "hidden",

        clip: "rect(0, 0, 0, 0)",

        whiteSpace: "nowrap",

        border: 0,

        ...style,
      }}
    >
      {children}
    </span>
  );
}