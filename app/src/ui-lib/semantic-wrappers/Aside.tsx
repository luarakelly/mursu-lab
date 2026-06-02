import { Stack, StackProps } from "../primitives/layout/Stack";

export type AsideProps = StackProps & {
  sticky?: boolean;
};

export function Aside({
  sticky,
  className,
  ...props
}: AsideProps) {
  return (
    <Stack
      as="aside"
      className={[
        sticky && "sticky top-0 z-sticky",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}