import { themes, ThemeName } from "../themes";
import { applyCssVars } from "./applyCssVars";

export function createTheme(theme: ThemeName) {
  const selected = themes[theme];

  if (typeof document === "undefined") return;

  const root = document.documentElement;

  // optional: clear old theme class
  root.dataset.theme = theme;

  // apply CSS variables from theme override
  const vars: Record<string, string> = {};

  for (const [group, tokens] of Object.entries(selected.color)) {
    for (const [key, value] of Object.entries(tokens)) {
      vars[`--color-${group}-${key}`] = value;
    }
  }

  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }

  applyCssVars();
}