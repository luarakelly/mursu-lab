import * as React from "react";
import { Stack } from "../../primitives/layout/Stack";

export type StepItemLayoutProps = {
  label?: React.ReactNode;
  connectorIcon?: React.ReactNode;
  connectorClassName?: string;
  children: React.ReactNode;
  isLast?: boolean;
  direction?: "column" | "row";
  className?: string;
  style?: React.CSSProperties;
};

export function StepItem({
  label,
  children,
  isLast = false,
  direction = "column",
  connectorIcon,
  connectorClassName,
  className,
  style,
}: StepItemLayoutProps) {
  if (direction === "row") {
    return (
      <Stack
        direction="column"
        align="center"
        className={className}
        style={{ minWidth: 0, ...style }}
      >
        <span
          aria-hidden="true"
          style={{ display: "flex", alignItems: "center" }}
        >
          {label}
        </span>
        <div style={{ marginTop: "8px", textAlign: "center", minWidth: 0 }}>
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
      style={{ gap: "12px", minWidth: 0, ...style }}
    >
      {label && (
        <Stack
          direction="column"
          align="center"
          style={{ flexShrink: 0, alignSelf: "stretch" }}
        >
          <span
            aria-hidden="true"
            style={{ display: "flex", alignItems: "center" }}
          >
            {label}
          </span>
          {!isLast && (
            <span
              aria-hidden="true"
              className={connectorClassName}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "4px",
              }}
            >
              {connectorIcon ?? (
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
      <div style={{ minWidth: 0, flex: 1, paddingBottom: isLast ? 0 : "16px" }}>
        {children}
      </div>
    </Stack>
  );
}