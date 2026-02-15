import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://kit.newth.ai', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://kit.newth.ai/components', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://kit.newth.ai/pricing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://kit.newth.ai/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://kit.newth.ai/docs/getting-started', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://kit.newth.ai/docs/cursor', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://kit.newth.ai/docs/claude', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://kit.newth.ai/docs/v0', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://kit.newth.ai/docs/lovable', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://kit.newth.ai/changelog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
    { url: 'https://kit.newth.ai/blog/why-ai-tools-generate-ugly-code', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://kit.newth.ai/blog/shadcn-registry-protocol', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://kit.newth.ai/blog/ai-context-packs-explained', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
