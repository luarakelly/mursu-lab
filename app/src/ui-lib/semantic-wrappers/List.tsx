import * as React from "react";

import { Stack } from "../primitives/layout/Stack";
import { Scale } from "../types/cssTokens";

export type ListProps =
  React.ComponentPropsWithoutRef<"ul"> & {
    gap?: Scale;
  };

export function List({
  gap = "4",

  className,
  style,

  children,

  ...props
}: ListProps) {
  return (
    <Stack
      as="ul"
      direction="column"
      gap={gap}
      className={className}
      style={{
        width: "100%",

        padding: 0,
        margin: 0,

        listStyle: "none",

        ...style,
      }}
      {...props}
    >
      {children}
    </Stack>
  );
}