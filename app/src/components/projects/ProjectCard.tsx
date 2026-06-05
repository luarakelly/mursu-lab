import { Code2 } from "lucide-react";
import { PrimaryCard } from "../shell/primary-card/PrimaryCard";

type Project = {
  slug: string;
  title: string;
  description: string;
  status: string;
  stack: string[];
  github?: string;
  demo?: string;
};

const STATUS_LABEL: Record<string, string> = {
  "active":    "In Progress",
  "completed": "Shipped",
  "planning":  "Experiment",
  "paused":    "Paused",
};

export function ProjectCard({ project }: { project: Project }) {
  const href = project.demo ?? project.github ?? `/projects/${project.slug}`;
  const cta  = project.github ? "View on GitHub →" : "View project →";

  return (
    <PrimaryCard
      href={href}
      title={project.title}
      description={project.description}
      tags={project.stack}
      meta={STATUS_LABEL[project.status] ?? project.status}
      cta={cta}
      icon={<Code2 size={24} strokeWidth={1.5} className="text-muted" aria-hidden="true" />}
    />
  );
}