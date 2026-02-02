import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Calendar,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { currentUser, featuredListings, formatPrice, formatDate } from '@/data/mockData';
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

const MyListingsPage = () => {
  const [filter, setFilter] = useState('all');

  return (
    <DashboardLayout user={currentUser} title="Meus Anúncios">
      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar anúncios..."
              className="input-styled pl-10 text-sm"
            />
          </div>

          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[140px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Ativos</SelectItem>
              <SelectItem value="paused">Pausados</SelectItem>
              <SelectItem value="expired">Expirados</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Link to="/dashboard/criar-anuncio">
          <Button className="btn-primary gap-2 w-full sm:w-auto">
            <Plus className="w-5 h-5" />
            Novo Anúncio
          </Button>
        </Link>
      </div>

      {/* Listings Table */}
      <div className="bg-card rounded-2xl shadow-card overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-4 font-semibold text-foreground">Anúncio</th>
                <th className="text-left p-4 font-semibold text-foreground">Preço</th>
                <th className="text-left p-4 font-semibold text-foreground">Status</th>
                <th className="text-left p-4 font-semibold text-foreground">Views</th>
                <th className="text-left p-4 font-semibold text-foreground">Data</th>
                <th className="text-right p-4 font-semibold text-foreground">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {featuredListings.map((listing) => (
                <tr key={listing.id} className="hover:bg-muted/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={listing.images[0]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-foreground truncate max-w-[200px]">
                          {listing.title}
                        </h4>
                        <p className="text-sm text-muted-foreground capitalize">{listing.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-primary">{formatPrice(listing.price)}</span>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-success/20 text-success text-xs font-medium rounded-full">
                      Ativo
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      {listing.views}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-muted-foreground text-sm">
                      {formatDate(listing.createdAt)}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-border">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={listing.images[0]} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-foreground line-clamp-2">{listing.title}</h4>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="flex-shrink-0">
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Pausar</DropdownMenuItem>
                        <DropdownMenuItem>Destacar</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Excluir</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="font-semibold text-primary mt-1">{formatPrice(listing.price)}</p>
                  <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="px-2 py-0.5 bg-success/20 text-success text-xs font-medium rounded-full">
                      Ativo
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {listing.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(listing.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {/* <div className="bg-card rounded-2xl p-12 text-center shadow-card">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
          Nenhum anúncio encontrado
        </h3>
        <p className="text-muted-foreground mb-6">
          Você ainda não tem anúncios publicados. Crie seu primeiro anúncio agora!
        </p>
        <Link to="/dashboard/criar-anuncio">
          <Button className="btn-primary gap-2">
            <Plus className="w-5 h-5" />
            Criar Anúncio
          </Button>
        </Link>
      </div> */}
    </DashboardLayout>
  );
};

export default MyListingsPage;
