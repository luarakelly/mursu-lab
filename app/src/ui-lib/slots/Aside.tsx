import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

type AsideProps = React.ComponentProps<typeof Stack>;

export function Aside({
  direction = "column",
  shrink = 0,
  ...props
}: AsideProps) {
  return (
    <Stack
      direction={direction}
      shrink={shrink}
      {...props}
    />
  );
}