"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactDialogProps {
  children: React.ReactNode;
  triggerClassName?: string;
}

export function ContactDialog({
  children,
  triggerClassName,
}: ContactDialogProps) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servicos: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar dados para o webhook
      const response = await fetch(
        "https://webn8n.duobro.com.br/webhook/zeform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: "10698edc472c6b5db8f06b7b2afc99bf",
          },
          body: JSON.stringify({
            nome: formData.nome,
            telefone: formData.telefone,
            email: formData.email,
            servicos: formData.servicos,
            mensagem: formData.mensagem,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      // Resetar formulário após envio bem-sucedido
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        servicos: "",
        mensagem: "",
      });

      alert("Formulário enviado com sucesso! Entraremos em contato em breve.");

      // Fechar o dialog após envio bem-sucedido
      setIsOpen(false);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Solicitar Contato</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo e nossa equipe entrará em contato com você
            em breve.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome *</Label>
              <Input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                name="telefone"
                type="tel"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="servicos">Serviços de Interesse</Label>
            <select
              id="servicos"
              name="servicos"
              value={formData.servicos}
              onChange={handleInputChange}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Selecione um serviço</option>
              <option value="manutencao-predial">Manutenção Predial</option>
              <option value="impermeabilizacao">Impermeabilização</option>
              <option value="restauracao-fachadas">
                Restauração de Fachadas
              </option>
              <option value="consultoria-tecnica">Consultoria Técnica</option>
              <option value="reformas-estruturais">Reformas Estruturais</option>
              <option value="inspecao-laudos">Inspeção e Laudos</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Descreva seu projeto ou dúvida..."
              rows={4}
            />
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
