import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Plus, 
  ChevronDown,
  MapPin,
  Bell,
  Heart,
  LogOut,
  Settings,
  LayoutDashboard,
  Home,
  Grid3x3,
  Building2,
  Crown,
  Tag,
  Car,
  Briefcase,
  ShoppingBag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cities } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Todas as cidades');
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardRoute = () => {
    if (user?.type === 'admin') return '/admin';
    if (user?.type === 'agency') return '/imobiliaria';
    return '/dashboard';
  };

  const getUserInitials = () => {
    if (!user?.name) return 'U';
    return user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/categorias', label: 'Categorias' },
    { path: '/imoveis', label: 'Imóveis' },
    { path: '/planos', label: 'Planos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar - Info */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:1140001234" className="hover:text-white/90 transition flex items-center gap-1">
              <span>📞</span>
              <span>(11) 4000-1234</span>
            </a>
            <a href="mailto:contato@plclassificados.com.br" className="hover:text-white/90 transition flex items-center gap-1">
              <span>✉️</span>
              <span>contato@plclassificados.com.br</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/anunciar" className="hover:text-white/90 transition font-medium">
              Anuncie Grátis
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/ajuda" className="hover:text-white/90 transition">
              Ajuda
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">

          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://plantaodanoticia.com.br/wp-content/uploads/2022/12/Design-sem-nome-1.png" 
                alt="PL Classificados" 
                className="h-12 md:h-14 w-auto object-contain hover:opacity-90 transition"
              />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-3xl items-center gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por produtos, serviços, imóveis..."
                  className="w-full h-11 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>
              <Button className="btn-primary h-11 px-6 gap-2">
                <Search className="w-5 h-5" />
                <span className="hidden xl:inline">Buscar</span>
              </Button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <Button variant="ghost" size="icon" className="hidden md:flex relative hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
              </Button>

              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2 px-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{getUserInitials()}</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline font-medium">{user.name.split(' ')[0]}</span>
                      <ChevronDown className="w-4 h-4 hidden md:block" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-xs text-muted-foreground">{user.email}</span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to={getDashboardRoute()} className="flex items-center gap-2">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/anuncios" className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Meus anúncios
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/configuracoes" className="flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        Configurações
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive flex items-center gap-2">
                      <LogOut className="w-4 h-4" />
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 border-gray-300 hover:border-primary hover:bg-gray-50">
                    <User className="w-5 h-5" />
                    <span className="hidden md:inline font-medium">Entrar</span>
                    <ChevronDown className="w-4 h-4 hidden md:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/login" className="cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      Entrar
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cadastro" className="cursor-pointer">
                      <Plus className="w-4 h-4 mr-2" />
                      Criar conta
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <Link to="/anunciar">
              <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 h-11 px-6 shadow-sm">
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline font-semibold">Anunciar</span>
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-1 mt-4 pt-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  isActive(link.path) 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[120px] bg-white z-40 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* Mobile Search */}
            <div className="space-y-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full gap-2 justify-start border-gray-300">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{selectedCity}</span>
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem onClick={() => setSelectedCity('Todas as cidades')}>
                    Todas as cidades
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {cities.map((city) => (
                    <DropdownMenuItem 
                      key={city.id}
                      onClick={() => setSelectedCity(`${city.name}, ${city.state}`)}
                    >
                      {city.name}, {city.state}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos, serviços..."
                  className="w-full h-11 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors ${
                    isActive(link.path) 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link 
                to="/favoritos" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="w-5 h-5" />
                <span className="font-medium">Favoritos</span>
              </Link>
              <Link 
                to="/notificacoes" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Bell className="w-5 h-5" />
                <span className="font-medium">Notificações</span>
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">3</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
