import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import {
  ShieldCheckIcon,
  ClockIcon,
  BadgeCheckIcon,
  UsersIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";

export default function ReformaFachadaPredialPage() {
  const offerings = [
    {
      title: "Diagnóstico Estrutural Completo",
      description:
        "Avaliações detalhadas do estado da fachada, identificando patologias, fissuras e pontos de deterioração.",
    },
    {
      title: "Projeto Executivo Detalhado",
      description:
        "Desenvolvimento de projeto técnico completo com cronograma, especificação de materiais e metodologia de execução.",
    },
    {
      title: "Impermeabilização Profissional",
      description:
        "Aplicação de sistemas impermeabilizantes de alta performance para proteção total.",
    },
    {
      title: "Tratamento de Patologias",
      description:
        "Correção de infiltrações, trincas, eflorescências e outros problemas estruturais da fachada.",
    },
    {
      title: "Restauração Estética",
      description:
        "Revitalização da aparência visual da fachada mantendo suas características arquitetônicas e estrutura inovável.",
    },
    {
      title: "Laudos e Documentação",
      description:
        "Emissão de laudos técnicos, ART e toda documentação junto aos órgãos competentes.",
    },
  ];

  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: "Garantia Estendida",
      description:
        "Oferecemos garantia de 5 anos em todos os serviços com cobertura de defeitos de execução.",
    },
    {
      icon: ClockIcon,
      title: "Prazos Cumpridos",
      description:
        "Planejamento detalhado garante cumprimento rigoroso dos prazos e compromisso estabelecidos no projeto.",
    },
    {
      icon: BadgeCheckIcon,
      title: "Equipe Certificada",
      description:
        "Nossa equipe possui certificação técnica e experiência comprovada.",
    },
    {
      icon: UsersIcon,
      title: "Suporte Integral",
      description:
        "Acompanhamento completo desde a concepção do projeto até a entrega e pós-obra.",
    },
  ];

  const steps = [
    "Contato inicial e agendamento de visita técnica gratuita",
    "Inspeção detalhada da fachada e identificação de patologias",
    "Elaboração do diagnóstico e proposta técnica comercial",
    "Aprovação do projeto e definição do cronograma de execução",
    "Mobilização da equipe e início das obras com segurança",
    "Execução das etapas de tratamento, impermeabilização e acabamento",
    "Entrega final com laudo técnico e termo de garantia",
  ];

  return (
    <main className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-24 px-4 md:px-8 lg:px-16 bg-neutral-900">
        <div className="max-w-7xl w-full mx-auto">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary bg-primary/20 rounded-lg">
            Serviço Especializado
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
            Reforma de Fachada Predial
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Soluções completas em reforma e revitalização de fachadas prediais.
            Recuperamos a estética e a integridade estrutural do seu edifício
            com técnicas modernas e materiais de alta qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ContactDialog>
              <Button size="lg" className="text-base">
                <PhoneIcon className="w-4 h-4 mr-2" />
                Solicite um Orçamento
              </Button>
            </ContactDialog>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="https://wa.me/+5531992184003" target="_blank" rel="noopener noreferrer">
                <MailIcon className="w-4 h-4 mr-2" />
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* O Que Oferecemos */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            O Que Oferecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-700 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Por Que Escolher Nossos Serviços
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Conheça os diferenciais que fazem da Z Engenharia a melhor escolha
            para seu projeto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-neutral-800/50 rounded-lg border border-neutral-700 hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 border border-primary/20">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Como Funciona
          </h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>
                <p className="text-white text-lg pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto Para Transformar Sua Fachada?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento sem compromisso.
            Nossa equipe está pronta para atender você.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
              <PhoneIcon className="w-6 h-6 text-primary mb-2 mx-auto" />
              <h3 className="text-white font-semibold mb-1">Telefone</h3>
              <p className="text-sm text-muted-foreground">(11) 95055-9999</p>
            </div>
            <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
              <MailIcon className="w-6 h-6 text-primary mb-2 mx-auto" />
              <h3 className="text-white font-semibold mb-1">E-mail</h3>
              <p className="text-sm text-muted-foreground">
                contato@zengenharia.com
              </p>
            </div>
            <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
              <MapPinIcon className="w-6 h-6 text-primary mb-2 mx-auto" />
              <h3 className="text-white font-semibold mb-1">Endereço</h3>
              <p className="text-sm text-muted-foreground">São Paulo, SP</p>
            </div>
          </div>
          <ContactDialog>
            <Button size="lg" className="text-base">
              Solicitar Orçamento
            </Button>
          </ContactDialog>
        </div>
      </section>
    </main>
  );
}
