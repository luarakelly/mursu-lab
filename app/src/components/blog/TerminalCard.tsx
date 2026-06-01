import { FileText } from "lucide-react";

import { TerminalCards } from "../shell/terminal-card/TerminalCards";

import { Card } from "../../ui-lib/semantic-wrappers/Card";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";

export function TerminalCard() {
  return (
    <TerminalCards
      title={<Text>blog_status</Text>}
      contentList={[
        // INTRO BLOCK
        <Stack key="intro" minWidth="3">
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