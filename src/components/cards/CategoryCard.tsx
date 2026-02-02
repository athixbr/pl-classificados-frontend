import { Link } from 'react-router-dom';
import { 
  Home, 
  Car, 
  Smartphone, 
  Sofa, 
  Briefcase, 
  Wrench, 
  Shirt, 
  Dumbbell,
  LucideIcon
} from 'lucide-react';
import { Category } from '@/data/mockData';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Car,
  Smartphone,
  Sofa,
  Briefcase,
  Wrench,
  Shirt,
  Dumbbell,
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = iconMap[category.icon] || Home;

  return (
    <Link to={`/categoria/${category.slug}`} className="category-card">
      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-foreground">{category.name}</h3>
        <p className="text-sm text-muted-foreground">{category.count.toLocaleString()} anúncios</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
