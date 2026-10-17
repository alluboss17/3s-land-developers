import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.3slanddevelopers.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/projects', '/gallery', '/contact'];

  return pages.map((page) => ({
    url: `${siteUrl}${page}`,
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.7,
  }));
}
