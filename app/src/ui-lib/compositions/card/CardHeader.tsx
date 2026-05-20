import React from "react";
import { Box } from "../../primitives/layout/Box";
import { colors, spacing } from "../../design-tokens";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function CardHeader({
  style,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <Box
      as="header"
      padding="md"
      style={{
        borderBottom: `1px solid ${colors.border.subtle}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}