import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Steps } from "../../ui-lib/semantic-wrappers/Steps";
import { StepItem } from "../../ui-lib/patterns/static/StepItem";
import { BarChart2, FileText, FolderOpen, CircleDot } from "lucide-react";

type Metrics = {
  projectsInProgress: number;
  articlesPublished: number;
};

const MILESTONES = [
  { project: "Project Setup Framework" },
  { project: "Personal UI SDK" },
  { project: "Engineering Journal" },
];

const METRIC_ITEMS = (metrics: Metrics) => [
  {
    icon: <FolderOpen size={18} aria-hidden="true" />,
    value: metrics.projectsInProgress,
    label: "Projects in progress",
  },
  {
    icon: <FileText size={18} aria-hidden="true" />,
    value: metrics.articlesPublished,
    label: "Articles published",
  },
];

export function BuildingInPublic({ metrics }: { metrics: Metrics }) {
  return (
    <Section className="py-6 px-5">
      <h2 className="sr-only">Building in public</h2>

      <Stack
        gap="6"
        className="max-w-xl mx-auto w-full border rounded-lg p-5"
      >
        {/* section label */}
        <Stack direction="row" align="center" gap="2">
          <BarChart2 size={16} className="text-accent" aria-hidden="true" />
          <Text className="font-mono text-xs">
            BUILDING IN PUBLIC
          </Text>
        </Stack>

        <Stack direction="row" wrap="wrap" gap="6" align="center">

          {/* metrics */}
          <Stack gap="4" minWidth="3" grow={1}>
            <Text className="font-mono text-xs text-muted">
              METRICS
            </Text>

            <Stack gap="3">
              {METRIC_ITEMS(metrics).map(({ icon, value, label }) => (
                <Stack key={label} direction="row" align="center" gap="3">
                  <span className="text-muted">{icon}</span>
                  <Stack gap="0">
                    <Text className="font-semibold text-lg">{value}</Text>
                    <Text className="font-mono text-xs text-muted">{label}</Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>

          {/* milestones — uses Steps */}
          <Stack gap="4" minWidth="4" grow={2}>
            <Text className="font-mono text-xs text-muted">
              MILESTONES
            </Text>

            <Steps direction="column" connectorClassName="line-dotted">
              {MILESTONES.map((m) => (
                <StepItem
                  key={m.project}
                  label={<CircleDot size={12} className="text-accent" />}
                >
                  <Text className="font-mono text-sm">{m.project}</Text>
                </StepItem>
              ))}
            </Steps>
          </Stack>

        </Stack>
      </Stack>
    </Section>
  );
}