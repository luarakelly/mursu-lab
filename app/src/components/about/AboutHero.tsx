import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { PagesHeader } from "../shell/page-header/PagesHeader";
import { TerminalCards } from "../shell/terminal-card/TerminalCards";

const WHOAMI_ROWS = [
  { key: "name",      value: "Luara Kelly" },
  { key: "role",      value: "Full-Stack Developer" },
  { key: "location",  value: "Finland" },
  { key: "focus",     value: "Systems, Backend, Developer Tools" },
  { key: "languages", value: "JavaScript, Python, SQL, Java" },
  { key: "interests", value: "Architecture, Infrastructure, AI, Automation" },
  { key: "mindset",   value: "Build → Learn → Share → Repeat" },
];

const whoamiTerminal = (
  <TerminalCards
    title={<Text className="font-mono text-sm">whoami</Text>}
    contentList={[
      <Stack key="whoami" gap="2">
        {WHOAMI_ROWS.map(({ key, value }) => (
          <Stack key={key} direction="row" gap="2" wrap="nowrap">
            <Text
              className="font-mono text-xs text-accent"
              style={{ flexShrink: 0, minWidth: "6rem" }}
            >
              {key}:
            </Text>
            <Text className="font-mono text-xs text-muted">
              {value}
            </Text>
          </Stack>
        ))}
      </Stack>,
    ]}
  />
);

const heroTitle = (
  <Text className="font-mono text-sm text-muted">/about</Text>
);

const heroSubtitle = (
  <Text as="h1" className="text-4xl">
    Full-Stack Developer <br />
    based in <span className="text-accent">Finland._</span>
  </Text>
);

const heroDescription = (
  <Stack gap="4">
    <Text className="text-base text-muted  max-w-sm">
      I build systems, tools, and infrastructure that optimize my workflow and solve real problems. 
      I enjoy clean architecture and code that's easy to maintain.
    </Text>
  </Stack>
);

export function AboutHero() {
  return (
    <PagesHeader
      title={heroTitle}
      subtitle={heroSubtitle}
      description={heroDescription}
      media={whoamiTerminal}
    />
  );
}