import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

type ColumnCenterProps = React.ComponentProps<typeof Stack>;

export function ColumnCenter({
  direction = "column",
  grow = 1,
  minWidth = 0,
  ...props
}: ColumnCenterProps) {
  return (
    <Stack
      direction={direction}
      grow={grow}
      minWidth={minWidth}
      {...props}
    />
  );
}