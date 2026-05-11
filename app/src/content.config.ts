import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),

    tags: z.array(z.string()).default([]),

    project: z.string().optional(),

    draft: z.boolean().default(false),

    featured: z.boolean().default(false),

    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),

    description: z.string(),

    status: z.enum([
      "planning",
      "in-progress",
      "completed",
      "paused",
    ]),

    startedAt: z.coerce.date(),

    stack: z.array(z.string()),

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