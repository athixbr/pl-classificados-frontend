import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://plantaodanoticia.com.br/wp-content/uploads/2022/12/Design-sem-nome-1.png" 
            alt="PL Classificados" 
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>

        {/* Erro 404 */}
        <div className="space-y-4">
          <div className="relative">
            <h1 className="text-[120px] md:text-[180px] font-bold text-gray-100 leading-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-16 w-16 md:h-24 md:w-24 text-primary/30" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Página não encontrada
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi removida.
          </p>
        </div>

        {/* Ilustração decorativa */}
        <div className="flex justify-center items-center gap-4 py-6">
          <div className="h-2 w-2 rounded-full bg-primary/20 animate-pulse"></div>
          <div className="h-3 w-3 rounded-full bg-primary/40 animate-pulse delay-100"></div>
          <div className="h-4 w-4 rounded-full bg-primary animate-pulse delay-200"></div>
          <div className="h-3 w-3 rounded-full bg-primary/40 animate-pulse delay-300"></div>
          <div className="h-2 w-2 rounded-full bg-primary/20 animate-pulse delay-400"></div>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            asChild 
            size="lg" 
            className="gap-2 min-w-[200px]"
          >
            <Link to="/">
              <Home className="h-5 w-5" />
              Voltar ao Início
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="gap-2 min-w-[200px]"
            onClick={() => window.history.back()}
          >
            <a href="#">
              <ArrowLeft className="h-5 w-5" />
              Página Anterior
            </a>
          </Button>
        </div>

        {/* Links úteis */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Você também pode acessar:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/categorias" className="text-primary hover:underline">
              Categorias
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/planos" className="text-primary hover:underline">
              Planos
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/cadastro" className="text-primary hover:underline">
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
