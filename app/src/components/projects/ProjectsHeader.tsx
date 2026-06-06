import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { PagesHeader } from "../shell/page-header/PagesHeader";
import { TerminalCards } from "../shell/terminal-card/TerminalCards";

type Metrics = {
  total: number;
  inProgress: number;
  shipped: number;
  experiments: number;
};

const METRIC_ROWS = (m: Metrics) => [
  { key: "Total Projects",  value: m.total,       sub: "Across personal & open source" },
  { key: "In Progress",     value: m.inProgress,  sub: "Active development" },
  { key: "Shipped",         value: m.shipped,      sub: "Completed & in use" },
  { key: "Experiments",     value: m.experiments,  sub: "Exploring & learning" },
];

export function ProjectsHeader({ metrics }: { metrics: Metrics }) {
  const terminal = (
    <TerminalCards
      title={<Text className="font-mono text-sm">projects_summary</Text>}
      contentList={[
        <Stack key="metrics" gap="3">
          {METRIC_ROWS(metrics).map(({ key, value, sub }) => (
            <Stack key={key} direction="row" align="center" justify="space-between" gap="4">
              <Stack gap="0">
                <Text className="font-mono text-sm">{key}</Text>
                <Text className="font-mono text-xs text-muted">{sub}</Text>
              </Stack>
              <Text className="font-mono text-sm text-accent font-semibold">
                {value}
              </Text>
            </Stack>
          ))}
        </Stack>,
      ]}
    />
  );

  return (
    <PagesHeader
      title={<Text className="font-mono text-xs text-muted">/projects</Text>}
      subtitle={
        <Text as="h1" className="text-4xl">
          Things I build.<br />
          Systems I ship._
        </Text>
      }
      description={
        <Text className="text-base text-muted leading-relaxed max-w-sm">
          A collection of projects I'm working on, have shipped, or am
          experimenting with. Backend, infrastructure, and tools that
          solve real problems.
        </Text>
      }
      media={terminal}
    />
  );
}