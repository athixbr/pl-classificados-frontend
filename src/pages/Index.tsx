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
      <section className="hero-gradient text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0zNiAxNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4 animate-slide-up">
              Encontre o que você procura
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              O maior portal de classificados do Brasil. Compre, venda e anuncie de forma rápida e segura.
            </p>
          </div>

          {/* Search Box */}
          <div className="search-container max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="O que você está procurando?"
                  className="input-styled pl-12 text-foreground"
                />
              </div>
              <div className="md:w-64 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="input-styled pl-12 text-foreground appearance-none">
                  <option>Todas as cidades</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.slug}>
                      {city.name}, {city.state}
                    </option>
                  ))}
                </select>
              </div>
              <Button className="btn-secondary h-12 px-8">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-muted-foreground">Populares:</span>
              {['Apartamentos', 'Carros', 'iPhone', 'Empregos', 'Móveis'].map((term) => (
                <Link
                  key={term}
                  to={`/busca?q=${term.toLowerCase()}`}
                  className="text-sm text-primary hover:underline"
                >
                  {term}
                </Link>
              ))}
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
      <section className="py-16 md:py-24 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Tem algo para vender?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Anuncie grátis e alcance milhares de compradores interessados. É rápido, fácil e seguro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/anunciar">
              <Button className="btn-secondary text-lg px-8 py-6">
                Anunciar Grátis
              </Button>
            </Link>
            <Link to="/planos">
              <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6">
                Conhecer Planos
              </Button>
            </Link>
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

      {/* Cities Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-8">
            Principais Cidades
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {cities.map((city) => (
              <Link
                key={city.id}
                to={`/cidade/${city.slug}`}
                className="bg-card rounded-xl p-4 text-center hover:shadow-card-hover transition-all duration-300"
              >
                <p className="font-semibold text-foreground">{city.name}</p>
                <p className="text-sm text-muted-foreground">{city.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
