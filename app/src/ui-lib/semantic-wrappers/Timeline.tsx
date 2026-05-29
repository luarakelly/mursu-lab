import * as React from "react";
import { StepFragmentLayout, Direction } from "../patterns/static/StepFragmentLayout";

export type TimelineProps = {
  direction?: Direction;
  children: React.ReactNode;

  connectorIcon?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
};

export function Timeline({
  direction = "column",
  children,
  connectorIcon,
  className,
  style,
}: TimelineProps) {
  const items = React.Children.toArray(children);

  return (
    <ol
      className={className}
      style={{
        display: "flex",
        flexDirection: direction === "column" ? "column" : "row",
        gap: "8px",
        width: "100%",
        minWidth: 0,
        padding: 0,
        margin: 0,
        listStyle: "none",

        ...style,
      }}
    >
      {items.map((child, index) => {
        const isLast = index === items.length - 1;

        return (
          <li
            key={index}
            style={{
              display: "flex",
              flexDirection:
                direction === "column" ? "row" : "column",
              alignItems: "center",
              gap: "8px",
              minWidth: 0,
            }}
          >
            <div style={{ minWidth: 0, flex: 1 }}>
              {child}
            </div>

            <StepFragmentLayout
              direction={direction}
              isLast={isLast}
              icon={connectorIcon}
            />
          </li>
        );
      })}
    </ol>
  );
}