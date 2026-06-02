import * as React from "react";

import { Stack, StackProps } from "../primitives/layout/Stack";

export type StepsProps =
  StackProps & {
    connector?: React.ReactNode;
    connectorClassName?: string;
  };

export function Steps({
  direction = "column",
  gap = "0",
  connector,
  connectorClassName,
  children,
  className,
  ...props
}: StepsProps) {
  const items = React.Children.toArray(children);

  return (
    <Stack
      as="ol"
      direction={direction}
      wrap={direction === "row" ? "wrap" : "nowrap"}
      gap={gap}
      className={[
        "w-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {items.map((child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        const isLast =
          index === items.length - 1;

        return React.cloneElement(
          child as React.ReactElement<any>,
          {
            isLast,
            direction,
            connector,
            connectorClassName,
          }
        );
      })}
    </Stack>
  );
}