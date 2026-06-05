import { TerminalCard } from "./TerminalCard";
import { PagesHeader } from "../shell/page-header/PagesHeader"; 
import { Text } from "../../ui-lib/primitives/typography/Text";


export function PageHeader() {
    return (
  <PagesHeader
    title={ <Text as="h1" className="font-mono text-sm text-muted">/blog</Text> }
    subtitle={
      <Text className="text-4xl">
        Engineering notes <br /> from the lab
      </Text>
    }
    description={<Text className="text-base text-muted  max-w-sm">
      Thoughts on building systems, full-stack architecture, tools and everything I am learning along the way.
    </Text>}
    media={<TerminalCard />}
  />
);
}