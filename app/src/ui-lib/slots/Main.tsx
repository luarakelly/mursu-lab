import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

type MainProps = React.ComponentProps<typeof Stack>;

export function Main({
  direction = "column",
  grow = 1,
  minWidth = 0,
  ...props
}: MainProps) {
  return (
    <Stack
      direction={direction}
      grow={grow}
      minWidth={minWidth}
      {...props}
    />
  );
}