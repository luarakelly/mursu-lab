import { useMemo, useEffect, useState } from "react";

import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { List } from "../../ui-lib/semantic-wrappers/List";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Pagination } from "../../ui-lib/patterns/interactive/Pagination";
import { useSearch } from "../../ui-lib/patterns/hooks/useSearch";
import { useFilter } from "../../ui-lib/patterns/hooks/useFilter";
import { usePagination } from "../../ui-lib/patterns/hooks/usePagination";

import { ProjectsSidebar } from "./ProjectsSidebar";
import { ProjectCard } from "./ProjectCard";

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

export function ProjectsSection({ projects, allTags }: Props) {
  const [activeStatus, setActiveStatus] = useState("all");

  // filter by status first
  const byStatus = useMemo(() =>
    activeStatus === "all"
      ? projects
      : projects.filter((p) => p.status === activeStatus),
    [projects, activeStatus]
  );

  // then search
  const search = useSearch({
    items: byStatus,
    keys: ["title", "description", "stack"],
  });

  // then filter by stack tags
  const filter = useFilter({
    items: search.results,
    key: "stack",
    mode: "and",
  });

  // then paginate
  const pagination = usePagination({
    items: filter.results,
    perPage: PROJECTS_PER_PAGE,
  });

  // reset page on any filter change
  useEffect(() => {
    pagination.reset();
  }, [search.query, filter.active, activeStatus]);

  function handleStatusChange(status: string) {
    setActiveStatus(status);
    pagination.reset();
  }

  return (
    <Section className="py-6 px-5">
      <h2 className="sr-only">Projects</h2>

      <Stack
        direction="row"
        align="flex-start"
        gap="6"
        wrap="wrap"
        className="max-w-xl mx-auto w-full"
      >
        {/* sidebar */}
        <ProjectsSidebar
          allTags={allTags}
          activeTags={filter.active}
          activeStatus={activeStatus}
          search={search.query}
          totalCount={filter.results.length}
          onTagToggle={filter.toggle}
          onStatusChange={handleStatusChange}
          onSearchChange={search.setQuery}
        />

        {/* main */}
        <Stack gap="4" minWidth="4" grow={1}>

          {/* count */}
          <Text className="font-mono text-sm text-muted" style={{ textAlign: "right" }}>
            Showing{" "}
            <span className="text-accent">{filter.results.length}</span>{" "}
            {filter.results.length === 1 ? "project" : "projects"}
          </Text>

          {/* list */}
          {pagination.paginated.length > 0 ? (
            <Stack className="border rounded-lg overflow-hidden">
              <List gap="0">
                {pagination.paginated.map((project) => (
                  <li key={project.slug}>
                    <ProjectCard project={project} />
                  </li>
                ))}
              </List>
            </Stack>
          ) : (
            <Text className="font-mono text-sm text-muted py-6">
              No projects match your filters.
            </Text>
          )}

          {/* pagination */}
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
      </Stack>
    </Section>
  );
}