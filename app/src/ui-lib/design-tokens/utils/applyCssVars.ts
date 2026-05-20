import { cssVars } from "../cssVars";

export function applyCssVars(target?: HTMLElement) {
  if (typeof document === "undefined") return;

  const el = target ?? document.documentElement;

  for (const [key, value] of Object.entries(cssVars)) {
    el.style.setProperty(key, value);
  }
}