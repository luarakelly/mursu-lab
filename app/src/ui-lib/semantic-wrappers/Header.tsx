import { Stack, StackProps  } from "../primitives/layout/Stack";

export type HeaderProps = {
  sticky?: boolean;
}& StackProps;

export function Header({
  sticky,
  className,
  ...props
}: HeaderProps) {
  return (
    <Stack
      as="header"
      fullWidth
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