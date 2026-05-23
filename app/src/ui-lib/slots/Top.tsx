import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

type TopProps = React.ComponentProps<typeof Stack>;

export function Top({
  direction = "column",
  ...props
}: TopProps) {
  return (
    <Stack
      direction={direction}
      {...props}
    />
  );
}