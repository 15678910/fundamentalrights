import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CATEGORY_KEYS } from "../lib/categories";

const quizQuestion = z.object({
  question: z.string(),
  options: z.array(z.string()).min(2),
  answer: z.number().int().min(0),
  explanation: z.string(),
});

const rights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rights" }),
  schema: z.object({
    article: z.number().int(),
    title: z.string(),
    category: z.enum(CATEGORY_KEYS as [string, ...string[]]),
    icon: z.string().default("default"),
    original: z.string(),
    terms: z.array(z.string()).default([]),
    quiz: z.array(quizQuestion).default([]),
    order: z.number().int(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/glossary" }),
  schema: z.object({
    term: z.string(),
    short: z.string(),
  }),
});

export const collections = { rights, glossary };
