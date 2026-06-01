import { useState, useMemo } from "react";

export type SortDirection = "asc" | "desc";

/**
 * Sorts an array by a key, with direction toggle.
 *
 * @example
 * const { sorted, sortKey, direction, sortBy, toggleDirection } = useSort({
 *   items: posts,
 *   defaultKey: "date",
 *   defaultDirection: "desc",
 * });
 */
export function useSort<T extends Record<string, any>>({
  items,
  defaultKey,
  defaultDirection = "asc",
}: {
  items: T[];
  defaultKey: keyof T;
  defaultDirection?: SortDirection;
}) {
  const [sortKey, setSortKey] = useState<keyof T>(defaultKey);
  const [direction, setDirection] = useState<SortDirection>(defaultDirection);

  const sorted = useMemo(() => {
    return [...items].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      // dates
      if (aVal instanceof Date && bVal instanceof Date) {
        return direction === "asc"
          ? aVal.getTime() - bVal.getTime()
          : bVal.getTime() - aVal.getTime();
      }

      // date strings
      if (typeof aVal === "string" && !isNaN(Date.parse(aVal))) {
        const aTime = new Date(aVal).getTime();
        const bTime = new Date(bVal).getTime();
        return direction === "asc" ? aTime - bTime : bTime - aTime;
      }

      // numbers
      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      // strings
      const aStr = String(aVal ?? "").toLowerCase();
      const bStr = String(bVal ?? "").toLowerCase();
      const cmp = aStr.localeCompare(bStr);
      return direction === "asc" ? cmp : -cmp;
    });
  }, [items, sortKey, direction]);

  function sortBy(key: keyof T) {
    if (key === sortKey) {
      toggleDirection();
    } else {
      setSortKey(key);
      setDirection(defaultDirection);
    }
  }

  function toggleDirection() {
    setDirection((d) => (d === "asc" ? "desc" : "asc"));
  }

  return {
    sorted,
    sortKey,
    direction,
    sortBy,
    toggleDirection,
  };
}