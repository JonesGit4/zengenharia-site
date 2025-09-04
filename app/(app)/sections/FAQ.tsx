import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    question: "Qual é o prazo médio para execução de uma reforma de fachada?",
    answer:
      "O prazo varia de acordo com a complexidade e extensão do projeto. Para pequenas reformas, o prazo médio é de 15 a 30 dias. Para projetos mais complexos, pode variar de 2 a 6 meses. Realizamos uma avaliação inicial para fornecer um cronograma detalhado e preciso para seu projeto específico.",
  },
  {
    question: "Como é feito o orçamento para manutenção de fachadas?",
    answer:
      "Nosso orçamento é elaborado após uma inspeção técnica detalhada do local. Avaliamos o estado atual da fachada, identificamos as necessidades específicas e apresentamos um orçamento transparente com todos os custos discriminados. A avaliação inicial é gratuita e sem compromisso.",
  },
  {
    question: "Vocês trabalham com que tipos de edifícios?",
    answer:
      "Atendemos edifícios residenciais, comerciais e industriais de todos os portes. Temos experiência em fachadas de concreto, vidro, cerâmica, pedra natural, ACM e outros materiais. Nossa equipe está capacitada para trabalhar desde pequenos prédios até grandes complexos empresariais.",
  },
  {
    question: "Qual a garantia oferecida nos serviços?",
    answer:
      "Oferecemos garantia de 5 anos para serviços de impermeabilização e 3 anos para reformas estruturais. Para manutenções preventivas, a garantia é de 1 ano. Todos os nossos serviços são executados com materiais de primeira qualidade e seguem rigorosamente as normas técnicas.",
  },
  {
    question: "É necessário que os moradores saiam durante a obra?",
    answer:
      "Na maioria dos casos, não é necessário que os moradores deixem o local. Planejamos a execução para minimizar transtornos, trabalhando por andares ou seções. Em casos específicos de reformas estruturais complexas, pode ser necessária evacuação temporária de algumas unidades.",
  },
  {
    question: "Como funciona o processo de aprovação em condomínios?",
    answer:
      "Auxiliamos todo o processo de aprovação junto ao condomínio. Preparamos a documentação técnica necessária, apresentamos o projeto em assembleias quando solicitado e garantimos que todos os procedimentos legais sejam cumpridos antes do início das obras.",
  },
  {
    question: "Vocês fazem manutenção preventiva?",
    answer:
      "Sim, oferecemos programas de manutenção preventiva personalizados. Realizamos inspeções periódicas, limpeza especializada, pequenos reparos e acompanhamento contínuo. Isso ajuda a prolongar a vida útil da fachada e evita problemas maiores no futuro.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos diversas formas de pagamento: à vista (com desconto), parcelado no cartão de crédito, boleto bancário e financiamento próprio em até 24x. Para obras de grande porte, oferecemos condições especiais de pagamento conforme o cronograma de execução.",
  },
  {
    question: "Vocês atendem em outras cidades além da capital?",
    answer:
      "Sim, atendemos em toda a região metropolitana e cidades do interior em um raio de 200km da capital. Para projetos de grande porte, podemos atender em todo o estado. Entre em contato para verificarmos a viabilidade de atendimento em sua região.",
  },
  {
    question: "Como identificar se minha fachada precisa de manutenção?",
    answer:
      "Sinais como infiltrações, manchas de umidade, descascamento de tinta, fissuras, peças soltas ou descoloração indicam necessidade de manutenção. Oferecemos inspeção técnica gratuita para avaliar o estado da fachada e fornecer um diagnóstico preciso.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-900 py-20"
    >
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl font-bold text-center text-white md:text-4xl 2xl:text-5xl mb-4">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="max-w-3xl text-sm text-center text-muted-foreground md:text-lg 2xl:text-xl">
          Esclarecemos as principais dúvidas sobre nossos serviços de engenharia
          de fachadas.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Não encontrou sua resposta? Entre em contato conosco!
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full max-w-4xl px-6">
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-neutral-800 rounded-lg px-6 border-neutral-700 hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline py-6">
                <div className="flex items-center">
                  <span className="text-primary text-lg mr-3">💡</span>
                  <span className="font-medium">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-neutral-800/50 rounded-2xl p-8 mx-6 max-w-2xl text-center border border-neutral-700">
        <div className="mb-6">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-muted-foreground">
            Nossa equipe técnica está pronta para esclarecer todas as suas
            questões e fornecer orientações personalizadas para seu projeto.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/+5531992184003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista
            </Button>
          </Link>
          <ContactDialog>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
            </Button>
          </ContactDialog>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
