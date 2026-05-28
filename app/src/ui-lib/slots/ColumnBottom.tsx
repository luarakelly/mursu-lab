import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

type ColumnBottomProps = React.ComponentProps<typeof Stack>;

export function ColumnBottom({
  direction = "column",
  ...props
}: ColumnBottomProps) {
  return (
    <Stack
      direction={direction}
      {...props}
    />
  );
}