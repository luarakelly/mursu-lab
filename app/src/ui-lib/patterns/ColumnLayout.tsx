import * as React from "react";

import { Flex } from "../primitives/layout/Flex";

import { Top } from "../slots/Top";
import { Main } from "../slots/Main";
import { Bottom } from "../slots/Bottom";

export type ColumnMode =
  | "default"
  | "fill"
  | "split";

export type ColumnOverrides = {
  root?: React.CSSProperties;

  top?: React.CSSProperties;
  main?: React.CSSProperties;
  bottom?: React.CSSProperties;
};

export type ColumnProps = {
  top?: React.ReactNode;
  main?: React.ReactNode;
  bottom?: React.ReactNode;

  /**
   * Layout behavior preset
   */
  layout?: ColumnMode;

  /**
   * Allows structural overrides
   */
  overrides?: ColumnOverrides;

  className?: string;
  style?: React.CSSProperties;
};

export function ColumnLayout({
  top,
  main,
  bottom,

  layout = "default",

  overrides,

  className,
  style,
}: ColumnProps) {
  return (
    <Flex
      direction="column"
      className={className}
      style={{
        width: "100%",
        minWidth: 0,
        minHeight: 0,

        gap: "var(--space-4)",

        boxSizing: "border-box",

        ...overrides?.root,
        ...style,
      }}
    >
      {/* TOP */}
      <Top
        style={{
          flexShrink: 0,

          ...overrides?.top,
        }}
      >
        {top}
      </Top>

      {/* MAIN */}
      <Main
        style={{
          minWidth: 0,
          minHeight: 0,

          flex:
            layout === "fill"
              ? 1
              : layout === "split"
              ? 1
              : undefined,

          ...overrides?.main,
        }}
      >
        {main}
      </Main>

      {/* BOTTOM */}
      <Bottom
        style={{
          flexShrink: 0,

          ...overrides?.bottom,
        }}
      >
        {bottom}
      </Bottom>
    </Flex>
  );
}