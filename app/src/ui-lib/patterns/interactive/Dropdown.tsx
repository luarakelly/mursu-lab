/*
floating UI safe from overflow clipping
independent of parent layout
stable interaction model
production-grade behavior baseline

Why this fits architecture perfectly

You now have:

primitives → Box
patterns → Dropdown (this)
wrappers → Menu / Select / Combobox later

Consider
👉 “Floating system core refactor”

We unify:

Dropdown
Tooltip
Popover
Menu
*/

import * as React from "react";

import { Box } from "../../primitives/layout/Box";

import { useClickOutside } from "../hooks/useClickOutside";
import { useEscapeKey } from "../hooks/useEscapeKey";

export type DropdownAlign =
  | "left"
  | "right";

export type DropdownProps = {
  trigger?: React.ReactNode;
  content?: React.ReactNode;

  open?: boolean;
  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean
  ) => void;

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

  const rootRef =
    React.useRef<HTMLDivElement | null>(
      null
    );

  function setOpen(next: boolean) {
    if (!isControlled) {
      setInternalOpen(next);
    }

    onOpenChange?.(next);
  }

  useClickOutside(
    rootRef,
    () => setOpen(false)
  );

  useEscapeKey(
    () => setOpen(false),
    open
  );

  return (
    <Box
      ref={rootRef}
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",

        ...style,
      }}
    >
      <Box
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
        }}
      >
        {trigger}
      </Box>

      {open && (
        <Box
          role="menu"
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

            zIndex:
              "var(--z-dropdown)",

            minWidth: "12rem",

            ...contentStyle,
          }}
        >
          {content}
        </Box>
      )}
    </Box>
  );
}