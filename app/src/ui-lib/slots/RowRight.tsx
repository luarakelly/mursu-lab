import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

export type RightProps =
  React.ComponentProps<typeof Stack>;

export function Right({
  direction = "row",
  align = "center",
  justify = "flex-end",
  shrink = 0,
  minWidth = 0,

  ...props
}: RightProps) {
  return (
    <Stack
      direction={direction}
      align={align}
      justify={justify}
      shrink={shrink}
      minWidth={minWidth}
      {...props}
    />
  );
}