import * as React from "react";

export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void
) {
  React.useEffect(() => {
    function onDown(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!el) return;

      if (!el.contains(event.target as Node)) {
        handler();
      }
    }

    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [ref, handler]);
}