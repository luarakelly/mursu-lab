import { useState, useEffect, useRef } from "react";

/**
 * Fetches data from a URL with loading, error, and abort handling.
 * Re-fetches when the URL changes.
 *
 * @example
 * const { data, loading, error, refetch } = useFetch<Post[]>("/api/posts");
 *
 * // with options
 * const { data } = useFetch<User>("/api/me", {
 *   options: { headers: { Authorization: `Bearer ${token}` } },
 *   transform: (raw) => raw.data.user,
 * });
 */
export function useFetch<T>(
  url: string | null,
  {
    options,
    transform,
  }: {
    options?: RequestInit;
    /** Transform the raw response before storing */
    transform?: (raw: any) => T;
  } = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // stable ref so options changes don't retrigger
  const transformRef = useRef(transform);
  transformRef.current = transform;

  const [trigger, setTrigger] = useState(0);

  function refetch() {
    setTrigger((n) => n + 1);
  }

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    async function run() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }

        const raw = await res.json();
        const result = transformRef.current ? transformRef.current(raw) : raw;
        setData(result);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }

    run();

    return () => controller.abort();
  }, [url, trigger]);

  return {
    data,
    loading,
    error,
    refetch,
    isIdle: !loading && !data && !error,
  };
}