# PL Classificados - Frontend

## 🚀 Deploy com PM2

### 1. Instalar Dependências

```bash
npm install
```

### 2. Build do Projeto

```bash
npm run build
```

### 3. Iniciar com PM2

```bash
# Iniciar
pm2 start ecosystem.config.cjs

# Ver status
pm2 status

# Ver logs
pm2 logs pl-classificados-frontend

# Parar
pm2 stop pl-classificados-frontend

# Reiniciar
pm2 restart pl-classificados-frontend

# Deletar
pm2 delete pl-classificados-frontend
```

### 4. Salvar configuração PM2 (para iniciar automaticamente)

```bash
pm2 save
pm2 startup
```

## 🔧 Configuração

O frontend rodará na porta **3004** por padrão.

### Variáveis de Ambiente

Edite os arquivos `.env`, `.env.development` ou `.env.production` conforme necessário:

```env
VITE_API_URL=http://191.252.100.197:3004/api
VITE_APP_NAME=PL Classificados
VITE_APP_ENV=production
```

## 📁 Estrutura de Deploy

```
pl-classificados-frontend/
├── dist/              # Build do projeto (gerado pelo Vite)
├── server.js          # Servidor Express para produção
├── ecosystem.config.cjs  # Configuração do PM2
├── logs/              # Logs do PM2 (criado automaticamente)
└── package.json       # Dependências
```

## 🌐 Acesso

Após iniciar com PM2, acesse:
- **Local:** http://localhost:3004
- **Servidor:** http://191.252.100.197:3004

## 🔄 Atualizar Deploy

```bash
# 1. Parar aplicação
pm2 stop pl-classificados-frontend

# 2. Atualizar código
git pull origin main

# 3. Instalar dependências (se houver novas)
npm install

# 4. Rebuild
npm run build

# 5. Reiniciar
pm2 restart pl-classificados-frontend
```

## ⚙️ Configuração PM2

O arquivo `ecosystem.config.cjs` está configurado com:
- **2 instâncias** em modo cluster
- **500MB** de memória máxima por instância
- **Logs** salvos em `./logs/`
- **Restart automático** em caso de falha

## 🔐 Segurança

O servidor Express (`server.js`) inclui:
- Headers de segurança (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Suporte a React Router (SPA routing)
- Compressão de assets

## 📊 Monitoramento

```bash
# Monitor em tempo real
pm2 monit

# Ver métricas
pm2 show pl-classificados-frontend

# Dashboard web (opcional)
pm2 plus
```
