export const shadows = {
  /*
   * =========================================================
   * ELEVATION SYSTEM
   * =========================================================
   */

  none: "none",

  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 4px 6px rgba(0,0,0,0.08)",
  lg: "0 10px 20px rgba(0,0,0,0.12)",
  xl: "0 20px 40px rgba(0,0,0,0.16)",

  /*
   * Semantic elevation
   */

  card: "0 1px 2px rgba(0,0,0,0.06)",
  dropdown: "0 8px 24px rgba(0,0,0,0.12)",
  modal: "0 20px 60px rgba(0,0,0,0.2)",
} as const;

export type Shadows = typeof shadows;