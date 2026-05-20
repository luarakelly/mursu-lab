export const radius = {
  /*
   * =========================================================
   * BORDER RADIUS SCALE
   * =========================================================
   */

  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",

  /*
   * Semantic radius (recommended)
   */

  control: "8px",   // inputs, buttons
  card: "12px",
  modal: "16px",
} as const;

export type Radius = typeof radius;