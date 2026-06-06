import { Aside } from "../../ui-lib/semantic-wrappers/Aside";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Button } from "../../ui-lib/primitives/inputs/Button";
import { Search } from "lucide-react";
import { Input } from "../../ui-lib/primitives/inputs/Input";

type Props = {
  allTags: string[];
  activeTags: string[];
  search: string;
  onTagToggle: (tag: string) => void;
  onSearchChange: (value: string) => void;
};

export function Sidebar({
  allTags,
  activeTags,
  search,
  onTagToggle,
  onSearchChange,
}: Props) {
  return (
    <Aside
      gap="5"
      className="p-2"
    >
      <Text
        className="font-mono text-sm text-muted"
      >
        Total:{" "}
        <Text>
          {allTags.length}
        </Text>{" "}
        {allTags.length === 1 ? "post" : "posts"}
      </Text>

        {/* search */}
        <Stack gap="2">
          <label
            htmlFor="blog-search"
            className="sr-only"
          >
            Search articles
          </label>

          <Stack
            direction="row"
            wrap="nowrap"
            align="center"
            gap="2"
            className=" text-muted border rounded-sm px-2 py-3"
          >
            <Search
              size={14}
              aria-hidden="true"
              className="text-muted"
            />
            <Input
              id="blog-search"
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="font-mono"
            />
          </Stack>
        </Stack>

        {/* tags */}
        <Stack gap="2">
          <Text
            className="font-mono text-xs text-muted"
          >
            TAGS
          </Text>

          <Stack direction="row" wrap="wrap" gap="2">
            {allTags.map((tag) => {
              const isActive = activeTags.includes(tag);
              return (
                <Button
                  key={tag}
                  onClick={() => onTagToggle(tag)}
                  aria-pressed={isActive}
                  className="font-mono text-xs text-muted px-4 border rounded-sm"
                  style={{
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                  }}
                >
                  {tag}
                </Button>
              );
            })}
          </Stack>

          {/* clear filters — only shown when something is active */}
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
