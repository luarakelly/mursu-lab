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
      maxWidth="16rem"
      className="pl-2"
    >
      <Text
        className="font-mono text-sm"
        style={{
          color: "var(--foreground-muted)",
          textAlign: "left",
        }}
      >
        Total:{" "}
        <Text style={{ color: "var(--accent)" }}>
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
            align="center"
            gap="2"
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: "var(--space-2) var(--space-3)",
            }}
          >
            <Search
              size={14}
              aria-hidden="true"
              style={{ color: "var(--foreground-muted)", flexShrink: 0 }}
            />
            <Input
              id="blog-search"
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="font-mono text-sm"
              style={{
                flex: 1,
                minWidth: 0,
                background: "transparent",
                color: "var(--foreground)",
              }}
            />
          </Stack>
        </Stack>

        {/* tags */}
        <Stack gap="2">
          <Text
            className="font-mono text-xs"
            style={{
              color: "var(--foreground-muted)",
              letterSpacing: "0.08em",
            }}
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
                  className="font-mono text-xs"
                  style={{
                    padding: "2px var(--space-2)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid",
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                    color: isActive ? "var(--accent)" : "var(--foreground-muted)",
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
              className="font-mono text-xs"
              style={{ color: "var(--foreground-muted)", alignSelf: "flex-start" }}
            >
              ✕ clear filters
            </Button>
          )}
        </Stack>

    </Aside>
  );
}
