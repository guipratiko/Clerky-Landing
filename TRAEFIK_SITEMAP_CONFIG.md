# 🔧 Configuração Traefik para Sitemap.xml

## Problema
O Traefik está interceptando `/sitemap.xml` e retornando HTML em vez de XML.

## Solução

### 1. Verificar Configuração do Traefik

No seu servidor VPS (IP: 177.200.42.42), verifique a configuração do Traefik:

**Localização comum dos arquivos:**
- `/etc/traefik/traefik.yml` ou `/etc/traefik/traefik.yaml`
- `docker-compose.yml` (se usar Docker)
- Labels do container (se usar Docker Compose)

### 2. Configuração Recomendada

#### Opção A: Docker Compose (Recomendado)

Se você usa Docker Compose, adicione estas labels ao serviço do Next.js:

```yaml
services:
  clerky-landing:
    # ... outras configurações
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.clerky.rule=Host(`clerky.com.br`)"
      - "traefik.http.routers.clerky.entrypoints=websecure"
      - "traefik.http.routers.clerky.tls.certresolver=letsencrypt"
      
      # IMPORTANTE: Permitir que /sitemap.xml seja passado diretamente
      - "traefik.http.middlewares.sitemap-headers.headers.customRequestHeaders.X-Content-Type-Options=nosniff"
      - "traefik.http.routers.clerky.middlewares=sitemap-headers"
      
      # Garantir que não há redirect para /sitemap.xml
      - "traefik.http.routers.clerky.rule=Host(`clerky.com.br`) && PathPrefix(`/sitemap.xml`)"
```

#### Opção B: Arquivo de Configuração Traefik

Se você usa arquivo de configuração, adicione:

```yaml
http:
  routers:
    clerky:
      rule: "Host(`clerky.com.br`)"
      entryPoints:
        - websecure
      service: clerky-service
      tls:
        certResolver: letsencrypt
      
  middlewares:
    sitemap-passthrough:
      # Não fazer nenhum processamento especial no sitemap
      passHostHeader: true
      
  services:
    clerky-service:
      loadBalancer:
        servers:
          - url: "http://localhost:3000"  # Ajuste conforme sua configuração
```

### 3. Verificar se há Redirects

No Traefik, verifique se há algum middleware de redirect configurado que possa estar interceptando `/sitemap.xml`:

```bash
# No servidor VPS, verifique os logs do Traefik
docker logs traefik 2>&1 | grep sitemap

# Ou se não usar Docker
journalctl -u traefik -f | grep sitemap
```

### 4. Testar Diretamente no Next.js

Para confirmar que o Next.js está servindo corretamente, teste diretamente na porta do Next.js (bypassando o Traefik):

```bash
# No servidor VPS
curl -I http://localhost:3000/sitemap.xml
curl http://localhost:3000/sitemap.xml
```

**Resultado esperado:**
- Status: `200 OK`
- Content-Type: `application/xml` ou `text/xml`
- Conteúdo: XML válido começando com `<?xml version="1.0" encoding="UTF-8"?>`

### 5. Configuração Específica para Sitemap

Se o problema persistir, você pode criar uma rota específica no Traefik:

```yaml
http:
  routers:
    sitemap:
      rule: "Host(`clerky.com.br`) && Path(`/sitemap.xml`)"
      entryPoints:
        - websecure
      service: clerky-service
      tls:
        certResolver: letsencrypt
      priority: 100  # Alta prioridade para garantir que seja processada primeiro
      
    clerky:
      rule: "Host(`clerky.com.br`)"
      entryPoints:
        - websecure
      service: clerky-service
      tls:
        certResolver: letsencrypt
```

### 6. Verificar Headers

O Next.js deve retornar o Content-Type correto automaticamente. Se não estiver funcionando, você pode forçar no Traefik:

```yaml
http:
  middlewares:
    sitemap-headers:
      headers:
        customResponseHeaders:
          Content-Type: "application/xml; charset=utf-8"
```

### 7. Reiniciar Serviços

Após fazer as alterações:

```bash
# Se usar Docker Compose
docker-compose restart traefik

# Se usar systemd
sudo systemctl restart traefik

# Verificar se está funcionando
curl -I https://clerky.com.br/sitemap.xml
```

## Checklist de Verificação

- [ ] Next.js está servindo `/sitemap.xml` corretamente na porta 3000
- [ ] Traefik não tem redirects configurados para `/sitemap.xml`
- [ ] Traefik está passando a requisição diretamente para o Next.js
- [ ] Content-Type está correto (`application/xml`)
- [ ] Teste direto: `curl https://clerky.com.br/sitemap.xml` retorna XML válido

## Comandos Úteis

```bash
# Testar sitemap localmente (no servidor)
curl http://localhost:3000/sitemap.xml

# Testar através do Traefik
curl https://clerky.com.br/sitemap.xml

# Ver headers completos
curl -I https://clerky.com.br/sitemap.xml

# Verificar logs do Traefik
docker logs traefik --tail 50
```

## Próximos Passos

1. Aplicar as configurações acima no Traefik
2. Reiniciar o Traefik
3. Testar `https://clerky.com.br/sitemap.xml` no navegador
4. Verificar no Google Search Console novamente
