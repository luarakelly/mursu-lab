import { Section } from "../../ui-lib/semantic-wrappers/Section";
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
      <h2 className="sr-only">Tech and tools</h2>

      <Stack gap="5" className="max-w-lg" style={{ margin: "0 auto", width: "100%" }}>

        <Text className="font-mono text-xs" style={{ letterSpacing: "0.08em" }}>
          TECH &amp; TOOLS
        </Text>

        <Stack direction="row" wrap="wrap" gap="6" align="flex-start">
          {TECH.map(({ group, items }) => (
            <Stack key={group} gap="3" minWidth="3" grow={1}>
              <Text className="font-mono text-xs text-muted">{group}</Text>
              <Stack direction="row" wrap="wrap" gap="2">
                {items.map((item) => <Tag key={item} label={item} />)}
              </Stack>
            </Stack>
          ))}
        </Stack>

      </Stack>
    </Section>
  );
}