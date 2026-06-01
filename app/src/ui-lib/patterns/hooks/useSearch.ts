import { useState, useMemo } from "react";

/**
 * Filters an array of items by a search query against specified keys.
 *
 * @example
 * const { results, query, setQuery } = useSearch({
 *   items: posts,
 *   keys: ["title", "description"],
 * });
 *
 * // nested keys
 * const { results } = useSearch({
 *   items: users,
 *   keys: ["profile.name", "profile.email"],
 * });
 */
export function useSearch<T extends Record<string, any>>({
  items,
  keys,
}: {
  items: T[];
  keys: (keyof T | string)[];
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;

    return items.filter((item) =>
      keys.some((key) => {
        // support dot notation: "profile.name"
        const value = String(key)
          .split(".")
          .reduce((obj, k) => obj?.[k], item as any);

        if (Array.isArray(value)) {
          return value.some((v) => String(v).toLowerCase().includes(q));
        }

        return String(value ?? "").toLowerCase().includes(q);
      })
    );
  }, [items, query, keys]);

  function clear() {
    setQuery("");
  }

  return {
    results,
    query,
    setQuery,
    clear,
    hasQuery: query.trim().length > 0,
  };
}