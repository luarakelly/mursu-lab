import { FileText } from "lucide-react";

import { Card } from "../../ui-lib/semantic-wrappers/Card";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";

import { PagesHeader } from "../shell/page-header/PagesHeader";
import { TerminalCards } from "../shell/terminal-card/TerminalCards";


export function TerminalCard() {
  return (
    <TerminalCards
      title={<Text>status</Text>}
      contentList={[
        // INTRO BLOCK
        <Stack key="intro" >
          <Text>&gt; Writing in public</Text>
          <Text>&gt; Documenting the process</Text>
          <Text>&gt; Sharing learnings and failures</Text>
        </Stack>,
        <Stack key="summary" minWidth="3" className="pt-4">
          <Text>Summary:</Text>

        <Card key="stats-1">
          <Stack
            direction="row"
            align="center"
            justify="space-between"
            className="px-2"
          >
            <Stack direction="row" align="center" gap="2">
              <FileText size={16} />
              <Text>Articles Written</Text>
            </Stack>

            <Text>2</Text>
          </Stack>
        </Card>

        <Card key="stats-2">
          <Stack
            direction="row"
            align="center"
            justify="space-between"
            className="px-2"
          >
            <Stack direction="row" align="center" gap="2">
              <FileText size={16} />
              <Text>Categories</Text>
            </Stack>

            <Text>1</Text>
          </Stack>
        </Card>
        </Stack>,
      ]}
    />
  );
}

export function BlogHeader() {
  return (
    <PagesHeader
      title={
        <Text
          as="h1"
          className="font-mono text-sm text-muted"
        >
          /blog
        </Text>
      }
      subtitle={
        <Text className="text-4xl">
          Engineering notes
          <br />
          from the lab
        </Text>
      }
      description={
        <Text className="text-base text-muted max-w-sm">
          Thoughts on building systems, full-stack architecture,
          tools and everything I am learning along the way.
        </Text>
      }
      media={<TerminalCard />}
    />
  );
}