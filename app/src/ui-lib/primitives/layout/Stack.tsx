import * as React from "react";

import { Flex } from "./Flex";
import { SpaceToken } from "../../types/cssTokens";

type StackProps = Omit<
  React.ComponentProps<typeof Flex>,
  "direction"
> & {
  direction?: "row" | "column";
  gap?: SpaceToken;
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
      {...props}
    />
  );
}