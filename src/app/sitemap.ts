import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...['about', 'stack', 'projects', 'contact'].map((section) => ({
      url: `${siteConfig.url}/#${section}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
