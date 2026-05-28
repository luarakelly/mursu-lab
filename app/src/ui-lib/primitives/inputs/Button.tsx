import * as React from "react";

type ButtonElement = "button" | "a";

type BaseProps = {
  as?: ButtonElement;
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

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    className,
    style,
    children,
  } = props;

  const mergedStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",

    cursor: "pointer",

    textDecoration: "none",

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
        className={className}
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
      className={className}
      style={mergedStyle}
    >
      {children}
    </button>
  );
}