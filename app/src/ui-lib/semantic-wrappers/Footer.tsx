import { Stack, StackProps } from "../primitives/layout/Stack";

export type FooterProps = StackProps;

export function Footer({
  className,
  ...props
}: FooterProps) {
  return (
    <Stack
      as="footer"
      fullWidth
      className={
        [className,]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}