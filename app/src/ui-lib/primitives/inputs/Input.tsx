import * as React from "react";

export type InputProps =
  React.ComponentPropsWithoutRef<"input">;

export function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={[
        "w-full",
        "min-w-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}