import * as React from "react";

import { Box } from "../../primitives/layout/Box";

export type DropdownAlign =
  | "left"
  | "right";

export type DropdownProps = {
  trigger?: React.ReactNode;
  content?: React.ReactNode;

  open?: boolean;
  defaultOpen?: boolean;

  onOpenChange?: (open: boolean) => void;

  align?: DropdownAlign;

  className?: string;
  contentClassName?: string;

  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
};

export function Dropdown({
  trigger,
  content,

  open: controlledOpen,
  defaultOpen = false,

  onOpenChange,

  align = "left",

  className,
  contentClassName,

  style,
  contentStyle,
}: DropdownProps) {
  const [internalOpen, setInternalOpen] =
    React.useState(defaultOpen);

  const isControlled =
    controlledOpen !== undefined;

  const open =
    isControlled
      ? controlledOpen
      : internalOpen;

  function setOpen(next: boolean) {
    if (!isControlled) {
      setInternalOpen(next);
    }

    onOpenChange?.(next);
  }

  return (
    <Box
      className={className}
      style={{
        position: "relative",
        display: "inline-block",

        ...style,
      }}
    >
      <Box
        onClick={() => setOpen(!open)}
      >
        {trigger}
      </Box>

      {open && (
        <Box
          className={contentClassName}
          style={{
            position: "absolute",
            top: "100%",

            left:
              align === "left"
                ? 0
                : undefined,

            right:
              align === "right"
                ? 0
                : undefined,

            zIndex: 100,

            ...contentStyle,
          }}
        >
          {content}
        </Box>
      )}
    </Box>
  );
}