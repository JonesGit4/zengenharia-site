import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, MapPinIcon } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "Edifício Comercial Centro",
    location: "São Paulo, SP",
    year: "2023",
    image: "/api/placeholder/400/300", // Placeholder for the building image
    description:
      "Restauração completa da fachada de edifício comercial de 15 andares, no centro de São Paulo.",
    highlights: [
      "Redução de 40% nos custos de manutenção",
      "Valorização de 25% do imóvel",
      "Certificação LEED Gold",
    ],
    category: "Restauração",
  },
  {
    id: 2,
    title: "Condomínio Residencial Premium",
    location: "Rio de Janeiro, RJ",
    year: "2023",
    image: "/api/placeholder/400/300", // Placeholder for the building image
    description:
      "Modernização e impermeabilização de fachadas em condomínio residencial premium com 6 torres.",
    highlights: [
      "100% de aprovação dos moradores",
      "Sistema antisséptico de fachadas",
      "Redução de infiltrações",
    ],
    category: "Modernização",
  },
  {
    id: 3,
    title: "Hospital Regional",
    location: "Belo Horizonte, MG",
    year: "2022",
    image: "/api/placeholder/400/300", // Placeholder for the building image
    description:
      "Reforma estrutural e adequação às normas de segurança em hospital de grande porte.",
    highlights: [
      "Certificação hospitalar renovada",
      "Zero interrupção na funcionamento",
      "Economia energética de 30%",
    ],
    category: "Reforma",
  },
  {
    id: 4,
    title: "Shopping Center Metropolitano",
    location: "Brasília, DF",
    year: "2022",
    image: "/api/placeholder/400/300", // Placeholder for the building image
    description:
      "Revitalização completa da fachada de shopping center com 200 lojas.",
    highlights: [
      "Aumento de 15% no fluxo de visitantes",
      "Modernização tecnológica",
      "Sustentabilidade ambiental",
    ],
    category: "Revitalização",
  },
  {
    id: 5,
    title: "Torre Corporativa",
    location: "Curitiba, PR",
    year: "2023",
    image: "/api/placeholder/400/300", // Placeholder for the building image
    description:
      "Instalação de sistema de fachada ventilada em torre corporativa de 30 andares.",
    highlights: [
      "Eficiência energética máxima",
      "Design inovador avançado",
      "Tecnologia de ponta",
    ],
    category: "Instalação",
  },
  {
    id: 6,
    title: "Conjunto Habitacional Social",
    location: "Salvador, BA",
    year: "2021",
    image: "/api/placeholder/400/300", // Placeholder for the building image
    description:
      "Recuperação de fachadas em conjunto habitacional beneficiando 200 famílias.",
    highlights: [
      "Impacto social positivo",
      "Melhoria na qualidade de vida",
      "Parceria público-privada",
    ],
    category: "Recuperação",
  },
];

const Cases = () => {
  return (
    <section
      id="cases"
      className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-900 pt-24"
    >
      <h2 className="text-2xl font-bold text-center text-white md:text-4xl 2xl:text-5xl">
        Nossos <span className="text-primary">Casos de Sucesso</span>
      </h2>
      <p className="max-w-3xl px-4 mt-4 text-sm text-center text-muted-foreground md:text-lg 2xl:text-xl">
        Conheça alguns dos projetos que transformaram a paisagem urbana e a vida
        das pessoas. Cada projeto é uma história de sucesso e inovação.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 px-24">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            className="flex flex-col bg-neutral-900 rounded-lg shadow-lg max-w-sm h-full border hover:border-primary/50 transition-all duration-300 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-40 bg-neutral-700">
              <div className="absolute top-3 left-3 bg-primary text-black px-2 py-1 rounded-full text-xs font-medium z-10">
                {caseItem.year}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
              {/* Placeholder for image - in real implementation, use Next.js Image component */}
              <div className="w-full h-full bg-neutral-600 flex items-center justify-center text-neutral-400">
                <span className="text-sm">Imagem do Projeto</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-semibold text-white">
                {caseItem.title}
              </h3>
              <div className="flex items-center text-muted-foreground text-sm mt-2 mb-2">
                <MapPinIcon className="size-4 mr-1" />
                <span>{caseItem.location}</span>
                <span className="mx-2">•</span>
                <span>{caseItem.year}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {caseItem.description}
              </p>
              <ul className="mt-4 space-y-2">
                {caseItem.highlights?.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pb-6">
              <Button className="w-full" size="xl">
                Ver Detalhes
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Button size="xl" className="group">
          Ver Todos os Projetos
          <ExternalLinkIcon className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Cases;
