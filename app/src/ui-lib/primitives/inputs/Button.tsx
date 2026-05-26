import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a";

  fullWidth?: boolean;

  /**
   * Escape hatch for system composition
   */
  style?: React.CSSProperties;
  className?: string;
}

export function Button({
  as,
  fullWidth = false,
  className,
  style,
  children,
  ...props
}: ButtonProps) {
  const Component: any = as ?? "button";

  return (
    <Component
      {...props}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        width: fullWidth ? "100%" : undefined,

        cursor: "pointer",
        userSelect: "none",

        textDecoration: "none",

        border: "none",
        background: "transparent",

        padding: 0,
        margin: 0,

        ...style,
      }}
    >
      {children}
    </Component>
  );
}