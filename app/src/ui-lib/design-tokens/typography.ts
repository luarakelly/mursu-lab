export const typography = {
  /*
   * =========================================================
   * TYPOGRAPHY SCALE
   * =========================================================
   */

  fontFamily: {
    sans: "system-ui, sans-serif",
    mono: "ui-monospace, monospace",
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  /*
   * Semantic text styles (VERY important for production)
   */

  textStyle: {
    bodySm: {
      fontSize: "14px",
      lineHeight: 1.5,
      fontWeight: 400,
    },

    bodyMd: {
      fontSize: "16px",
      lineHeight: 1.6,
      fontWeight: 400,
    },

    headingSm: {
      fontSize: "18px",
      lineHeight: 1.4,
      fontWeight: 600,
    },

    headingMd: {
      fontSize: "24px",
      lineHeight: 1.3,
      fontWeight: 700,
    },

    headingLg: {
      fontSize: "32px",
      lineHeight: 1.2,
      fontWeight: 700,
    },
  },
} as const;

export type Typography = typeof typography;