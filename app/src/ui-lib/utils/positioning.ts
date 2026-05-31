type Align = "left" | "right";

export function getDropdownPosition(align: Align) {
  return {
    position: "absolute" as const,
    top: "100%",
    left: align === "left" ? 0 : undefined,
    right: align === "right" ? 0 : undefined,
  };
}