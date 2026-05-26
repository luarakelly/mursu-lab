import * as React from "react";

type ElementType = React.ElementType;

export type LinkProps<C extends ElementType = "a"> = {
  as?: C;

  href?: string;

  children?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<C>, "as">;

export function Link<C extends ElementType = "a">({
  as,

  className,
  style,

  children,

  ...rest
}: LinkProps<C>) {
  const Component = as || "a";

  return (
    <Component
      className={className}
      style={{
        color: "inherit",
        textDecoration: "none",

        minWidth: 0,

        boxSizing: "border-box",

        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}