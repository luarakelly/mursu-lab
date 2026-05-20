export const spacing = {
  /*
   * =========================================================
   * SPACING SCALE
   * =========================================================
   *
   * Used for padding, margin, gaps, layout spacing.
   * NEVER hardcode spacing in components.
   */

  scale: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
  },

  /*
   * Semantic spacing (recommended for layouts)
   */

  stack: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  inline: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
  },

  section: {
    sm: "24px",
    md: "32px",
    lg: "48px",
    xl: "64px",
  },

  container: {
    sm: "16px",
    md: "24px",
    lg: "32px",
  },
} as const;

export type Spacing = typeof spacing;