import { Grid, GridProps } from "../primitives/layout/Grid";

export type AppShellProps = Omit<
  GridProps,
  "rows"
>;

export function AppShell({
  className,
  ...props
}: AppShellProps) {
  return (
    <Grid
      as="body"
      rows="auto 1fr auto"
      fullHeight
      className={className}
      {...props}
    />
  );
}