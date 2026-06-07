import { Section } from "../../ui-lib/semantic-wrappers/Section";

import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";

import { Steps } from "../../ui-lib/semantic-wrappers/Steps";
import { StepItem } from "../../ui-lib/patterns/static/StepItem";

import {
  BarChart2,
  FileText,
  FolderOpen,
  CircleDot,
} from "lucide-react";

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

export function BuildingInPublic({
  metrics,
}: {
  metrics: Metrics;
}) {
  return (
    <Section className="py-6 px-5">
  <h2 className="sr-only">
    Building in public
  </h2>

  <Stack
    gap="6"
    justify="space-around"
    className="max-w-4xl mx-auto w-full p-5 border rounded-md"
  >
    {/* title */}
    <Stack
      direction="row"
      align="center"
      gap="2"
    >
      <BarChart2 size={16} />
      <Text className="font-mono text-md">
        BUILDING IN PUBLIC
      </Text>
    </Stack>

    {/* responsive 2-column area */}
    <Section
      responsiveColumns={{
        base: "1fr",
        md: "1fr 1fr",
      }}
      gap="6"
    >
      {/* metrics */}
      <Stack gap="4">
        <Text className="font-mono text-sm text-muted">
          METRICS
        </Text>

        <Stack gap="3">
          {METRIC_ITEMS(metrics).map(
            ({ icon, value, label }) => (
              <Stack
                key={label}
                direction="row"
                align="center"
                gap="3"
              >
                {icon}

                <Stack gap="0">
                  <Text className="font-semibold text-lg">
                    {value}
                  </Text>

                  <Text className="font-mono text-xs text-muted">
                    {label}
                  </Text>
                </Stack>
              </Stack>
            )
          )}
        </Stack>
      </Stack>

      {/* milestones */}
      <Stack gap="4">
        <Text className="font-mono text-sm text-muted">
          MILESTONES
        </Text>

        <Steps
          direction="column"
          connectorClassName="line-dotted"
        >
          {MILESTONES.map((m) => (
            <StepItem
              key={m.project}
              label={
                <CircleDot
                  size={12}
                  className="text-accent"
                />
              }
            >
              <Text className="font-mono text-sm">
                {m.project}
              </Text>
            </StepItem>
          ))}
        </Steps>
      </Stack>
    </Section>
  </Stack>
</Section>
  );
}