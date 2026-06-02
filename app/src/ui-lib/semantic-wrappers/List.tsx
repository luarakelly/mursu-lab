import { Stack, StackProps } from "../primitives/layout/Stack";

export type ListProps = StackProps;

export function List({
  direction,
  gap,
  className,
  ...props
}: ListProps) {
  return (
    <Stack
      as="ul"
      direction={direction ?? "column"}
      gap={gap ?? "4"}
      className={[
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}