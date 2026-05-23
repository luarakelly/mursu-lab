import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

type LeftProps = React.ComponentProps<typeof Stack>;

export function Left({
  direction = "row",
  align = "center",
  shrink = 0,
  ...props
}: LeftProps) {
  return (
    <Stack
      direction={direction}
      align={align}
      shrink={shrink}
      {...props}
    />
  );
}