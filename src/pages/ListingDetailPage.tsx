import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2, 
  MapPin, 
  Clock, 
  Eye,
  Phone,
  MessageCircle,
  Mail,
  Flag,
  Shield,
  User,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ListingCard from '@/components/cards/ListingCard';
import { featuredListings, formatPrice, formatDate } from '@/data/mockData';

const ListingDetailPage = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const listing = featuredListings.find((l) => l.id === id) || featuredListings[0];
  const relatedListings = featuredListings.filter((l) => l.id !== listing.id).slice(0, 4);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span className="mx-2">/</span>
            <Link to={`/categoria/${listing.category}`} className="hover:text-primary capitalize">
              {listing.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium line-clamp-1">{listing.title}</span>
          </nav>
        </div>
      </div>

      <div className="bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Image Gallery */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-card mb-6">
                <div className="relative aspect-[16/10]">
                  <img
                    src={listing.images[currentImage]}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  {listing.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {listing.featured && <span className="badge-featured">Destaque</span>}
                    {listing.urgent && <span className="badge-urgent">Urgente</span>}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-destructive text-destructive' : ''}`} />
                    </button>
                    <button className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-foreground/70 text-background text-sm px-3 py-1 rounded-full">
                    {currentImage + 1} / {listing.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {listing.images.length > 1 && (
                  <div className="p-4 flex gap-2 overflow-x-auto">
                    {listing.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          index === currentImage ? 'border-primary' : 'border-transparent'
                        }`}
                      >
                        <img src={image} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Listing Info */}
              <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                      {listing.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="location-badge">
                        <MapPin className="w-4 h-4" />
                        {listing.neighborhood && `${listing.neighborhood}, `}{listing.city} - {listing.state}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatDate(listing.createdAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {listing.views} visualizações
                      </span>
                    </div>
                  </div>
                  <p className="price-tag text-3xl">{formatPrice(listing.price)}</p>
                </div>

                {/* Details */}
                {listing.details && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border my-4">
                    {Object.entries(listing.details).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm text-muted-foreground capitalize">{key}</p>
                        <p className="font-semibold text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="mt-4">
                  <h3 className="font-display font-semibold text-lg mb-2">Descrição</h3>
                  <p className="text-foreground whitespace-pre-line">{listing.description}</p>
                </div>
              </div>

              {/* Report */}
              <div className="flex items-center justify-center">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors">
                  <Flag className="w-4 h-4" />
                  Denunciar anúncio
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 space-y-6">
              {/* Contact Card */}
              <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center">
                    <User className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Vendedor Particular</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      Membro desde 2024
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {listing.whatsapp && (
                    <Button className="w-full btn-secondary gap-2" size="lg">
                      <MessageCircle className="w-5 h-5" />
                      Chamar no WhatsApp
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    size="lg"
                    onClick={() => setShowPhone(!showPhone)}
                  >
                    <Phone className="w-5 h-5" />
                    {showPhone ? listing.whatsapp : 'Ver telefone'}
                  </Button>

                  <Button variant="outline" className="w-full gap-2" size="lg">
                    <Mail className="w-5 h-5" />
                    Enviar mensagem
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-success" />
                    Dicas de segurança para comprar
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Listings */}
          <section className="mt-12">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">
              Anúncios Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ListingDetailPage;
