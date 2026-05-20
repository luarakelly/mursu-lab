import React from "react";
import { Box } from "../../primitives/layout/Box";
import { colors } from "../../design-tokens";

export interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {}

export function CardFooter({
  style,
  children,
  ...props
}: CardFooterProps) {
  return (
    <Box
      as="footer"
      padding="md"
      style={{
        borderTop: `1px solid ${colors.border.subtle}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}