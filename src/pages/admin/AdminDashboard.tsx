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
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { adminUser, featuredListings, formatPrice, formatDate } from '@/data/mockData';

const AdminDashboard = () => {
  const stats = [
    {
      label: 'Total de Usuários',
      value: '12.456',
      change: '+234',
      isPositive: true,
      icon: Users,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      label: 'Anúncios Ativos',
      value: '8.234',
      change: '+156',
      isPositive: true,
      icon: FileText,
      color: 'text-success',
      bg: 'bg-success/10',
    },
    {
      label: 'Receita Mensal',
      value: 'R$ 45.890',
      change: '+12%',
      isPositive: true,
      icon: DollarSign,
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
    {
      label: 'Imobiliárias',
      value: '156',
      change: '+8',
      isPositive: true,
      icon: Building2,
      color: 'text-warning',
      bg: 'bg-warning/10',
    },
  ];

  const recentActions = [
    { type: 'new_user', message: 'Novo usuário cadastrado: João Silva', time: '5 min atrás' },
    { type: 'new_listing', message: 'Novo anúncio: Apartamento 3 quartos', time: '12 min atrás' },
    { type: 'payment', message: 'Pagamento recebido: Plano Pro - R$ 59,90', time: '1h atrás' },
    { type: 'report', message: 'Denúncia recebida: Anúncio #12345', time: '2h atrás' },
    { type: 'new_agency', message: 'Nova imobiliária: Premium Imóveis', time: '3h atrás' },
  ];

  const pendingApprovals = [
    { id: '1', title: 'iPhone 15 Pro Max', user: 'Carlos Silva', date: '02/02/2025', status: 'pending' },
    { id: '2', title: 'Apartamento Centro', user: 'Imob Premium', date: '02/02/2025', status: 'pending' },
    { id: '3', title: 'Honda Civic 2023', user: 'Maria Santos', date: '01/02/2025', status: 'pending' },
  ];

  return (
    <DashboardLayout user={adminUser} title="Dashboard Administrativo">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-card rounded-2xl shadow-card">
          <div className="p-6 border-b border-border">
            <h3 className="font-display font-semibold text-lg text-foreground">
              Atividade Recente
            </h3>
          </div>
          <div className="divide-y divide-border">
            {recentActions.map((action, index) => (
              <div key={index} className="p-4 flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  action.type === 'new_user' ? 'bg-primary/10 text-primary' :
                  action.type === 'new_listing' ? 'bg-success/10 text-success' :
                  action.type === 'payment' ? 'bg-secondary/10 text-secondary' :
                  action.type === 'report' ? 'bg-destructive/10 text-destructive' :
                  'bg-warning/10 text-warning'
                }`}>
                  {action.type === 'new_user' && <Users className="w-4 h-4" />}
                  {action.type === 'new_listing' && <FileText className="w-4 h-4" />}
                  {action.type === 'payment' && <DollarSign className="w-4 h-4" />}
                  {action.type === 'report' && <AlertCircle className="w-4 h-4" />}
                  {action.type === 'new_agency' && <Building2 className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground">{action.message}</p>
                  <p className="text-sm text-muted-foreground">{action.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-card rounded-2xl shadow-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-display font-semibold text-lg text-foreground">
              Aguardando Aprovação
            </h3>
            <span className="px-3 py-1 bg-warning/20 text-warning text-sm font-medium rounded-full">
              {pendingApprovals.length} pendentes
            </span>
          </div>
          <div className="divide-y divide-border">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="p-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h4 className="font-medium text-foreground truncate">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.user} • {item.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="text-success">
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-destructive">
                    <AlertCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-border">
            <Link to="/admin/anuncios" className="text-primary text-sm font-medium hover:underline">
              Ver todos os anúncios →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/admin/usuarios" className="block">
          <div className="bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all border border-transparent hover:border-primary">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h4 className="font-semibold text-foreground">Gerenciar Usuários</h4>
            <p className="text-sm text-muted-foreground">12.456 usuários</p>
          </div>
        </Link>
        <Link to="/admin/anuncios" className="block">
          <div className="bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all border border-transparent hover:border-primary">
            <FileText className="w-8 h-8 text-success mb-3" />
            <h4 className="font-semibold text-foreground">Gerenciar Anúncios</h4>
            <p className="text-sm text-muted-foreground">8.234 ativos</p>
          </div>
        </Link>
        <Link to="/admin/planos" className="block">
          <div className="bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all border border-transparent hover:border-primary">
            <DollarSign className="w-8 h-8 text-secondary mb-3" />
            <h4 className="font-semibold text-foreground">Gerenciar Planos</h4>
            <p className="text-sm text-muted-foreground">5 planos ativos</p>
          </div>
        </Link>
        <Link to="/admin/imobiliarias" className="block">
          <div className="bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all border border-transparent hover:border-primary">
            <Building2 className="w-8 h-8 text-warning mb-3" />
            <h4 className="font-semibold text-foreground">Imobiliárias</h4>
            <p className="text-sm text-muted-foreground">156 cadastradas</p>
          </div>
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
