import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

type BottomProps = React.ComponentProps<typeof Stack>;

export function Bottom({
  direction = "column",
  ...props
}: BottomProps) {
  return (
    <Stack
      direction={direction}
      {...props}
    />
  );
}