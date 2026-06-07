import { useMemo, useEffect, useState } from "react";

import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { List } from "../../ui-lib/semantic-wrappers/List";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Button } from "../../ui-lib/primitives/inputs/Button";
import { Pagination } from "../../ui-lib/patterns/interactive/Pagination";

import { useSearch } from "../../ui-lib/patterns/hooks/useSearch";
import { useFilter } from "../../ui-lib/patterns/hooks/useFilter";
import { usePagination } from "../../ui-lib/patterns/hooks/usePagination";

import { Sidebar } from "../shell/sidebar/Sidebar";
import { ProjectCard } from "./ProjectsCard";

type Project = {
  slug: string;
  title: string;
  description: string;
  status: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

type Props = {
  projects: Project[];
  allTags: string[];
};

const PROJECTS_PER_PAGE = 6;

const STATUS_OPTIONS = [
  { label: "All", value: "all" },
  { label: "In Progress", value: "in-progress" },
] as const;

type StatusValue = (typeof STATUS_OPTIONS)[number]["value"];

export function ProjectsSection({ projects, allTags }: Props) {
  const [activeStatus, setActiveStatus] = useState<StatusValue>("all");

  const byStatus = useMemo(
    () =>
      activeStatus === "all"
        ? projects
        : projects.filter((p) => p.status === activeStatus),
    [projects, activeStatus]
  );

  const search = useSearch({
    items: byStatus,
    keys: ["title", "description", "stack"],
  });

  const filter = useFilter({
    items: search.results,
    key: "stack",
    mode: "and",
  });

  const pagination = usePagination({
    items: filter.results,
    perPage: PROJECTS_PER_PAGE,
  });

  useEffect(() => {
    pagination.reset();
  }, [search.query, filter.active, activeStatus]);

  return (
    <Section
      responsiveColumns={{
        base: "1fr",
        md: "minmax(12rem, 20%) minmax(0, 1fr)",
      }}
      gap="6"
    >
      <h2 className="sr-only">Projects</h2>

      <Sidebar
        totalCount={filter.results.length}
        countLabel="project"
        search={{
          value: search.query,
          onChange: search.setQuery,
          placeholder: "Search...",
          label: "Search projects",
        }}
        allTags={allTags}
        activeTags={filter.active}
        tagsLabel="TECH &amp; TOOLS"
        onTagToggle={filter.toggle}
        onClearTags={
          filter.active.length > 0
            ? () => filter.active.forEach((t) => filter.toggle(t))
            : undefined
        }
      >
        {/* STATUS — injected via extension slot */}
        <Stack gap="2">
          <Text className="font-mono text-xs text-muted">STATUS</Text>

          <Stack direction="row" wrap="wrap" gap="2">
            {STATUS_OPTIONS.map(({ label, value }) => (
              <Button
                key={value}
                onClick={() => setActiveStatus(value)}
                aria-pressed={activeStatus === value}
                className={[
                  "font-mono text-xs px-2 border rounded-sm",
                  activeStatus === value
                    ? "text-accent border-accent"
                    : "text-muted",
                ].join(" ")}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Sidebar>

      <Stack gap="4">
        {pagination.paginated.length > 0 ? (
          <List gap="0">
            {pagination.paginated.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </List>
        ) : (
          <Text
            className="font-mono text-sm text-muted px-6"
          >
            No projects match your filters.
          </Text>
        )}

        {pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.page}
            hasPrevious={pagination.hasPrevious}
            hasNext={pagination.hasNext}
            onPrevious={pagination.goPrevious}
            onNext={pagination.goNext}
            previousLabel="← Previous"
            nextLabel="Next →"
            currentLabel={`${pagination.page} / ${pagination.totalPages}`}
          />
        )}
      </Stack>
    </Section>
  );
}