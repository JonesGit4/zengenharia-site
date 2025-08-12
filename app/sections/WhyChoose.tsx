import {
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  UsersIcon,
  WrenchIcon,
  HeartIcon,
} from "lucide-react";

const reasons = [
  {
    icon: ClockIcon,
    title: "Experiência Comprovada",
    description:
      "Mais de 15 anos no mercado com centenas de projetos bem-sucedidos em todo o Brasil.",
    highlight: "500+ projetos concluídos",
  },
  {
    icon: ShieldCheckIcon,
    title: "Certificações e Qualidade",
    description:
      "Equipe certificada e processos que seguem as mais rigorosas normas técnicas nacionais e internacionais.",
    highlight: "ISO 9001 e PBQP-H",
  },
  {
    icon: CheckCircleIcon,
    title: "Pontualidade Garantida",
    description:
      "Cumprimos 100% dos prazos estabelecidos, com planejamento detalhado e execução eficiente.",
    highlight: "100% dos prazos cumpridos",
  },
  {
    icon: UsersIcon,
    title: "Equipe Especializada",
    description:
      "Profissionais altamente qualificados com formação técnica específica em engenharia de fachadas.",
    highlight: "50+ especialistas",
  },
  {
    icon: WrenchIcon,
    title: "Tecnologia Avançada",
    description:
      "Utilizamos equipamentos de última geração e técnicas inovadoras para resultados superiores.",
    highlight: "Tecnologia de ponta",
  },
  {
    icon: HeartIcon,
    title: "Compromisso Social",
    description:
      "Desenvolvemos projetos que geram impacto social positivo e contribuem para comunidades carentes.",
    highlight: "1000+ famílias beneficiadas",
  },
];

const WhyChoose = () => {
  return (
    <section
      id="why-choose"
      className="flex flex-col items-center justify-center w-full min-h-screen bg-neutral-900 pt-24"
    >
      <h2 className="text-2xl font-bold text-center text-white md:text-4xl 2xl:text-5xl">
        Por Que <span className="text-primary">Escolher a Z Engenharia?</span>
      </h2>
      <p className="max-w-3xl px-4 mt-4 text-sm text-center text-muted-foreground md:text-lg 2xl:text-xl">
        Somos referência no mercado de engenharia de fachadas prediais. Nossa
        experiência, qualidade e compromisso nos diferem da concorrência.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 px-24">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
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
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {reason.description}
                </p>
                <div className="mt-4">
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {reason.highlight}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Testimonial Section */}
      <div className="max-w-4xl px-6 text-center mt-10">
        <div className="bg-neutral-800 rounded-lg p-8 border border-neutral-700">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <div className="text-primary text-4xl">&ldquo;</div>
            </div>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              A Z Engenharia transformou completamente nosso edifício. O
              profissionalismo, a qualidade do trabalho e o cumprimento dos
              prazos superaram nossas expectativas.
            </blockquote>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-primary/25 rounded-full flex items-center justify-center">
              <UsersIcon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Carlos Mendonça</div>
              <div className="text-sm text-muted-foreground">
                Síndico - Edifício Empresarial
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
