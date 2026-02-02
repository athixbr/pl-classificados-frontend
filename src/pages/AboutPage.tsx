import { Award, Users, TrendingUp, Shield, Zap, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Facilitar a compra, venda e troca de produtos entre pessoas e empresas, criando um marketplace seguro, transparente e acessível para toda população brasileira."
    },
    {
      icon: TrendingUp,
      title: "Nossa Visão",
      description: "Ser o maior e mais confiável portal de classificados da América Latina, revolucionando a forma como as pessoas compram e vendem online."
    },
    {
      icon: Shield,
      title: "Nossos Valores",
      description: "Transparência, segurança, confiabilidade e inovação. Acreditamos em criar um ambiente seguro onde compradores e vendedores podem interagir com confiança."
    }
  ];

  const team = [
    {
      name: "João Silva",
      role: "CEO e Fundador",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Maria Santos",
      role: "Diretora Executiva",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Pedro Costa",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Ana Oliveira",
      role: "Diretora de Marketing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  const milestones = [
    { year: "2015", event: "Fundação do Plantão Classificados" },
    { year: "2017", event: "Alcançamos 1 milhão de usuários" },
    { year: "2019", event: "Expansão para 20 estados brasileiros" },
    { year: "2021", event: "Implementação de sistema de verificação de usuários" },
    { year: "2023", event: "Atingimos 5 milhões de usuários ativos" },
    { year: "2024", event: "Lançamento da plataforma mobile app" },
    { year: "2025", event: "Expansão internacional para América Latina" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop")',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-blue-600/60 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white drop-shadow-xl">
            Sobre o Plantão
          </h1>
          <p className="text-xl text-white/95 font-semibold drop-shadow-lg max-w-2xl mx-auto">
            A história de como nos tornamos o maior portal de classificados do Brasil
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-center text-foreground">
            Missão, Visão e Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-2xl mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 text-center bg-white">
              <div className="text-5xl font-bold text-primary mb-2">5M+</div>
              <p className="text-muted-foreground font-semibold">Usuários Ativos</p>
              <p className="text-xs text-muted-foreground mt-2">Pessoas que confiam em nós</p>
            </Card>
            <Card className="p-8 text-center bg-white">
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground font-semibold">Anúncios Diários</p>
              <p className="text-xs text-muted-foreground mt-2">Produtos listados todos os dias</p>
            </Card>
            <Card className="p-8 text-center bg-white">
              <div className="text-5xl font-bold text-primary mb-2">27</div>
              <p className="text-muted-foreground font-semibold">Estados Ativos</p>
              <p className="text-xs text-muted-foreground mt-2">Presença em todo Brasil</p>
            </Card>
            <Card className="p-8 text-center bg-white">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground font-semibold">Anos Atuando</p>
              <p className="text-xs text-muted-foreground mt-2">Experiência no mercado</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Nossa Trajetória
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6 mb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {idx + 1}
                  </div>
                  {idx !== milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-primary/30 mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h4 className="font-bold text-xl text-primary mb-1">{milestone.year}</h4>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Conheça Nosso Time
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-center text-foreground">
            Por que escolher o Plantão?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Reconhecido e Premiado</h3>
                <p className="text-muted-foreground">Somos a plataforma de classificados mais utilizada e bem avaliada do Brasil</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Comunidade Confiável</h3>
                <p className="text-muted-foreground">Milhões de usuários ativos participam da nossa comunidade todos os dias</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">100% Seguro</h3>
                <p className="text-muted-foreground">Sistema de verificação e proteção contra fraudes em todas as transações</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Rápido e Fácil</h3>
                <p className="text-muted-foreground">Interface intuitiva que permite anunciar e buscar produtos em segundos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white drop-shadow-xl">
            Faça Parte da Nossa Comunidade
          </h2>
          <p className="text-xl text-white/95 font-semibold mb-10 drop-shadow-lg max-w-2xl mx-auto">
            Comece a comprar, vender e anunciar com segurança no Plantão hoje mesmo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cadastro">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-bold rounded-lg shadow-lg">
                Criar Conta Grátis
              </Button>
            </Link>
            <Link to="/planos">
              <Button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-bold rounded-lg shadow-lg">
                Conhecer Planos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
