import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  X, 
  Plus, 
  MapPin, 
  DollarSign,
  FileText,
  Image as ImageIcon,
  Tag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { categories, cities } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CreateListingPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const addImage = () => {
    // Simular upload de imagem
    const newImage = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?w=800`;
    setImages([...images, 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800']);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">Criar Anúncio</span>
          </nav>
        </div>
      </div>

      <div className="bg-background py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Passo {step} de 3</span>
              <span className="text-sm text-muted-foreground">{Math.round((step / 3) * 100)}% completo</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
              {step === 1 && 'Informações do Anúncio'}
              {step === 2 && 'Fotos e Mídia'}
              {step === 3 && 'Contato e Publicação'}
            </h1>

            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    <Tag className="inline w-4 h-4 mr-1" />
                    Categoria *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.slug}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    <FileText className="inline w-4 h-4 mr-1" />
                    Título do Anúncio *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: iPhone 15 Pro Max 256GB - Novo"
                    className="input-styled"
                    maxLength={100}
                  />
                  <p className="text-xs text-muted-foreground mt-1">0/100 caracteres</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    <DollarSign className="inline w-4 h-4 mr-1" />
                    Preço *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                    <input
                      type="number"
                      placeholder="0,00"
                      className="input-styled pl-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Descrição *
                  </label>
                  <textarea
                    placeholder="Descreva seu produto ou serviço em detalhes..."
                    className="input-styled min-h-[150px] resize-none"
                    maxLength={5000}
                  />
                  <p className="text-xs text-muted-foreground mt-1">0/5000 caracteres</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      <MapPin className="inline w-4 h-4 mr-1" />
                      Cidade *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a cidade" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.id} value={city.slug}>
                            {city.name}, {city.state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Bairro
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Centro"
                      className="input-styled"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Images */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    <ImageIcon className="inline w-4 h-4 mr-1" />
                    Fotos do Anúncio
                  </label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Adicione até 10 fotos. A primeira será a foto principal.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                        <img src={image} alt="" className="w-full h-full object-cover" />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        {index === 0 && (
                          <span className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                            Principal
                          </span>
                        )}
                      </div>
                    ))}

                    {images.length < 10 && (
                      <button
                        onClick={addImage}
                        className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary flex flex-col items-center justify-center gap-2 transition-colors"
                      >
                        <Upload className="w-8 h-8 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Adicionar foto</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="input-styled"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="input-styled"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="input-styled"
                  />
                </div>

                <div className="bg-accent rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2">Resumo do Anúncio</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Duração: 30 dias</li>
                    <li>• Tipo: Anúncio gratuito</li>
                    <li>• Fotos: {images.length}</li>
                  </ul>
                  <Link to="/planos" className="text-sm text-primary hover:underline mt-2 inline-block">
                    Quer mais destaque? Conheça nossos planos →
                  </Link>
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 mt-1 rounded border-border text-primary focus:ring-primary" required />
                    <span className="text-sm text-foreground">
                      Li e aceito os{' '}
                      <Link to="/termos" className="text-primary hover:underline">Termos de Uso</Link>
                      {' '}e confirmo que as informações são verdadeiras.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  Voltar
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button className="btn-primary" onClick={() => setStep(step + 1)}>
                  Continuar
                </Button>
              ) : (
                <Button className="btn-secondary">
                  Publicar Anúncio
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateListingPage;
