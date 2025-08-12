import { Button } from "@/components/ui/button";
import {
  WrenchIcon,
  ShieldIcon,
  BuildingIcon,
  ClipboardIcon,
  HammerIcon,
  CheckCircleIcon,
} from "lucide-react";

const services = [
  {
    icon: WrenchIcon,
    title: "Manutenção Predial",
    desc: "Serviços completos de manutenção preventiva e corretiva para garantir a durabilidade e segurança de sua fachada.",
    items: [
      "Inspeção técnica",
      "Manutenção preventiva",
      "Relatórios detalhados",
      "Suporte 24/7",
    ],
  },
  {
    icon: ShieldIcon,
    title: "Impermeabilização",
    desc: "Soluções avançadas em impermeabilização para proteger sua edificação contra infiltrações e umidade.",
    items: [
      "Diagnóstico completo",
      "Materiais de qualidade",
      "Garantia estendida",
      "Técnicas modernas",
    ],
  },
  {
    icon: BuildingIcon,
    title: "Restauração de Fachadas",
    desc: "Revitalização completa de fachadas com técnicas modernas preservando a arquitetura original.",
    items: [
      "Análise estrutural",
      "Materiais originais",
      "Equipe especializada",
      "Cronograma flexível",
    ],
  },
  {
    icon: ClipboardIcon,
    title: "Consultoria Técnica",
    desc: "Assessoria especializada para projetos de fachadas, laudos técnicos e aprovações junto aos órgãos competentes.",
    items: [
      "Laudos técnicos",
      "Projetos executivos",
      "Aprovações legais",
      "Acompanhamento",
    ],
  },
  {
    icon: HammerIcon,
    title: "Reformas Estruturais",
    desc: "Reformas completas com foco na modernização e adequação às normas de segurança atuais.",
    items: [
      "Projeto estrutural",
      "Execução completa",
      "Normas técnicas",
      "Pós-obra",
    ],
  },
  {
    icon: CheckCircleIcon,
    title: "Inspeção e Laudos",
    desc: "Inspeções técnicas detalhadas e emissão de laudos para avaliação do estado da fachada.",
    items: [
      "Inspeção completa",
      "Laudo técnico",
      "Recomendações",
      "Plano de ação",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-900"
    >
      <h2 className="text-2xl font-bold text-center text-white md:text-4xl 2xl:text-5xl">
        Nossos <span className="text-primary">Serviços</span>
      </h2>
      <p className="max-w-3xl px-4 mt-4 text-sm text-center text-muted-foreground md:text-lg 2xl:text-xl">
        Oferecemos uma gama completa de serviços especializados em engenharia de
        fachadas, sempre com foco na qualidade, segurança e satisfação do
        cliente.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 px-24">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col p-6 bg-neutral-900 rounded-lg shadow-lg max-w-sm h-full border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex-1 flex flex-col">
                <div className="bg-primary/25 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.items?.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-6 w-full" size="xl">
                Saiba Mais
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
