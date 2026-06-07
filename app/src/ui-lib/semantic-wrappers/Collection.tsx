import { Grid, GridProps } from "../primitives/layout/Grid";

export type CollectionProps = GridProps;

export function Collection({
  minColumnWidth = "18rem",
  gap = "4",
  className,
  ...props
}: CollectionProps) {
  return (
    <Grid
      as="ul"
      minColumnWidth={minColumnWidth}
      gap={gap}
      className={className}
      {...props}
    />
  );
}