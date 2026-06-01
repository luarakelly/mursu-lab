import * as React from "react";

type ElementType = React.ElementType;

type TextElement =
  | "span"
  | "p"
  | "label"
  | "small"
  | "strong"
  | "em"
  | "blockquote"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type TextProps<C extends ElementType = "span"> = {
  as?: C extends TextElement ? C : TextElement;

  className?: string;
  style?: React.CSSProperties;

  truncate?: boolean;

  children?: React.ReactNode;
};

export function Text<C extends ElementType = "span">({
  as,
  className,
  style,
  truncate = false,
  children,
  ...rest
}: TextProps<C>) {
  const Component = (as || "span") as ElementType;

  return (
    <Component
      {...rest}
      className={className}
      style={{
        minWidth: 0,
        overflowWrap: "break-word",

        ...(truncate && {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }),

        ...style,
      }}
    >
      {children}
    </Component>
  );
}