import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-primary">Z</span> ENGENHARIA
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Especialistas em engenharia de fachadas prediais com mais de 15
                anos de experiência. Transformando edifícios e criando valor
                para nossos clientes.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Certificação ISO 9001
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                PBQP-H Qualificado
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                CREA Registrado
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Nossos Serviços
            </h4>
            <div className="space-y-3">
              <Link
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Manutenção Predial
              </Link>
              <Link
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Impermeabilização
              </Link>
              <Link
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Restauração de Fachadas
              </Link>
              <Link
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Consultoria Técnica
              </Link>
              <Link
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Reformas Estruturais
              </Link>
              <Link
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Inspeção e Laudos
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Links Rápidos
            </h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Início
              </Link>
              <Link
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Serviços
              </Link>
              <Link
                href="/#cases"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Casos
              </Link>
              <Link
                href="/#why-choose"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Por Que Escolher
              </Link>
              <Link
                href="/#faq"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                FAQ
              </Link>
              <Link
                href="/#content"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Conteúdo
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Endereço Principal
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Rua Antônio de Albuquerque, 330/901
                    <br />
                    Savassi, Belo Horizonte - MG
                    <br />
                    CEP: 30112-010
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Telefone</p>
                  <p className="text-sm text-muted-foreground">
                    (31) 99218-4003
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">E-mail</p>
                  <p className="text-sm text-muted-foreground">
                    contato@zengenharia.com.br
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Horário de Atendimento
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Segunda à sexta: 8h às 18h
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <ContactDialog>
                <Button className="w-full mt-4" size="lg">
                  Solicitar Orçamento Grátis
                </Button>
              </ContactDialog>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-neutral-800 border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Receba Nossas Novidades
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e fique por dentro das últimas
              tendências em engenharia de fachadas, dicas técnicas e novidades
              da Z Engenharia.
            </p>

            <div className="flex flex-col items-center sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button size="lg" className="px-8">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Z Engenharia - Fachada Predial. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
