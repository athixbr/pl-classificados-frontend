import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Plus, 
  Heart, 
  User, 
  Settings, 
  CreditCard,
  BarChart3,
  LogOut,
  Building2,
  Users,
  Package,
  Bell
} from 'lucide-react';
import { User as UserType } from '@/data/mockData';

interface DashboardSidebarProps {
  user: UserType;
}

const DashboardSidebar = ({ user }: DashboardSidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const userLinks = [
    { path: '/dashboard', label: 'Visão Geral', icon: LayoutDashboard },
    { path: '/dashboard/anuncios', label: 'Meus Anúncios', icon: FileText },
    { path: '/dashboard/criar-anuncio', label: 'Criar Anúncio', icon: Plus },
    { path: '/dashboard/favoritos', label: 'Favoritos', icon: Heart },
    { path: '/dashboard/estatisticas', label: 'Estatísticas', icon: BarChart3 },
    { path: '/dashboard/notificacoes', label: 'Notificações', icon: Bell },
    { path: '/dashboard/plano', label: 'Meu Plano', icon: CreditCard },
    { path: '/dashboard/perfil', label: 'Meu Perfil', icon: User },
    { path: '/dashboard/configuracoes', label: 'Configurações', icon: Settings },
  ];

  const adminLinks = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/usuarios', label: 'Usuários', icon: Users },
    { path: '/admin/anuncios', label: 'Anúncios', icon: FileText },
    { path: '/admin/categorias', label: 'Categorias', icon: Package },
    { path: '/admin/planos', label: 'Planos', icon: CreditCard },
    { path: '/admin/imobiliarias', label: 'Imobiliárias', icon: Building2 },
    { path: '/admin/relatorios', label: 'Relatórios', icon: BarChart3 },
    { path: '/admin/configuracoes', label: 'Configurações', icon: Settings },
  ];

  const agencyLinks = [
    { path: '/imobiliaria', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/imobiliaria/imoveis', label: 'Meus Imóveis', icon: Building2 },
    { path: '/imobiliaria/criar-imovel', label: 'Cadastrar Imóvel', icon: Plus },
    { path: '/imobiliaria/leads', label: 'Leads', icon: Users },
    { path: '/imobiliaria/estatisticas', label: 'Estatísticas', icon: BarChart3 },
    { path: '/imobiliaria/plano', label: 'Meu Plano', icon: CreditCard },
    { path: '/imobiliaria/perfil', label: 'Perfil da Imobiliária', icon: User },
    { path: '/imobiliaria/configuracoes', label: 'Configurações', icon: Settings },
  ];

  const links = user.type === 'admin' 
    ? adminLinks 
    : user.type === 'agency' 
      ? agencyLinks 
      : userLinks;

  return (
    <aside className="dashboard-sidebar w-64 min-h-screen flex flex-col">
      {/* User Info */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground font-bold text-lg">
                {user.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sidebar-foreground truncate">{user.name}</h3>
            <p className="text-sm text-muted-foreground truncate">
              {user.type === 'admin' ? 'Administrador' : user.type === 'agency' ? 'Imobiliária' : 'Usuário'}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`sidebar-link ${isActive(link.path) ? 'active' : ''}`}
          >
            <link.icon className="w-5 h-5" />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Link to="/" className="sidebar-link text-destructive hover:bg-destructive/10">
          <LogOut className="w-5 h-5" />
          <span>Sair</span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
