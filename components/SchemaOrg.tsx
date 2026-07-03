// Schema JSON-LD para LocalBusiness
// Inserir em app/layout.tsx dentro do <head>

export function LocalBusinessSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.zengenharia.com.br/#organization',
    name: 'Z Engenharia',
    description:
      'Especialistas em engenharia de fachadas prediais — manutenção, restauração, impermeabilização e reformas estruturais em Belo Horizonte.',
    url: 'https://www.zengenharia.com.br',
    telephone: '+5531992184003',
    email: 'contato@zengenharia.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. do Contorno, 3000 - Santa Efigênia',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      postalCode: '30110-008',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -19.9245,
      longitude: -43.9352,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Belo Horizonte',
      },
      {
        '@type': 'State',
        name: 'MG',
      },
    ],
    knowsAbout: [
      'Manutenção Predial',
      'Impermeabilização de Fachadas',
      'Restauração de Fachadas',
      'Reforma de Condomínio',
      'Reformas Estruturais',
      'Inspeção e Laudos Técnicos',
    ],
    image: 'https://www.zengenharia.com.br/logo.png',
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Qual é o prazo médio para execução de uma reforma de fachada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O prazo varia conforme o tamanho e complexidade. Em média, reformas de fachada em edifícios residenciais levam de 45 a 90 dias. Durante a vistoria técnica inicial, fornecemos um cronograma detalhado.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual a garantia oferecida nos serviços?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oferecemos garantia de 5 anos para serviços de impermeabilização e 3 anos para reformas estruturais. Para manutenções preventivas, a garantia é de 1 ano.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vocês atendem em quais cidades?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atendemos em toda a região metropolitana de Belo Horizonte e cidades do interior em um raio de 200km da capital. Para projetos de grande porte, podemos atender em todo o estado de Minas Gerais.',
        },
      },
      {
        '@type': 'Question',
        name: 'É necessário que os moradores saiam durante a obra?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Na maioria dos casos, não é necessário que os moradores deixem o local. Planejamos a execução para minimizar transtornos, trabalhando por andares ou seções.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
