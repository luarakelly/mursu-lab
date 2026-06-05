import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Button } from "../../ui-lib/primitives/inputs/Button";
import { List } from "../../ui-lib/semantic-wrappers/List";
import { BookOpen, NotebookPen } from "lucide-react";
import { PrimaryCard } from "../shell/primary-card/PrimaryCard";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: number;
};

export function LatestPosts({ posts }: { posts: Post[] }) {
  return (
    <Section className="py-6 px-5 max-w-xl mx-auto w-full">
      <h2 className="sr-only">Latest posts</h2>

        {/* header */}
        <Stack direction="row" align="center" justify="space-between" wrap="wrap" gap="3" className="border-b">
          <Stack direction="row" align="center" gap="2">
            <BookOpen size={16} className="text-accent" aria-hidden="true" />
            <Text className="font-mono text-xs" style={{ letterSpacing: "0.08em" }}>
              LATEST FROM THE LAB
            </Text>
          </Stack>

          <Button as="a" href="/blog" className="font-mono text-sm text-accent">
            View all posts →
          </Button>
        </Stack>

        <List gap="0">
          {posts.map((post) => (
            <li key={post.slug}>
              <PrimaryCard
                href={`/blog/${post.slug}`}
                title={post.title}
                description={post.description}
                tags={post.tags.slice(0, 3)}
                readTime={post.readTime}
                icon={
                  <NotebookPen
                    size={24}
                    strokeWidth={1.5}
                    className="text-muted"
                    aria-hidden="true"
                  />
                }
              />
            </li>
          ))}
        </List>

    </Section>
  );
}