import * as React from "react";

import {
  FloatingCore,
  FloatingPlacement,
} from "./FloatingCore";
import type { Scale } from "../../types/cssTokens";

export type DropdownAlign =
  | "left"
  | "right";

export type DropdownProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;

  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  align?: DropdownAlign;

  className?: string;
  contentClassName?: string;

  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;

  minWidth?: Scale | React.CSSProperties["minWidth"];
};

export function Dropdown({
  trigger,
  content,

  open,
  defaultOpen,
  onOpenChange,

  align = "left",

  className,
  contentClassName,

  style,
  contentStyle,

  minWidth,
  
}: DropdownProps) {
  const placement: FloatingPlacement =
    align === "right"
      ? "bottom-end"
      : "bottom-start";

  return (
    <FloatingCore
      trigger={trigger}
      content={content}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      triggerMode="click"
      placement={placement}
      contentRole="menu"
      className={className}
      contentClassName={contentClassName}
      style={style}
      contentStyle={{
        minWidth: minWidth ?? "6rem",
        ...contentStyle,
      }}
    />
  );
}