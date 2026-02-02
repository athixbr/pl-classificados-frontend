import { Building2, TrendingUp, Users, Shield, HeadsetIcon, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AgenciesPage = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Painel Completo",
      description: "Gerencie todos os seus imóveis em um único lugar com ferramentas poderosas de controle"
    },
    {
      icon: TrendingUp,
      title: "Mais Visibilidade",
      description: "Seus anúncios aparecem em destaque para milhões de potenciais compradores"
    },
    {
      icon: Users,
      title: "Gestão de Leads",
      description: "Acompanhe todas as consultas e organize seus contatos em um só lugar"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Verificação de usuários e proteção de dados para tranquilidade total"
    },
    {
      icon: HeadsetIcon,
      title: "Suporte VIP",
      description: "Atendimento prioritário para resolver dúvidas e problemas imediatamente"
    },
    {
      icon: Zap,
      title: "Ferramentas Avançadas",
      description: "Análises, relatórios e dados para otimizar suas vendas"
    }
  ];

  const plans = [
    {
      name: "Bronze",
      price: "R$ 299",
      period: "/mês",
      listings: "50 imóveis",
      features: [
        "50 anúncios ativos",
        "Edição ilimitada",
        "Suporte por email",
        "Relatórios básicos",
        "Logo da imobiliária"
      ]
    },
    {
      name: "Prata",
      price: "R$ 699",
      period: "/mês",
      listings: "250 imóveis",
      featured: true,
      features: [
        "250 anúncios ativos",
        "Edição ilimitada",
        "Suporte telefônico",
        "Relatórios avançados",
        "Logo e certificado",
        "Destaque em buscas",
        "Chat com compradores"
      ]
    },
    {
      name: "Ouro",
      price: "R$ 1.499",
      period: "/mês",
      listings: "Ilimitado",
      features: [
        "Anúncios ilimitados",
        "Edição ilimitada",
        "Suporte dedicado 24/7",
        "Relatórios em tempo real",
        "Logo e certificado",
        "Destaque premium",
        "Chat e videoconferência",
        "API de integração"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Solicitar Cadastro",
      description: "Preencha o formulário com informações da sua imobiliária"
    },
    {
      step: "2",
      title: "Verificação",
      description: "Nossa equipe verifica e aprova seu cadastro em até 24 horas"
    },
    {
      step: "3",
      title: "Ativar Plano",
      description: "Escolha o melhor plano para sua imobiliária e ative"
    },
    {
      step: "4",
      title: "Começar a Vender",
      description: "Comece a anunciar seus imóveis e receba mais clientes"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop")',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-blue-600/60 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white drop-shadow-xl">
            Para Imobiliárias
          </h1>
          <p className="text-xl text-white/95 font-semibold drop-shadow-lg max-w-2xl mx-auto mb-8">
            Aumente suas vendas com a maior plataforma de imóveis do Brasil
          </p>
          <Link to="#planos">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-bold rounded-lg shadow-lg">
              Ver Planos
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-center text-foreground">
            Por que anunciar no Plantão?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white">
              <div className="text-5xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground font-semibold">Imobiliárias Parceiras</p>
            </Card>
            <Card className="p-8 text-center bg-white">
              <div className="text-5xl font-bold text-primary mb-2">100K+</div>
              <p className="text-muted-foreground font-semibold">Imóveis Anunciados</p>
            </Card>
            <Card className="p-8 text-center bg-white">
              <div className="text-5xl font-bold text-primary mb-2">5M+</div>
              <p className="text-muted-foreground font-semibold">Visitantes/Mês</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-center text-foreground">
            Planos para Imobiliárias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`p-8 flex flex-col ${plan.featured ? 'border-2 border-primary shadow-xl scale-105' : ''}`}
              >
                {plan.featured && (
                  <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full w-fit mb-4">
                    Mais Popular
                  </div>
                )}
                <h3 className="font-bold text-2xl mb-2 text-foreground">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-primary font-semibold mb-6">{plan.listings}</p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full font-bold py-6 ${plan.featured ? 'bg-primary hover:bg-primary/90 text-white' : 'border border-primary text-primary hover:bg-primary/10'}`}>
                  Contratar Plano
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Como Funciona?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {process.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute w-12 h-0.5 bg-primary/30 mt-8" style={{marginLeft: '1rem'}} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white drop-shadow-xl">
            Aumentar Suas Vendas?
          </h2>
          <p className="text-xl text-white/95 font-semibold mb-10 drop-shadow-lg max-w-2xl mx-auto">
            Junte-se a mais de 1000 imobiliárias que confiam no Plantão
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-bold rounded-lg shadow-lg">
              Solicitar Cadastro
            </Button>
            <a href="mailto:imobiliarias@plantaoclass.com.br">
              <Button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-bold rounded-lg shadow-lg">
                Fale com Comercial
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AgenciesPage;
