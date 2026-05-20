import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { breakpoints } from "./breakpoints";
import { zIndex } from "./zIndex";
import { transitions } from "./transitions";
import { opacity } from "./opacity";
import { sizes } from "./sizes";
import { borders } from "./borders";

import { flattenTokens } from "./utils/flattenTokens";

/*
 * =========================================================
 * CSS VARIABLES GENERATOR
 * =========================================================
 *
 * Converts design tokens → CSS custom properties
 */

export const cssVars = {
  ...flattenTokens({
    color: colors,
    space: spacing,
    radius,
    shadow: shadows,
    breakpoint: breakpoints,
    zIndex,
    transition: transitions,
    opacity,
    size: sizes,
    border: borders,
    typography,
  }),
} as const;