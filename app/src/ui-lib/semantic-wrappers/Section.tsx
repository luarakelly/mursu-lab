import * as React from "react";

export type SectionProps =
  React.ComponentPropsWithoutRef<"section">;

export function Section({
  className,
  style,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={className}
      style={{
        width: "100%",
        minWidth: 0,

        boxSizing: "border-box",

        ...style,
      }}
    >
      {children}
    </section>
  );
}