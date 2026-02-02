import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Eye, 
  FileText, 
  Heart,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { currentUser, featuredListings, formatPrice, formatDate } from '@/data/mockData';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const UserDashboard = () => {
  const stats = [
    {
      label: 'Anúncios Ativos',
      value: '3',
      change: '+1',
      isPositive: true,
      icon: FileText,
    },
    {
      label: 'Visualizações',
      value: '1.234',
      change: '+15%',
      isPositive: true,
      icon: Eye,
    },
    {
      label: 'Favoritos',
      value: '56',
      change: '+8',
      isPositive: true,
      icon: Heart,
    },
    {
      label: 'Mensagens',
      value: '12',
      change: '-2',
      isPositive: false,
      icon: TrendingUp,
    },
  ];

  const userListings = featuredListings.slice(0, 3);

  return (
    <DashboardLayout user={currentUser} title="Visão Geral">
      {/* Welcome */}
      <div className="mb-8">
        <h2 className="font-display font-bold text-xl text-foreground">
          Olá, {currentUser.name.split(' ')[0]}! 👋
        </h2>
        <p className="text-muted-foreground">
          Aqui está o resumo da sua conta hoje.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className={`flex items-center gap-1 text-sm font-medium ${
                stat.isPositive ? 'text-success' : 'text-destructive'
              }`}>
                {stat.isPositive ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link to="/dashboard/criar-anuncio" className="block">
          <div className="bg-primary text-primary-foreground rounded-2xl p-6 hover:opacity-90 transition-opacity">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <Plus className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Criar Novo Anúncio</h3>
                <p className="text-primary-foreground/80">Publique seu produto ou serviço</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/planos" className="block">
          <div className="bg-secondary text-secondary-foreground rounded-2xl p-6 hover:opacity-90 transition-opacity">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary-foreground/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Upgrade de Plano</h3>
                <p className="text-secondary-foreground/80">Aumente sua visibilidade</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Listings */}
      <div className="bg-card rounded-2xl shadow-card overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="font-display font-semibold text-lg text-foreground">
            Meus Anúncios Recentes
          </h3>
          <Link to="/dashboard/anuncios" className="text-primary text-sm font-medium hover:underline">
            Ver todos
          </Link>
        </div>

        <div className="divide-y divide-border">
          {userListings.map((listing) => (
            <div key={listing.id} className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img src={listing.images[0]} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground truncate">{listing.title}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {listing.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(listing.createdAt)}
                  </span>
                </div>
              </div>

              <p className="font-semibold text-primary hidden sm:block">
                {formatPrice(listing.price)}
              </p>

              <span className="px-3 py-1 bg-success/20 text-success text-xs font-medium rounded-full hidden md:block">
                Ativo
              </span>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                  <DropdownMenuItem>Pausar</DropdownMenuItem>
                  <DropdownMenuItem>Destacar</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Excluir</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Info */}
      <div className="mt-8 bg-accent rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground">
              Plano {currentUser.plan === 'basic' ? 'Básico' : currentUser.plan === 'pro' ? 'Profissional' : 'Gratuito'}
            </h3>
            <p className="text-muted-foreground">
              Você usou 3 de 5 anúncios disponíveis este mês.
            </p>
          </div>
          <Link to="/dashboard/plano">
            <Button variant="outline">Gerenciar Plano</Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
