import { Card } from "../../../ui-lib/semantic-wrappers/Card";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Text } from "../../../ui-lib/primitives/typography/Text";
import type { minWidth } from "../../../ui-lib/utils/cssTokensResolver";

export type ContentCardProps = {
  media?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

export function ContentCard({
  media,
  title,
  description,
  content,
  footer,
}: ContentCardProps) {
  return (
    <Card
      className="p-4 border-b"
      gap="4"
    >
      <Stack
        direction="row"
        align="flex-start"
        gap="4"
        wrap="nowrap"
      >
        {media && (
          <Stack
            align="center"
            justify="center"
            className="rounded-md shrink-0"
            style={{
              minWidth: "4rem",
              height: "4rem",
              background: "var(--surface-hover)",
            }}
          >
            {media}
          </Stack>
        )}

        <Stack gap="2">
          <Text
            as="h2"
            className="text-base font-semibold"
          >
            {title}
          </Text>

          {description && (
            <Text className="text-sm text-muted leading-relaxed">
              {description}
            </Text>
          )}
        </Stack>
      </Stack>

      {content}

      {footer}
    </Card>
  );
}