import * as React from "react";

import { Flex } from "./Flex";
import { SpaceToken, MinWidthToken } from "../../types/cssTokens";

export type StackProps = Omit<
  React.ComponentProps<typeof Flex>,
  "direction"
> & {
  direction?: "row" | "column";
  gap?: SpaceToken;
  minWidth?: MinWidthToken;
};

export function Stack({
  direction = "column",
  gap = "3",
  align,
  justify,
  wrap = "wrap",
  grow,
  shrink,
  minWidth = "0",
  as,
  className,
  ...props
}: StackProps) {
  return (
    <Flex
      as={as}
      direction={direction}
      gap={gap}
      align={align}
      justify={justify}
      wrap={wrap}
      grow={grow}
      shrink={shrink}
      minWidth={minWidth}
      className={className}
      {...props}
    />
  );
}