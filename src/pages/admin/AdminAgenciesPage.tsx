import { useEffect, useState, useCallback } from 'react';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye, Ban, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import AdminLayout from '@/components/layout/AdminLayout';
import { userService } from '@/lib/services';

interface Agency {
  id: string;
  name: string;
  email: string;
  phone?: string;
  is_active: boolean;
  created_at: string;
  plan?: {
    name: string;
  };
}

const AdminAgenciesPage = () => {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');

  const loadAgencies = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const response = await userService.getAll({
        page,
        limit: 10,
        type: 'agency',
        search
      });

      if (response.success) {
        setAgencies(response.data || []);
        setTotalPages(response.pagination?.pages || 1);
      }
    } catch (error) {
      console.error('Erro ao carregar imobiliárias:', error);
      const errorMsg = error instanceof Error ? error.message : 'Não foi possível carregar as imobiliárias';
      setError(errorMsg);
      setAgencies([]);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    loadAgencies();
  }, [loadAgencies]);

  const handleSearch = () => {
    setPage(1);
    loadAgencies();
  };

  const handleDelete = async (agencyId: string) => {
    if (!confirm('Tem certeza que deseja excluir esta imobiliária?')) return;

    try {
      await userService.delete(agencyId);
      loadAgencies();
    } catch (error) {
      console.error('Erro ao excluir imobiliária:', error);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Imobiliárias</h1>
            <p className="text-muted-foreground">Gerencie todas as imobiliárias cadastradas</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nova Imobiliária
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar imobiliária..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="input-styled pl-10"
            />
          </div>
          <Select value={statusFilter || "all"} onValueChange={(v) => setStatusFilter(v === "all" ? "" : v)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Todos os status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              <SelectItem value="active">Ativas</SelectItem>
              <SelectItem value="inactive">Inativas</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSearch} variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
            <p className="font-medium">Erro ao carregar dados</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Table */}
        <div className="bg-card rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold">Imobiliária</th>
                <th className="text-left p-4 font-semibold">Telefone</th>
                <th className="text-left p-4 font-semibold">Plano</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Data de Cadastro</th>
                <th className="text-right p-4 font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-8">
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <span className="ml-3 text-muted-foreground">Carregando...</span>
                    </div>
                  </td>
                </tr>
              ) : agencies.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-muted-foreground">
                    Nenhuma imobiliária encontrada
                  </td>
                </tr>
              ) : (
                agencies.map((agency) => (
                  <tr key={agency.id} className="border-b hover:bg-muted/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center text-warning font-semibold">
                          {agency.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{agency.name}</div>
                          <div className="text-sm text-muted-foreground">{agency.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm">{agency.phone || '-'}</span>
                    </td>
                    <td className="p-4">
                      {agency.plan?.name || 'Sem plano'}
                    </td>
                    <td className="p-4">
                      {agency.is_active ? (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/20 text-success">
                          <CheckCircle className="inline h-3 w-3 mr-1" />
                          Ativa
                        </span>
                      ) : (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                          <Ban className="inline h-3 w-3 mr-1" />
                          Inativa
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      {new Date(agency.created_at).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            Ver detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => handleDelete(agency.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Anterior
            </Button>
            <span className="text-sm text-muted-foreground">
              Página {page} de {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Próxima
            </Button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminAgenciesPage;
