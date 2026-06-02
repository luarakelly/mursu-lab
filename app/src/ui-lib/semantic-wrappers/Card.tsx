import { Stack, StackProps } from "../primitives/layout/Stack";

export type CardProps = StackProps;

export function Card({
  className,
  ...props
}: CardProps) {
  return (
    <Stack
      as="article"
      className={[
        "overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}