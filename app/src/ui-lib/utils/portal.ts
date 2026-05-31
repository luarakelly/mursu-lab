/**
 * Portal
 * Renders children outside the normal React DOM tree (into document.body).
 *
 * Why:
 * - Used for UI that must escape layout constraints (modals, tooltips, overlays)
 * - Prevents z-index and overflow issues inside parent containers
 * - Avoids SSR/hydration issues by only rendering after mount
 *
 * Note:
 * - This component waits for client-side mount before rendering to avoid
 *   "document is not defined" and hydration mismatches.
 */

import * as React from "react";
import { createPortal } from "react-dom";

export function Portal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}