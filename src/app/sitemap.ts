import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://aaronliu65.github.io/';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
