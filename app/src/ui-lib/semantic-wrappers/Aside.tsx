// ui-lib/semantic-wrappers/Aside.tsx
import * as React from "react";

export type AsideProps = React.ComponentPropsWithoutRef<"aside">;

export function Aside({ className, style, children, ...props }: AsideProps) {
  return (
    <aside
      {...props}
      className={className}
      style={{
        minWidth: 0,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </aside>
  );
}