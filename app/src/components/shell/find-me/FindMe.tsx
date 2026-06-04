import { Section } from "../../../ui-lib/semantic-wrappers/Section";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Text } from "../../../ui-lib/primitives/typography/Text";
import { Button } from "../../../ui-lib/primitives/inputs/Button";
//import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  {
    //icon: <Github size={20} aria-hidden="true" />,
    label: "GitHub",
    sub: "github.com/luarakelly",
    href: "https://github.com/luarakelly",
  },
  {
    //icon: <Linkedin size={20} aria-hidden="true" />,
    label: "LinkedIn",
    sub: "linkedin.com/in/mursulab",
    href: "https://linkedin.com/in/mursulab",
  },
  {
    //icon: <Mail size={20} aria-hidden="true" />,
    label: "Email",
    sub: "hello@mursulab.com",
    href: "mailto:hello@mursulab.com",
  },
];

export function FindMe() {
  return (
    <Section id="contact">
      <h2 className="sr-only">WHERE TO FIND ME</h2>

      <Stack
        direction="row"
        wrap="wrap"
        gap="6"
        align="flex-start"
        className="px-6 py-5"
        style={{margin: "0 auto"}}
      >
        {/* left — description */}
        <Stack gap="2" minWidth="3" style={{ flex: 1}}>
          <Text
            className="font-mono text-xs"
          >
            WHERE TO FIND ME
          </Text>
          <Text
            className="text-sm text-muted"
          >
            I'm always open to interesting conversations, collaborations,
            and new opportunities.
          </Text>
        </Stack>

        {/* right — links */}
        <Stack
          direction="row"
          wrap="wrap"
          gap="3"
          style={{ flex: 2 }}
        >
          {LINKS.map(({ label, sub, href }) => (
            <Button
              key={label}
              as="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface px-3 py-4 rounded-lg"
              style={{
                flex: 1,
                minWidth: "var(--min-w-3)",

                justifyContent: "flex-start",
              }}
            >
              <Stack gap="0">
                <Text className="font-mono text-sm font-semibold">
                  {label}
                </Text>
                <Text
                  className="font-mono text-xs text-muted"
                >
                  {sub}
                </Text>
              </Stack>
            </Button>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}