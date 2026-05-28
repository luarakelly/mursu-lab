//TODO: add polimophism "as" and "role"
import * as React from "react";

import { Flex } from "../primitives/layout/Flex";

import { Left } from "../slots/Left";
import { Center } from "../slots/Center";
import { Right } from "../slots/Right";

export type RowLayoutMode =
  | "default"
  | "centered"
  | "split"
  | "stacked";

export type RowLayoutOverrides = {
  root?: React.CSSProperties;

  left?: React.CSSProperties;
  center?: React.CSSProperties;
  right?: React.CSSProperties;
};

export type RowLayoutProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;

  layout?: RowLayoutMode;

  overrides?: RowLayoutOverrides;

  className?: string;
  style?: React.CSSProperties;
};

export function RowLayout({
  left,
  center,
  right,

  layout = "default",

  overrides,

  className,
  style,
}: RowLayoutProps) {
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
