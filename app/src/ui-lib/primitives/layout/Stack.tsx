import * as React from "react";
import { Flex } from "./Flex";

type StackProps = Omit<
  React.ComponentProps<typeof Flex>,
  "direction"
> & {
  direction?: "row" | "column";
  gap?: React.CSSProperties["gap"];
};

export function Stack({
  direction = "column",
  align,
  justify,
  wrap,
  ...props
}: StackProps) {
  return (
    <Flex
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      {...props}
    />
  );
}