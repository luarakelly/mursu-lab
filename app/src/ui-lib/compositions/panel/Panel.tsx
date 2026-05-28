import * as React from "react";

import { Box } from "../../primitives/layout/Box";
import { Stack } from "../../primitives/layout/Stack";

export type PanelProps = {
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;

  topToolbar?: React.ReactNode;
  bottomToolbar?: React.ReactNode;

  main?: React.ReactNode;

  className?: string;
  layoutClassName?: string;

  leftSidebarClassName?: string;
  rightSidebarClassName?: string;

  topToolbarClassName?: string;
  bottomToolbarClassName?: string;

  mainClassName?: string;

  style?: React.CSSProperties;
};

export function Panel({
  leftSidebar,
  rightSidebar,

  topToolbar,
  bottomToolbar,

  main,

  className,
  layoutClassName,

  leftSidebarClassName,
  rightSidebarClassName,

  topToolbarClassName,
  bottomToolbarClassName,

  mainClassName,

  style,
}: PanelProps) {
  return (
    <Stack
      className={className}
      style={{
        width: "100%",
        minHeight: "100vh",

        ...style,
      }}
    >
      {topToolbar && (
        <Box className={topToolbarClassName}>
          {topToolbar}
        </Box>
      )}

      <Stack
        direction="row"
        className={layoutClassName}
        style={{
          flex: 1,
          minHeight: 0,
        }}
      >
        {leftSidebar && (
          <Box className={leftSidebarClassName}>
            {leftSidebar}
          </Box>
        )}

        <Box
          className={mainClassName}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {main}
        </Box>

        {rightSidebar && (
          <Box className={rightSidebarClassName}>
            {rightSidebar}
          </Box>
        )}
      </Stack>

      {bottomToolbar && (
        <Box className={bottomToolbarClassName}>
          {bottomToolbar}
        </Box>
      )}
    </Stack>
  );
}