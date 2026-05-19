export const colors = {
  // base
  white: "#ffffff",
  black: "#000000",

  // neutral scale
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  // semantic colors
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
  },

  success: {
    500: "#22c55e",
    600: "#16a34a",
  },

  warning: {
    500: "#f59e0b",
    600: "#d97706",
  },

  danger: {
    500: "#ef4444",
    600: "#dc2626",
  },

  text: {
    primary: "#111827",
    secondary: "#6b7280",
    muted: "#9ca3af",
  },

  background: {
    base: "#ffffff",
    subtle: "#f9fafb",
    muted: "#f3f4f6",
  },

  border: {
    light: "#e5e7eb",
    default: "#d1d5db",
    dark: "#9ca3af",
  },
} as const

export type Colors = typeof colors