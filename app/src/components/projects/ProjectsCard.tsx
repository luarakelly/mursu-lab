import { Code2 } from "lucide-react";
import { ContentCard } from "../shell/content-card/ContentCard";
import { Text } from "../../ui-lib/primitives";
import { Button } from "../../ui-lib/primitives";
import { Stack } from "../../ui-lib/primitives";

type Project = {
  slug: string;
  title: string;
  description: string;
  status: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <ContentCard
      media={<Code2 />}
      title={project.title}
      description={project.description}
      content={
        <Text className="font-mono text-xs">
          {project.stack.join(" / ")}
        </Text>
      }
      footer={
              <Stack
                direction="row"
                justify="space-between"
                align="center"
              >
               <Text className="text-xs">
                  0 min read
                </Text>
      
                <Button
          as="a"
          href={`/projects/${project.slug}`}
        >
          View project →
        </Button>
              </Stack>
            }
      
    />
  );
}