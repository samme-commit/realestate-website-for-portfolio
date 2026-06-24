import type { Property } from "../../data/properties";
import "./PropertyCard.css";

type PropertyCardProps = {
  property: Property;
  onSelect: (property: Property) => void;
};

function PropertyCard({ property, onSelect }: PropertyCardProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(property);
    }
  };

  return (
    <article
      className="listing-card"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(property)}
      onKeyDown={handleKeyDown}
    >
      <img src={property.image} alt={property.title} />

      <div className="listing-overlay" />

      <span className="listing-badge">{property.status}</span>

      <div className="listing-content">
        <p className="listing-location">{property.location}</p>

        <h3>{property.title}</h3>

        <div className="listing-meta">
          <span>{property.area}</span>
          <span>{property.rooms}</span>
          <span>{property.price}</span>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;