import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { TerminalCards } from "../shell/terminal-card/TerminalCards";

type Step = { id: string; label: string; done: boolean };

type Project = {
  title: string;
  description: string;
  status: string;
  stack: string[];
  steps: Step[];
  progress: number;
  slug: string;
};

export function LandingTerminalCard({ project }: { project: Project }) {
  const progressFilled = Math.round(project.progress / 5);
  const progressEmpty = 20 - progressFilled;

  const pendingSteps = project.steps.filter((s) => !s.done);

  return (
    <TerminalCards
      title={<Text className="font-mono text-sm">status</Text>}
      contentList={[
        <Stack key="project" gap="4">

          {/* title + status */}
          <Stack direction="row" align="center" gap="3" wrap="wrap">
            <Text className="font-mono text-sm font-semibold text-accent">
              &gt; {project.title}
            </Text>
            <span className="font-mono text-xs px-2 border rounded-sm text-accent">
              {project.status}
            </span>
          </Stack>

          {/* key-value rows */}
            {[
              { key: "stack", value: project.stack.join(" / ") },
              {
                key: "description",
                value: project.description.length > 52
                  ? project.description.slice(0, 52) + "…"
                  : project.description,
              },
            ].map(({ key, value }) => (
              <Stack key={key} direction="row" gap="2" wrap="nowrap">
                <Text
                  className="font-mono text-xs text-accent no-shrink"
                  style={{ minWidth: "6rem" }}
                >
                  {key}:
                </Text>
                <Text className="font-mono text-xs text-muted">
                  {value}
                </Text>
              </Stack>
            ))}

          {/* progress bar */}
            <Stack direction="row" align="center" gap="2">
              <Text className="font-mono text-xs text-accent">progress:</Text>
              <span className="font-mono text-xs text-accent" style={{ letterSpacing: "-0.02em" }}>
                {"█".repeat(progressFilled)}
                <span className="opacity-20">{"█".repeat(progressEmpty)}</span>
              </span>
              <Text className="font-mono text-xs text-muted">
                {project.progress}%
              </Text>
            </Stack>

        </Stack>,
      ]}
    />
  );
}