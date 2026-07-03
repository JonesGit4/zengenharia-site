// PATCH: Metadados das páginas de serviço
// Cada página ganha title + description + openGraph próprios

export const servicePagesMetadata: Record<string, {
  title: string
  description: string
}> = {
  '/servicos/manutencao-predial': {
    title: 'Manutenção Predial em Belo Horizonte | Z Engenharia',
    description: 'Serviços completos de manutenção preventiva e corretiva de fachadas prediais em BH. Inspeção técnica, relatórios detalhados e suporte 24/7. Mais de 15 anos de experiência.',
  },
  '/servicos/impermeabilizacao': {
    title: 'Impermeabilização de Fachadas | Z Engenharia BH',
    description: 'Soluções avançadas em impermeabilização para proteger sua edificação contra infiltrações e umidade. Diagnóstico completo, materiais de qualidade e garantia estendida de 5 anos.',
  },
  '/servicos/reforma-de-fachada-predial': {
    title: 'Restauração de Fachadas Prediais | Z Engenharia BH',
    description: 'Revitalização completa de fachadas com técnicas modernas preservando a arquitetura original. Análise estrutural, materiais originais e equipe especializada em Belo Horizonte.',
  },
  '/servicos/reforma-de-condominio': {
    title: 'Reforma de Condomínio em BH | Z Engenharia',
    description: 'Soluções completas para reforma e manutenção de condomínios residenciais e comerciais. Planejamento integrado, áreas comuns e mínima interferência aos moradores.',
  },
  '/servicos/reformas-estruturais': {
    title: 'Reformas Estruturais Prediais | Z Engenharia BH',
    description: 'Reformas completas com foco na modernização e adequação às normas de segurança atuais. Projeto estrutural, execução completa e normas técnicas rigorosas.',
  },
  '/servicos/inspecao-e-laudos': {
    title: 'Inspeção e Laudos Técnicos de Fachada | Z Engenharia BH',
    description: 'Inspeções técnicas detalhadas e emissão de laudos para avaliação do estado da fachada. Inspeção completa, laudo técnico, recomendações e plano de ação personalizado.',
  },
}
