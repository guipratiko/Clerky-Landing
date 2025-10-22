# Landing Page Clerky

Landing page moderna e futurista para a **Clerky** - Hub de Integração WhatsApp com IA.

## 🚀 Stack Tecnológica

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (componentes)
- **Framer Motion** (animações)
- **Lenis** (smooth scroll)

## 📦 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm (vem com Node.js)

### Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:3000
```

### Outros Comandos

```bash
# Build para produção
npm run build

# Rodar build de produção
npm start

# Lint (verificar erros de código)
npm run lint

# Formatar código com Prettier
npm run format
```

## 🎨 Como Editar Cores e Tokens

### Paleta de Cores

As cores estão definidas em `app/globals.css` nas variáveis CSS do `:root`:

```css
:root {
  --background: #f7f8fb;      /* Cor de fundo clara */
  --foreground: #0f172a;      /* Cor de texto principal */
  --primary: #5b9dff;         /* Azul primário */
  --secondary: #8a5bff;       /* Roxo secundário */
  --accent: #00e5a8;          /* Verde sucesso */
  /* ... outras cores */
}
```

Para alterar uma cor em todo o site, basta modificar o valor na variável correspondente.

### Fontes

As fontes são carregadas do Google Fonts e configuradas em `app/layout.tsx`:

- **Inter**: corpo de texto (`--font-inter`)
- **Space Grotesk**: headlines (`--font-space-grotesk`)

Para trocar as fontes, edite as importações em `app/layout.tsx`:

```typescript
import { Inter, Space_Grotesk } from "next/font/google";
```

### Animações Customizadas

As animações estão no final do arquivo `app/globals.css`:

- `@keyframes glow`: efeito de brilho
- `@keyframes shimmer`: efeito shimmer
- `@keyframes float`: efeito flutuante

## 🔗 Como Alterar Links e URLs

### Links Placeholder

Todos os links placeholder estão marcados com `#` e comentários `// TODO`. Para encontrá-los:

```bash
# Buscar por TODOs no código
grep -r "TODO" app/
```

### Principais locais para atualizar:

1. **Header** (`app/(components)/Header.tsx`):
   - Links de navegação
   - CTAs "Começar agora" e "Falar no WhatsApp"

2. **Footer** (`app/(components)/Footer.tsx`):
   - Todos os links das 6 colunas
   - Links de redes sociais

3. **Metadata** (`app/layout.tsx`):
   - `metadataBase`: URL base do site
   - `openGraph.url`: URL para OG tags
   - Links do Schema.org

4. **Pricing** (`app/(components)/Pricing.tsx`):
   - Links dos botões de cada plano
   - Dados reais de preços (marcados com TODO)

5. **Testimonials** (`app/(components)/Testimonials.tsx`):
   - Depoimentos reais (marcados com TODO)

6. **DocsPreview** (`app/(components)/DocsPreview.tsx`):
   - Links para documentação real

7. **Sitemap e Robots** (`app/sitemap.ts` e `app/robots.ts`):
   - Atualizar `baseUrl` com URL real do site

### Link do WhatsApp

Para configurar o link "Falar no WhatsApp", use o formato:

```
https://wa.me/556293557070?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Clerky
```

Substitua o número e a mensagem conforme necessário.

## ✨ Como Ligar/Desligar Efeitos

### Partículas de Fundo

No componente `Hero` em `app/(components)/Hero.tsx`, a prop `enableParticles` controla as partículas:

```tsx
<Hero enableParticles={true} /> // Ligado
<Hero enableParticles={false} /> // Desligado
```

Para desligar globalmente, edite `app/page.tsx`:

```tsx
<Hero enableParticles={false} />
```

### Smooth Scroll (Lenis)

Para desabilitar o smooth scroll, remova o wrapper `<SmoothScroll>` em `app/page.tsx`:

```tsx
// Antes
<SmoothScroll>
  <Hero />
  {/* ... */}
</SmoothScroll>

// Depois (sem smooth scroll)
<>
  <Hero />
  {/* ... */}
</>
```

### Efeitos de Glassmorphism

Os efeitos de glassmorphism são aplicados pela classe `.glass` definida em `app/globals.css`. Para ajustar:

```css
.glass {
  background: rgba(255, 255, 255, 0.7); /* Ajustar opacidade */
  backdrop-filter: blur(10px);           /* Ajustar blur */
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### CursorSpotlight

O efeito de spotlight do cursor está em `app/(components)/ui/CursorSpotlight.tsx`. Ele só aparece em desktop. Para desabilitar, remova o componente do `Hero`:

```tsx
// Em app/(components)/Hero.tsx, comente a linha:
// <CursorSpotlight />
```

## 📊 Onde Adicionar Dados Reais

### Pricing (Preços)

Edite o array `plans` em `app/(components)/Pricing.tsx`:

```typescript
const plans = [
  {
    name: "Starter",
    price: "R$ 197", // <-- Atualizar preço
    period: "/mês",
    description: "...",
    features: [...],  // <-- Atualizar features
    href: "#",        // <-- Atualizar link
  },
  // ...
];
```

### Testimonials (Depoimentos)

Edite o array `testimonials` em `app/(components)/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    name: "João Silva",      // <-- Nome real
    role: "CEO",             // <-- Cargo real
    company: "Tech Startup", // <-- Empresa real
    avatar: "JS",            // <-- Iniciais
    rating: 5,
    quote: "...",            // <-- Depoimento real
  },
  // ...
];
```

### Integrações

Edite o array `integrations` em `app/(components)/Integrations.tsx` para adicionar/remover integrações.

## 🌐 SEO e Metadata

### Open Graph e Twitter Cards

As meta tags estão configuradas em `app/layout.tsx` no objeto `metadata`. Principais campos:

- `title`: Título da página
- `description`: Descrição (aparece no Google)
- `openGraph.images`: Imagem de preview social (usar PNG de alta qualidade)
- `twitter.creator`: Handle do Twitter

### Schema.org

Os schemas `Organization` e `Product` estão em `app/layout.tsx`. O schema `FAQPage` está no componente `FAQ`.

Para adicionar mais schemas, insira no `<head>` do layout:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
/>
```

## 📱 Responsividade

O design é **mobile-first**. Breakpoints do Tailwind CSS v4:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Acessibilidade

- Todas as imagens têm atributo `alt`
- Botões interativos têm `aria-label` quando necessário
- Contraste de cores segue WCAG AA
- Navegação por teclado funcional (use Tab)
- Focus visível em todos os elementos interativos

## 🍪 Banner de Cookies (LGPD)

O banner de cookies está em `app/(components)/CookieBanner.tsx` e usa `localStorage` para persistir a escolha do usuário.

Três opções de consentimento:
- **Aceitar todos**: armazena `"all"`
- **Apenas essenciais**: armazena `"essential"`
- **Rejeitar**: armazena `"none"`

Para verificar o consentimento em outros componentes:

```typescript
const consent = localStorage.getItem("clerky-cookie-consent");
```

## 🎯 Lighthouse Score

Para verificar o score de performance:

```bash
# 1. Buildar o projeto
npm run build

# 2. Rodar em produção
npm start

# 3. Abrir Chrome DevTools > Lighthouse
# 4. Rodar audit para Desktop
```

Meta: ≥90 em todas as categorias (Performance, SEO, Accessibility, Best Practices).

## 📁 Estrutura de Pastas

```
clerky-landing/
├── app/
│   ├── (components)/
│   │   ├── ui/              # Componentes de efeitos visuais
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── ... (outras seções)
│   │   └── CookieBanner.tsx
│   ├── layout.tsx           # Layout raiz + metadata
│   ├── page.tsx             # Página principal
│   ├── globals.css          # Estilos globais + cores
│   ├── sitemap.ts           # Sitemap dinâmico
│   └── robots.ts            # Robots.txt
├── components/
│   └── ui/                  # Componentes shadcn/ui
├── lib/
│   └── utils.ts             # Utilitários (cn, etc.)
├── public/
│   ├── img/
│   │   └── logo3.png        # Logo da Clerky
│   ├── favicon.svg          # Favicon
│   └── og-image.svg         # Imagem Open Graph
├── package.json
└── README.md
```

## 🔧 Troubleshooting

### Build com erros de tipo

```bash
# Rodar type check
npx tsc --noEmit
```

### Erros de lint

```bash
# Rodar e corrigir automaticamente
npm run lint -- --fix
```

### Smooth scroll não funciona

Certifique-se de que o Lenis está instalado:

```bash
npm install lenis
```

### Imagens não aparecem

Verifique se os arquivos estão na pasta `public/` e se os caminhos começam com `/`:

```tsx
<Image src="/img/logo3.png" alt="..." />
```

## 📝 TODOs Pendentes

Busque por `TODO` nos arquivos para encontrar itens que precisam ser atualizados:

- [ ] Atualizar URLs reais (Header, Footer, Pricing, etc.)
- [ ] Adicionar dados reais de preços
- [ ] Adicionar depoimentos reais
- [ ] Configurar Google Analytics
- [ ] Atualizar meta tags com URL real
- [ ] Adicionar verificação Google Search Console
- [ ] Criar og-image.png de alta qualidade
- [ ] Configurar link do WhatsApp

## 📄 Licença

Este projeto é proprietário da Clerky. Todos os direitos reservados.

## 🤝 Contato

Para dúvidas ou suporte, entre em contato via:
- WhatsApp: [LINK_AQUI] <!-- TODO: Adicionar link real -->
- Email: contato@clerky.com <!-- TODO: Atualizar email -->

---

**Desenvolvido com ❤️ para a Clerky**
# Clerky-Landing
