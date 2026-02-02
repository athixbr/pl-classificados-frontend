import { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Eye, 
  FileText, 
  Heart,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Sparkles,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { subscriptionService } from '@/lib/services';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionStatus {
  user: {
    id: string;
    name: string;
    email: string;
  };
  plan: {
    id: string;
    name: string;
    slug: string;
    price: number;
    ads_limit: number;
    highlighted: number;
  };
  current_subscription: {
    id: string;
    status: string;
  } | null;
  usage: {
    active_listings: number;
    max_listings: number;
    highlighted_listings: number;
    max_highlighted: number;
  };
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubscriptionStatus();
  }, [loadSubscriptionStatus]);

  const loadSubscriptionStatus = useCallback(async () => {
    try {
      const response = await subscriptionService.getStatus();
      if (response.success) {
        setStatus(response.data);
        
        // Se usuário não tem plano, redirecionar para seleção
        if (!response.data.plan) {
          toast({
            title: 'Escolha um plano',
            description: 'Você precisa escolher um plano para começar a anunciar.',
          });
          navigate('/select-plan');
        }
      }
    } catch (error) {
      console.error('Erro ao carregar status:', error);
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível carregar informações da assinatura',
      });
    } finally {
      setLoading(false);
    }
  }, [toast, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!status) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>
            Não foi possível carregar as informações do dashboard.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const { plan, usage } = status;
  const listingsPercent = plan.ads_limit === -1 ? 0 : (usage.active_listings / usage.max_listings) * 100;
  const highlightedPercent = usage.max_highlighted === 0 ? 0 : (usage.highlighted_listings / usage.max_highlighted) * 100;
  const canCreateListing = plan.ads_limit === -1 || usage.active_listings < usage.max_listings;

  const stats = [
    {
      label: 'Anúncios Ativos',
      value: `${usage.active_listings}/${plan.ads_limit === -1 ? '∞' : usage.max_listings}`,
      change: canCreateListing ? 'Pode criar mais' : 'Limite atingido',
      isPositive: canCreateListing,
      icon: FileText,
    },
    {
      label: 'Destaques Usados',
      value: `${usage.highlighted_listings}/${usage.max_highlighted}`,
      change: usage.max_highlighted > 0 ? 'Neste mês' : 'Não disponível',
      isPositive: usage.highlighted_listings < usage.max_highlighted,
      icon: Sparkles,
    },
    {
      label: 'Plano Atual',
      value: plan.name,
      change: plan.price === 0 ? 'Gratuito' : `R$ ${plan.price}/mês`,
      isPositive: true,
      icon: Package,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Bem-vindo de volta, {status.user.name}!
            </p>
          </div>
          <Button size="lg" asChild disabled={!canCreateListing}>
            <Link to="/create-listing">
              <Plus className="mr-2 h-4 w-4" />
              Criar Anúncio
            </Link>
          </Button>
        </div>

        {/* Alerta de limite */}
        {!canCreateListing && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Limite de anúncios atingido</AlertTitle>
            <AlertDescription className="flex items-center justify-between">
              <span>
                Você atingiu o limite de {usage.max_listings} anúncios do seu plano atual.
              </span>
              <Button variant="outline" size="sm" asChild>
                <Link to="/planos">Fazer Upgrade</Link>
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  {stat.isPositive ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500" />
                  )}
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progresso de Uso */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Uso de Anúncios</CardTitle>
              <CardDescription>
                {usage.active_listings} de {plan.ads_limit === -1 ? 'ilimitados' : usage.max_listings} anúncios publicados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={listingsPercent} className="h-2" />
              <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                <span>{usage.active_listings} usados</span>
                <span>{plan.ads_limit === -1 ? '∞' : usage.max_listings - usage.active_listings} disponíveis</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Destaques Mensais</CardTitle>
              <CardDescription>
                {usage.highlighted_listings} de {usage.max_highlighted} destaques usados este mês
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress 
                value={highlightedPercent} 
                className="h-2"
              />
              <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                <span>{usage.highlighted_listings} usados</span>
                <span>{usage.max_highlighted - usage.highlighted_listings} disponíveis</span>
              </div>
              {usage.max_highlighted === 0 && (
                <Button variant="link" size="sm" className="mt-2 p-0" asChild>
                  <Link to="/planos">Fazer upgrade para ter destaques</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Plano Atual */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Seu Plano: {plan.name}</CardTitle>
                <CardDescription>
                  {plan.price === 0 ? 'Plano Gratuito' : `R$ ${plan.price.toFixed(2)}/mês`}
                </CardDescription>
              </div>
              {plan.slug !== 'free' && (
                <Badge variant="default">Ativo</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="space-y-1">
                <p className="text-sm">
                  • {plan.ads_limit === -1 ? 'Anúncios ilimitados' : `Até ${plan.ads_limit} anúncios simultâneos`}
                </p>
                <p className="text-sm">
                  • {plan.highlighted === 0 ? 'Sem destaques' : `${plan.highlighted} anúncios em destaque por mês`}
                </p>
              </div>
              <div className="flex gap-2">
                {plan.slug === 'free' && (
                  <Button variant="default" asChild>
                    <Link to="/planos">Fazer Upgrade</Link>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link to="/planos">Ver Planos</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meus Anúncios Link */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              <Button variant="outline" className="justify-start" asChild>
                <Link to="/dashboard/my-listings">
                  <FileText className="mr-2 h-4 w-4" />
                  Meus Anúncios
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild disabled={!canCreateListing}>
                <Link to="/create-listing">
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Anúncio
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <Link to="/planos">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Planos e Preços
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
