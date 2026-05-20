import React from "react";
import { Box } from "../../primitives/layout/Box";

export interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {}

export function CardBody({
  style,
  children,
  ...props
}: CardBodyProps) {
  return (
    <Box
      as="section"
      padding="md"
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}