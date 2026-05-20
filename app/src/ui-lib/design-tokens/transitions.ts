export const transitions = {
  /*
   * =========================================================
   * MOTION SYSTEM
   * =========================================================
   */

  duration: {
    fast: "120ms",
    normal: "200ms",
    slow: "300ms",
  },

  easing: {
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export type Transitions = typeof transitions;