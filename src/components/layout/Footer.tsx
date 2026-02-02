import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-foreground border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://plantaodanoticia.com.br/wp-content/uploads/2022/12/Design-sem-nome-1.png" 
                alt="PL Classificados" 
                className="h-14 w-auto object-contain hover:opacity-90 transition"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              O maior portal de classificados do Brasil. Compre, venda e anuncie de forma rápida e segura.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Categorias</h4>
            <ul className="space-y-2">
              <li><Link to="/imoveis" className="text-gray-600 hover:text-primary transition-colors">Imóveis</Link></li>
              <li><Link to="/veiculos" className="text-gray-600 hover:text-primary transition-colors">Veículos</Link></li>
              <li><Link to="/eletronicos" className="text-gray-600 hover:text-primary transition-colors">Eletrônicos</Link></li>
              <li><Link to="/moveis" className="text-gray-600 hover:text-primary transition-colors">Móveis</Link></li>
              <li><Link to="/empregos" className="text-gray-600 hover:text-primary transition-colors">Empregos</Link></li>
              <li><Link to="/servicos" className="text-gray-600 hover:text-primary transition-colors">Serviços</Link></li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Institucional</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-gray-600 hover:text-primary transition-colors">Sobre nós</Link></li>
              <li><Link to="/planos" className="text-gray-600 hover:text-primary transition-colors">Planos e Preços</Link></li>
              <li><Link to="/imobiliarias" className="text-gray-600 hover:text-primary transition-colors">Para Imobiliárias</Link></li>
              <li><Link to="/termos" className="text-gray-600 hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-gray-600 hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/ajuda" className="text-gray-600 hover:text-primary transition-colors">Central de Ajuda</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">(11) 4000-1234</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">contato@plclassificados.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2025 PL Classificados. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-sm">
              Desenvolvido por <a href="https://www.athix.com.br" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">ATHIX</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
