import * as React from "react";
import { Box } from "../../primitives/layout/Box";

export type FooterProps = React.ComponentPropsWithoutRef<"footer">;

export function Footer({
  className,
  style,
  children,
  ...props
}: FooterProps) {
  return (
    <Box
      as="footer"
      {...props}
      className={className}
      style={{
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </Box>
  );
}