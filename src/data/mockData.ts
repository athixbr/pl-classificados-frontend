// Mock data for the classifieds website

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
}

export interface City {
  id: string;
  name: string;
  state: string;
  slug: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  subcategory?: string;
  city: string;
  state: string;
  neighborhood?: string;
  createdAt: string;
  featured: boolean;
  urgent: boolean;
  userId: string;
  views: number;
  whatsapp?: string;
  phone?: string;
  email?: string;
  type?: 'sale' | 'rent';
  details?: Record<string, string | number>;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  features: string[];
  adsLimit: number;
  highlighted: number;
  featured: boolean;
  type: 'user' | 'agency';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  type: 'user' | 'admin' | 'agency';
  plan?: string;
  createdAt: string;
  listings: number;
}

export const categories: Category[] = [
  { id: '1', name: 'Imóveis', slug: 'imoveis', icon: 'Home', count: 1250 },
  { id: '2', name: 'Veículos', slug: 'veiculos', icon: 'Car', count: 890 },
  { id: '3', name: 'Eletrônicos', slug: 'eletronicos', icon: 'Smartphone', count: 2340 },
  { id: '4', name: 'Móveis', slug: 'moveis', icon: 'Sofa', count: 567 },
  { id: '5', name: 'Empregos', slug: 'empregos', icon: 'Briefcase', count: 1890 },
  { id: '6', name: 'Serviços', slug: 'servicos', icon: 'Wrench', count: 780 },
  { id: '7', name: 'Moda', slug: 'moda', icon: 'Shirt', count: 1567 },
  { id: '8', name: 'Esportes', slug: 'esportes', icon: 'Dumbbell', count: 345 },
];

export const cities: City[] = [
  { id: '1', name: 'São Paulo', state: 'SP', slug: 'sao-paulo' },
  { id: '2', name: 'Rio de Janeiro', state: 'RJ', slug: 'rio-de-janeiro' },
  { id: '3', name: 'Belo Horizonte', state: 'MG', slug: 'belo-horizonte' },
  { id: '4', name: 'Curitiba', state: 'PR', slug: 'curitiba' },
  { id: '5', name: 'Porto Alegre', state: 'RS', slug: 'porto-alegre' },
  { id: '6', name: 'Salvador', state: 'BA', slug: 'salvador' },
  { id: '7', name: 'Brasília', state: 'DF', slug: 'brasilia' },
  { id: '8', name: 'Fortaleza', state: 'CE', slug: 'fortaleza' },
];

export const featuredListings: Listing[] = [
  {
    id: '1',
    title: 'Apartamento 3 Quartos - Vista Mar',
    description: 'Lindo apartamento com 3 quartos, suíte master, varanda gourmet com vista para o mar. Condomínio completo com piscina, academia e salão de festas.',
    price: 850000,
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    category: 'imoveis',
    subcategory: 'apartamentos',
    city: 'Rio de Janeiro',
    state: 'RJ',
    neighborhood: 'Copacabana',
    createdAt: '2025-01-28',
    featured: true,
    urgent: false,
    userId: '1',
    views: 234,
    whatsapp: '21999999999',
    type: 'sale',
    details: {
      quartos: 3,
      banheiros: 2,
      area: 120,
      vagas: 2,
    },
  },
  {
    id: '2',
    title: 'Honda Civic 2023 - Único Dono',
    description: 'Honda Civic EXL 2023, único dono, com apenas 15.000km. Completo com teto solar, bancos em couro, multimídia com Apple CarPlay.',
    price: 165000,
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'],
    category: 'veiculos',
    subcategory: 'carros',
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Moema',
    createdAt: '2025-01-30',
    featured: true,
    urgent: false,
    userId: '2',
    views: 456,
    whatsapp: '11999999999',
    type: 'sale',
    details: {
      ano: 2023,
      km: 15000,
      combustivel: 'Flex',
      cambio: 'Automático',
    },
  },
  {
    id: '3',
    title: 'iPhone 15 Pro Max 256GB',
    description: 'iPhone 15 Pro Max 256GB Titânio Natural. Novo, lacrado, com nota fiscal. Garantia Apple de 1 ano.',
    price: 7500,
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800'],
    category: 'eletronicos',
    subcategory: 'celulares',
    city: 'Curitiba',
    state: 'PR',
    createdAt: '2025-02-01',
    featured: true,
    urgent: true,
    userId: '3',
    views: 789,
    whatsapp: '41999999999',
    type: 'sale',
  },
  {
    id: '4',
    title: 'Casa de Campo com Piscina',
    description: 'Linda casa de campo com 4 suítes, piscina, churrasqueira, área gourmet completa. Terreno de 2.000m² com muito verde.',
    price: 1200000,
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    category: 'imoveis',
    subcategory: 'casas',
    city: 'Belo Horizonte',
    state: 'MG',
    neighborhood: 'Nova Lima',
    createdAt: '2025-01-25',
    featured: true,
    urgent: false,
    userId: '4',
    views: 345,
    whatsapp: '31999999999',
    type: 'sale',
    details: {
      quartos: 4,
      banheiros: 5,
      area: 350,
      vagas: 4,
    },
  },
  {
    id: '5',
    title: 'MacBook Pro M3 14"',
    description: 'MacBook Pro 14 polegadas com chip M3 Pro, 18GB de memória, 512GB SSD. Perfeito estado, com caixa e acessórios.',
    price: 15000,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800'],
    category: 'eletronicos',
    subcategory: 'notebooks',
    city: 'Porto Alegre',
    state: 'RS',
    createdAt: '2025-01-29',
    featured: false,
    urgent: false,
    userId: '5',
    views: 123,
    whatsapp: '51999999999',
    type: 'sale',
  },
  {
    id: '6',
    title: 'Sofá Retrátil 3 Lugares',
    description: 'Sofá retrátil e reclinável, 3 lugares, tecido suede cinza. Seminovo, excelente estado. Acompanha almofadas decorativas.',
    price: 2800,
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'],
    category: 'moveis',
    subcategory: 'sofas',
    city: 'Salvador',
    state: 'BA',
    createdAt: '2025-01-27',
    featured: false,
    urgent: true,
    userId: '6',
    views: 89,
    whatsapp: '71999999999',
    type: 'sale',
  },
];

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Gratuito',
    price: 0,
    period: 'monthly',
    features: [
      '1 anúncio ativo',
      'Duração de 30 dias',
      'Fotos básicas (até 3)',
      'Suporte por email',
    ],
    adsLimit: 1,
    highlighted: 0,
    featured: false,
    type: 'user',
  },
  {
    id: 'basic',
    name: 'Básico',
    price: 29.90,
    period: 'monthly',
    features: [
      '5 anúncios ativos',
      'Duração de 60 dias',
      'Fotos ilimitadas',
      '1 anúncio destacado/mês',
      'Estatísticas básicas',
      'Suporte prioritário',
    ],
    adsLimit: 5,
    highlighted: 1,
    featured: false,
    type: 'user',
  },
  {
    id: 'pro',
    name: 'Profissional',
    price: 59.90,
    period: 'monthly',
    features: [
      '20 anúncios ativos',
      'Duração de 90 dias',
      'Fotos ilimitadas',
      '5 anúncios destacados/mês',
      'Estatísticas avançadas',
      'Selo de vendedor verificado',
      'Suporte 24/7',
    ],
    adsLimit: 20,
    highlighted: 5,
    featured: true,
    type: 'user',
  },
  {
    id: 'agency-basic',
    name: 'Imobiliária Básico',
    price: 199.90,
    period: 'monthly',
    features: [
      '50 anúncios ativos',
      'Duração de 90 dias',
      'Fotos e vídeos ilimitados',
      '10 anúncios destacados/mês',
      'Página da imobiliária',
      'Logo nos anúncios',
      'Estatísticas completas',
    ],
    adsLimit: 50,
    highlighted: 10,
    featured: false,
    type: 'agency',
  },
  {
    id: 'agency-pro',
    name: 'Imobiliária Premium',
    price: 399.90,
    period: 'monthly',
    features: [
      'Anúncios ilimitados',
      'Duração ilimitada',
      'Fotos e vídeos ilimitados',
      '30 anúncios destacados/mês',
      'Página personalizada',
      'Logo e banner nos anúncios',
      'API de integração',
      'Gerente de conta dedicado',
    ],
    adsLimit: -1,
    highlighted: 30,
    featured: true,
    type: 'agency',
  },
];

export const currentUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao@email.com',
  phone: '11999999999',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  type: 'user',
  plan: 'basic',
  createdAt: '2024-06-15',
  listings: 3,
};

export const adminUser: User = {
  id: 'admin',
  name: 'Administrador',
  email: 'admin@plclassificados.com.br',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  type: 'admin',
  createdAt: '2024-01-01',
  listings: 0,
};

export const agencyUser: User = {
  id: 'agency1',
  name: 'Imobiliária Premium',
  email: 'contato@imobiliariapremium.com.br',
  phone: '1140001234',
  avatar: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=150',
  type: 'agency',
  plan: 'agency-pro',
  createdAt: '2024-03-10',
  listings: 45,
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};
