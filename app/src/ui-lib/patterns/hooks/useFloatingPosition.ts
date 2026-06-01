import * as React from "react";

export type FloatingAlign =
  | "left"
  | "right";

export type FloatingPosition = {
  top: number;
  left: number;
};

export function useFloatingPosition(
  open: boolean,
  triggerRef: React.RefObject<HTMLElement | null>,
  align: FloatingAlign = "left"
) {
  const [position, setPosition] =
    React.useState<FloatingPosition>({
      top: 0,
      left: 0,
    });

  React.useLayoutEffect(() => {
    if (!open) return;

    const trigger =
      triggerRef.current;

    if (!trigger) return;

    function update() {
      const rect =
        trigger.getBoundingClientRect();

      const top =
        rect.bottom + window.scrollY;

      const left =
        align === "right"
          ? rect.right + window.scrollX
          : rect.left + window.scrollX;

      setPosition({
        top,
        left,
      });
    }

    update();

    window.addEventListener(
      "resize",
      update
    );

    window.addEventListener(
      "scroll",
      update,
      true
    );

    return () => {
      window.removeEventListener(
        "resize",
        update
      );

      window.removeEventListener(
        "scroll",
        update,
        true
      );
    };
  }, [
    open,
    align,
    triggerRef,
  ]);

  return position;
}