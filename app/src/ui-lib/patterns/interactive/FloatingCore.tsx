import * as React from "react";

import { Flex } from "../../primitives/layout/Flex";
import { useClickOutside } from "../hooks/useClickOutside";
import { useEscapeKey } from "../hooks/useEscapeKey";

export type FloatingPlacement =
  | "bottom-start"
  | "bottom-end"
  | "top-start"
  | "top-end";

export type FloatingTriggerMode =
  | "click"
  | "hover"
  | "manual";

export type FloatingCoreProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;

  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  triggerMode?: FloatingTriggerMode;
  placement?: FloatingPlacement;

  className?: string;
  contentClassName?: string;

  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;

  contentRole?: React.AriaRole;
};

export function FloatingCore({
  trigger,
  content,

  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,

  triggerMode = "click",
  placement = "bottom-start",

  className,
  contentClassName,

  style,
  contentStyle,

  contentRole,
}: FloatingCoreProps) {
  const [internalOpen, setInternalOpen] =
    React.useState(defaultOpen);

  const isControlled =
    controlledOpen !== undefined;

  const open =
    isControlled
      ? controlledOpen
      : internalOpen;

  const rootRef =
    React.useRef<HTMLDivElement | null>(null);

  function setOpen(next: boolean) {
    if (!isControlled) {
      setInternalOpen(next);
    }

    onOpenChange?.(next);
  }

  useClickOutside(rootRef, () => {
    setOpen(false);
  });

  useEscapeKey(() => {
    setOpen(false);
  }, open);

  const triggerProps: React.HTMLAttributes<HTMLDivElement> =
    {};

  if (triggerMode === "click") {
    triggerProps.onClick = () => {
      setOpen(!open);
    };
  }

  if (triggerMode === "hover") {
    triggerProps.onMouseEnter = () => {
      setOpen(true);
    };

    triggerProps.onMouseLeave = () => {
      setOpen(false);
    };
  }

  const positionStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: "var(--z-dropdown)",
  };

  switch (placement) {
    case "bottom-start":
      positionStyle.top = "100%";
      positionStyle.left = 0;
      break;

    case "bottom-end":
      positionStyle.top = "100%";
      positionStyle.right = 0;
      break;

    case "top-start":
      positionStyle.bottom = "100%";
      positionStyle.left = 0;
      break;

    case "top-end":
      positionStyle.bottom = "100%";
      positionStyle.right = 0;
      break;
  }

  return (
    <Flex
      ref={rootRef}
      as="div"
      inline
      className={className}
      style={{
        position: "relative",
        ...style,
      }}
    >
      <Flex
        as="div"
        inline
        {...triggerProps}
      >
        {trigger}
      </Flex>

      {open && (
        <Flex
          as="div"
          role={contentRole}
          className={contentClassName}
          style={{
            ...positionStyle,
            ...contentStyle,
          }}
        >
          {content}
        </Flex>
      )}
    </Flex>
  );
}
