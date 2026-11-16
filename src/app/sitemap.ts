import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://aaronliu65.github.io/aaronliu_portfolio/';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}projects/hkfa/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}projects/the-haddon/`, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
