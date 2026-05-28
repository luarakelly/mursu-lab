import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

type ColumnTopProps = React.ComponentProps<typeof Stack>;

export function ColumnTop({
  direction = "column",
  ...props
}: ColumnTopProps) {
  return (
    <Stack
      direction={direction}
      {...props}
    />
  );
}