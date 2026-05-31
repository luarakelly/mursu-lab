// ui-lib/utils/cssTokensResolver.ts

import type { Scale } from "../types/cssTokens";

const SCALE_KEYS = new Set(["0","1","2","3","4","5","6","7","8","9"]);

function isScale(value: unknown): value is Scale {
  return typeof value === "string" && SCALE_KEYS.has(value);
}

export function space(
  value?: Scale | React.CSSProperties["gap"]
): React.CSSProperties["gap"] | undefined {
  if (value === undefined) return undefined;
  if (isScale(value)) {
    return value === "0" ? 0 : `var(--space-${value})`;
  }
  // raw CSS passthrough: "1rem", "8px", "var(--my-gap)", etc.
  return value as React.CSSProperties["gap"];
}

export function minWidth(
  value?: Scale | React.CSSProperties["minWidth"]
): React.CSSProperties["minWidth"] | undefined {
  if (value === undefined) return undefined;
  if (isScale(value)) {
    return value === "0" ? 0 : `var(--min-w-${value})`;
  }
  // raw CSS passthrough: "100%", "20rem", "var(--my-width)", etc.
  return value as React.CSSProperties["minWidth"];
}