import { useState, useEffect, useCallback } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Settings, Mail, DollarSign, Image, Shield, Bell, Globe, Database } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminSettingsPage() {
  let toast: any;
  try {
    toast = useToast().toast;
  } catch (e) {
    toast = (props: any) => console.log('Toast:', props);
  }

  const [loading, setLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Configurações Gerais
  const [siteName, setSiteName] = useState('PL Classificados');
  const [siteDescription, setSiteDescription] = useState('Plataforma de anúncios classificados');
  const [siteUrl, setSiteUrl] = useState('https://plclassificados.com');
  const [contactEmail, setContactEmail] = useState('contato@plclassificados.com');
  const [contactPhone, setContactPhone] = useState('(11) 99999-9999');

  // Configurações de Email
  const [smtpHost, setSmtpHost] = useState('smtp.gmail.com');
  const [smtpPort, setSmtpPort] = useState('587');
  const [smtpUser, setSmtpUser] = useState('');
  const [smtpPassword, setSmtpPassword] = useState('');
  const [emailFrom, setEmailFrom] = useState('noreply@plclassificados.com');
  const [emailEnabled, setEmailEnabled] = useState(false);

  // Configurações de Pagamento
  const [stripePublicKey, setStripePublicKey] = useState('');
  const [stripeSecretKey, setStripeSecretKey] = useState('');
  const [paymentEnabled, setPaymentEnabled] = useState(false);
  const [currency, setCurrency] = useState('BRL');

  // Configurações de Upload
  const [maxFileSize, setMaxFileSize] = useState('5');
  const [allowedExtensions, setAllowedExtensions] = useState('jpg, jpeg, png, webp');
  const [maxImagesPerListing, setMaxImagesPerListing] = useState('10');
  const [imageQuality, setImageQuality] = useState('80');

  // Configurações de Moderação
  const [autoApproveListings, setAutoApproveListings] = useState(false);
  const [requireEmailVerification, setRequireEmailVerification] = useState(true);
  const [enableUserReviews, setEnableUserReviews] = useState(true);
  const [minListingDuration, setMinListingDuration] = useState('7');
  const [maxListingDuration, setMaxListingDuration] = useState('90');

  // Configurações de Notificações
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [adminNotifyNewListing, setAdminNotifyNewListing] = useState(true);
  const [adminNotifyNewUser, setAdminNotifyNewUser] = useState(true);

  // Configurações de SEO
  const [metaTitle, setMetaTitle] = useState('PL Classificados - Anúncios Online');
  const [metaDescription, setMetaDescription] = useState('Encontre os melhores anúncios de imóveis, veículos e muito mais');
  const [metaKeywords, setMetaKeywords] = useState('classificados, anúncios, imóveis, veículos');
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState('');
  const [facebookPixelId, setFacebookPixelId] = useState('');

  // Configurações de Manutenção
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState('Estamos em manutenção. Voltamos em breve!');
  const [debugMode, setDebugMode] = useState(false);

  const handleSaveGeneral = useCallback(async () => {
    setLoading(true);
    setSaveSuccess(false);
    
    try {
      // Simulação de salvamento - integrar com backend depois
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações salvas",
        description: "As configurações gerais foram atualizadas com sucesso.",
      });
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const handleSaveEmail = useCallback(async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações de email salvas",
        description: "As configurações de email foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações de email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const handleSavePayment = useCallback(async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações de pagamento salvas",
        description: "As configurações de pagamento foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações de pagamento.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const handleSaveUploads = useCallback(async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações de upload salvas",
        description: "As configurações de upload foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações de upload.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const handleSaveModeration = useCallback(async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações de moderação salvas",
        description: "As configurações de moderação foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações de moderação.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const handleSaveNotifications = useCallback(async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações de notificações salvas",
        description: "As configurações de notificações foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações de notificações.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const handleSaveSEO = useCallback(async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações de SEO salvas",
        description: "As configurações de SEO foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações de SEO.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const handleSaveMaintenance = useCallback(async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações de manutenção salvas",
        description: "As configurações de manutenção foram atualizadas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações de manutenção.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Configurações</h1>
            <p className="text-muted-foreground mt-1">
              Gerencie as configurações do sistema
            </p>
          </div>
        </div>

        {saveSuccess && (
          <Alert className="bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              ✓ Configurações salvas com sucesso!
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="general">
              <Settings className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Geral</span>
            </TabsTrigger>
            <TabsTrigger value="email">
              <Mail className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Email</span>
            </TabsTrigger>
            <TabsTrigger value="payment">
              <DollarSign className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Pagamento</span>
            </TabsTrigger>
            <TabsTrigger value="uploads">
              <Image className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Uploads</span>
            </TabsTrigger>
            <TabsTrigger value="moderation">
              <Shield className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Moderação</span>
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Notificações</span>
            </TabsTrigger>
            <TabsTrigger value="seo">
              <Globe className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">SEO</span>
            </TabsTrigger>
            <TabsTrigger value="maintenance">
              <Database className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Manutenção</span>
            </TabsTrigger>
          </TabsList>

          {/* Configurações Gerais */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
                <CardDescription>
                  Configure as informações básicas do site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="siteName">Nome do Site</Label>
                    <Input
                      id="siteName"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                      placeholder="Nome do site"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="siteDescription">Descrição do Site</Label>
                    <Textarea
                      id="siteDescription"
                      value={siteDescription}
                      onChange={(e) => setSiteDescription(e.target.value)}
                      placeholder="Descrição curta do site"
                      rows={3}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="siteUrl">URL do Site</Label>
                    <Input
                      id="siteUrl"
                      type="url"
                      value={siteUrl}
                      onChange={(e) => setSiteUrl(e.target.value)}
                      placeholder="https://exemplo.com"
                    />
                  </div>

                  <Separator />

                  <div className="grid gap-2">
                    <Label htmlFor="contactEmail">Email de Contato</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="contato@exemplo.com"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="contactPhone">Telefone de Contato</Label>
                    <Input
                      id="contactPhone"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveGeneral} disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Email */}
          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Email</CardTitle>
                <CardDescription>
                  Configure o servidor SMTP para envio de emails
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Ativar envio de emails</Label>
                    <p className="text-sm text-muted-foreground">
                      Permite o envio de emails automáticos
                    </p>
                  </div>
                  <Switch
                    checked={emailEnabled}
                    onCheckedChange={setEmailEnabled}
                  />
                </div>

                <Separator />

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="smtpHost">Servidor SMTP</Label>
                    <Input
                      id="smtpHost"
                      value={smtpHost}
                      onChange={(e) => setSmtpHost(e.target.value)}
                      placeholder="smtp.gmail.com"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="smtpPort">Porta SMTP</Label>
                    <Input
                      id="smtpPort"
                      value={smtpPort}
                      onChange={(e) => setSmtpPort(e.target.value)}
                      placeholder="587"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="smtpUser">Usuário SMTP</Label>
                    <Input
                      id="smtpUser"
                      type="email"
                      value={smtpUser}
                      onChange={(e) => setSmtpUser(e.target.value)}
                      placeholder="seu-email@gmail.com"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="smtpPassword">Senha SMTP</Label>
                    <Input
                      id="smtpPassword"
                      type="password"
                      value={smtpPassword}
                      onChange={(e) => setSmtpPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="emailFrom">Email de envio</Label>
                    <Input
                      id="emailFrom"
                      type="email"
                      value={emailFrom}
                      onChange={(e) => setEmailFrom(e.target.value)}
                      placeholder="noreply@exemplo.com"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveEmail} disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Pagamento */}
          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Pagamento</CardTitle>
                <CardDescription>
                  Configure as opções de pagamento online
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Ativar pagamentos</Label>
                    <p className="text-sm text-muted-foreground">
                      Permite receber pagamentos online
                    </p>
                  </div>
                  <Switch
                    checked={paymentEnabled}
                    onCheckedChange={setPaymentEnabled}
                  />
                </div>

                <Separator />

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="currency">Moeda</Label>
                    <Input
                      id="currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      placeholder="BRL"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="stripePublicKey">Stripe Public Key</Label>
                    <Input
                      id="stripePublicKey"
                      value={stripePublicKey}
                      onChange={(e) => setStripePublicKey(e.target.value)}
                      placeholder="pk_test_..."
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="stripeSecretKey">Stripe Secret Key</Label>
                    <Input
                      id="stripeSecretKey"
                      type="password"
                      value={stripeSecretKey}
                      onChange={(e) => setStripeSecretKey(e.target.value)}
                      placeholder="sk_test_..."
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSavePayment} disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Upload */}
          <TabsContent value="uploads">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Upload</CardTitle>
                <CardDescription>
                  Configure as opções de upload de arquivos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="maxFileSize">Tamanho máximo por arquivo (MB)</Label>
                    <Input
                      id="maxFileSize"
                      type="number"
                      value={maxFileSize}
                      onChange={(e) => setMaxFileSize(e.target.value)}
                      placeholder="5"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="allowedExtensions">Extensões permitidas</Label>
                    <Input
                      id="allowedExtensions"
                      value={allowedExtensions}
                      onChange={(e) => setAllowedExtensions(e.target.value)}
                      placeholder="jpg, jpeg, png, webp"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="maxImagesPerListing">Máximo de imagens por anúncio</Label>
                    <Input
                      id="maxImagesPerListing"
                      type="number"
                      value={maxImagesPerListing}
                      onChange={(e) => setMaxImagesPerListing(e.target.value)}
                      placeholder="10"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="imageQuality">Qualidade da imagem (0-100)</Label>
                    <Input
                      id="imageQuality"
                      type="number"
                      value={imageQuality}
                      onChange={(e) => setImageQuality(e.target.value)}
                      placeholder="80"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveUploads} disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Moderação */}
          <TabsContent value="moderation">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Moderação</CardTitle>
                <CardDescription>
                  Configure as regras de moderação de conteúdo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Aprovar anúncios automaticamente</Label>
                    <p className="text-sm text-muted-foreground">
                      Anúncios ficam ativos imediatamente
                    </p>
                  </div>
                  <Switch
                    checked={autoApproveListings}
                    onCheckedChange={setAutoApproveListings}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Exigir verificação de email</Label>
                    <p className="text-sm text-muted-foreground">
                      Usuários devem verificar email antes de anunciar
                    </p>
                  </div>
                  <Switch
                    checked={requireEmailVerification}
                    onCheckedChange={setRequireEmailVerification}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Permitir avaliações de usuários</Label>
                    <p className="text-sm text-muted-foreground">
                      Usuários podem avaliar uns aos outros
                    </p>
                  </div>
                  <Switch
                    checked={enableUserReviews}
                    onCheckedChange={setEnableUserReviews}
                  />
                </div>

                <Separator />

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="minListingDuration">Duração mínima de anúncio (dias)</Label>
                    <Input
                      id="minListingDuration"
                      type="number"
                      value={minListingDuration}
                      onChange={(e) => setMinListingDuration(e.target.value)}
                      placeholder="7"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="maxListingDuration">Duração máxima de anúncio (dias)</Label>
                    <Input
                      id="maxListingDuration"
                      type="number"
                      value={maxListingDuration}
                      onChange={(e) => setMaxListingDuration(e.target.value)}
                      placeholder="90"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveModeration} disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Notificações */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Notificações</CardTitle>
                <CardDescription>
                  Configure como as notificações serão enviadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações por email</Label>
                      <p className="text-sm text-muted-foreground">
                        Enviar notificações por email
                      </p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações push</Label>
                      <p className="text-sm text-muted-foreground">
                        Enviar notificações push no navegador
                      </p>
                    </div>
                    <Switch
                      checked={pushNotifications}
                      onCheckedChange={setPushNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações por SMS</Label>
                      <p className="text-sm text-muted-foreground">
                        Enviar notificações por mensagem de texto
                      </p>
                    </div>
                    <Switch
                      checked={smsNotifications}
                      onCheckedChange={setSmsNotifications}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificar admin sobre novos anúncios</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber email quando um novo anúncio for criado
                      </p>
                    </div>
                    <Switch
                      checked={adminNotifyNewListing}
                      onCheckedChange={setAdminNotifyNewListing}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificar admin sobre novos usuários</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber email quando um novo usuário se cadastrar
                      </p>
                    </div>
                    <Switch
                      checked={adminNotifyNewUser}
                      onCheckedChange={setAdminNotifyNewUser}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveNotifications} disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de SEO */}
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de SEO</CardTitle>
                <CardDescription>
                  Configure as meta tags e ferramentas de análise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      placeholder="Título para mecanismos de busca"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Descrição para mecanismos de busca"
                      rows={3}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="metaKeywords">Meta Keywords</Label>
                    <Input
                      id="metaKeywords"
                      value={metaKeywords}
                      onChange={(e) => setMetaKeywords(e.target.value)}
                      placeholder="palavras, chave, separadas, por, vírgula"
                    />
                  </div>

                  <Separator />

                  <div className="grid gap-2">
                    <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                    <Input
                      id="googleAnalyticsId"
                      value={googleAnalyticsId}
                      onChange={(e) => setGoogleAnalyticsId(e.target.value)}
                      placeholder="G-XXXXXXXXXX"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="facebookPixelId">Facebook Pixel ID</Label>
                    <Input
                      id="facebookPixelId"
                      value={facebookPixelId}
                      onChange={(e) => setFacebookPixelId(e.target.value)}
                      placeholder="123456789012345"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveSEO} disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Manutenção */}
          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Manutenção</CardTitle>
                <CardDescription>
                  Configure o modo de manutenção e debug
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="bg-amber-50 border-amber-200">
                  <AlertDescription className="text-amber-800">
                    ⚠️ Ative o modo de manutenção apenas quando necessário. O site ficará inacessível para usuários.
                  </AlertDescription>
                </Alert>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo de Manutenção</Label>
                    <p className="text-sm text-muted-foreground">
                      Site ficará offline para visitantes
                    </p>
                  </div>
                  <Switch
                    checked={maintenanceMode}
                    onCheckedChange={setMaintenanceMode}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="maintenanceMessage">Mensagem de Manutenção</Label>
                  <Textarea
                    id="maintenanceMessage"
                    value={maintenanceMessage}
                    onChange={(e) => setMaintenanceMessage(e.target.value)}
                    placeholder="Mensagem exibida durante a manutenção"
                    rows={3}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo de Debug</Label>
                    <p className="text-sm text-muted-foreground">
                      Exibe mensagens de erro detalhadas (apenas desenvolvimento)
                    </p>
                  </div>
                  <Switch
                    checked={debugMode}
                    onCheckedChange={setDebugMode}
                  />
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveMaintenance} disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
