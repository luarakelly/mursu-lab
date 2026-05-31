import * as React from "react";

export type FooterProps =
  React.ComponentPropsWithoutRef<"footer">;

export function Footer({
  className,
  style,
  children,
  ...props
}: FooterProps) {
  return (
    <footer
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
    </footer>
  );
}