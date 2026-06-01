import { useState, useMemo } from "react";

/**
 * Filters an array by one or more active values on a given key.
 * Active values are cumulative — all must match.
 * Toggling an active value removes it.
 *
 * @example
 * // single key, multiple active values (AND logic)
 * const { results, active, toggle, clear } = useFilter({
 *   items: posts,
 *   key: "tags",
 * });
 *
 * // OR logic instead of AND
 * const { results } = useFilter({
 *   items: posts,
 *   key: "tags",
 *   mode: "or",
 * });
 */
export function useFilter<T extends Record<string, any>>({
  items,
  key,
  mode = "and",
}: {
  items: T[];
  key: keyof T;
  mode?: "and" | "or";
}) {
  const [active, setActive] = useState<string[]>([]);

  const results = useMemo(() => {
    if (active.length === 0) return items;

    return items.filter((item) => {
      const value = item[key];
      const values: string[] = Array.isArray(value)
        ? value.map(String)
        : [String(value)];

      if (mode === "and") {
        return active.every((a) => values.includes(a));
      }

      return active.some((a) => values.includes(a));
    });
  }, [items, active, key, mode]);

  function toggle(value: string) {
    setActive((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  }

  function set(values: string[]) {
    setActive(values);
  }

  function clear() {
    setActive([]);
  }

  function isActive(value: string) {
    return active.includes(value);
  }

  return {
    results,
    active,
    toggle,
    set,
    clear,
    isActive,
    hasActive: active.length > 0,
  };
}