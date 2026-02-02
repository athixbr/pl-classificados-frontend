import { Link } from 'react-router-dom';
import { Search, MapPin, ChevronRight, TrendingUp, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ListingCard from '@/components/cards/ListingCard';
import CategoryCard from '@/components/cards/CategoryCard';
import { categories, featuredListings, cities } from '@/data/mockData';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background com imagem de fundo e overlay */}
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 animate-slide-up text-white drop-shadow-xl leading-tight whitespace-nowrap">
              Encontre o que você procura
            </h1>
            <p className="text-lg md:text-xl text-white/95 animate-slide-up font-semibold drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
              O maior portal de classificados do Brasil. Compre, venda e anuncie de forma rápida e segura.
            </p>
          </div>

          {/* Search Box - visual moderno */}
          <div className="relative max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-primary/90 to-blue-500/80 rounded-2xl shadow-xl px-8 py-8 flex flex-col items-center gap-6 relative overflow-hidden">
              <form className="w-full flex flex-col md:flex-row gap-4 relative z-10">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <input
                    type="text"
                    placeholder="O que você está procurando?"
                    className="w-full h-14 pl-12 pr-4 rounded-xl border-none shadow focus:ring-4 focus:ring-primary/30 text-base"
                    style={{background: 'rgba(255,255,255,0.95)'}}
                  />
                </div>
                <Button className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow">
                  <Search className="w-6 h-6 mr-2" />
                  Buscar
                </Button>
              </form>
              {/* Popular Searches */}
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-white/80">Populares:</span>
                {['Apartamentos', 'Carros', 'iPhone', 'Empregos', 'Móveis'].map((term) => (
                  <Link
                    key={term}
                    to={`/busca?q=${term.toLowerCase()}`}
                    className="text-sm text-white font-semibold hover:underline hover:text-yellow-200 transition"
                  >
                    {term}
                  </Link>
                ))}
              </div>
              {/* Decorativo: círculos coloridos */}
              <span className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <span className="absolute -bottom-10 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Categorias
            </h2>
            <Link to="/categorias" className="text-primary font-medium flex items-center gap-1 hover:underline">
              Ver todas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                Anúncios em Destaque
              </h2>
              <p className="text-muted-foreground mt-1">Os melhores anúncios selecionados para você</p>
            </div>
            <Link to="/destaques" className="text-primary font-medium flex items-center gap-1 hover:underline">
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredListings.slice(0, 4).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Listings */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                Anúncios Recentes
              </h2>
              <p className="text-muted-foreground mt-1">Confira os últimos anúncios publicados</p>
            </div>
            <Link to="/recentes" className="text-primary font-medium flex items-center gap-1 hover:underline">
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background com imagem */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=600&fit=crop")',
              backgroundPosition: 'center',
              filter: 'brightness(0.35)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-blue-600/65 to-primary/75" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white drop-shadow-xl">
              Tem algo para vender?
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-semibold drop-shadow-lg">
              Anuncie grátis e alcance milhares de compradores interessados. É rápido, fácil e seguro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/anunciar">
                <Button className="btn-secondary text-lg px-10 py-7 font-bold rounded-lg shadow-lg hover:shadow-xl transition">
                  Anunciar Grátis
                </Button>
              </Link>
              <Link to="/planos">
                <Button className="bg-white text-primary hover:bg-white/90 border-2 border-white text-lg px-10 py-7 font-bold rounded-lg shadow-lg hover:shadow-xl transition">
                  Conhecer Planos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
            Por que escolher o Plantão?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Maior Alcance</h3>
              <p className="text-muted-foreground">
                Milhões de usuários ativos buscando produtos e serviços todos os dias.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">100% Seguro</h3>
              <p className="text-muted-foreground">
                Sistema de verificação de usuários e proteção contra fraudes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Rápido e Fácil</h3>
              <p className="text-muted-foreground">
                Crie seu anúncio em menos de 2 minutos e comece a vender.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
