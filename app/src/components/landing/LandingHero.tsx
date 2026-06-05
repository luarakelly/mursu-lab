import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Button } from "../../ui-lib/primitives/inputs/Button";
import { PagesHeader } from "../shell/page-header/PagesHeader";
import { LandingTerminalCard } from "./LandingTerminalCard";

type Step = { id: string; label: string; done: boolean };

type Project = {
  title: string;
  description: string;
  status: string;
  stack: string[];
  steps: Step[];
  progress: number;
  slug: string;
} | null;

export function LandingHero({ project }: { project: Project }) {
  const heroTitle = (
    <Text className="font-mono text-xs text-accent" style={{ letterSpacing: "0.1em" }}>
      /Engineering Journal
    </Text>
  );

  const heroSubtitle = (
    <Text as="h1" className="text-4xl">
      I build systems.<br />
      I share <span className="text-accent">the process.</span>
    </Text>
  );

  const heroDescription = (
    <Stack gap="4">
      <Text className="text-base text-muted leading-relaxed max-w-sm">
        Mursu Lab is my space for exploring real-world engineering —
        from backend architecture and infrastructure to AI tooling
        and developer productivity.
      </Text>

      <Stack direction="row" justify="space-between" gap="3">
        <Button as="a" href="/about" className="btn">
          More about me
        </Button>
        <Button as="a" href="/projects">
          projects →
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <PagesHeader
      title={heroTitle}
      subtitle={heroSubtitle}
      description={heroDescription}
      media={project ? <LandingTerminalCard project={project} /> : undefined}
    />
  );
}