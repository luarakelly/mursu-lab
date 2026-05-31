//TODO: add "role" - toolbar | or some other side content, not necessatly controls
// Should I use layout prop as optional for cases like app header and use depault automatic for page header for example.

import * as React from "react";
import { Scale } from "../../types/cssTokens";
import { space } from "../../utils/cssTokensResolver";

import { Flex } from "../../primitives/layout/Flex";

import { Left } from "../../slots/Left";
import { Center } from "../../slots/Center";
import { Right } from "../../slots/Right";

export type RowLayoutProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;

  gap?: Scale;
  wrap?: React.CSSProperties["flexWrap"];

  centerMinWidth: React.CSSProperties["minWidth"];
  leftMinWidth: React.CSSProperties["minWidth"];
  rightMinWidth: React.CSSProperties["minWidth"];

  className?: string;
  style?: React.CSSProperties;
};

export function RowLayout({
  left,
  center,
  right,

  gap,
  wrap,
  centerMinWidth,
  leftMinWidth,
  rightMinWidth,

  className,
  style,
}: RowLayoutProps) {
  return (
    <Flex
      direction="row"
      wrap={wrap? wrap : "wrap"}
      align="center"
      justify="space-between"
      className={className}
      style={{
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        gap: gap? space(gap) : "var(--space-4)",
        ...style,
      }}
    >
      <Left
        style={{
          minWidth: leftMinWidth? leftMinWidth : 0, // key collapse trigger
          flexShrink: 1,
        }}
      >
        {left}
      </Left>

      <Center
        style={{
          flex: 1,
          minWidth: centerMinWidth? centerMinWidth : "4rem", // key collapse trigger
        }}
      >
        {center}
      </Center>

      <Right
        style={{
          flexShrink: 0,
          minWidth: rightMinWidth? rightMinWidth : 0, // key collapse trigger
        }}
      >
        {right}
      </Right>
    </Flex>
  );
}