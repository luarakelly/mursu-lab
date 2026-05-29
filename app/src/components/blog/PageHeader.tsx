import { TerminalCard } from "./TerminalCard";
import { PagesHeader } from "../shell/page-header/PagesHeader"; 

export function PageHeader() {
    return (
  <PagesHeader
    title={ <h1 className="text-2xl">/blog</h1> }
    subtitle={
      <span className="text-4xl">
        Engineering notes <br /> from the lab
      </span>
    }
    description={<span className="max-w-[25rem]">
      Thoughts on building systems, full-stack architecture, tools and everything I am learning along the way.
    </span>}
    media={<TerminalCard />}
  />
);
}