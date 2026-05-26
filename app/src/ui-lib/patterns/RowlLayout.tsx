import * as React from "react";

import { Flex } from "../primitives/layout/Flex";

import { Left } from "../slots/Left";
import { Center } from "../slots/Center";
import { Right } from "../slots/Right";

export type RowlLayoutMode =
  | "default"
  | "centered"
  | "split"
  | "stacked";

export type RowlLayoutOverrides = {
  root?: React.CSSProperties;

  left?: React.CSSProperties;
  center?: React.CSSProperties;
  right?: React.CSSProperties;
};

export type RowlLayoutProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;

  layout?: RowlLayoutMode;

  overrides?: RowlLayoutOverrides;

  className?: string;
  style?: React.CSSProperties;
};

export function RowlLayout({
  left,
  center,
  right,

  layout = "default",

  overrides,

  className,
  style,
}: RowlLayoutProps) {
  const isStacked = layout === "stacked";

  return (
    <Flex
      direction={isStacked ? "column" : "row"}
      align={isStacked ? "stretch" : "center"}
      justify="space-between"
      wrap="nowrap"
      className={className}
      style={{
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",

        ...overrides?.root,
        ...style,
      }}
    >
      <Left
        style={{
          minWidth: 0,

          ...(isStacked && {
            width: "100%",
          }),

          ...overrides?.left,
        }}
      >
        {left}
      </Left>

      <Center
        style={{
          minWidth: 0,

          flex:
            layout === "centered" ||
            layout === "split"
              ? 1
              : undefined,

          justifyContent:
            layout === "split"
              ? "space-between"
              : "center",

          ...(isStacked && {
            width: "100%",
          }),

          ...overrides?.center,
        }}
      >
        {center}
      </Center>

      <Right
        style={{
          minWidth: 0,

          ...(isStacked && {
            width: "100%",
          }),

          ...overrides?.right,
        }}
      >
        {right}
      </Right>
    </Flex>
  );
}
