import { ArrowRight, Clock3, NotebookPen } from "lucide-react"; 

import { Stack } from "../../ui-lib/primitives/layout/Stack"; 
import { Text } from "../../ui-lib/primitives/typography/Text"; 
import { Button } from "../../ui-lib/primitives/inputs/Button"; 

import { ContentCard } from "../shell/content-card/ContentCard";

type Post = { 
  slug: string; 
  title: string; 
  description: string; 
  date: string; 
  tags: string[]; 
  readTime: number; 
}; 

export function BlogCard({
  post,
}: {
  post: Post;
}) {
  return (
    <ContentCard
      media={
        <NotebookPen
          size={24}
          strokeWidth={1.5}
        />
      }
      title={post.title}
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
  );
}