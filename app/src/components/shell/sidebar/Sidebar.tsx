import { Aside } from "../../../ui-lib/semantic-wrappers/Aside";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Text } from "../../../ui-lib/primitives/typography/Text";
import { Button } from "../../../ui-lib/primitives/inputs/Button";
import { Input } from "../../../ui-lib/primitives/inputs/Input";
import { Search } from "lucide-react";

export type SidebarProps = {
  allTags: string[];
  activeTags: string[];
  search: string;
  totalCount: number;
  countLabel?: string;        // "post" | "project" — defaults to "item"
  searchLabel?: string;       // screen reader label
  tagsLabel?: string;         // section heading — defaults to "TAGS"
  onTagToggle: (tag: string) => void;
  onSearchChange: (value: string) => void;
  children?: React.ReactNode; // slot for extra sections (e.g. categories)
};

export function Sidebar({
  allTags,
  activeTags,
  search,
  totalCount,
  countLabel = "item",
  searchLabel = "Search",
  tagsLabel = "TAGS",
  onTagToggle,
  onSearchChange,
  children,
}: SidebarProps) {
  return (
    <Aside gap="5" className="p-2" maxWidth="16rem">

      {/* total count */}
      <Text className="font-mono text-sm text-muted">
        Total:{" "}
        <span className="text-accent">{totalCount}</span>{" "}
        {totalCount === 1 ? countLabel : `${countLabel}s`}
      </Text>

      {/* search */}
      <Stack gap="2">
        <label htmlFor="sidebar-search" className="sr-only">
          {searchLabel}
        </label>
        <Stack
          direction="row"
          align="center"
          gap="2"
          className="border rounded-sm px-3 py-2"
        >
          <Search size={14} className="text-muted no-shrink" aria-hidden="true" />
          <Input
            id="sidebar-search"
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="font-mono text-sm"
          />
        </Stack>
      </Stack>

      {/* extra sections injected by consumer (e.g. categories) */}
      {children}

      {/* tags */}
      <Stack gap="2">
        <Text
          className="font-mono text-xs text-muted"
          style={{ letterSpacing: "0.08em" }}
        >
          {tagsLabel}
        </Text>

        <Stack direction="row" wrap="wrap" gap="2">
          {allTags.map((tag) => {
            const isActive = activeTags.includes(tag);
            return (
              <Button
                key={tag}
                onClick={() => onTagToggle(tag)}
                aria-pressed={isActive}
                className={[
                  "font-mono text-xs px-2 border rounded-sm",
                  isActive ? "text-accent border-accent" : "text-muted",
                ].join(" ")}
              >
                {tag}
              </Button>
            );
          })}
        </Stack>

        {activeTags.length > 0 && (
          <Button
            onClick={() => activeTags.forEach((t) => onTagToggle(t))}
            className="font-mono text-xs text-muted"
          >
            ✕ clear filters
          </Button>
        )}
      </Stack>

    </Aside>
  );
}