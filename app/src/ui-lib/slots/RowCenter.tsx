import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

export type CenterProps =
  React.ComponentProps<typeof Stack>;

export function Center({
  direction = "row",
  align = "center",
  justify = "center",

  grow = 1,
  minWidth = 0,

  ...props
}: CenterProps) {
  return (
    <Stack
      direction={direction}
      align={align}
      justify={justify}
      grow={grow}
      minWidth={minWidth}
      {...props}
    />
  );
}