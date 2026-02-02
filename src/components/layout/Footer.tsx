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
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl leading-none">Plantão</h3>
                <span className="text-xs text-background/60">Notícias & Classificados</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              O maior portal de classificados do Brasil. Compre, venda e anuncie de forma rápida e segura.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><Link to="/imoveis" className="text-background/70 hover:text-primary transition-colors">Imóveis</Link></li>
              <li><Link to="/veiculos" className="text-background/70 hover:text-primary transition-colors">Veículos</Link></li>
              <li><Link to="/eletronicos" className="text-background/70 hover:text-primary transition-colors">Eletrônicos</Link></li>
              <li><Link to="/moveis" className="text-background/70 hover:text-primary transition-colors">Móveis</Link></li>
              <li><Link to="/empregos" className="text-background/70 hover:text-primary transition-colors">Empregos</Link></li>
              <li><Link to="/servicos" className="text-background/70 hover:text-primary transition-colors">Serviços</Link></li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Institucional</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-background/70 hover:text-primary transition-colors">Sobre nós</Link></li>
              <li><Link to="/planos" className="text-background/70 hover:text-primary transition-colors">Planos e Preços</Link></li>
              <li><Link to="/imobiliarias" className="text-background/70 hover:text-primary transition-colors">Para Imobiliárias</Link></li>
              <li><Link to="/termos" className="text-background/70 hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-background/70 hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/ajuda" className="text-background/70 hover:text-primary transition-colors">Central de Ajuda</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <span className="text-sm">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">(11) 4000-1234</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">contato@plantaonoticias.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © 2025 Plantão Notícias. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 opacity-70" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-6 opacity-70" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 opacity-70" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Pix_logo.svg" alt="Pix" className="h-6 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
