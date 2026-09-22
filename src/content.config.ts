import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const metricSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    year: z.number(),
    duration: z.string().optional(),
    outcomeSummary: z.string(),

    metricsGroups: z.array(z.object({
      title: z.string(),
      asOf: z.string().optional(),
      metrics: z.array(metricSchema),
    })).optional(),

    timeline: z.array(z.object({
      year: z.string(),
      title: z.string(),
      summary: z.string(),
      metrics: z.array(metricSchema).optional(),
    })).optional(),

    screenshots: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),

    evidenceSections: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
      items: z.array(z.object({
        kind: z.enum(['image', 'file']),
        src: z.string(),
        label: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional(),
        display: z.enum(['standard', 'wide', 'document']).optional(),
      })),
    })).optional(),

    keyDecisions: z.array(z.object({
      decision: z.string(),
      reasoning: z.string(),
      alternatives: z.array(z.string()).optional(),
    })).optional(),

    techStack: z.array(z.string()).optional(),
    learnings: z.array(z.string()).optional(),

    featured: z.boolean().default(false),
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    stageLabel: z.string().optional(),
    order: z.number().optional(),
    showcaseCommit: z.string().optional(),

    links: z.object({
      live: z.string().url().optional(),
      github: z.string().url().optional(),
      release: z.string().url().optional(),
    }).optional(),

    relatedProjects: z.array(z.string()).optional(),
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

const decisionsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/decisions' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    context: z.string(),
    decision: z.string(),
    alternatives: z.array(z.object({
      option: z.string(),
      pros: z.array(z.string()).optional(),
      cons: z.array(z.string()).optional(),
    })),
    reasoning: z.string(),
    tags: z.array(z.string()).optional(),
    sourceUrl: z.string().url().optional(),
    relatedProjects: z.array(z.string()).optional(),
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  decisions: decisionsCollection,
};
