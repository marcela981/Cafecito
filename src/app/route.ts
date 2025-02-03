import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cafecito.com',
      lastModified: new Date(),
    },
    {
      url: 'https://cafecito.com/cafe',
      lastModified: new Date(),
    },
    {
      url: 'https://cafecito.com/sobre-nosotros',
      lastModified: new Date(),
    }
  ]
}