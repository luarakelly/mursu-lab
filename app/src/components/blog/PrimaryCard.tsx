import { ArrowRight, Clock3, NotebookPen } from "lucide-react"; 
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
  return ( 
    <Card 
      gap="4"
      className="p-4 border-b"
    > 
      <Stack 
        direction="row" 
        align="flex-start" 
        gap="4" 
        wrap="nowrap"
      > 
        {/* IMAGE */}
        <Stack
          align="center"
          justify="center"
          className="rounded-md"
          style={{
            height: "4rem",
            minWidth: "4rem",
            background: "var(--surface-hover)",
          }}
        >
          <NotebookPen
            size={24}
            strokeWidth={1.5}
            className="text-muted"
            aria-hidden="true"
          />
        </Stack>
        
        <Stack 
          gap="2" 
          align="flex-start"
        > 
          <Text as="h2" className="text-base font-semibold"> 
            {post.title} 
          </Text> 

          <Text className="text-sm text-muted leading-relaxed"> 
            {post.description} 
          </Text> 
        </Stack> 

      </Stack> 
      
      {/* tags */} 
      <Stack direction="row" gap="2"> 
        {post.tags.map((tag) => ( 
          <span key={tag} className="font-mono text-xs px-2 py-1 border rounded-sm text-muted" > 
            {tag} 
          </span> 
        ))} 
      </Stack> 
      
      <Stack 
        direction="row" 
        align="center" 
        justify="space-between" 
        gap="3" 
      > 
        <Stack direction="row" align="center" gap="1"> 
          <Clock3 size={13} className="text-muted" /> 

          <Text className="text-xs font-mono text-muted"> 
            {post.readTime} min read 
          </Text> 
        </Stack> 
        
        <Button
          as="a"
          href={`/blog/${post.slug}`}
          className="font-mono text-sm text-accent gap-1"
        >
          Read more
          <ArrowRight size={13} />
        </Button>
      </Stack> 
    </Card> 
  ); 
}