import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Plus, 
  ChevronDown,
  MapPin,
  Bell,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cities } from '@/data/mockData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Todas as cidades');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/categorias', label: 'Categorias' },
    { path: '/imoveis', label: 'Imóveis' },
    { path: '/planos', label: 'Planos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📞 Suporte: (11) 4000-1234</span>
            <span>✉️ contato@plantaonoticias.com.br</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/anunciar" className="hover:underline">Anuncie Grátis</Link>
            <Link to="/ajuda" className="hover:underline">Ajuda</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl text-foreground leading-none">
                Plantão
              </h1>
              <span className="text-xs text-muted-foreground">Notícias & Classificados</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 min-w-[180px]">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="truncate">{selectedCity}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
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

            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="input-styled pl-10"
              />
            </div>

            <Button className="btn-primary">
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/favoritos" className="hidden md:flex items-center gap-1 nav-link">
              <Heart className="w-5 h-5" />
              <span className="hidden lg:inline">Favoritos</span>
            </Link>

            <Button variant="ghost" size="icon" className="hidden md:flex relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <User className="w-5 h-5" />
                  <span className="hidden md:inline">Entrar</span>
                  <ChevronDown className="w-4 h-4 hidden md:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/login">Entrar</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cadastro">Criar conta</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Minha conta</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/anuncios">Meus anúncios</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/anunciar">
              <Button className="btn-secondary gap-2">
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Anunciar</span>
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 mt-4 pt-4 border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-background z-40 animate-fade-in">
          <div className="p-4 space-y-4">
            {/* Mobile Search */}
            <div className="space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full gap-2 justify-start">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{selectedCity}</span>
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="O que você está procurando?"
                  className="input-styled pl-10"
                />
              </div>
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.path) 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-border space-y-2">
              <Link to="/favoritos" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted">
                <Heart className="w-5 h-5" />
                <span>Favoritos</span>
              </Link>
              <Link to="/notificacoes" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted">
                <Bell className="w-5 h-5" />
                <span>Notificações</span>
                <span className="ml-auto bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full">3</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
