import { Link } from 'react-router-dom';
import { Heart, MapPin, Eye, Clock } from 'lucide-react';
import { Listing, formatPrice, formatDate } from '@/data/mockData';
import { useState } from 'react';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/anuncio/${listing.id}`} className="listing-card group block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={listing.images[0]} 
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {listing.featured && (
            <span className="badge-featured">Destaque</span>
          )}
          {listing.urgent && (
            <span className="badge-urgent">Urgente</span>
          )}
        </div>

        {/* Favorite Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 w-9 h-9 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'
            }`} 
          />
        </button>

        {/* Image Count */}
        {listing.images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-foreground/70 text-background text-xs px-2 py-1 rounded-full">
            {listing.images.length} fotos
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        {/* Price */}
        <p className="price-tag">{formatPrice(listing.price)}</p>

        {/* Title */}
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {listing.title}
        </h3>

        {/* Location */}
        <div className="location-badge">
          <MapPin className="w-4 h-4" />
          <span>{listing.neighborhood ? `${listing.neighborhood}, ` : ''}{listing.city} - {listing.state}</span>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatDate(listing.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>{listing.views} visualizações</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
