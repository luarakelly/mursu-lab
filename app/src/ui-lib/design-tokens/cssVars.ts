import { colors } from "./colors"
import { spacing } from "./spacing"
import { radius } from "./radius"

export const cssVars = {
  "--color-primary": colors.primary[500],
  "--space-4": spacing[4],
  "--radius-md": radius.md,
} as const

export function applyCssVars(target: HTMLElement = document.documentElement) {
  Object.entries(cssVars).forEach(([key, value]) => {
    target.style.setProperty(key, value)
  })
}

export function flattenTokens(obj: Record<string, any>, prefix = "--") {
  const result: Record<string, string> = {}

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      const nested = flattenTokens(value, `${prefix}-${key}`)
      Object.assign(result, nested)
    } else {
      result[`${prefix}-${key}`] = value
    }
  }

  return result
}