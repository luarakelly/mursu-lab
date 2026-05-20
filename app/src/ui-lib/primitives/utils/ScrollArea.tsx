import React from "react";

export interface ScrollAreaProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ScrollArea({
  className,
  style,

  children,
  ...props
}: ScrollAreaProps) {
  return (
    <div
      {...props}
      className={className}
      style={{
        overflow: "auto",

        ...style,
      }}
    >
      {children}
    </div>
  );
}