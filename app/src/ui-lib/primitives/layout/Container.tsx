import * as React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

const sizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  full: "100%",
};

export function Container({
  size = "xl",
  style,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      style={{
        width: "100%",
        maxWidth: sizes[size],
        marginInline: "auto",
        paddingInline: 16,
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
}