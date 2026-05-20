import React from "react";

type SideBarProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: React.CSSProperties["width"];
};

export function SideBar({
  width = "240px",
  style,
  children,
  ...props
}: SideBarProps) {
  return (
    <aside
      {...props}
      style={{
        width,
        height: "100%",
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </aside>
  );
}