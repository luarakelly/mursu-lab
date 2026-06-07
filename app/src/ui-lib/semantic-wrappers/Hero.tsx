import { Grid, GridProps } from "../primitives/layout/Grid";

export type HeroProps = GridProps;

export function Hero({
  minColumnWidth = "20rem",
  className,
  ...props
}: HeroProps) {
  return (
    <Grid
      as="header"
      minColumnWidth={minColumnWidth}
      alignItems="center"
      gap="8"
      className={className}
      {...props}
    />
  );
}