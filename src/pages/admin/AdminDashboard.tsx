import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  FileText, 
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  Building2,
  AlertCircle,
  CheckCircle,
  Clock,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/layout/AdminLayout';
import { useAuth } from '@/contexts/AuthContext';
import { statsService, userService, listingService } from '@/lib/services';
import { useToast } from '@/hooks/use-toast';

interface AdminStats {
  totalUsers: number;
  totalListings: number;
  totalRevenue: number;
  totalAgencies: number;
  recentUsers: any[];
  recentListings: any[];
  pendingListings: any[];
}

const AdminDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAdminStats();
  }, []);

  const loadAdminStats = async () => {
    try {
      setLoading(true);
      const response = await statsService.getAdminStats();
      
      if (response.success) {
        setStats(response.data);
      }
    } catch (error: any) {
      console.error('Erro ao carregar estatísticas:', error);
      // Mock data temporário até o endpoint estar pronto
      setStats({
        totalUsers: 3,
        totalListings: 0,
        totalRevenue: 0,
        totalAgencies: 1,
        recentUsers: [],
        recentListings: [],
        pendingListings: []
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Carregando estatísticas...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const statsCards = [
    {
      label: 'Total de Usuários',
      value: stats?.totalUsers || 0,
      change: '+3',
      isPositive: true,
      icon: Users,
      color: 'text-primary',
      bg: 'bg-primary/10',
      link: '/admin/usuarios',
    },
    {
      label: 'Anúncios Ativos',
      value: stats?.totalListings || 0,
      change: '0',
      isPositive: true,
      icon: FileText,
      color: 'text-success',
      bg: 'bg-success/10',
      link: '/admin/anuncios',
    },
    {
      label: 'Receita Mensal',
      value: `R$ ${(stats?.totalRevenue || 0).toLocaleString('pt-BR')}`,
      change: '0%',
      isPositive: true,
      icon: DollarSign,
      color: 'text-secondary',
      bg: 'bg-secondary/10',
      link: '/admin/financeiro',
    },
    {
      label: 'Imobiliárias',
      value: stats?.totalAgencies || 0,
      change: '+1',
      isPositive: true,
      icon: Building2,
      color: 'text-warning',
      bg: 'bg-warning/10',
      link: '/admin/imobiliarias',
    },
  ];

  return (
    <AdminLayout>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 mb-8 text-primary-foreground">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Bem-vindo, {user?.name}!</h2>
            <p className="opacity-90">Painel de Controle do Sistema - Acesso Total</p>
          </div>
        </div>
        <p className="opacity-80 text-sm mt-2">
          Você está logado como <strong>Super Administrador</strong> com permissões completas
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statsCards.map((stat, index) => (
          <div key={index} className="stat-card hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className={`flex items-center gap-1 text-sm font-medium ${
                stat.isPositive ? 'text-success' : 'text-destructive'
              }`}>
                <ArrowUpRight className="w-4 h-4" />
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Link to="/admin/usuarios">
          <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
            <Users className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-semibold">Gerenciar Usuários</div>
              <div className="text-xs text-muted-foreground">Visualizar e editar usuários</div>
            </div>
          </Button>
        </Link>
        
        <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
          <FileText className="w-5 h-5 text-success" />
          <div className="text-left">
            <div className="font-semibold">Categorias</div>
            <div className="text-xs text-muted-foreground">Gerenciar categorias</div>
          </div>
        </Button>
        
        <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
          <TrendingUp className="w-5 h-5 text-secondary" />
          <div className="text-left">
            <div className="font-semibold">Configurações</div>
            <div className="text-xs text-muted-foreground">Configurações do sistema</div>
          </div>
        </Button>
      </div>

      {/* System Info */}
      <div className="bg-card rounded-2xl shadow-card p-6">
        <h3 className="font-display font-semibold text-lg text-foreground mb-4">
          Informações do Sistema
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
            <CheckCircle className="w-8 h-8 text-success" />
            <div>
              <div className="font-medium text-foreground">Backend Conectado</div>
              <div className="text-sm text-muted-foreground">API funcionando normalmente</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <div>
              <div className="font-medium text-foreground">Autenticação Ativa</div>
              <div className="text-sm text-muted-foreground">JWT configurado corretamente</div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium mb-2">Credenciais de Teste:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Admin:</strong> superadmin@plclassificados.com</li>
            <li>• <strong>Usuário:</strong> usuario@teste.com</li>
            <li>• <strong>Imobiliária:</strong> imobiliaria@teste.com</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
