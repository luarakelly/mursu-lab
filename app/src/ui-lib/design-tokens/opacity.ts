export const opacity = {
  /*
   * =========================================================
   * OPACITY SCALE
   * =========================================================
   */

  0: 0,
  10: 0.1,
  20: 0.2,
  40: 0.4,
  60: 0.6,
  80: 0.8,
  100: 1,

  /*
   * Semantic usage
   */

  disabled: 0.5,
  muted: 0.7,
  overlay: 0.5,
} as const;

export type Opacity = typeof opacity;