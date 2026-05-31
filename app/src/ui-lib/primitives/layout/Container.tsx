import * as React from "react";

import { Scale } from "../../types/cssTokens";
import { space } from "../../utils/cssTokensResolver";

type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export type ContainerProps =
  React.ComponentPropsWithoutRef<"div"> & {
    size?: ContainerSize;

    paddingX?: Scale;
  };

export function Container({
  size = "lg",

  paddingX = "4",

  className,
  style,

  children,

  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={className}
      style={{
        width: "100%",

        maxWidth: `var(--container-${size})`,

        marginInline: "auto",

        paddingInline: space(paddingX),

        minWidth: 0,

        boxSizing: "border-box",

        ...style,
      }}
    >
      {children}
    </div>
  );
}