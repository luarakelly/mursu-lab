import * as React from "react";
import { Flex } from "./Flex";

/** ✔ simplified Flex
✔ default column flow
✔ consistent spacing
✔ used for lists / slots / groups */

type StackProps = React.ComponentProps<typeof Flex> & {
  direction?: "row" | "column";
};

export function Stack({
  direction = "column",
  gap = 8,
  ...props
}: StackProps) {
  return (
    <Flex
      direction={direction}
      gap={gap}
      {...props}
    />
  );
}

/**
 * import React from "react";

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: React.CSSProperties["gap"];
};

export function Stack({
  style,
  children,
  ...props
}: StackProps) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
 */