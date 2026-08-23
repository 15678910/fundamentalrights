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
    intro: z.string().optional(),
    cases: z.string().optional(),
    protectors: z.string().optional(),
    history: z.string().optional(),
    questions: z.array(z.string()).default([]),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/glossary" }),
  schema: z.object({
    term: z.string(),
    short: z.string(),
  }),
});

const issues = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/issues" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string().default("💬"),
    order: z.number().int(),
    relatedRights: z.array(z.number().int()).default([]),
    helplines: z.array(z.object({
      name: z.string(),
      number: z.string(),
      desc: z.string().optional(),
    })).default([]),
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/topics" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string().default("📘"),
    order: z.number().int(),
    relatedRights: z.array(z.number().int()).default([]),
  }),
});

const teachers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/teachers" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["수업안", "워크시트", "토론가이드", "평가지", "가정통신문"]),
    summary: z.string(),
    level: z.string().default("전체"),
    duration: z.string().optional(),
    relatedRights: z.array(z.number().int()).default([]),
    order: z.number().int(),
  }),
});

export const collections = { rights, glossary, issues, topics, teachers };
