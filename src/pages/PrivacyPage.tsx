import Layout from '@/components/layout/Layout';

const PrivacyPage = () => {
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
            Política de Privacidade
          </h1>
          <p className="text-xl text-white/95 font-semibold drop-shadow-lg">
            Sua privacidade é importante para nós
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-sm">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p>A Plantão Classificados LTDA ("Plantão") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso website e usa nossos serviços.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
                <p>Coletamos informações que você fornece diretamente e informações coletadas automaticamente:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Informações Pessoais:</strong> Nome, email, telefone, endereço, CPF/CNPJ</li>
                  <li><strong>Informações de Conta:</strong> Dados de login, senha (criptografada), foto de perfil</li>
                  <li><strong>Informações de Transação:</strong> Histórico de anúncios, ofertas, vendas</li>
                  <li><strong>Informações de Pagamento:</strong> Dados de cartão de crédito processados por terceiros</li>
                  <li><strong>Dados de Uso:</strong> Páginas visitadas, tempo gasto, cliques, IP, navegador</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Usamos as Informações</h2>
                <p>Usamos as informações para:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Criar e manter sua conta</li>
                  <li>Processar transações e pagamentos</li>
                  <li>Enviar comunicações importantes</li>
                  <li>Melhorar nossos serviços</li>
                  <li>Detectar e prevenir fraudes</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Enviar marketing (com seu consentimento)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Informações</h2>
                <p>Não vendemos suas informações pessoais. Compartilhamos informações apenas:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Com provedores de serviços que processam pagamentos e entregam emails</li>
                  <li>Quando legalmente obrigados por lei</li>
                  <li>Para proteger direitos e segurança</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança de Dados</h2>
                <p>Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Encriptação SSL de ponta a ponta</li>
                  <li>Firewalls e proteção de rede</li>
                  <li>Controle de acesso baseado em funções</li>
                  <li>Auditoria regular de segurança</li>
                  <li>Criptografia de senhas com hash</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Retenção de Dados</h2>
                <p>Retemos suas informações pessoais pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Você pode solicitar a exclusão de seus dados enviando um email para privacidade@plantaoclass.com.br.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies e Tecnologias de Rastreamento</h2>
                <p>Usamos cookies e tecnologias similares para:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Manter você conectado</li>
                  <li>Personalizar sua experiência</li>
                  <li>Analisar o uso do site</li>
                  <li>Exibir anúncios personalizados</li>
                </ul>
                <p className="mt-4">Você pode controlar cookies em suas configurações de navegador.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Direitos do Usuário</h2>
                <p>Você tem direitos sobre seus dados pessoais:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Direito de acesso a seus dados</li>
                  <li>Direito de retificação de dados incorretos</li>
                  <li>Direito de exclusão ("direito ao esquecimento")</li>
                  <li>Direito de portabilidade de dados</li>
                  <li>Direito de se opor ao processamento</li>
                  <li>Direito de retirar consentimento</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Marketing e Comunicações</h2>
                <p>Você pode receber emails de marketing sobre novos produtos, ofertas e promoções. Você pode optar por não receber esses emails clicando no link "Cancelar Inscrição" em qualquer email ou alterando suas preferências na conta.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Dados de Menores</h2>
                <p>O Plantão não coleta intencionalmente informações de menores de 18 anos. Se descobrirmos que coletamos informações de um menor, excluiremos esses dados imediatamente.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Links Externos</h2>
                <p>Nosso website contém links para sites externos. Não somos responsáveis pelas práticas de privacidade de sites externos. Recomendamos ler as políticas de privacidade desses sites.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Conformidade com LGPD</h2>
                <p>O Plantão está em conformidade com a Lei Geral de Proteção de Dados (LGPD). Tratamos seus dados de acordo com os princípios de:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Finalidade e necessidade</li>
                  <li>Transparência</li>
                  <li>Acesso</li>
                  <li>Segurança</li>
                  <li>Qualidade de dados</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contato e Reclamações</h2>
                <p>Se você tiver dúvidas sobre nossa Política de Privacidade ou deseja exercer seus direitos:</p>
                <p className="mt-4">
                  <strong>Email:</strong> privacidade@plantaoclass.com.br<br/>
                  <strong>Telefone:</strong> (11) 4000-1234<br/>
                  <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP
                </p>
                <p className="mt-4">Você também pode apresentar uma reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD).</p>
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

export default PrivacyPage;
