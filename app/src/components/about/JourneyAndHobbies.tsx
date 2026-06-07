import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Card } from "../../ui-lib/semantic-wrappers/Card";
import { Steps } from "../../ui-lib/semantic-wrappers/Steps";
import { StepItem } from "../../ui-lib/patterns/static/StepItem";
import { Scissors, Mountain } from "lucide-react";

const JOURNEY = [
  {
    year: "2021",
    title: "Started coding",
    description: "Began with vanilla JS. Built small projects and learned the basics. Slowly got the hang of it and started exploring more, eventually transitioned into React.",
  },
  {
    year: "2023",
    title: "Discovered backend",
    description: "I started my studies on Software development at Omina, there I gained a much deeper understanding of networking concepts. This was also when I was first introduced to server-side development and building real-world APIs.",
  },
  {
    year: "2025",
    title: "Systems mindset",
    description: "During my studies at Metropolia University of Applied Sciences, I deepened my understanding of software architecture, databases, and infrastructure. That's where I really started to see the bigger picture.",
  },
  {
    year: "2026",
    title: "Building in public",
    description: "After realizing I didn't have a place to properly share my projects and ideas, I created MURSU LAB. A space to document my learning journey, share what I'm building, and think out loud about systems and software development.",
  },
];

const HOBBIES = [
  {
    icon: <Scissors size={20} aria-hidden="true" />,
    title: "Sewing",
    description:
      "Sewing is one of my favorite hobbies. I enjoy the process of turning an idea into something tangible. In many ways, it's similar to coding: you learn a pattern, follow a structure, and gradually bring separate pieces together into a complete creation.",
  },
  {
    icon: <Mountain size={20} aria-hidden="true" />,
    title: "Climbing",
    description:
      "In general I enjoy tryingout different sports and being outside, but if I gotta pick up a favorite on sports category, it is gonna always be bouldering. At its core, it's all about problem-solving. Most attempts end in failure before success, but when you succeed, it is just beautiful! It is surprisingly symilar reward feeling to debugging software.",
  },
];

function JourneyDot({ isLast }: { isLast?: boolean }) {
  return (
    <span
      className={[
        "rounded-full border",
        isLast ? "border-accent bg-accent" : "border-accent",
      ].filter(Boolean).join(" ")}
      style={{ width: "10px", height: "10px", flexShrink: 0, marginTop: "3px" }}
    />
  );
}

export function JourneyAndHobbies() {
  return (
    <Section
      responsiveColumns={{
        base: "1fr",
        md: "1fr 1fr",
      }}
      gap="8"
      className="px-6 py-5 max-w-xl"
      style={{ margin: "0 auto" }}
    >
      {/* Journey */}
      <Stack gap="4">
        <Text className="font-mono text-xs">
          MY JOURNEY
        </Text>

        <Steps direction="column">
          {JOURNEY.map((item, i) => (
            <StepItem
              key={item.year}
              label={
                <JourneyDot
                  isLast={i === JOURNEY.length - 1}
                />
              }
            >
              <Stack gap="1" className="pb-2">
                <Text className="font-mono text-sm">
                  <Text>{item.year}</Text> — {item.title}
                </Text>

                <Text className="font-mono text-xs text-muted">
                  {item.description}
                </Text>
              </Stack>
            </StepItem>
          ))}
        </Steps>
      </Stack>

      {/* Hobbies */}
      <Stack gap="4">
        <Text className="font-mono text-xs">
          OUTSIDE THE TERMINAL
        </Text>

        <Stack gap="3">
          {HOBBIES.map(
            ({ icon, title, description }) => (
              <Card
                key={title}
                className="surface p-4 rounded-lg"
              >
                <Stack gap="3">
                  <Stack
                    direction="row"
                    align="center"
                    gap="3"
                  >
                    {icon}

                    <Text className="font-mono text-sm font-semibold">
                      {title}
                    </Text>
                  </Stack>

                  <Text className="text-sm text-muted">
                    {description}
                  </Text>
                </Stack>
              </Card>
            )
          )}
        </Stack>
      </Stack>
    </Section>
  );
}