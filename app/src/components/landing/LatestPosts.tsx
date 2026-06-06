import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Button } from "../../ui-lib/primitives/inputs/Button";
import { List } from "../../ui-lib/semantic-wrappers/List";
import { BookOpen, NotebookPen, Clock } from "lucide-react";
import { ContentCard } from "../shell/content-card/ContentCard";

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
      <Stack
        direction="row"
        align="center"
        justify="space-between"
        wrap="wrap"
        gap="3"
        className="border-b"
      >
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
            <ContentCard
              media={
                <NotebookPen
                  size={24}
                  strokeWidth={1.5}
                  className="text-muted"
                  aria-hidden="true"
                />
              }
              title={
                <a href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </a>
              }
              description={post.description}
              content={
        <Stack
          direction="row"
          wrap="wrap"
          gap="2"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 border rounded-sm"
            >
              {tag}
            </span>
          ))}
        </Stack>
      }
      footer={
        <Stack
          direction="row"
          justify="space-between"
          align="center"
        >
         <Text className="text-xs">
            {post.readTime} min read
          </Text>

          <Button
            as="a"
            href={`/blog/${post.slug}`}
          >
            Read more →
          </Button>
        </Stack>
              }
            />
          </li>
        ))}
      </List>
    </Section>
  );
}