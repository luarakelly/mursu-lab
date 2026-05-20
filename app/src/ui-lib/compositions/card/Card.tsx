import React from "react";
import { Box } from "../../primitives/layout/Box";
import { colors } from "../../design-tokens";
import { radius } from "../../design-tokens/radius";
import { borders } from "../../design-tokens/borders";
import { shadows } from "../../design-tokens/shadows";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  bordered?: boolean;
  elevated?: boolean;
}

export function Card({
  as = "article",
  bordered = true,
  elevated = false,
  style,
  children,
  ...props
}: CardProps) {
  return (
    <Box
      as={as}
      radius="lg"
      backgroundColor={colors.surface.base}
      shadow={
        elevated
          ? shadows.semantic.card
          : undefined
      }
       style={{
    border: bordered
      ? `${borders.width.thin} ${borders.style.solid} ${colors.border.default}`
      : undefined,

    overflow: "hidden",
    ...style,
  }}
      {...props}
    >
      {children}
    </Box>
  );
}