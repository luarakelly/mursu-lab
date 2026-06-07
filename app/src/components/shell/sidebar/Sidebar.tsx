import { Aside } from "../../../ui-lib/semantic-wrappers/Aside";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Text } from "../../../ui-lib/primitives/typography/Text";
import { Button } from "../../../ui-lib/primitives/inputs/Button";
import { Input } from "../../../ui-lib/primitives/inputs/Input";
import { Search } from "lucide-react";

export type SearchController = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export type SidebarProps = {
  // stats
  totalCount: number;
  countLabel?: string; // "post", "project", etc.

  search?: SearchController;

  // tags
  allTags: string[];
  activeTags: string[];
  tagsLabel?: string;
  onTagToggle: (tag: string) => void;
  onClearTags?: () => void;

  // extension slot
  children?: React.ReactNode;
};

export function Sidebar({
  totalCount,
  countLabel = "item",

  search,

  allTags,
  activeTags,
  tagsLabel = "TAGS",
  onTagToggle,
  onClearTags,

  children,
}: SidebarProps) {
  return (
    <Aside gap="5" className="p-2">

      {/* STATS */}
      <Text className="font-mono text-sm text-muted">
        Total:{" "}
        <span className="text-accent">{totalCount}</span>{" "}
        {totalCount === 1 ? countLabel : `${countLabel}s`}
      </Text>

      {/* SEARCH */}
      {search && (
        <Stack gap="2">
          <label htmlFor="sidebar-search" className="sr-only">
            {search.label ?? "Search"}
          </label>

          <Stack
            direction="row"
            align="center"
            gap="2"
            wrap="nowrap"
            className="border rounded-sm px-3 py-2"
          >
            <Search size={14} className="text-muted" aria-hidden="true" />

            <Input
              id="sidebar-search"
              type="search"
              placeholder={search.placeholder ?? "Search..."}
              value={search.value}
              onChange={(e) => search.onChange(e.target.value)}
              className="font-mono text-sm"
            />
          </Stack>
        </Stack>
      )}

      {/* EXTENSION SLOT */}
      {children}

      {/* TAGS */}
      <Stack gap="2">
        <Text className="font-mono text-xs text-muted">
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
                  isActive
                    ? "text-accent border-accent"
                    : "text-muted",
                ].join(" ")}
              >
                {tag}
              </Button>
            );
          })}
        </Stack>

        {activeTags.length > 0 && onClearTags && (
          <Button
            onClick={onClearTags}
            className="font-mono text-xs text-muted"
          >
            ✕ clear filters
          </Button>
        )}
      </Stack>

    </Aside>
  );
}