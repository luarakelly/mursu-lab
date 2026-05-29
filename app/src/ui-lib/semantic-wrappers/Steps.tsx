import * as React from "react";
import { Stack } from "../primitives/layout/Stack";

export type StepsProps = {
  direction?: "column" | "row";
  connectorIcon?: React.ReactNode;
  connectorClassName?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Steps({
  direction = "column",
  connectorIcon,
  connectorClassName,
  children,
  className,
  style,
}: StepsProps) {
  const items = React.Children.toArray(children);

  if (direction === "row") {
    return (
      <ol
        className={className}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: 0,
          margin: 0,
          listStyle: "none",
          width: "100%",
          ...style,
        }}
      >
        {items.map((child, index) => {
          const isLast = index === items.length - 1;
          if (!React.isValidElement(child)) return child;

          const childProps = child.props as any;

          return (
            <React.Fragment key={index}>
              <li style={{ display: "flex", justifyContent: "center" }}>
                {React.cloneElement(
                  child as React.ReactElement<any>,
                  {
                    direction,
                    connectorIcon: childProps.connectorIcon ?? connectorIcon,
                    connectorClassName: childProps.connectorClassName ?? connectorClassName,
                  }
                )}
              </li>

              {!isLast && (
                <span
                  aria-hidden="true"
                  className={connectorClassName}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "8px",
                    minWidth: "16px",
                    maxWidth: "80px",
                  }}
                >
                  {connectorIcon ?? (
                    <span
                      style={{
                        height: "1px",
                        width: "100%",
                        background: "currentColor",
                        display: "block",
                      }}
                    />
                  )}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    );
  }

  return (
    <Stack
      as="ol"
      direction="column"
      className={className}
      style={{
        padding: 0,
        margin: 0,
        listStyle: "none",
        width: "100%",
        ...style,
      }}
    >
      {items.map((child, index) => {
        const isLast = index === items.length - 1;
        if (!React.isValidElement(child)) return child;

        const childProps = child.props as any;
        return React.cloneElement(
          child as React.ReactElement<{
            isLast?: boolean;
            direction?: "column" | "row";
            connectorIcon?: React.ReactNode;
            connectorClassName?: string;
          }>,
          {
            isLast,
            direction,
            connectorIcon: childProps.connectorIcon ?? connectorIcon,
            connectorClassName: childProps.connectorClassName ?? connectorClassName,
          }
        );
      })}
    </Stack>
  );
}