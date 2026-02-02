import { Check } from 'lucide-react';
import { Plan, formatPrice } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PlanCardProps {
  plan: Plan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <div className={`plan-card ${plan.featured ? 'featured' : ''}`}>
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Mais Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-2xl text-foreground mb-2">
          {plan.name}
        </h3>
        <div className="flex items-baseline justify-center gap-1">
          {plan.price === 0 ? (
            <span className="text-4xl font-bold text-primary">Grátis</span>
          ) : (
            <>
              <span className="text-4xl font-bold text-primary">
                {formatPrice(plan.price)}
              </span>
              <span className="text-muted-foreground">/mês</span>
            </>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-success" />
            </div>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to={plan.price === 0 ? '/cadastro' : '/checkout'}>
        <Button 
          className={`w-full ${plan.featured ? 'btn-secondary' : 'btn-outline'}`}
          size="lg"
        >
          {plan.price === 0 ? 'Começar Grátis' : 'Assinar Agora'}
        </Button>
      </Link>
    </div>
  );
};

export default PlanCard;
