// Future improvement - Be framework agnostic
import * as React from "react";

export function useEscapeKey(handler: () => void, active = true) {
  React.useEffect(() => {
    if (!active) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handler();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handler, active]);
}