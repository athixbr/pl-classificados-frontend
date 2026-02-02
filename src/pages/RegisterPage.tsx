import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { planService, authService } from '@/lib/services';
import { Eye, EyeOff, User, Mail, Lock, Phone, Building2, Check, ArrowRight, Sparkles } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1 = dados, 2 = escolha de plano
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    type: 'user'
  });

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const response = await planService.getAll({ include_inactive: 'false' });
      const activePlans = response.data.filter(p => p.is_active);
      setPlans(activePlans);
      
      // Selecionar plano gratuito por padrão
      const freePlan = activePlans.find(p => p.slug === 'free' || p.price === 0);
      if (freePlan) {
        setSelectedPlan(freePlan);
      }
    } catch (error) {
      console.error('Erro ao carregar planos:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    // Validações do formulário
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Senhas não conferem",
        description: "As senhas digitadas não são iguais.",
        variant: "destructive"
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter no mínimo 6 caracteres.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, digite um email válido.",
        variant: "destructive"
      });
      return;
    }

    setStep(2);
  };

  const handleRegister = async () => {
    try {
      setLoading(true);

      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        type: formData.type,
        // Não enviar plan_id aqui, usuário escolhe depois
      };

      const response = await authService.register(registerData);

      if (response.success) {
        // Login automático após registro
        login(response.data.user, response.data.token);
        
        toast({
          title: "Cadastro realizado!",
          description: "Agora escolha seu plano para começar a anunciar.",
        });
        
        // Redirecionar para seleção de planos
        setTimeout(() => {
          navigate('/select-plan');
        }, 1500);
      }
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: error.response?.data?.message || "Não foi possível criar sua conta. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {step === 1 ? (
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold">Criar Conta</CardTitle>
              <CardDescription className="text-base">
                Preencha seus dados para começar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={formData.type} onValueChange={(v) => setFormData(prev => ({ ...prev, type: v }))}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="user">
                    <User className="h-4 w-4 mr-2" />
                    Usuário
                  </TabsTrigger>
                  <TabsTrigger value="agency">
                    <Building2 className="h-4 w-4 mr-2" />
                    Imobiliária
                  </TabsTrigger>
                </TabsList>

                <TabsContent value={formData.type} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nome Completo <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          placeholder="Seu nome completo"
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">
                        Senha <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Mínimo 6 caracteres"
                          value={formData.password}
                          onChange={handleChange}
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="confirmPassword">
                        Confirmar Senha <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Digite a senha novamente"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleNextStep}
                    className="w-full mt-6"
                    size="lg"
                  >
                    Próximo: Escolher Plano
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    Já tem uma conta?{' '}
                    <Link to="/login" className="text-primary hover:underline font-medium">
                      Fazer login
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold">Escolha seu Plano</CardTitle>
              <CardDescription className="text-base">
                Selecione o plano ideal para você
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={`
                      relative cursor-pointer p-6 rounded-lg border-2 transition-all
                      ${selectedPlan?.id === plan.id 
                        ? 'border-primary bg-primary/5 shadow-lg scale-105' 
                        : 'border-border hover:border-primary/50 hover:shadow-md'
                      }
                    `}
                  >
                    {selectedPlan?.id === plan.id && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    )}
                    
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <div className="text-3xl font-bold text-primary">
                        {plan.price === 0 ? (
                          'Grátis'
                        ) : (
                          <>
                            R$ {plan.price.toFixed(2)}
                            <span className="text-sm text-muted-foreground">
                              /{plan.period === 'monthly' ? 'mês' : 'ano'}
                            </span>
                          </>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-sm text-left">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-success" />
                          <span>{plan.ads_limit === -1 ? 'Anúncios ilimitados' : `${plan.ads_limit} anúncios`}</span>
                        </div>
                        {plan.highlighted > 0 && (
                          <div className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-success" />
                            <span>{plan.highlighted} destaques/mês</span>
                          </div>
                        )}
                        {plan.features && plan.features.length > 0 && plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-success" />
                            <span className="text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={handleRegister}
                  disabled={loading || !selectedPlan}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? 'Criando conta...' : 'Criar Conta'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Modal de Sucesso */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-success" />
            </div>
            <DialogTitle className="text-center text-2xl">Conta Criada com Sucesso!</DialogTitle>
            <DialogDescription className="text-center space-y-4">
              <p className="text-base">
                Bem-vindo ao <strong>PL Classificados</strong>, {formData.name}!
              </p>
              <p>
                Um email foi enviado para <strong>{formData.email}</strong> com os detalhes da sua conta.
              </p>
              <p className="text-sm text-muted-foreground">
                Você será redirecionado para o painel em instantes...
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterPage;
