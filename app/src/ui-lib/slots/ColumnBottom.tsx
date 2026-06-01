import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

export type ColumnBottomProps =
  React.ComponentProps<typeof Stack>;

export function ColumnBottom({
  direction = "column",
  justify = "flex-end",
  minWidth = 0,

  ...props
}: ColumnBottomProps) {
  return (
    <Stack
      direction={direction}
      justify={justify}
      minWidth={minWidth}
      {...props}
    />
  );
}