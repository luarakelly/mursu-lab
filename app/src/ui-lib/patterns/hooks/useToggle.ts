import { useState, useCallback } from "react";

/**
 * Boolean toggle with explicit set methods.
 *
 * @example
 * const [open, { toggle, on, off, set }] = useToggle(false);
 *
 * <button onClick={toggle}>Toggle</button>
 * <button onClick={on}>Open</button>
 * <button onClick={off}>Close</button>
 */
export function useToggle(
  initial = false
): [boolean, { toggle: () => void; on: () => void; off: () => void; set: (v: boolean) => void }] {
  const [value, setValue] = useState(initial);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const set = useCallback((v: boolean) => setValue(v), []);

  return [value, { toggle, on, off, set }];
}