import React from "react";

export function Divider({
  style,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      {...props}
      style={{
        border: "none",
        ...style,
      }}
    />
  );
}