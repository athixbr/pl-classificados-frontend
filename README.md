# PL Classificados - Frontend

Frontend da plataforma de classificados desenvolvido com React, TypeScript e Vite.

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Ou com bun
bun install
```

## 🔧 Configuração

O projeto usa arquivos de ambiente para diferentes contextos:

- `.env` - Configuração base
- `.env.development` - Desenvolvimento local
- `.env.production` - Produção

### Variáveis de Ambiente

```env
VITE_API_URL=http://seu-servidor:3003/api
VITE_APP_NAME=PL Classificados
VITE_APP_ENV=production
```

## 🏃 Executando

### Desenvolvimento

```bash
npm run dev
# ou
bun dev
```

Acesse: http://localhost:8080

### Build para Produção

```bash
npm run build
# ou
bun run build
```

Os arquivos otimizados estarão na pasta `dist/`

### Preview da Build

```bash
npm run preview
# ou
bun preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
│   ├── cards/        # Cards de categorias, listagens, planos
│   ├── dashboard/    # Componentes do dashboard
│   ├── layout/       # Header, Footer, Layout
│   └── ui/           # Componentes UI (shadcn/ui)
├── contexts/         # Contextos React (AuthContext)
├── hooks/            # Custom hooks
├── lib/              # Utilitários e serviços
│   ├── api.ts       # Configuração do Axios
│   ├── services.ts  # Serviços da API
│   └── utils.ts     # Funções auxiliares
├── pages/            # Páginas da aplicação
│   ├── admin/       # Páginas do admin
│   ├── agency/      # Páginas de agências
│   └── dashboard/   # Dashboard do usuário
└── App.tsx           # Componente principal com rotas
```

## 🌐 Deploy na VPS Ubuntu

### 1. Build do Projeto

```bash
npm run build
```

### 2. Enviar para VPS

```bash
# Copiar build para servidor
scp -r dist/* user@seu-servidor:/var/www/pl-classificados/
```

### 3. Configurar Nginx

```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    root /var/www/pl-classificados;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy para API
    location /api {
        proxy_pass http://localhost:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. Reiniciar Nginx

```bash
sudo systemctl restart nginx
```

## 📝 Funcionalidades

- ✅ Sistema de autenticação (Login/Registro)
- ✅ Dashboard de usuário com limites de anúncios
- ✅ Criação e gerenciamento de anúncios
- ✅ Sistema de planos e assinaturas (Mercado Pago)
- ✅ Categorias e filtros
- ✅ Upload de imagens (Digital Ocean Spaces)
- ✅ Painel administrativo
- ✅ Painel de agências
- ✅ Responsivo (mobile-first)

## 🔐 Autenticação

O sistema usa JWT tokens armazenados no localStorage:

```typescript
// Login
const response = await authService.login(email, password);
localStorage.setItem('token', response.data.token);

// Verificar autenticação
const token = localStorage.getItem('token');
if (token) {
  // Usuário autenticado
}
```

## 📊 Sistema de Planos

Integração completa com Mercado Pago:

1. Usuário seleciona plano após registro
2. Plano gratuito: ativação imediata
3. Planos pagos: redirecionamento para checkout MP
4. Webhook atualiza status da assinatura
5. Dashboard mostra limites e uso em tempo real

## 🤝 Contribuindo

1. Clone o repositório
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Projeto privado - Todos os direitos reservados

## 👨‍💻 Desenvolvedor

Desenvolvido por Athix

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
