import * as React from "react";

import { Box } from "../../primitives/layout/Box";

import {
  RowlLayout,
  type RowlLayoutMode,
  type RowlLayoutOverrides,
} from "../../patterns/RowlLayout";

export type HeaderProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;

  sticky?: boolean;

  layout?: RowlLayoutMode;

  mobileLayout?: RowlLayoutMode;
  tabletLayout?: RowlLayoutMode;
  desktopLayout?: RowlLayoutMode;

  overrides?: RowlLayoutOverrides & {
    header?: React.CSSProperties;
  };

  /*
   * semantic wrapper styling
   */
  className?: string;

  /*
   * actual layout styling
   */
  layoutClassName?: string;

  style?: React.CSSProperties;
  layoutStyle?: React.CSSProperties;
};

export function Header({
  left,
  center,
  right,

  sticky = false,

  layout = "default",

  overrides,

  className,
  layoutClassName,

  style,
  layoutStyle,
}: HeaderProps) {
  return (
    <Box
      as="header"
      className={className}
      style={{
        width: "100%",

        position: sticky ? "sticky" : undefined,
        top: sticky ? 0 : undefined,
        zIndex: sticky ? 50 : undefined,

        boxSizing: "border-box",

        ...overrides?.header,
        ...style,
      }}
    >
      <RowlLayout
        left={left}
        center={center}
        right={right}
        layout={layout}
        className={layoutClassName}
        style={layoutStyle}
        overrides={{
          root: {
            width: "100%",
            minWidth: 0,

            ...overrides?.root,
          },

          left: {
            minWidth: 0,
            ...overrides?.left,
          },

          center: {
            minWidth: 0,
            ...overrides?.center,
          },

          right: {
            minWidth: 0,
            ...overrides?.right,
          },
        }}
      />
    </Box>
  );
}