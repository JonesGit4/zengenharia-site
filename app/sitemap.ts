import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.zengenharia.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${BASE_URL}/servicos/manutencao-predial`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/servicos/impermeabilizacao`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/servicos/reforma-de-fachada-predial`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/servicos/reforma-de-condominio`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/servicos/reformas-estruturais`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/servicos/inspecao-e-laudos`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/posts`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
  ]

  // TODO: Adicionar posts dinâmicos do Payload CMS
  // const posts = await getPosts()
  // posts.map(post => ({ url: `${BASE_URL}/posts/${post.slug}`, ... }))

  return staticPages
}
