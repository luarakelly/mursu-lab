import * as React from "react";

import { Stack } from "../../primitives/layout/Stack";

export type StepItemProps = {
  label?: React.ReactNode;

  connector?: React.ReactNode;

  isLast?: boolean;

  direction?: "row" | "column";

  children: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;
};

export function StepItem({
  label,
  connector,
  isLast = false,

  direction = "column",

  children,

  className,
  style,
}: StepItemProps) {
  if (direction === "row") {
    return (
      <Stack
        direction="column"
        align="center"
        className={className}
        style={{
          minWidth: 0,
          ...style,
        }}
      >
        <span aria-hidden="true">
          {label}
        </span>

        <div
          style={{
            marginTop: "var(--space-2)",
            textAlign: "center",
            minWidth: 0,
          }}
        >
          {children}
        </div>
      </Stack>
    );
  }

  return (
    <Stack
      as="li"
      direction="row"
      align="flex-start"
      className={className}
      style={{
        minWidth: 0,
        ...style,
      }}
    >
      {label && (
        <Stack
          direction="column"
          align="center"
          style={{
            flexShrink: 0,
            alignSelf: "stretch",
          }}
        >
          <span aria-hidden="true">
            {label}
          </span>

          {!isLast && (
            <span
              aria-hidden="true"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "var(--space-1)",
              }}
            >
              {connector ?? (
                <span
                  style={{
                    width: "1px",
                    alignSelf: "stretch",
                    background: "currentColor",
                    opacity: 0.2,
                  }}
                />
              )}
            </span>
          )}
        </Stack>
      )}

      <div
        style={{
          minWidth: 0,
          flex: 1,
          paddingBottom: isLast
            ? 0
            : "var(--space-4)",
        }}
      >
        {children}
      </div>
    </Stack>
  );
}