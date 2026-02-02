import { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ListingCard from '@/components/cards/ListingCard';
import { featuredListings } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const EletronicosPage = () => {
  const [sortBy, setSortBy] = useState('recent');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop")',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-blue-600/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white drop-shadow-xl">
            Eletrônicos
          </h1>
          <p className="text-lg text-white/90 font-semibold drop-shadow-lg mb-8">
            Celulares, computadores, TVs e muito mais
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <input
                  type="text"
                  placeholder="Buscar eletrônicos..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg border-none shadow focus:ring-4 focus:ring-primary/30"
                />
              </div>
              <Button className="h-12 px-6 rounded-lg bg-primary hover:bg-primary/90">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">
                Mostrando 48 anúncios
              </span>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais Recentes</SelectItem>
                  <SelectItem value="price-low">Menor Preço</SelectItem>
                  <SelectItem value="price-high">Maior Preço</SelectItem>
                  <SelectItem value="popular">Mais Populares</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            <Button variant="outline" className="whitespace-nowrap">Todos</Button>
            <Button variant="outline" className="whitespace-nowrap">Celulares</Button>
            <Button variant="outline" className="whitespace-nowrap">Computadores</Button>
            <Button variant="outline" className="whitespace-nowrap">TVs</Button>
            <Button variant="outline" className="whitespace-nowrap">Acessórios</Button>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredListings.slice(0, 12).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button variant="outline" disabled>←</Button>
            <Button className="bg-primary hover:bg-primary/90">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">→</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EletronicosPage;
