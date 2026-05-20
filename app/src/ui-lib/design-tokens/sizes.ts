export const sizes = {
  /*
   * =========================================================
   * SIZE SYSTEM
   * =========================================================
   */

  icon: {
    xs: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
  },

  button: {
    sm: "32px",
    md: "40px",
    lg: "48px",
  },

  input: {
    sm: "32px",
    md: "40px",
    lg: "48px",
  },

  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
} as const;

export type Sizes = typeof sizes;