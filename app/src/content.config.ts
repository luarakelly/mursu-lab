import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    project: z.string().optional(),
    stepId: z.string().optional(),   // ← matches a step id in projects
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum([
      "active",      // ← added, used in landing + about filtering
      "planning",
      "in-progress",
      "completed",
      "paused",
    ]),
    startedAt: z.coerce.date(),
    stack: z.array(z.string()),
    steps: z.array(               // ← added, drives progress calculation
      z.object({
        id: z.string(),           // matched against blog post tags
        label: z.string(),        // displayed in terminal card
      })
    ).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = {
  blog,
  projects,
};