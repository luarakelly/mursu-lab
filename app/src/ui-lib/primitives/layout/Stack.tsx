import React from "react";

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: React.CSSProperties["gap"];
};

export function Stack({
  style,
  children,
  ...props
}: StackProps) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}