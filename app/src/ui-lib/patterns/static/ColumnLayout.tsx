//TODO: add "role"
import * as React from "react";
import { Scale } from "../../types/cssTokens";
import { space } from "../../utils/cssTokensResolver";

import { Flex } from "../../primitives/layout/Flex";

import { ColumnTop } from "../../slots/ColumnTop";
import { ColumnCenter } from "../../slots/ColumnCenter";
import { ColumnBottom } from "../../slots/ColumnBottom";

export type ColumnLayoutProps = {
  top?: React.ReactNode;
  main?: React.ReactNode;
  bottom?: React.ReactNode;

  gap?: Scale;

  className?: string;
  style?: React.CSSProperties;
};

export function ColumnLayout({
  top,
  main,
  bottom,

  gap,

  className,
  style,
}: ColumnLayoutProps) {
  return (
    <Flex
      direction="column"
      className={className}
      style={{
        width: "100%",
        minWidth: 0,
        minHeight: 0,
        boxSizing: "border-box",
        gap: gap? space(gap) : "var(--space-4)",
        ...style,
      }}
    >
      <ColumnTop
        style={{
          flexShrink: 0,
        }}
      >
        {top}
      </ColumnTop>

      <ColumnCenter
        style={{
          flex: 1,
          minHeight: 0,
          minWidth: 0,
        }}
      >
        {main}
      </ColumnCenter>

      <ColumnBottom
        style={{
          flexShrink: 0,
        }}
      >
        {bottom}
      </ColumnBottom>
    </Flex>
  );
}