export const typography = {
  fontFamily: {
    sans: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial`,
    mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas`,
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

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const

export type Typography = typeof typography