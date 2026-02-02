import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Mail,
  Ban,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { adminUser } from '@/data/mockData';
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

const AdminUsersPage = () => {
  const [filter, setFilter] = useState('all');

  const users = [
    { id: '1', name: 'João Silva', email: 'joao@email.com', type: 'user', plan: 'Pro', status: 'active', listings: 5, createdAt: '15/06/2024' },
    { id: '2', name: 'Maria Santos', email: 'maria@email.com', type: 'user', plan: 'Básico', status: 'active', listings: 2, createdAt: '20/07/2024' },
    { id: '3', name: 'Imobiliária Premium', email: 'contato@premium.com', type: 'agency', plan: 'Imob Premium', status: 'active', listings: 45, createdAt: '10/03/2024' },
    { id: '4', name: 'Carlos Oliveira', email: 'carlos@email.com', type: 'user', plan: 'Gratuito', status: 'suspended', listings: 0, createdAt: '05/01/2025' },
    { id: '5', name: 'Ana Costa', email: 'ana@email.com', type: 'user', plan: 'Pro', status: 'active', listings: 8, createdAt: '12/08/2024' },
  ];

  return (
    <DashboardLayout user={adminUser} title="Gerenciar Usuários">
      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar usuários..."
              className="input-styled pl-10 text-sm"
            />
          </div>

          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="user">Usuários</SelectItem>
              <SelectItem value="agency">Imobiliárias</SelectItem>
              <SelectItem value="suspended">Suspensos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="btn-primary gap-2 w-full sm:w-auto">
          <Plus className="w-5 h-5" />
          Novo Usuário
        </Button>
      </div>

      {/* Users Table */}
      <div className="bg-card rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-4 font-semibold text-foreground">Usuário</th>
                <th className="text-left p-4 font-semibold text-foreground">Tipo</th>
                <th className="text-left p-4 font-semibold text-foreground">Plano</th>
                <th className="text-left p-4 font-semibold text-foreground">Anúncios</th>
                <th className="text-left p-4 font-semibold text-foreground">Status</th>
                <th className="text-left p-4 font-semibold text-foreground">Cadastro</th>
                <th className="text-right p-4 font-semibold text-foreground">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.type === 'agency' 
                        ? 'bg-warning/20 text-warning' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {user.type === 'agency' ? 'Imobiliária' : 'Usuário'}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-foreground">{user.plan}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-foreground">{user.listings}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-destructive/20 text-destructive'
                    }`}>
                      {user.status === 'active' ? 'Ativo' : 'Suspenso'}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-muted-foreground text-sm">{user.createdAt}</span>
                  </td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Ver detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 mr-2" />
                          Enviar email
                        </DropdownMenuItem>
                        {user.status === 'active' ? (
                          <DropdownMenuItem className="text-destructive">
                            <Ban className="w-4 h-4 mr-2" />
                            Suspender
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-success">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Reativar
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Mostrando 1-5 de 12.456 usuários
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Anterior</Button>
            <Button variant="outline" size="sm">Próximo</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminUsersPage;
