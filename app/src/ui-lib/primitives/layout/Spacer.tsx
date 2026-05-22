import React from "react";

export type SpacerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: React.CSSProperties["width"];
  axis?: "vertical" | "horizontal";
};

export function Spacer({
  size = "16px",
  axis = "vertical",
  style,
  ...props
}: SpacerProps) {
  return (
    <div
      {...props}
      style={{
        flexShrink: 0,
        width: axis === "horizontal" ? size : undefined,
        height: axis === "vertical" ? size : undefined,
        ...style,
      }}
    />
  );
}