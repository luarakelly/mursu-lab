export const borders = {
  /*
   * =========================================================
   * BORDER SYSTEM
   * =========================================================
   */

  width: {
    none: "0px",
    thin: "1px",
    thick: "2px",
  },

  style: {
    solid: "solid",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
} as const;

export type Borders = typeof borders;