import { FileText } from "lucide-react";

import { TerminalCardBase } from "../shell/terminal-card/TerminalCardBase";

import { Card } from "../../ui-lib/semantic-wrappers/Card";
import { RowLayout } from "../../ui-lib/patterns/RowlLayout";
import { Stack } from "../../ui-lib/primitives/layout/Stack";

export function BlogTerminalCard() {
  return (
    <TerminalCardBase
      title={<span>blog_status</span>}
      contentList={[
        <Stack 
          key="intro"
        >
          <span>&gt; Writing in public</span>
          <span>&gt; Documenting the process</span>
          <span>&gt; Sharing learnings and failures</span>
          <span>&gt; Summary:</span>
        </Stack>,

        <Card
          key="stats"
          className="pt-2 px-4"
        >
          <RowLayout
            left={<FileText className="h-4 w-4" />}
            center={<span>Articles Written</span>}
            right={<span>2</span>}
          />
        </Card>,
        <Card
          key="stats"
          className="pt-2 px-4"
        >
          <RowLayout
            left={<FileText className="h-4 w-4" />}
            center={<span>Categories</span>}
            right={<span>1</span>}
          />
        </Card>,
      ]}
    />
  );
}