export const colors = {
  /*
   * =========================================================
   * RAW PALETTES
   * =========================================================
   *
   * Never consumed directly by components.
   * Used to build semantic tokens and themes.
   */

  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
    },

    gray: {
      1: "#f9fafb",
      2: "#f3f4f6",
      3: "#e5e7eb",
      4: "#d1d5db",
      5: "#9ca3af",
      6: "#6b7280",
      7: "#4b5563",
      8: "#374151",
      9: "#111827",
    },

    blue: {
      1: "#eff6ff",
      2: "#dbeafe",
      5: "#3b82f6",
      6: "#2563eb",
      7: "#1d4ed8",
    },

    green: {
      5: "#22c55e",
      6: "#16a34a",
    },

    yellow: {
      5: "#f59e0b",
      6: "#d97706",
    },

    red: {
      5: "#ef4444",
      6: "#dc2626",
    },
  },

  /*
   * =========================================================
   * SEMANTIC TOKENS
   * =========================================================
   *
   * THESE are consumed by components.
   */

  text: {
    primary: "#111827",
    secondary: "#6b7280",
    tertiary: "#9ca3af",
    inverse: "#ffffff",

    brand: "#2563eb",

    success: "#16a34a",
    warning: "#d97706",
    error: "#dc2626",

    disabled: "#9ca3af",
  },

  background: {
    page: "#ffffff",
    surface: "#f9fafb",
    elevated: "#ffffff",

    subtle: "#f3f4f6",
    muted: "#e5e7eb",

    inverse: "#111827",

    brand: "#2563eb",

    success: "#dcfce7",
    warning: "#fef3c7",
    error: "#fee2e2",
  },

  border: {
    subtle: "#f3f4f6",
    muted: "#e5e7eb",
    default: "#d1d5db",
    strong: "#9ca3af",

    inverse: "#374151",

    brand: "#2563eb",

    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
  },

  icon: {
    primary: "#111827",
    secondary: "#6b7280",
    tertiary: "#9ca3af",
    inverse: "#ffffff",

    brand: "#2563eb",

    success: "#16a34a",
    warning: "#d97706",
    error: "#dc2626",
  },
  alpha: {
  black10: "rgba(0,0,0,0.1)",
  black20: "rgba(0,0,0,0.2)",
  black50: "rgba(0,0,0,0.5)",

  white10: "rgba(255,255,255,0.1)",
},
focus: {
  ring: "#3b82f6",
  outline: "#93c5fd",
},
overlay: {
  backdrop: "rgba(0,0,0,0.5)",
},

  /*
   * =========================================================
   * ACTION COLORS
   * =========================================================
   */

  action: {
    primary: {
      bg: "#2563eb",
      bgHover: "#1d4ed8",
      text: "#ffffff",
      border: "#2563eb",
    },

    secondary: {
      bg: "#f3f4f6",
      bgHover: "#e5e7eb",
      text: "#111827",
      border: "#d1d5db",
    },

    ghost: {
      bg: "transparent",
      bgHover: "#f3f4f6",
      text: "#111827",
      border: "transparent",
    },

    error: {
      bg: "#dc2626",
      bgHover: "#b91c1c",
      text: "#ffffff",
      border: "#dc2626",
    },

    disabled: {
      bg: "#e5e7eb",
      text: "#9ca3af",
      border: "#e5e7eb",
    },
  },

  /*
   * =========================================================
   * FEEDBACK
   * =========================================================
   */

  feedback: {
    success: {
      bg: "#dcfce7",
      text: "#166534",
      border: "#22c55e",
    },

    warning: {
      bg: "#fef3c7",
      text: "#92400e",
      border: "#f59e0b",
    },

    error: {
      bg: "#fee2e2",
      text: "#991b1b",
      border: "#ef4444",
    },

    info: {
      bg: "#dbeafe",
      text: "#1d4ed8",
      border: "#3b82f6",
    },
  },
} as const;

export type Colors = typeof colors;