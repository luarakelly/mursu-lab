import { useEffect } from "react";

import { Section } from "../../ui-lib/semantic-wrappers/Section";
import { List } from "../../ui-lib/semantic-wrappers/List";
import { Stack } from "../../ui-lib/primitives/layout/Stack";
import { Text } from "../../ui-lib/primitives/typography/Text";
import { Pagination } from "../../ui-lib/patterns/interactive/Pagination";

import { useSearch } from "../../ui-lib/patterns/hooks/useSearch";
import { useFilter } from "../../ui-lib/patterns/hooks/useFilter";
import { usePagination } from "../../ui-lib/patterns/hooks/usePagination";

import { Sidebar } from "./Sidebar";
import { PrimaryCard } from "./PrimaryCard";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: number;
};

type Props = {
  posts: Post[];
  allTags: string[];
};

const POSTS_PER_PAGE = 4;

export function BlogSection({ posts, allTags }: Props) {  
  // search first
  const search = useSearch({
    items: posts,
    keys: ["title", "description", "tags"],
  });

  // then filter the searched results
  const filter = useFilter({
    items: search.results,
    key: "tags",
    mode: "and",
  });

  // then paginate
  const pagination = usePagination({
    items: filter.results,
    perPage: POSTS_PER_PAGE,
  });

  // reset page whenever search/filter changes
  useEffect(() => {
    pagination.reset();
  }, [search.query, filter.active]);

  return (
    <Section
      direction="row"
      align="flex-start"
      justify="center"
      gap="6"
      className="pl-2"
      maxWidth="74rem"
    >
      
      <h2 className="sr-only">Articles</h2>
      <Sidebar
        allTags={allTags}
        activeTags={filter.active}
        search={search.query}
        onTagToggle={filter.toggle}
        onSearchChange={search.setQuery}
      />

      <Stack gap="4" minWidth="3" style={{ flex: 1 }}>
        {pagination.paginated.length > 0 ? (
            <List gap="0">
              {pagination.paginated.map((post) => (
                <li key={post.slug}>
                  <PrimaryCard post={post} />
                </li>
              ))}
            </List>
          ) : (
            <Text
              className="font-mono text-sm"
              style={{
                color: "var(--foreground-muted)",
                padding: "var(--space-6) 0",
              }}
            >
              No posts match your filters.
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