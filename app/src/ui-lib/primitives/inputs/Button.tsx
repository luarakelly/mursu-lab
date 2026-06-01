import * as React from "react";

import { Scale } from "../../types/cssTokens";
import { space } from "../../utils/cssTokensResolver";

type ButtonElement = "button" | "a";

type BaseProps = {
  as?: ButtonElement;

  gap?: Scale;

  fullWidth?: boolean;

  children?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
};

type ButtonAsButton = BaseProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps
  > & {
    as?: "button";
  };

type ButtonAsAnchor = BaseProps &
  Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseProps
  > & {
    as: "a";
  };

export type ButtonProps =
  | ButtonAsButton
  | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    gap = "2",

    fullWidth = false,

    className,
    style,

    children,
  } = props;

  const mergedStyle: React.CSSProperties = {
    alignItems: "center",
    justifyContent: "center",

    gap: space(gap),

    width: fullWidth
      ? "100%"
      : undefined,

    minHeight: "var(--size-touch)",

    whiteSpace: "nowrap",

    cursor: "pointer",

    textDecoration: "none",

    boxSizing: "border-box",

    ...style,
  };

  if (props.as === "a") {
    const {
      as,
      ...anchorProps
    } = props;

    return (
      <a
        {...anchorProps}
        className={`show-inline-flex ${className ?? ""}`}
        style={mergedStyle}
      >
        {children}
      </a>
    );
  }

  const {
    as,
    type,
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      type={type ?? "button"}
      className={`show-inline-flex ${className ?? ""}`}
      style={mergedStyle}
    >
      {children}
    </button>
  );
}