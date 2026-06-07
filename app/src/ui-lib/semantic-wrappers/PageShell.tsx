import { Grid, GridProps } from "../primitives/layout/Grid";

export type PageShellProps = GridProps;

export function PageShell({
  gap = "12",
  className,
  ...props
}: PageShellProps) {
  return (
    <Grid
      as="main"
      gap={gap}
      className={className}
      {...props}
    />
  );
}