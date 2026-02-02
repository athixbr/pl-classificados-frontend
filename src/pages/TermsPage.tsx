import Layout from '@/components/layout/Layout';

const TermsPage = () => {
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
            Termos de Uso
          </h1>
          <p className="text-xl text-white/95 font-semibold drop-shadow-lg">
            Leia atentamente os termos e condições antes de usar nossa plataforma
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-sm">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p>Ao acessar e utilizar o website do Plantão Classificados (www.plantaoclass.com.br), você concorda em aceitar todos os termos e condições contidos neste documento. Se você não concordar com qualquer parte destes termos, você não está autorizado a usar este website.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso da Plataforma</h2>
                <p>A plataforma Plantão Classificados é fornecida para uso pessoal e não comercial. Você concorda em não utilizar a plataforma para:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Enviar spam ou conteúdo ofensivo</li>
                  <li>Violar qualquer lei aplicável</li>
                  <li>Infringir direitos de terceiros</li>
                  <li>Tentar acessar dados não autorizados</li>
                  <li>Interferir no funcionamento da plataforma</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Conta de Usuário</h2>
                <p>Ao criar uma conta, você é responsável por manter a confidencialidade de sua senha e por todas as atividades realizadas sob sua conta. Você concorda em notificar imediatamente ao Plantão sobre qualquer uso não autorizado de sua conta.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Conteúdo do Usuário</h2>
                <p>Você é responsável por todo conteúdo que publica na plataforma. Ao publicar conteúdo, você concede ao Plantão uma licença não exclusiva para usar, reproduzir, modificar e distribuir esse conteúdo. O Plantão se reserva o direito de remover qualquer conteúdo que viole estes termos.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Transações e Pagamentos</h2>
                <p>O Plantão não é responsável por transações entre usuários. Todas as transações são realizadas por conta e risco dos usuários. O Plantão não oferece proteção de comprador ou vendedor além do que é expressamente indicado no site.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Produtos e Serviços</h2>
                <p>Os preços dos planos e produtos estão sujeitos a alterações sem aviso prévio. O Plantão se reserva o direito de descontinuar qualquer produto ou serviço a qualquer momento.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitação de Responsabilidade</h2>
                <p>A plataforma é fornecida "COMO ESTÁ" sem garantias. O Plantão não é responsável por danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou impossibilidade de usar a plataforma.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Propriedade Intelectual</h2>
                <p>Todo conteúdo do Plantão, incluindo texto, gráficos, logos e imagens, é propriedade do Plantão e está protegido por leis de copyright. Você não pode reproduzir, distribuir ou transmitir qualquer conteúdo sem permissão.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Links Externos</h2>
                <p>O Plantão pode conter links para sites externos. Não somos responsáveis pelo conteúdo de sites externos. O acesso a qualquer link externo é por sua conta e risco.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Modificação dos Termos</h2>
                <p>O Plantão se reserva o direito de modificar estes termos a qualquer momento. Modificações entram em vigor imediatamente após publicação. Seu uso continuado da plataforma após mudanças indica sua aceitação dos novos termos.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Rescisão</h2>
                <p>O Plantão pode encerrar sua conta a qualquer momento por violação destes termos ou por qualquer razão, sem aviso prévio. Você pode encerrar sua conta a qualquer momento enviando uma solicitação para contato@plantaoclass.com.br.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Lei Aplicável</h2>
                <p>Estes termos são regidos pelas leis da República Federativa do Brasil, e você concorda em submeter-se à jurisdição exclusiva dos tribunais localizados em São Paulo, SP.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contato</h2>
                <p>Se você tiver questões sobre estes Termos de Uso, entre em contato conosco em:</p>
                <p className="mt-4">
                  <strong>Email:</strong> termos@plantaoclass.com.br<br/>
                  <strong>Telefone:</strong> (11) 4000-1234<br/>
                  <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP
                </p>
              </div>

              <div className="border-t pt-8">
                <p className="text-xs text-muted-foreground">
                  Última atualização: 2 de fevereiro de 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;
