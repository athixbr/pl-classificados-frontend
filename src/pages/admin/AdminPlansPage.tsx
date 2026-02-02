import { useEffect, useState, useCallback } from 'react';
import { Plus, MoreVertical, Edit, Trash2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AdminLayout from '@/components/layout/AdminLayout';
import { planService } from '@/lib/services';
import { useToast } from '@/hooks/use-toast';

interface Plan {
  id: string;
  name: string;
  price: number;
  duration_days: number;
  max_listings: number;
  features: string;
  is_active: boolean;
  created_at: string;
}

const AdminPlansPage = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { toast } = useToast();

  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration_days: '',
    max_listings: '',
    max_photos: '',
    highlight_days: '',
    features: [''],
    is_active: true
  });

  const loadPlans = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('🔄 Carregando planos...');
      
      // Admin precisa ver todos os planos, incluindo inativos
      const response = await planService.getAll({ include_inactive: true });

      console.log('📦 Resposta da API:', response);
      console.log('📊 Planos recebidos:', response.data);

      if (response.success) {
        setPlans(response.data || []);
        console.log('✅ Planos salvos no estado:', response.data?.length || 0);
      } else {
        console.log('❌ Resposta sem success');
      }
    } catch (error: any) {
      console.error('❌ Erro ao carregar planos:', error);
      console.error('Detalhes do erro:', error.response?.data);
      const errorMsg = error.response?.data?.message || error.message || 'Não foi possível carregar os planos';
      setError(errorMsg);
      setPlans([]);
      try {
        toast({
          title: 'Erro',
          description: 'Não foi possível carregar os planos',
          variant: 'destructive',
        });
      } catch (e) {
        console.error('Toast error:', e);
      }
    } finally {
      setLoading(false);
      console.log('✅ Loading finalizado');
    }
  }, [toast]);

  useEffect(() => {
    loadPlans();
  }, [loadPlans]);

  const handleOpenCreateModal = () => {
    setFormData({
      name: '',
      price: '',
      duration_days: '',
      max_listings: '',
      max_photos: '',
      highlight_days: '',
      features: [''],
      is_active: true
    });
    setIsCreateModalOpen(true);
  };

  const handleOpenEditModal = (plan: Plan) => {
    setSelectedPlan(plan);
    const features = parseFeatures(plan.features);
    setFormData({
      name: plan.name,
      price: plan.price.toString(),
      duration_days: plan.duration_days.toString(),
      max_listings: plan.max_listings.toString(),
      max_photos: (plan as any).max_photos?.toString() || '10',
      highlight_days: (plan as any).highlight_days?.toString() || '0',
      features: Array.isArray(features) ? features : [features],
      is_active: plan.is_active
    });
    setIsEditModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedPlan(null);
    setFormData({
      name: '',
      price: '',
      duration_days: '',
      max_listings: '',
      max_photos: '',
      highlight_days: '',
      features: [''],
      is_active: true
    });
  };

  const handleAddFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const handleRemoveFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
    }));
  };

  const handleCreatePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        price: parseFloat(formData.price),
        duration_days: parseInt(formData.duration_days),
        max_listings: parseInt(formData.max_listings),
        max_photos: parseInt(formData.max_photos) || 10,
        highlight_days: parseInt(formData.highlight_days) || 0,
        features: JSON.stringify(formData.features.filter(f => f.trim())),
        is_active: formData.is_active
      };

      await planService.create(payload);
      
      toast({
        title: 'Sucesso',
        description: 'Plano criado com sucesso',
      });
      
      handleCloseModals();
      loadPlans();
    } catch (error: any) {
      toast({
        title: 'Erro ao criar plano',
        description: error.response?.data?.message || 'Não foi possível criar o plano',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdatePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;

    setSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        price: parseFloat(formData.price),
        duration_days: parseInt(formData.duration_days),
        max_listings: parseInt(formData.max_listings),
        max_photos: parseInt(formData.max_photos) || 10,
        highlight_days: parseInt(formData.highlight_days) || 0,
        features: JSON.stringify(formData.features.filter(f => f.trim())),
        is_active: formData.is_active
      };

      await planService.update(selectedPlan.id, payload);
      
      toast({
        title: 'Sucesso',
        description: 'Plano atualizado com sucesso',
      });
      
      handleCloseModals();
      loadPlans();
    } catch (error: any) {
      toast({
        title: 'Erro ao atualizar plano',
        description: error.response?.data?.message || 'Não foi possível atualizar o plano',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (planId: string) => {
    if (!confirm('Tem certeza que deseja excluir este plano?')) return;

    try {
      await planService.delete(planId);
      toast({
        title: 'Sucesso',
        description: 'Plano excluído com sucesso',
      });
      loadPlans();
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.message || 'Erro ao excluir plano',
        variant: 'destructive',
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const parseFeatures = (features: string) => {
    try {
      return JSON.parse(features);
    } catch {
      return features.split(',').map(f => f.trim());
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Planos</h1>
            <p className="text-muted-foreground">Gerencie os planos de assinatura</p>
          </div>
          <Button className="gap-2" onClick={handleOpenCreateModal}>
            <Plus className="h-4 w-4" />
            Novo Plano
          </Button>
        </div>

        {/* Plans Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-muted-foreground">Carregando...</span>
          </div>
        ) : error ? (
          <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
            <p className="font-medium">Erro ao carregar planos</p>
            <p className="text-sm">{error}</p>
          </div>
        ) : plans.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-2">Nenhum plano encontrado</p>
            <p className="text-sm text-muted-foreground">Clique em "Novo Plano" para criar o primeiro</p>
            {console.log('📊 Estado atual - plans:', plans, 'loading:', loading, 'error:', error)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {console.log('🎨 Renderizando', plans.length, 'planos')}
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-card rounded-lg border-2 p-6 hover:shadow-lg transition-shadow ${
                  !plan.is_active ? 'opacity-60' : 'border-primary/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-2xl">{plan.name}</h3>
                    {!plan.is_active && (
                      <span className="text-xs text-muted-foreground">Inativo</span>
                    )}
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleOpenEditModal(plan)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => handleDelete(plan.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.duration_days} dias
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-success" />
                    <span>Até {plan.max_listings} anúncios</span>
                  </div>
                  {parseFeatures(plan.features).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <span className="text-xs text-muted-foreground">
                    Criado em {new Date(plan.created_at).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Create Plan Modal */}
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Criar Novo Plano</DialogTitle>
              <DialogDescription>
                Configure um novo plano de assinatura para os usuários
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleCreatePlan} className="space-y-4">
              {/* Nome do Plano */}
              <div className="grid gap-2">
                <Label htmlFor="create-name">Nome do Plano *</Label>
                <Input
                  id="create-name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex: Plano Básico, Premium, etc"
                  required
                />
              </div>

              {/* Preço e Duração */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="create-price">Preço (R$) *</Label>
                  <Input
                    id="create-price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    placeholder="0.00"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-duration">Duração (dias) *</Label>
                  <Input
                    id="create-duration"
                    type="number"
                    min="1"
                    value={formData.duration_days}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration_days: e.target.value }))}
                    placeholder="30"
                    required
                  />
                </div>
              </div>

              {/* Limites */}
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="create-listings">Máx. Anúncios *</Label>
                  <Input
                    id="create-listings"
                    type="number"
                    min="1"
                    value={formData.max_listings}
                    onChange={(e) => setFormData(prev => ({ ...prev, max_listings: e.target.value }))}
                    placeholder="10"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-photos">Fotos por Anúncio</Label>
                  <Input
                    id="create-photos"
                    type="number"
                    min="1"
                    value={formData.max_photos}
                    onChange={(e) => setFormData(prev => ({ ...prev, max_photos: e.target.value }))}
                    placeholder="10"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-highlight">Dias Destaque</Label>
                  <Input
                    id="create-highlight"
                    type="number"
                    min="0"
                    value={formData.highlight_days}
                    onChange={(e) => setFormData(prev => ({ ...prev, highlight_days: e.target.value }))}
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Recursos */}
              <div className="grid gap-2">
                <Label>Recursos Inclusos</Label>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        placeholder="Ex: Suporte prioritário"
                      />
                      {formData.features.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => handleRemoveFeature(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAddFeature}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Recurso
                  </Button>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <Label htmlFor="create-active">Plano Ativo</Label>
                  <p className="text-sm text-muted-foreground">
                    Disponível para assinatura dos usuários
                  </p>
                </div>
                <Switch
                  id="create-active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                />
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleCloseModals}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? 'Criando...' : 'Criar Plano'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Edit Plan Modal */}
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Editar Plano</DialogTitle>
              <DialogDescription>
                Atualize as informações do plano {selectedPlan?.name}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleUpdatePlan} className="space-y-4">
              {/* Nome do Plano */}
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Nome do Plano *</Label>
                <Input
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex: Plano Básico, Premium, etc"
                  required
                />
              </div>

              {/* Preço e Duração */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-price">Preço (R$) *</Label>
                  <Input
                    id="edit-price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    placeholder="0.00"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="edit-duration">Duração (dias) *</Label>
                  <Input
                    id="edit-duration"
                    type="number"
                    min="1"
                    value={formData.duration_days}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration_days: e.target.value }))}
                    placeholder="30"
                    required
                  />
                </div>
              </div>

              {/* Limites */}
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-listings">Máx. Anúncios *</Label>
                  <Input
                    id="edit-listings"
                    type="number"
                    min="1"
                    value={formData.max_listings}
                    onChange={(e) => setFormData(prev => ({ ...prev, max_listings: e.target.value }))}
                    placeholder="10"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="edit-photos">Fotos por Anúncio</Label>
                  <Input
                    id="edit-photos"
                    type="number"
                    min="1"
                    value={formData.max_photos}
                    onChange={(e) => setFormData(prev => ({ ...prev, max_photos: e.target.value }))}
                    placeholder="10"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="edit-highlight">Dias Destaque</Label>
                  <Input
                    id="edit-highlight"
                    type="number"
                    min="0"
                    value={formData.highlight_days}
                    onChange={(e) => setFormData(prev => ({ ...prev, highlight_days: e.target.value }))}
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Recursos */}
              <div className="grid gap-2">
                <Label>Recursos Inclusos</Label>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        placeholder="Ex: Suporte prioritário"
                      />
                      {formData.features.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => handleRemoveFeature(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAddFeature}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Recurso
                  </Button>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <Label htmlFor="edit-active">Plano Ativo</Label>
                  <p className="text-sm text-muted-foreground">
                    Disponível para assinatura dos usuários
                  </p>
                </div>
                <Switch
                  id="edit-active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                />
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleCloseModals}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? 'Salvando...' : 'Salvar Alterações'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminPlansPage;
