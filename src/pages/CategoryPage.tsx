import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ListingCard from '@/components/cards/ListingCard';
import { featuredListings, cities, categories } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const CategoryPage = () => {
  const { slug } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');

  const category = categories.find((c) => c.slug === slug) || categories[0];

  const filters = [
    { label: 'Todos', active: true },
    { label: 'Novos', active: false },
    { label: 'Usados', active: false },
    { label: 'À venda', active: false },
    { label: 'Para alugar', active: false },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span className="mx-2">/</span>
            <Link to="/categorias" className="hover:text-primary">Categorias</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="bg-card rounded-xl p-6 sticky top-24 shadow-card">
                <h3 className="font-display font-semibold text-lg mb-4">Filtros</h3>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Localização
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select className="input-styled pl-10 text-sm">
                      <option>Todas as cidades</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.slug}>
                          {city.name}, {city.state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Faixa de Preço
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Mín"
                      className="input-styled text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Máx"
                      className="input-styled text-sm"
                    />
                  </div>
                </div>

                {/* Condition */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Condição
                  </label>
                  <div className="space-y-2">
                    {['Novo', 'Seminovo', 'Usado'].map((condition) => (
                      <label key={condition} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm text-foreground">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Anúncio
                  </label>
                  <div className="space-y-2">
                    {['Venda', 'Aluguel', 'Troca'].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm text-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full btn-primary">
                  Aplicar Filtros
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                    {category.name}
                  </h1>
                  <p className="text-muted-foreground">
                    {featuredListings.length} anúncios encontrados
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden gap-2">
                        <SlidersHorizontal className="w-4 h-4" />
                        Filtros
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <SheetHeader>
                        <SheetTitle>Filtros</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6 space-y-6">
                        {/* Same filters as sidebar */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Localização
                          </label>
                          <select className="input-styled text-sm">
                            <option>Todas as cidades</option>
                            {cities.map((city) => (
                              <option key={city.id} value={city.slug}>
                                {city.name}, {city.state}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Faixa de Preço
                          </label>
                          <div className="flex gap-2">
                            <input type="number" placeholder="Mín" className="input-styled text-sm" />
                            <input type="number" placeholder="Máx" className="input-styled text-sm" />
                          </div>
                        </div>
                        <Button className="w-full btn-primary">Aplicar Filtros</Button>
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Mais recentes</SelectItem>
                      <SelectItem value="price-asc">Menor preço</SelectItem>
                      <SelectItem value="price-desc">Maior preço</SelectItem>
                      <SelectItem value="relevance">Relevância</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode */}
                  <div className="hidden sm:flex bg-muted rounded-lg p-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={viewMode === 'grid' ? 'bg-card shadow-sm' : ''}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={viewMode === 'list' ? 'bg-card shadow-sm' : ''}
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    className={`filter-pill ${filter.active ? 'active' : ''}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Listings Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {featuredListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>

              {/* Load More */}
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg" className="px-8">
                  Carregar mais anúncios
                </Button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
