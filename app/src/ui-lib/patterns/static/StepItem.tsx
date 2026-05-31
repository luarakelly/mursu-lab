import * as React from "react";
import { Stack } from "../../primitives/layout/Stack";

export type StepItemProps = {
  label?: React.ReactNode;
  connector?: React.ReactNode;
  connectorClassName?: string;
  isLast?: boolean;
  direction?: "row" | "column";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function StepItem({
  label,
  connector,
  connectorClassName,
  isLast = false,
  direction = "column",
  children,
  className,
  style,
}: StepItemProps) {
  const defaultConnectorClass =
    direction === "row"
      ? "step-connector step-connector-horizontal"
      : "step-connector step-connector-vertical";

  const resolvedConnectorClass =
    connectorClassName ?? defaultConnectorClass;

  if (direction === "row") {
    return (
      <Stack
        as="li"
        direction="row"
        align="center"
        wrap="nowrap"
        gap="0"
        style={{ flex: 1, minWidth: 0, ...style }}
        className={className}
      >
        {/* icon + label stacked, natural width */}
        <Stack
          direction="column"
          align="center"
          gap="2"
          wrap="nowrap"
          style={{ flexShrink: 0 }}
        >
          <span style={{ display: "flex" }}>
            {label}
          </span>
          <div style={{ textAlign: "center", minWidth: 0 }}>
            {children}
          </div>
        </Stack>

        {/* connector stretches between items */}
        {!isLast && (
          <span
            aria-hidden="true"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              minWidth: "var(--space-3)",
            }}
          >
            {connector ?? (
              <span
                aria-hidden="true"
                className={resolvedConnectorClass}
              />
            )}
          </span>
        )}
      </Stack>
    );
  }

  // column
  return (
    <Stack
      as="li"
      direction="row"
      align="flex-start"
      wrap="nowrap"
      gap="0"
      className={className}
      style={{ minWidth: 0, ...style }}
    >
      <Stack
        direction="column"
        align="center"
        wrap="nowrap"
        gap="0"
        style={{ flexShrink: 0, alignSelf: "stretch" }}
      >
        <span style={{ display: "flex" }}>
          {label}
        </span>

        {!isLast && (
          <span
            aria-hidden="true"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              marginTop: "var(--space-1)",
            }}
          >
            {connector ?? (
              <span
                aria-hidden="true"
                className={resolvedConnectorClass}
              />
            )}
          </span>
        )}
      </Stack>

      <div
        style={{
          flex: 1,
          minWidth: 0,
          paddingLeft: "var(--space-3)",
          paddingBottom: isLast ? 0 : "var(--space-4)",
        }}
      >
        {children}
      </div>
    </Stack>
  );
}