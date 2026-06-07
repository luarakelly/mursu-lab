import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { Collection } from "../../ui-lib/semantic-wrappers/Collection";

import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";

const TECH = [
  {
    group: "Languages",
    items: ["Python", "SQL", "JavaScript", "Java"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["Node.js", "FastAPI", "Express", "React", "Astro"],
  },
  {
    group: "Databases",
    items: ["MySQL", "SQLite" ],
  },
  {
    group: "Tools & Infrastructure",
    items: ["Docker", "Linux", "Git", "GitHub", "VS Code", "Postman", "SSE"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs px-2 py-1 border rounded-sm text-muted">
      {label}
    </span>
  );
}

export function TechAndTools() {
  return (
    <Section
      className="py-6 px-5"
      style={{
        borderTop: "1px solid var(--border)",
      }}
    >
      <Stack
        gap="5"
        className="max-w-lg"
        style={{
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Text className="font-mono text-xs">
          TECH & TOOLS
        </Text>

        <Collection
          responsiveColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gap="6"
        >
          {TECH.map(({ group, items }) => (
            <Stack key={group} gap="3">
              <Text className="font-mono text-xs text-muted">
                {group}
              </Text>

              <Stack
                direction="row"
                wrap="wrap"
                gap="2"
              >
                {items.map((item) => (
                  <Tag
                    key={item}
                    label={item}
                  />
                ))}
              </Stack>
            </Stack>
          ))}
        </Collection>
      </Stack>
    </Section>
  );
}