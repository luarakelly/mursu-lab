// TODO: add behaviour like active link in the patterns/interactive and reuse it here, aria-current, etc. 
import { Stack, StackProps } from "../primitives/layout/Stack";

export type NavigationProps = StackProps;

export function Navigation({
  direction,
  align,
  gap,
  className,
  ...props
}: NavigationProps) {
  return (
     <Stack
      as="nav"
      direction={direction ?? "row"}
      gap={gap ?? "4"}
      align={align ?? "center"}
      className={className}
      {...props}
    />
  );
}