// TODO: remove polimorphism fron this component, it should be only for nav.
// TODO: add behaviour like active link, aria-current, etc. 
// TODO: move to compositions
import * as React from "react";

import { Stack } from "../primitives/layout/Stack";

type ElementType = React.ElementType;

export type NavigationProps<C extends ElementType = "nav"> = {
  as?: C;

  direction?: "row" | "column";

  gap?: React.CSSProperties["gap"];

  align?: React.CSSProperties["alignItems"];

  justify?: React.CSSProperties["justifyContent"];

  wrap?: React.CSSProperties["flexWrap"];

  children?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<C>, "as">;

export function Navigation<C extends ElementType = "nav">({
  as,

  direction = "row",

  gap = "var(--space-4)",

  align = "center",

  justify,

  wrap,

  className,
  style,

  children,

  ...rest
}: NavigationProps<C>) {
  const Component = as || "nav";

  return (
    <Stack
      as={Component}
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      gap={gap}
      className={className}
      style={{
        minWidth: 0,

        ...style,
      }}
      {...rest}
    >
      {children}
    </Stack>
  );
}