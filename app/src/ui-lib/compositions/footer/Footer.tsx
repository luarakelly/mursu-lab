import * as React from "react";

import { Box } from "../../primitives/layout/Box";

import {
  RowlLayout,
  type RowlLayoutMode,
  type RowlLayoutOverrides,
} from "../../patterns/RowlLayout";

export type FooterProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;

  layout?: RowlLayoutMode;

  overrides?: RowlLayoutOverrides & {
    footer?: React.CSSProperties;
  };

  /*
   * semantic wrapper styling
   */
  className?: string;

  /*
   * layout styling
   */
  layoutClassName?: string;

  style?: React.CSSProperties;
  layoutStyle?: React.CSSProperties;
};

export function Footer({
  left,
  center,
  right,

  layout = "default",

  overrides,

  className,
  layoutClassName,

  style,
  layoutStyle,
}: FooterProps) {
  return (
    <Box
      as="footer"
      className={className}
      style={{
        width: "100%",
        boxSizing: "border-box",

        ...overrides?.footer,
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