import { ArrowRight, Clock3 } from "lucide-react";
import { Card } from "../../../ui-lib/semantic-wrappers/Card";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Text } from "../../../ui-lib/primitives/typography/Text";
import { Button } from "../../../ui-lib/primitives/inputs/Button";

export type PrimaryCardProps = {
  href: string;
  title: string;
  description: string;
  meta?: string;          // "7 min read", "In progress", etc.
  icon?: React.ReactNode; // thumbnail / icon area
  tags?: string[];
  readTime?: number;
  cta?: string;           // "Read more", "View project", etc.
};

export function PrimaryCard({
  href,
  title,
  description,
  icon,
  tags = [],
  readTime,
  meta,
  cta = "Read more",
}: PrimaryCardProps) {
  return (
    <Card
      className="p-4 border-b"
      direction="row"
      align="flex-start"
      justify="space-between"
      gap="4"
      wrap="wrap"
    >
      {/* top row — icon + title + description */}
      <Stack direction="row" align="flex-start" gap="4" wrap="nowrap">
        {icon && (
          <Stack
            align="center"
            justify="center"
            className="rounded-md no-shrink"
            style={{ height: "4rem", minWidth: "4rem", background: "var(--surface-hover)" }}
          >
            {icon}
          </Stack>
        )}

        <Stack gap="2" align="flex-start">
          <Text as="h2" className="text-base font-semibold">
            {title}
          </Text>
          <Text className="text-sm text-muted leading-relaxed">
            {description}
          </Text>
        </Stack>
      </Stack>

      {/* tags */}
      {tags.length > 0 && (
        <Stack direction="row" wrap="wrap" gap="2" fullWidth>
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 border rounded-sm text-muted"
            >
              {tag}
            </span>
          ))}
        </Stack>
      )}

      {/* bottom row — meta + cta */}
      <Stack
        direction="row"
        align="center"
        justify="space-between"
        gap="3"
        fullWidth
      >
        <Stack direction="row" align="center" gap="1">
          {readTime && (
            <>
              <Clock3 size={13} className="text-muted" aria-hidden="true" />
              <Text className="text-xs font-mono text-muted">
                {readTime} min read
              </Text>
            </>
          )}
          {meta && !readTime && (
            <Text className="text-xs font-mono text-muted">{meta}</Text>
          )}
        </Stack>

        <Button
          as="a"
          href={href}
          className="font-mono text-sm text-accent items-center gap-1"
        >
          {cta}
          <ArrowRight size={13} aria-hidden="true" />
        </Button>
      </Stack>
    </Card>
  );
}