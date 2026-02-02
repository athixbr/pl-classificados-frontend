import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileText, 
  Users,
  TrendingUp,
  ArrowUpRight,
  Eye,
  Phone,
  Mail,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { agencyUser, featuredListings, formatPrice, formatDate } from '@/data/mockData';

const AgencyDashboard = () => {
  const stats = [
    {
      label: 'Imóveis Ativos',
      value: '45',
      change: '+3',
      isPositive: true,
      icon: Building2,
    },
    {
      label: 'Visualizações',
      value: '12.456',
      change: '+23%',
      isPositive: true,
      icon: Eye,
    },
    {
      label: 'Leads do Mês',
      value: '89',
      change: '+15',
      isPositive: true,
      icon: Users,
    },
    {
      label: 'Taxa de Conversão',
      value: '4.2%',
      change: '+0.5%',
      isPositive: true,
      icon: TrendingUp,
    },
  ];

  const recentLeads = [
    { name: 'João Silva', interest: 'Apartamento 3 Quartos - Centro', phone: '(11) 99999-1234', date: '02/02/2025' },
    { name: 'Maria Santos', interest: 'Casa com Piscina - Alphaville', phone: '(11) 98888-5678', date: '01/02/2025' },
    { name: 'Carlos Oliveira', interest: 'Sala Comercial - Paulista', phone: '(11) 97777-9012', date: '01/02/2025' },
  ];

  const propertyListings = featuredListings.filter(l => l.category === 'imoveis').slice(0, 4);

  return (
    <DashboardLayout user={agencyUser} title="Dashboard da Imobiliária">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-success">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/imobiliaria/criar-imovel" className="block">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 hover:opacity-90 transition-opacity h-full">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                    <Plus className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Cadastrar Imóvel</h3>
                    <p className="text-primary-foreground/80">Adicione um novo imóvel</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/imobiliaria/leads" className="block">
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-6 hover:opacity-90 transition-opacity h-full">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary-foreground/20 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Ver Leads</h3>
                    <p className="text-secondary-foreground/80">89 novos leads</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-card rounded-2xl shadow-card">
          <div className="p-4 border-b border-border">
            <h3 className="font-display font-semibold text-foreground">Leads Recentes</h3>
          </div>
          <div className="divide-y divide-border">
            {recentLeads.map((lead, index) => (
              <div key={index} className="p-4">
                <p className="font-medium text-foreground">{lead.name}</p>
                <p className="text-sm text-muted-foreground truncate">{lead.interest}</p>
                <div className="flex items-center gap-3 mt-2">
                  <a href={`tel:${lead.phone}`} className="text-primary text-sm flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    Ligar
                  </a>
                  <span className="text-xs text-muted-foreground">{lead.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Properties List */}
      <div className="bg-card rounded-2xl shadow-card overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="font-display font-semibold text-lg text-foreground">
            Imóveis em Destaque
          </h3>
          <Link to="/imobiliaria/imoveis" className="text-primary text-sm font-medium hover:underline">
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          {propertyListings.length > 0 ? propertyListings.map((listing) => (
            <div key={listing.id} className="rounded-xl overflow-hidden border border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={listing.images[0]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-foreground line-clamp-1">{listing.title}</h4>
                <p className="text-primary font-semibold mt-1">{formatPrice(listing.price)}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {listing.views}
                  </span>
                  <span>{formatDate(listing.createdAt)}</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center py-8 text-muted-foreground">
              Nenhum imóvel cadastrado ainda.
            </div>
          )}
        </div>
      </div>

      {/* Plan Info */}
      <div className="mt-8 bg-accent rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground">
              Plano Imobiliária Premium
            </h3>
            <p className="text-muted-foreground">
              Anúncios ilimitados • 30 destaques/mês • API de integração
            </p>
          </div>
          <Link to="/imobiliaria/plano">
            <Button variant="outline">Gerenciar Plano</Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgencyDashboard;
