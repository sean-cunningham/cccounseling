import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Blog posts are built for review but stay noindex / out of nav / out of sitemap
 * until explicitly approved for public discovery.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Primary search intent (editorial notes; not shown on page by default). */
    primaryIntent: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Review-stage posts stay true until launch approval. */
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog };
