import { Section } from "../../../ui-lib/semantic-wrappers/Section";
import { Collection } from "../../../ui-lib/semantic-wrappers/Collection";

import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Text } from "../../../ui-lib/primitives/typography/Text";
import { Button } from "../../../ui-lib/primitives/inputs/Button";

const LINKS = [
  {
    label: "GitHub",
    sub: "github.com/luarakelly",
    href: "https://github.com/luarakelly",
  },
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/luara-kelly-silva/",
    href: "https://www.linkedin.com/in/luara-kelly-silva/",
  },
  {
    label: "Email",
    sub: "lua.kellly@gmail.com",
    href: "mailto:lua.kellly@gmail.com",
  },
];

export function FindMe() {
  return (
    <Section
      id="contact"
      responsiveColumns={{
        base: "1fr",
        md: "1fr 2fr",
      }}
      gap="8"
      className="px-6 py-8 max-w-4xl mx-auto"
    >
      <h2 className="sr-only">
        Where to find me
      </h2>

      {/* description */}
      <Stack gap="2">
        <Text className="font-mono text-xs">
          WHERE TO FIND ME
        </Text>

        <Text className="text-sm text-muted">
          I'm always open to interesting conversations,
          collaborations and new opportunities.
        </Text>
      </Stack>

      {/* links */}
      <Collection
        minColumnWidth="12rem"
        gap="3"
      >
        {LINKS.map(({ label, sub, href }) => (
          <Button
            key={label}
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="surface border rounded-lg px-4 py-4"
          >
            <Stack gap="1">
              <Text className="font-mono text-sm font-semibold">
                {label}
              </Text>

              <Text className="font-mono text-xs text-muted">
                {sub}
              </Text>
            </Stack>
          </Button>
        ))}
      </Collection>
    </Section>
  );
}