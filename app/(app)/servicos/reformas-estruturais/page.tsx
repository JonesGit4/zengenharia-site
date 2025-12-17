import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import {
  ShieldIcon,
  TargetIcon,
  BrainIcon,
  UsersIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";

export default function ReformasEstruturaisPage() {
  const offerings = [
    {
      title: "Reforço de Pilares e Vigas",
      description:
        "Recuperação e reforço estrutural utilizando técnicas avançadas de engenharia.",
    },
    {
      title: "Tratamento de Concreto",
      description:
        "Reparo de concreto, desplacado, trincas, fissuras e concreto de armadura.",
    },
    {
      title: "Recuperação de Lajes",
      description:
        "Reforço e recuperação de lajes com problemas estruturais ou sobrecarga.",
    },
    {
      title: "Fundações",
      description:
        "Reforço de fundações e tratamento de recalques diferenciais.",
    },
    {
      title: "Proteção Catódica",
      description: "Sistema de proteção contra corrosão das armaduras de aço.",
    },
    {
      title: "Retrofit Estrutural",
      description:
        "Adequação estrutural para mudança de uso ou aumento de carga.",
    },
  ];

  const reasons = [
    {
      icon: ShieldIcon,
      title: "Segurança Garantida",
      description:
        "Projetos análisados com responsabilidade técnica para máxima segurança.",
    },
    {
      icon: TargetIcon,
      title: "Diagnóstico Preciso",
      description:
        "Ensaios não destrutivos de última geração para avaliação estrutural.",
    },
    {
      icon: BrainIcon,
      title: "Técnicas Modernas",
      description:
        "Utilização de fibras de carbono, graute e técnicas inovadoras de reforço.",
    },
    {
      icon: UsersIcon,
      title: "Equipe Especializada",
      description:
        "Engenheiros calculistas e técnicos com experiência estrutural.",
    },
  ];

  const steps = [
    "Inspeção visual e instrumental da estrutura",
    "Ensaio de caracterização do concreto e armaduras",
    "Elaboração do laudo técnico com diagnóstico",
    "Projeto executivo de reforço ou recuperação",
    "Execução das intervenções estruturais",
    "Controle de qualidade durante a execução",
    "Entrega com documentação técnica completa",
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
            Reformas Estruturais
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Recuperação e reforço estrutural de edifícios com segurança e
            tecnologia. Garantimos a integridade e longevidade da estrutura do
            seu patrimônio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ContactDialog>
              <Button size="lg" className="text-base">
                <PhoneIcon className="w-4 h-4 mr-2" />
                Solicite um Orçamento
              </Button>
            </ContactDialog>
            <Button size="lg" variant="outline" className="text-base">
              <MailIcon className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      {/* O Que Oferecemos */}
      <section className="py-20 px-4 bg-black">
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
