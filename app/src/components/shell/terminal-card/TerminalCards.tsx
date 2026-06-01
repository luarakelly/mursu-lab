import { Card } from "../../../ui-lib/semantic-wrappers/Card";
import { List } from "../../../ui-lib/semantic-wrappers/List";
import { Text } from "../../../ui-lib/primitives/typography/Text";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";

import { Ellipsis } from "lucide-react";

type TerminalCardsProps = {
  title: React.ReactNode;
  contentList?: React.ReactNode[];
};

export function TerminalCards({
  title,
  contentList = [],
}: TerminalCardsProps) {
  return (
    <Card className="rounded-md border">
      
      {/* TOP BAR */}
      <Stack
        direction="row"
        align="center"
        justify="space-between"
        className="border-b px-3 py-2"
      >
        <Text>
          mursu@lab:~$ {title}
        </Text>

        <Ellipsis size={16} />
      </Stack>

      {/* MAIN CONTENT */}
      <Stack className="p-3">
        <List>
          {contentList.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </List>
      </Stack>

      {/* FOOTER / PROMPT */}
      <Stack
        className="border-t px-3 py-2"
      >
        <Text>
          &gt; _
        </Text>
      </Stack>

    </Card>
  );
}