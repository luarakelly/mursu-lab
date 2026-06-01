import * as React from "react";
import { Stack } from "../primitives/layout/Stack";
import { Scale } from "../types/cssTokens";

export type StepsProps = {
  direction?: "column" | "row";
  gap?: Scale;
  connector?: React.ReactNode;
  connectorClassName?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Steps({
  direction = "column",
  gap = "0",
  connector,
  connectorClassName,
  children,
  className,
  style,
}: StepsProps) {
  const items = React.Children.toArray(children);

  return (
    <Stack
      as="ol"
      direction={direction}
      wrap={direction === "row" ? "wrap" : "nowrap"}
      gap={gap}
      className={className}
      style={{
        width: "100%",
        padding: 0,
        margin: 0,
        listStyle: "none",
        ...style,
      }}
    >
      {items.map((child, index) => {
        if (!React.isValidElement(child)) return child;

        const isLast = index === items.length - 1;

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