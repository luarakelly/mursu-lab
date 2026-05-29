import { Card } from "../../../ui-lib/semantic-wrappers/Card";
import { ColumnLayout } from "../../../ui-lib/patterns/ColumnLayout";
import { RowLayout } from "../../../ui-lib/patterns/RowlLayout";
import { List } from "../../../ui-lib/semantic-wrappers/List";

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
    <Card className="rounded-xl border px-4 min-w-[20rem]">
      <ColumnLayout
        top={
          <RowLayout
            className="min-h-[4rem] border-b"
            left={<span>mursu@lab:~$ {title}</span>}
            right={<Ellipsis className="h-8 w-8" />}
          />
        }
        main={
          <List>
            {contentList.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </List>
        }
        bottom={
          <span className="py-2 border-t">
            &gt; _
          </span>
        }
      />
    </Card>
  );
}