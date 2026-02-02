import api from './api';

// Auth Services
export const authService = {
  // Login
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  // Registro
  register: async (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    type?: 'user' | 'agency' | 'admin';
    plan_id?: string;
  }) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  // Obter perfil do usuário
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  // Atualizar perfil
  updateProfile: async (data: any) => {
    const response = await api.put('/auth/profile', data);
    return response.data;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

// User Services
export const userService = {
  // Listar todos os usuários (admin)
  getAll: async (params?: any) => {
    const response = await api.get('/users', { params });
    return response.data;
  },

  // Obter usuário por ID
  getById: async (id: string) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // Criar usuário (admin)
  create: async (data: any) => {
    const response = await api.post('/users', data);
    return response.data;
  },

  // Atualizar usuário
  update: async (id: string, data: any) => {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  },

  // Deletar usuário
  delete: async (id: string) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },
};

// Listing Services
export const listingService = {
  // Listar todos os anúncios
  getAll: async (params?: any) => {
    const response = await api.get('/listings', { params });
    return response.data;
  },

  // Obter anúncio por ID
  getById: async (id: string) => {
    const response = await api.get(`/listings/${id}`);
    return response.data;
  },

  // Criar anúncio
  create: async (data: any) => {
    const response = await api.post('/listings', data);
    return response.data;
  },

  // Atualizar anúncio
  update: async (id: string, data: any) => {
    const response = await api.put(`/listings/${id}`, data);
    return response.data;
  },

  // Deletar anúncio
  delete: async (id: string) => {
    const response = await api.delete(`/listings/${id}`);
    return response.data;
  },

  // Meus anúncios
  getMyListings: async (params?: any) => {
    const response = await api.get('/listings/my', { params });
    return response.data;
  },

  // Upload de imagens
  uploadImages: async (files: FormData) => {
    const response = await api.post('/listings/upload', files, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

// Category Services
export const categoryService = {
  getAll: async () => {
    const response = await api.get('/categories');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/categories', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await api.put(`/categories/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  },
};

// City Services
export const cityService = {
  getAll: async () => {
    const response = await api.get('/cities');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/cities/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/cities', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await api.put(`/cities/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/cities/${id}`);
    return response.data;
  },
};

// Plan Services
export const planService = {
  getAll: async (params?: any) => {
    const response = await api.get('/plans', { params });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/plans/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/plans', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await api.put(`/plans/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/plans/${id}`);
    return response.data;
  },
};

// Stats Services (Dashboard)
export const statsService = {
  // Estatísticas do usuário
  getUserStats: async () => {
    const response = await api.get('/stats/user');
    return response.data;
  },

  // Estatísticas da agência
  getAgencyStats: async () => {
    const response = await api.get('/stats/agency');
    return response.data;
  },

  // Estatísticas do admin
  getAdminStats: async () => {
    const response = await api.get('/stats/admin');
    return response.data;
  },
};

// Report Services (Admin)
export const reportService = {
  // Relatório geral
  getOverview: async () => {
    const response = await api.get('/reports/overview');
    return response.data;
  },

  // Relatório de usuários
  getUsers: async () => {
    const response = await api.get('/reports/users');
    return response.data;
  },

  // Relatório de anúncios
  getListings: async () => {
    const response = await api.get('/reports/listings');
    return response.data;
  },

  // Relatório financeiro
  getFinancial: async () => {
    const response = await api.get('/reports/financial');
    return response.data;
  },
};

// Subscription Services (Mercado Pago)
export const subscriptionService = {
  // Criar assinatura
  create: async (data: { plan_id: string; payer_email?: string }) => {
    const response = await api.post('/subscriptions/create', data);
    return response.data;
  },

  // Cancelar assinatura
  cancel: async () => {
    const response = await api.post('/subscriptions/cancel');
    return response.data;
  },

  // Obter status da assinatura e limites
  getStatus: async () => {
    const response = await api.get('/subscriptions/status');
    return response.data;
  },

  // Histórico de pagamentos
  getPaymentHistory: async (params?: any) => {
    const response = await api.get('/subscriptions/payments', { params });
    return response.data;
  },
};
