import * as React from "react";

type ButtonElement = "button" | "a";

type BaseProps = {
  as?: ButtonElement;

  children?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  as = "button",
  className,
  style,
  children,
  ...props
}: ButtonProps) {
  const Component = as;

  return (
    <Component
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",

        cursor: "pointer",

        textDecoration: "none",

        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}