import React from "react";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: React.CSSProperties["maxWidth"];

  paddingX?: React.CSSProperties["paddingInline"];
}

export function Container({
  maxWidth = "1200px",

  paddingX = "16px",

  style,

  children,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      style={{
        width: "100%",

        maxWidth,

        marginInline: "auto",

        paddingInline: paddingX,

        ...style,
      }}
    >
      {children}
    </div>
  );
}