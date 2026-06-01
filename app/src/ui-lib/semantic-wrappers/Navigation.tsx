// TODO: add behaviour like active link in the patterns/interactive and reuse it here, aria-current, etc. 

import * as React from "react";

import { Stack } from "../primitives/layout/Stack";
import { Scale } from "../types/cssTokens";

export type NavigationProps = {
  direction?: "row" | "column";

  gap?: Scale;

  children?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
};

export function Navigation({
  direction = "row",

  gap = "4",

  className,
  style,

  children,
}: NavigationProps) {
  return (
     <Stack
      as="nav"
      direction={direction}
      gap={gap}
      wrap="wrap"
      align="center"
      className={className}
      style={{...style,}}
    >
      {children}
    </Stack>
  );
}