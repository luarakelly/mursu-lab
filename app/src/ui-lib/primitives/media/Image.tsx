import * as React from "react";

export type ImageProps =
  React.ImgHTMLAttributes<HTMLImageElement> & {
    objectFit?: React.CSSProperties["objectFit"];
  };

export function Image({
  objectFit,

  loading = "lazy",
  decoding = "async",

  className,
  style,

  ...props
}: ImageProps) {
  return (
    <img
      {...props}
      loading={loading}
      decoding={decoding}
      className={className}
      style={{
        display: "block",

        maxWidth: "100%",

        height: "auto",

        objectFit,

        boxSizing: "border-box",

        ...style,
      }}
    />
  );
}