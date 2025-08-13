# WhatsApp Float - Componente Reutilizável

Um componente React/Next.js completamente autônomo para adicionar um botão flutuante do WhatsApp ao seu site.

## Características

- ✅ Completamente autônomo (sem dependências externas)
- ✅ Suporte a temas claro/escuro automático
- ✅ Tooltip opcional e customizável
- ✅ Animações suaves integradas
- ✅ Totalmente acessível
- ✅ TypeScript incluído
- ✅ Responsivo
- ✅ Três variações do componente

## Componentes Disponíveis

### 1. `WhatsAppFloat` (Componente Principal)

Botão flutuante completo com tooltip e todas as funcionalidades.

### 2. `WhatsAppButton` (Versão Minimalista)

Apenas o botão, sem tooltip, ideal para casos mais simples.

### 3. `useWhatsApp` (Hook)

Hook para abrir o WhatsApp programaticamente em qualquer lugar do seu código.

## Instalação

Basta copiar o arquivo `whatsapp-float-standalone.tsx` para o seu projeto. Não há dependências externas além do React.

## Uso Básico

```tsx
import WhatsAppFloat from "./components/whatsapp-float-standalone";

function App() {
  return (
    <div>
      {/* Seu conteúdo aqui */}

      <WhatsAppFloat
        phoneNumber="5511999999999"
        message="Olá! Gostaria de mais informações."
      />
    </div>
  );
}
```

## Exemplos de Uso

### Exemplo Completo com Todas as Opções

```tsx
<WhatsAppFloat
  phoneNumber="5511999999999"
  message="Olá! Gostaria de solicitar um orçamento."
  position="right"
  companyName="Minha Empresa"
  tooltipMessage="Precisa de ajuda? Fale conosco!"
  showTooltip={true}
  showTooltipDelay={2000}
  hideTooltipDelay={5000}
  buttonDelay={1000}
  theme="auto"
/>
```

### Versão Minimalista

```tsx
<WhatsAppButton
  phoneNumber="5511999999999"
  message="Olá!"
  position="left"
  size="large"
/>
```

### Usando o Hook

```tsx
import { useWhatsApp } from "./components/whatsapp-float-standalone";

function MyComponent() {
  const { openWhatsApp } = useWhatsApp("5511999999999", "Mensagem padrão");

  return (
    <button onClick={() => openWhatsApp("Mensagem personalizada")}>
      Falar no WhatsApp
    </button>
  );
}
```

## Props do WhatsAppFloat

| Prop               | Tipo                          | Padrão                                        | Descrição                                                                        |
| ------------------ | ----------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------- |
| `phoneNumber`      | `string`                      | -                                             | **Obrigatório**. Número do WhatsApp no formato internacional (ex: 5511999999999) |
| `message`          | `string`                      | "Olá! Gostaria de mais informações."          | Mensagem pré-definida                                                            |
| `position`         | `"left" \| "right"`           | "right"                                       | Posição do botão na tela                                                         |
| `companyName`      | `string`                      | "Suporte"                                     | Nome da empresa no tooltip                                                       |
| `tooltipMessage`   | `string`                      | "Precisa de ajuda? Fale conosco no WhatsApp!" | Mensagem do tooltip                                                              |
| `showTooltip`      | `boolean`                     | `true`                                        | Mostrar ou ocultar o tooltip                                                     |
| `showTooltipDelay` | `number`                      | 2000                                          | Delay para mostrar o tooltip (ms)                                                |
| `hideTooltipDelay` | `number`                      | 5000                                          | Tempo para ocultar o tooltip (ms)                                                |
| `buttonDelay`      | `number`                      | 1000                                          | Delay para mostrar o botão (ms)                                                  |
| `theme`            | `"auto" \| "light" \| "dark"` | "auto"                                        | Tema do componente                                                               |

## Props do WhatsAppButton

| Prop          | Tipo                             | Padrão   | Descrição                           |
| ------------- | -------------------------------- | -------- | ----------------------------------- |
| `phoneNumber` | `string`                         | -        | **Obrigatório**. Número do WhatsApp |
| `message`     | `string`                         | "Olá!"   | Mensagem pré-definida               |
| `position`    | `"left" \| "right"`              | "right"  | Posição do botão                    |
| `size`        | `"small" \| "normal" \| "large"` | "normal" | Tamanho do botão                    |

## Formatação do Número de Telefone

O número deve estar no formato internacional sem símbolos:

- ✅ Correto: `"5511999999999"` (Brasil + DDD + número)
- ❌ Incorreto: `"+55 (11) 99999-9999"`

## Personalização

### Cores

Para alterar as cores, modifique as classes CSS no componente:

- Botão: `bg-green-500 hover:bg-green-600`
- Tooltip: Classes condicionais baseadas no tema

### Animações

As animações estão incluídas via `styled-jsx`. Para personalizar:

1. Modifique os keyframes no `<style jsx>`
2. Ajuste as classes de animação

### Posicionamento

- `position="left"`: Botão à esquerda
- `position="right"`: Botão à direita (padrão)

## Acessibilidade

O componente inclui:

- `aria-label` apropriado
- `title` para tooltips nativos
- Suporte completo a teclado
- Contraste adequado para WCAG

## Compatibilidade

- ✅ React 16.8+
- ✅ Next.js 12+
- ✅ TypeScript
- ✅ Todos os navegadores modernos
- ✅ Mobile responsivo

## Contribuição

Este é um componente standalone. Para melhorias:

1. Modifique o arquivo `whatsapp-float-standalone.tsx`
2. Teste em diferentes cenários
3. Atualize esta documentação

## Licença

Livre para uso pessoal e comercial.

---

**Dica**: Para usar em projetos sem Next.js, remova a diretiva `"use client"` do topo do arquivo.
