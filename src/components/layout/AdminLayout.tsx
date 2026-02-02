import { ReactNode } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  FolderTree, 
  CreditCard, 
  Building2, 
  BarChart3, 
  Settings,
  LogOut,
  Home,
  ChevronRight
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin',
      exact: true
    },
    {
      title: 'Usuários',
      icon: Users,
      path: '/admin/usuarios'
    },
    {
      title: 'Anúncios',
      icon: FileText,
      path: '/admin/anuncios'
    },
    {
      title: 'Categorias',
      icon: FolderTree,
      path: '/admin/categorias'
    },
    {
      title: 'Planos',
      icon: CreditCard,
      path: '/admin/planos'
    },
    {
      title: 'Imobiliárias',
      icon: Building2,
      path: '/admin/imobiliarias'
    },
    {
      title: 'Relatórios',
      icon: BarChart3,
      path: '/admin/relatorios'
    },
    {
      title: 'Configurações',
      icon: Settings,
      path: '/admin/configuracoes'
    }
  ];

  const isActive = (path: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const getUserInitials = () => {
    if (!user?.name) return 'A';
    return user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-72 border-r border-border bg-card">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-border px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PL</span>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg leading-none">PL Classificados</h2>
              <span className="text-xs text-muted-foreground">Painel Admin</span>
            </div>
          </Link>
        </div>

        {/* User Profile */}
        <div className="border-b border-border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-destructive/10 text-destructive mt-1">
                Administrador
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path, item.exact);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.title}</span>
                {active && <ChevronRight className="ml-auto h-4 w-4" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4 space-y-2">
          <Link to="/">
            <Button variant="outline" className="w-full justify-start gap-2" size="sm">
              <Home className="h-4 w-4" />
              Voltar ao site
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10" 
            size="sm"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Home className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">
              {menuItems.find(item => isActive(item.path, item.exact))?.title || 'Dashboard'}
            </span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t border-border mt-auto py-6 px-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2026 PL Classificados. Todos os direitos reservados.</p>
            <p>Versão 1.0.0</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;
