# 🚀 Guia de Início Rápido - Landing Page Clerky

## ⚡ Start em 30 segundos

```bash
cd /Users/guipratiko/Documents/Clerky-Site/clerky-landing
npm install
npm run dev
```

Acesse: http://localhost:3000

## 📝 Primeiras Tarefas

### 1. Atualizar Links do WhatsApp

Busque por `Falar no WhatsApp` nos componentes:
- `app/(components)/Header.tsx` (linha ~66)
- `app/(components)/CTA.tsx` (linha ~51)

Substitua `#` por:
```
https://wa.me/556293557070?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Clerky
```

### 2. Atualizar Preços

Edite `app/(components)/Pricing.tsx`:
```typescript
const plans = [
  {
    name: "Starter",
    price: "R$ XXX", // <-- Seu preço
    // ...
  }
]
```

### 3. Adicionar Depoimentos Reais

Edite `app/(components)/Testimonials.tsx`:
```typescript
const testimonials = [
  {
    name: "Nome Real",
    role: "Cargo",
    company: "Empresa",
    quote: "Depoimento...",
    // ...
  }
]
```

### 4. Atualizar URLs de Produção

1. `app/layout.tsx` - linha 33:
   ```typescript
   metadataBase: new URL("https://seudominio.com"),
   ```

2. `app/sitemap.ts` - linha 3:
   ```typescript
   const baseUrl = "https://seudominio.com";
   ```

3. `app/robots.ts` - linha 3:
   ```typescript
   const baseUrl = "https://seudominio.com";
   ```

### 5. Configurar Google Analytics (Opcional)

Em `app/layout.tsx`, descomente e configure:
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Personalização Rápida

### Mudar Cores Principais

Edite `app/globals.css`:
```css
:root {
  --primary: #5b9dff;    /* Azul primário */
  --secondary: #8a5bff;  /* Roxo secundário */
  --accent: #00e5a8;     /* Verde sucesso */
}
```

### Desligar Partículas

Em `app/page.tsx`, linha 19:
```tsx
<Hero enableParticles={false} />
```

### Desligar Smooth Scroll

Em `app/page.tsx`, remova o wrapper `<SmoothScroll>`:
```tsx
// Antes
<SmoothScroll>
  <Hero />
  {/* ... */}
</SmoothScroll>

// Depois
<>
  <Hero />
  {/* ... */}
</>
```

## 🔍 Buscar TODOs Pendentes

```bash
grep -r "TODO" app/
```

Ou use a busca do seu editor (Cmd/Ctrl + Shift + F) por `TODO`.

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📊 Lighthouse Audit

1. Buildar o projeto: `npm run build && npm start`
2. Abrir Chrome DevTools (F12)
3. Ir em "Lighthouse"
4. Selecionar "Desktop" e "Performance + SEO + Accessibility"
5. Clicar em "Analyze page load"

**Meta:** ≥90 em todas as categorias

## 🐛 Problemas Comuns

### Build com erro de tipo
```bash
npx tsc --noEmit
```

### Lint errors
```bash
npm run lint -- --fix
```

### Imagens não aparecem
Verifique se estão em `public/` e caminhos começam com `/`

### Smooth scroll não funciona
```bash
npm install lenis
```

## 📱 Teste Responsivo

Testar em:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1440px

Use Chrome DevTools (Cmd/Ctrl + Shift + M) para simular dispositivos.

## ✅ Checklist de Deploy

- [ ] Todas as URLs placeholder atualizadas
- [ ] Preços e depoimentos reais adicionados
- [ ] Google Analytics configurado
- [ ] OG image de alta qualidade criada
- [ ] Build sem erros (`npm run build`)
- [ ] Lint sem erros (`npm run lint`)
- [ ] Lighthouse ≥90 em todas as categorias
- [ ] Testado em Chrome, Safari, Firefox
- [ ] Testado mobile e desktop
- [ ] Verificação Google Search Console adicionada

## 🆘 Suporte

Documentação completa: `README.md`
Changelog: `CHANGELOG.md`

---

✨ **Pronto para lançar!**

