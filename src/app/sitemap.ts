import type { MetadataRoute } from 'next';

const siteUrl = 'https://aaronliu65.github.io/aaronliu_portfolio/';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
