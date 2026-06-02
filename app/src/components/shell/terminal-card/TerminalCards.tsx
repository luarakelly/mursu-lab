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
        className="border-b px-3"
      >
        <Text>
          mursu@lab:~$ {title}
        </Text>

        <Ellipsis size={42} />
      </Stack>

      {/* MAIN CONTENT */}
        <List className="pb-3 px-3">
          {contentList.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </List>


      {/* FOOTER / PROMPT */}
        <Text className="border-t px-3 py-2">
          &gt; _
        </Text>


    </Card>
  );
}