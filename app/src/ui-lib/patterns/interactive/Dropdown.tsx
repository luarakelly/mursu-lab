import * as React from "react";
import { Flex } from "../../primitives/layout/Flex";
import { useClickOutside } from "../hooks/useClickOutside";
import { useEscapeKey } from "../hooks/useEscapeKey";

export type DropdownAlign = "left" | "right";

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
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const rootRef = React.useRef<HTMLDivElement | null>(null);

  function setOpen(next: boolean) {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  }

  useClickOutside(rootRef, () => setOpen(false));
  useEscapeKey(() => setOpen(false), open);

  return (
    <Flex
      ref={rootRef}
      as="div"
      inline
      className={className}
      style={{ position: "relative", ...style }}
    >
      <Flex
        as="div"
        inline
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        {trigger}
      </Flex>

      {open && (
        <Flex
          as="div"
          role="menu"
          direction="column"
          className={contentClassName}
          style={{
            position: "absolute",
            top: "100%",
            left: align === "left" ? 0 : undefined,
            right: align === "right" ? 0 : undefined,
            zIndex: "var(--z-dropdown)",
            minWidth: "12rem",
            ...contentStyle,
          }}
        >
          {content}
        </Flex>
      )}
    </Flex>
  );
}