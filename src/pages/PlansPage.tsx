import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Building2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import PlanCard from '@/components/cards/PlanCard';
import { plans } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PlansPage = () => {
  const [planType, setPlanType] = useState<'user' | 'agency'>('user');

  const userPlans = plans.filter((p) => p.type === 'user');
  const agencyPlans = plans.filter((p) => p.type === 'agency');

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Escolha o plano ideal para você
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Potencialize suas vendas com nossos planos. Mais visibilidade, mais clientes.
          </p>
        </div>
      </section>

      <div className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Plan Type Tabs */}
          <Tabs defaultValue="user" className="w-full" onValueChange={(v) => setPlanType(v as 'user' | 'agency')}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-14">
                <TabsTrigger value="user" className="gap-2 text-base">
                  <User className="w-5 h-5" />
                  Para Usuários
                </TabsTrigger>
                <TabsTrigger value="agency" className="gap-2 text-base">
                  <Building2 className="w-5 h-5" />
                  Para Imobiliárias
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="user">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {userPlans.map((plan) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="agency">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {agencyPlans.map((plan) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Comparison Table */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-foreground text-center mb-8">
              Compare os planos
            </h2>

            <div className="bg-card rounded-2xl overflow-hidden shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-semibold">Recursos</th>
                      {(planType === 'user' ? userPlans : agencyPlans).map((plan) => (
                        <th key={plan.id} className="text-center p-4 font-semibold">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4">Anúncios ativos</td>
                      {(planType === 'user' ? userPlans : agencyPlans).map((plan) => (
                        <td key={plan.id} className="text-center p-4">
                          {plan.adsLimit === -1 ? 'Ilimitado' : plan.adsLimit}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Anúncios destacados/mês</td>
                      {(planType === 'user' ? userPlans : agencyPlans).map((plan) => (
                        <td key={plan.id} className="text-center p-4">
                          {plan.highlighted}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Fotos por anúncio</td>
                      {(planType === 'user' ? userPlans : agencyPlans).map((plan) => (
                        <td key={plan.id} className="text-center p-4">
                          {plan.id === 'free' ? 'Até 3' : 'Ilimitado'}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Estatísticas</td>
                      {(planType === 'user' ? userPlans : agencyPlans).map((plan) => (
                        <td key={plan.id} className="text-center p-4">
                          {plan.id === 'free' ? (
                            <span className="text-muted-foreground">—</span>
                          ) : plan.id === 'basic' || plan.id === 'agency-basic' ? (
                            'Básicas'
                          ) : (
                            'Avançadas'
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Suporte prioritário</td>
                      {(planType === 'user' ? userPlans : agencyPlans).map((plan) => (
                        <td key={plan.id} className="text-center p-4">
                          {plan.id === 'free' ? (
                            <span className="text-muted-foreground">—</span>
                          ) : (
                            <Check className="w-5 h-5 text-success mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-foreground text-center mb-8">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Posso cancelar a qualquer momento?',
                  a: 'Sim! Você pode cancelar sua assinatura a qualquer momento. O acesso continua até o final do período pago.',
                },
                {
                  q: 'Quais formas de pagamento são aceitas?',
                  a: 'Aceitamos cartões de crédito, débito, PIX e boleto bancário.',
                },
                {
                  q: 'O plano gratuito tem algum custo?',
                  a: 'Não! O plano gratuito é 100% gratuito, sem taxas escondidas.',
                },
                {
                  q: 'Posso fazer upgrade do meu plano?',
                  a: 'Sim, você pode fazer upgrade a qualquer momento. O valor será calculado proporcionalmente.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlansPage;
