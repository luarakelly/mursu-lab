import * as React from "react";

export type CardProps =
  React.ComponentPropsWithoutRef<"article">;

export function Card({
  className,
  style,
  children,
  ...props
}: CardProps) {
  return (
    <article
      {...props}
      className={className}
      style={{
        overflow: "hidden",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </article>
  );
}