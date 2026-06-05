import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Button } from "../../ui-lib/primitives/inputs/Button";
import { Sidebar } from "../shell/sidebar/Sidebar";

const STATUS_OPTIONS = [
  { value: "all",       label: "All Projects" },
  { value: "active",    label: "In Progress" },
  { value: "completed", label: "Shipped" },
  { value: "planning",  label: "Experiments" },
];

type Props = {
  allTags: string[];
  activeTags: string[];
  activeStatus: string;
  search: string;
  totalCount: number;
  onTagToggle: (tag: string) => void;
  onStatusChange: (status: string) => void;
  onSearchChange: (value: string) => void;
};

export function ProjectsSidebar({
  activeStatus,
  onStatusChange,
  ...rest
}: Props) {
  return (
    <Sidebar
      {...rest}
      countLabel="project"
      searchLabel="Search projects"
      tagsLabel="STACK"
    >
      {/* categories slot — only projects has this */}
      <Stack gap="2">
        <Text
          className="font-mono text-xs text-muted"
          style={{ letterSpacing: "0.08em" }}
        >
          CATEGORIES
        </Text>

        <Stack gap="1">
          {STATUS_OPTIONS.map(({ value, label }) => (
            <Button
              key={value}
              onClick={() => onStatusChange(value)}
              aria-pressed={activeStatus === value}
              className={[
                "font-mono text-sm px-2 py-1 rounded-sm",
                activeStatus === value ? "text-accent" : "text-muted",
              ].join(" ")}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Sidebar>
  );
}