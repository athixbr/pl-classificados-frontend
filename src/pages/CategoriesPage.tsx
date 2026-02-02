import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/cards/CategoryCard';
import { categories } from '@/data/mockData';

const CategoriesPage = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">Categorias</span>
          </nav>
        </div>
      </div>

      <div className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Todas as Categorias
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore todas as categorias disponíveis e encontre o que você procura
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
