import { Stack, StackProps } from "../primitives/layout/Stack";

export type SectionProps = StackProps;

export function Section({
  className,
  ...props
}: SectionProps) {
  return (
    <Stack
      as="section"
      className={[
        "w-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}