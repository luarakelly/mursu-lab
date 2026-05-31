import * as React from "react";

export type HeaderProps = {
  sticky?: boolean;

  className?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
};

export function Header({
  sticky = false,

  className,
  style,

  children,
}: HeaderProps) {
  return (
    <header
      className={className}
      style={{
        width: "100%",
        minWidth: 0,

        position: sticky
          ? "sticky"
          : undefined,

        top: sticky
          ? 0
          : undefined,

        zIndex: sticky
          ? 50
          : undefined,

        boxSizing: "border-box",

        ...style,
      }}
    >
      {children}
    </header>
  );
}