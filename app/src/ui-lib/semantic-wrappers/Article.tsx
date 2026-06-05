import { Stack, StackProps } from "../primitives/layout/Stack";

export type ArticleProps = StackProps;

export function Article({
  className,
  ...props
}: ArticleProps) {
  return (
    <Stack
      as="article"
      fullWidth
      className={
        [className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}