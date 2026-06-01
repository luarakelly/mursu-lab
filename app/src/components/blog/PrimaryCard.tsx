import { Card } from "../../ui-lib/semantic-wrappers/Card";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Button } from "../../ui-lib/primitives/inputs/Button";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: number;
};

export function PrimaryCard({ post }: { post: Post }) {
  const formatted = new Date(post.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Card
      style={{
        padding: "var(--space-4) 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Stack direction="row" gap="4" align="flex-start">

        {/* date + read time */}
        <Stack
          gap="1"
          style={{ flexShrink: 0, width: "7rem", paddingTop: "var(--space-1)" }}
        >
          <Text
            className="font-mono text-sm"
            style={{ color: "var(--accent)" }}
          >
            {formatted}
          </Text>
          <Text
            className="font-mono text-xs"
            style={{ color: "var(--foreground-muted)" }}
          >
            {post.readTime} min read
          </Text>
        </Stack>

        {/* content */}
        <Stack gap="2" style={{ flex: 1, minWidth: 0 }}>
          <Text as="h2" className="text-lg font-semibold">
            {post.title}
          </Text>

          <Text
            className="text-sm"
            style={{ color: "var(--foreground-muted)", lineHeight: 1.6 }}
          >
            {post.description}
          </Text>

          <Stack
            direction="row"
            align="center"
            justify="space-between"
            wrap="wrap"
            gap="2"
          >
            {/* tags — display only, not interactive here */}
            <Stack direction="row" gap="2" wrap="wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs"
                  style={{
                    padding: "2px var(--space-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--foreground-muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </Stack>

            <Button
              as="a"
              href={`/blog/${post.slug}`}
              className="font-mono text-sm"
              style={{ color: "var(--accent)", flexShrink: 0 }}
            >
              Read more →
            </Button>
          </Stack>
        </Stack>

      </Stack>
    </Card>
  );
}