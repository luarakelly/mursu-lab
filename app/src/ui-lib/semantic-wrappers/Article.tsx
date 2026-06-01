import * as React from "react";

export type ArticleProps =
  React.ComponentPropsWithoutRef<"article">;

export function Article({
  className,
  style,
  children,
  ...props
}: ArticleProps) {
  return (
    <article
      {...props}
      className={className}
      style={{
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </article>
  );
}