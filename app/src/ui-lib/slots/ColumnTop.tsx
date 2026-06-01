import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

export type ColumnTopProps =
  React.ComponentProps<typeof Stack>;

export function ColumnTop({
  direction = "column",
  justify = "flex-start",
  minWidth = 0,

  ...props
}: ColumnTopProps) {
  return (
    <Stack
      direction={direction}
      justify={justify}
      minWidth={minWidth}
      {...props}
    />
  );
}