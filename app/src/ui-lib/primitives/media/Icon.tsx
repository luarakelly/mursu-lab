import React from "react";

import {
  colors,
  sizes,
} from "../../design-tokens";

type IconSizeKey =
  keyof typeof sizes.icon;

export interface IconProps
  extends React.SVGProps<SVGSVGElement> {
  size?: IconSizeKey;

  color?: string;
}

export function Icon({
  size = "md",

  color =
    colors.icon.primary,

  className,
  style,

  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={className}
      width={sizes.icon[size]}
      height={sizes.icon[size]}
      fill={color}
      style={{
        flexShrink: 0,
        ...style,
      }}
    />
  );
}