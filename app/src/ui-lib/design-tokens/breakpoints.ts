export const breakpoints = {
  /*
   * =========================================================
   * RESPONSIVE BREAKPOINTS
   * =========================================================
   */

  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const breakpointValues = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const media = {
  sm: `(min-width: 640px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1280px)`,
  "2xl": `(min-width: 1536px)`,
} as const;

export type Breakpoints = typeof breakpoints;
export type BreakpointValues = typeof breakpointValues;
export type Media = typeof media; 
