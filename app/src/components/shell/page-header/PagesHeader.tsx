import { Hero } from "../../../ui-lib/semantic-wrappers/Hero";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";

export function PagesHeader({
  title,
  subtitle,
  description,
  media,
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  media?: React.ReactNode;
}) {
  return (
    <Hero
      className="border-b px-4 py-7 max-w-2xl"
      responsiveColumns={{
        base: "1fr",
        md: "1fr auto",
      }}
      gap="7"
      alignItems="center"
    >
      <Stack gap="2">
        {title}
        {subtitle}
        {description}
      </Stack>

      {media}
    </Hero>
  );
}
 