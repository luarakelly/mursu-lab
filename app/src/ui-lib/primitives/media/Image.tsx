import React from "react";

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function Image({
  className,
  style,
  ...props
}: ImageProps) {
  return (
    <img
      {...props}
      className={className}
      style={{
        display: "block",
        maxWidth: "100%",
        height: "auto",

        ...style,
      }}
    />
  );
}