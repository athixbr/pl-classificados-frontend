import { ChevronRight, MessageCircle, HelpCircle, Shield, Zap, Users, Target, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HelpPage = () => {
  const faqs = [
    {
      id: "como-anunciar",
      title: "Como faço para anunciar um produto?",
      content: "É muito simples! Clique no botão 'Anunciar Grátis' no topo da página, faça login ou crie sua conta, escolha a categoria do seu produto, adicione fotos, descrição e preço. Seu anúncio será publicado instantaneamente e você poderá gerenciar todos os seus anúncios no seu dashboard."
    },
    {
      id: "criar-conta",
      title: "Como criar uma conta no Plantão?",
      content: "Clique em 'Cadastro' no topo direito da página, preencha seus dados pessoais (nome, email, senha), escolha um plano (recomendamos começar com o plano grátis) e confirme seu email. Pronto! Sua conta está criada e você pode começar a anunciar."
    },
    {
      id: "planos",
      title: "Quais são os planos disponíveis?",
      content: "Oferecemos 3 planos: Básico (grátis - 3 anúncios ativos), Premium (R$ 29/mês - 10 anúncios + destaque) e Profissional (R$ 79/mês - anúncios ilimitados + destaque em todas as buscas + suporte prioritário). Você pode escolher qualquer plano ao se cadastrar ou fazer upgrade a qualquer momento."
    },
    {
      id: "seguranca",
      title: "Meus dados estão seguros no Plantão?",
      content: "Sim! Utilizamos encriptação SSL de ponta a ponta, tokens JWT para autenticação segura e armazenamos seus dados em servidores protegidos. Nunca compartilhamos seus dados com terceiros sem sua permissão. Você pode alterar suas informações pessoais a qualquer momento nas configurações da sua conta."
    },
    {
      id: "buscar",
      title: "Como buscar produtos específicos?",
      content: "Use a barra de busca no topo da página para procurar por qualquer termo (ex: iPhone, apartamento, emprego). Você também pode navegar pelas categorias e filtrar os resultados por preço, localização e outros critérios para encontrar exatamente o que você procura."
    },
    {
      id: "contato-vendedor",
      title: "Como entro em contato com um vendedor?",
      content: "Ao visualizar um anúncio, você verá as informações de contato do vendedor (telefone ou email). Clique para enviar uma mensagem ou ligar diretamente. Se preferir, você também pode usar o sistema de mensagens do Plantão (disponível em breve) para negociar de forma segura."
    },
    {
      id: "deletar-anuncio",
      title: "Como deletar um anúncio?",
      content: "Acesse seu dashboard, vá para 'Meus Anúncios', encontre o anúncio que deseja remover e clique no botão 'Deletar'. O anúncio será removido imediatamente e não aparecerá mais nas buscas. Você poderá recriar o anúncio a qualquer momento."
    },
    {
      id: "denunciar",
      title: "Como denunciar um anúncio fraudulento?",
      content: "Se você encontrar um anúncio suspeito, duvidoso ou que viole nossas políticas, clique no botão 'Denunciar' na página do anúncio. Descreva o motivo da denúncia e nossa equipe analisará e tomará as ações necessárias em até 24 horas."
    },
    {
      id: "pagamento",
      title: "Como funciona o pagamento?",
      content: "Oferecemos múltiplas formas de pagamento: cartão de crédito, débito, PIX e transferência bancária. O pagamento do plano é feito através da nossa plataforma segura de pagamento. Você receberá um recibo por email e os detalhes da transação estarão disponíveis no seu dashboard."
    }
  ];

  const categories = [
    {
      icon: Zap,
      title: "Começar",
      description: "Aprenda como criar sua conta e fazer seu primeiro anúncio",
      items: ["Criar conta", "Fazer anúncio", "Escolher plano"]
    },
    {
      icon: Target,
      title: "Buscar e Comprar",
      description: "Dicas para encontrar os melhores produtos",
      items: ["Usar a busca", "Filtrar resultados", "Contatar vendedor"]
    },
    {
      icon: Shield,
      title: "Segurança e Privacidade",
      description: "Como proteger seus dados e transações",
      items: ["Verificação de usuários", "Denunciar fraude", "Proteção de dados"]
    },
    {
      icon: Users,
      title: "Vendedor",
      description: "Maximize suas vendas com o Plantão",
      items: ["Dicas de vendedor", "Destaque de anúncios", "Relatórios"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
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
            Central de Ajuda
          </h1>
          <p className="text-xl text-white/95 font-semibold drop-shadow-lg mb-8">
            Encontre respostas e aprenda como usar o Plantão
          </p>
          
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 flex gap-2">
            <input
              type="text"
              placeholder="Digite sua pergunta ou palavra-chave..."
              className="flex-1 px-4 py-3 focus:outline-none text-base"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 rounded-lg">
              <HelpCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl mb-10 text-center text-foreground">
            Categorias Principais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-sm text-primary font-medium flex items-center gap-2">
                        <ChevronRight className="w-4 h-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Plantão */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground">
                Sobre o Plantão Classificados
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O <strong className="text-foreground">Plantão Classificados</strong> é o maior portal de anúncios classificados do Brasil, conectando milhões de compradores e vendedores todos os dias.
                </p>
                <p>
                  Fundado com a missão de facilitar a compra e venda de produtos, serviços e imóveis de forma segura, rápida e fácil, o Plantão revolucionou o mercado de classificados no país.
                </p>
                <p>
                  Oferecemos uma plataforma intuitiva, segura e confiável onde você pode anunciar seus produtos grátis ou com um plano premium, alcançando centenas de milhares de usuários interessados.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-white text-center">
                <div className="text-4xl font-bold text-primary mb-2">5M+</div>
                <p className="text-sm text-muted-foreground">Usuários Ativos</p>
              </Card>
              <Card className="p-6 bg-white text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <p className="text-sm text-muted-foreground">Anúncios Diários</p>
              </Card>
              <Card className="p-6 bg-white text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Anos Atuando</p>
              </Card>
              <Card className="p-6 bg-white text-center">
                <div className="text-4xl font-bold text-primary mb-2">27</div>
                <p className="text-sm text-muted-foreground">Estados Ativos</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-center text-foreground">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-lg font-semibold text-foreground text-left">
                      {faq.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-center text-foreground">
            Políticas e Termos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition">
              <AlertCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-foreground">Termos de Uso</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Conheça as regras e direitos ao usar nossa plataforma
              </p>
              <Link to="/termos" className="text-primary font-medium text-sm hover:underline flex items-center gap-2">
                Ler mais <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-foreground">Privacidade</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Saiba como protegemos seus dados pessoais
              </p>
              <Link to="/privacidade" className="text-primary font-medium text-sm hover:underline flex items-center gap-2">
                Ler mais <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <MessageCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-foreground">Código de Conduta</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Normas para um ambiente seguro e respeitoso
              </p>
              <Link to="/codigo-conduta" className="text-primary font-medium text-sm hover:underline flex items-center gap-2">
                Ler mais <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white drop-shadow-xl">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-white/95 font-semibold mb-10 drop-shadow-lg">
            Entre em contato com nosso suporte
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-bold rounded-lg shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </Button>
            <a href="mailto:ajuda@plantaoclass.com.br">
              <Button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-bold rounded-lg shadow-lg">
                📧 ajuda@plantaoclass.com.br
              </Button>
            </a>
            <a href="tel:1140001234">
              <Button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-bold rounded-lg shadow-lg">
                📞 (11) 4000-1234
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HelpPage;
