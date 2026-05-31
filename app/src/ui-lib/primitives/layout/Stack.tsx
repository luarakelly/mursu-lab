import * as React from "react";
import { Flex, FlexProps } from "./Flex";

type StackProps = Omit<FlexProps, "direction"> & {
  direction?: "row" | "column";
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
  ...props
}: StackProps) {
  return (
    <Flex
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