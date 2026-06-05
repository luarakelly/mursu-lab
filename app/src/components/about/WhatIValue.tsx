import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
//import { Box, Terminal2, Users, TrendingUp } from "lucide-react";
import { Box, Users, TrendingUp } from "lucide-react";

const VALUES = [
  {
    icon: <Box size={28} aria-hidden="true" />,
    title: "Simplicity",
    description: "Simple systems are easier to build and scale.",
  },
  {
    icon: <Users size={28} aria-hidden="true" />,
    title: "Sharing",
    description: "Documenting helps others and improves myself.",
  },
  {
    icon: <TrendingUp size={28} aria-hidden="true" />,
    title: "Progress",
    description: "Small daily improvements compound.",
  },
];

export function WhatIValue() {
  return (
    <Section
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Text as="h2" className="sr-only">What I value</Text>

      <Stack
        gap="6"
        className="px-6 py-5"
        style={{
          margin: "0 auto",
        }}
      >
        <Text
          className="font-mono text-xs"
        >
          WHAT I VALUE
        </Text>

        <Stack direction="row" wrap="wrap" gap="5">
          {VALUES.map(({ icon, title, description }) => (
            <Stack
              key={title}
              gap="3"
              minWidth="2"
            >
              <span className="text-muted">{icon}</span>
              <Stack gap="1">
                <Text className="font-mono text-sm font-semibold">
                  {title}
                </Text>
                <Text
                  className="font-mono text-xs text-muted"
                >
                  {description}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}