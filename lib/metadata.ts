// Metadados globais para todas as páginas
// Aplicar em app/layout.tsx

export const siteConfig = {
  name: 'Z Engenharia',
  url: 'https://www.zengenharia.com.br',
  ogImage: 'https://www.zengenharia.com.br/og-image.png', // TODO: gerar imagem OG
  description:
    'Z Engenharia — Especialistas em manutenção e restauração de fachadas prediais em Belo Horizonte. Mais de 15 anos de experiência, 163+ projetos realizados.',
  keywords: [
    'engenharia de fachadas',
    'manutenção predial',
    'restauração de fachadas',
    'impermeabilização',
    'reforma de condomínio',
    'reformas estruturais',
    'inspeção de fachada',
    'laudo técnico fachada',
    'Belo Horizonte',
    'MG',
  ],
}

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Z Engenharia | Manutenção e Restauração de Fachadas Prediais em BH',
    template: '%s | Z Engenharia',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Z Engenharia' }],
  creator: 'Z Engenharia',
  publisher: 'Z Engenharia',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Z Engenharia | Manutenção e Restauração de Fachadas Prediais em BH',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Z Engenharia — Fachadas Prediais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Z Engenharia | Manutenção e Restauração de Fachadas Prediais',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
}
