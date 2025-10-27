import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    location: z.string().optional(),
    skills: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    role: z.string(),
    type: z.enum(['professional', 'education', 'extracurricular']),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    skills: z.array(z.string()).optional(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    advisor: z.string(),
    area: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    image: z.string().optional(),
    publications: z.array(z.string()).optional(),
    articles: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects,
  experiences,
  research,
};
