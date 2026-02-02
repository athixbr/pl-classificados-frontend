import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Check, Loader2 } from 'lucide-react';
import { planService, subscriptionService } from '../lib/services';
import { useToast } from '../hooks/use-toast';

interface Plan {
  id: string;
  name: string;
  slug: string;
  price: number;
  duration_days: number;
  max_listings: number;
  max_photos: number;
  highlight_days: number;
  features: string;
  is_active: boolean;
}

export default function SelectPlanPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    loadPlans();
  }, [loadPlans]);

  const loadPlans = useCallback(async () => {
    try {
      const response = await planService.getAll({ type: 'user' });
      if (response.success) {
        setPlans(response.data);
      }
    } catch (error) {
      console.error('Erro ao carregar planos:', error);
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível carregar os planos',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const handleSelectPlan = async (planId: string, planSlug: string) => {
    setSelectedPlan(planId);
    setProcessing(true);

    try {
      // Se for plano gratuito, ativa direto
      if (planSlug === 'free') {
        const response = await subscriptionService.create({ plan_id: planId });
        
        if (response.success) {
          toast({
            title: 'Plano Gratuito Ativado!',
            description: 'Você já pode começar a publicar seus anúncios.',
          });
          
          // Redirecionar para dashboard
          setTimeout(() => {
            navigate('/dashboard');
          }, 1500);
        }
      } else {
        // Para planos pagos, criar assinatura e redirecionar para MP
        const response = await subscriptionService.create({ plan_id: planId });
        
        if (response.success && response.data.init_point) {
          toast({
            title: 'Redirecionando para pagamento',
            description: 'Você será redirecionado para o Mercado Pago...',
          });
          
          // Redirecionar para o checkout do Mercado Pago
          setTimeout(() => {
            window.location.href = response.data.init_point;
          }, 1500);
        }
      }
    } catch (error) {
      console.error('Erro ao selecionar plano:', error);
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Não foi possível processar sua solicitação',
      });
      setSelectedPlan(null);
    } finally {
      setProcessing(false);
    }
  };

  const parseFeatures = (features: string): string[] => {
    try {
      return JSON.parse(features);
    } catch {
      return [];
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Escolha seu Plano</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selecione o plano ideal para suas necessidades e comece a anunciar hoje mesmo!
          </p>
        </div>

        {/* Planos Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${plan.slug === 'free' ? 'border-gray-300' : 'border-primary border-2'}`}
            >
              {plan.slug !== 'free' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    Recomendado
                  </Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  {plan.max_listings === -1 ? 'Anúncios ilimitados' : `Até ${plan.max_listings} anúncios`}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {plan.price === 0 ? 'Grátis' : `R$ ${plan.price.toFixed(2)}`}
                  </span>
                  {plan.price > 0 && <span className="text-muted-foreground">/mês</span>}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {parseFeatures(plan.features).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.highlight_days > 0 && (
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-primary">
                        {plan.highlight_days} anúncios em destaque por mês
                      </span>
                    </li>
                  )}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  variant={plan.slug === 'free' ? 'outline' : 'default'}
                  onClick={() => handleSelectPlan(plan.id, plan.slug)}
                  disabled={processing}
                >
                  {processing && selectedPlan === plan.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      {plan.slug === 'free' ? 'Começar Grátis' : 'Assinar Agora'}
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Todos os planos podem ser cancelados a qualquer momento. 
            {' '}<a href="/termos" className="text-primary hover:underline">Ver termos de uso</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
