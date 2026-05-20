export const zIndex = {
  /*
   * =========================================================
   * STACKING CONTEXT
   * =========================================================
   */

  base: 0,
  raised: 10,

  dropdown: 100,
  sticky: 200,

  overlay: 1000,
  modal: 1100,
  popover: 1200,
  tooltip: 1300,
  toast: 1400,
} as const;

export type ZIndex = typeof zIndex;