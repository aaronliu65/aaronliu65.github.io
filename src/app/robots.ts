import type { MetadataRoute } from 'next';

const siteUrl = 'https://aaronliu65.github.io/aaronliu_portfolio';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
