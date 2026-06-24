import { useEffect } from "react";
import type { Property } from "../../data/properties";
import "./PropertyModal.css";

type PropertyModalProps = {
  property: Property | null;
  onClose: () => void;
};

function PropertyModal({ property, onClose }: PropertyModalProps) {
  useEffect(() => {
    if (!property) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  return (
    <div className="property-modal-backdrop" onClick={onClose}>
      <article
        className="property-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="property-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Stäng bostadsmodal"
        >
          ×
        </button>

        <div className="property-modal-image">
          <img src={property.image} alt={property.title} />
          <span>{property.status}</span>
        </div>

        <div className="property-modal-content">
          <p className="property-modal-location">{property.location}</p>
          <h2>{property.title}</h2>

          <div className="property-modal-meta">
            <span>{property.area}</span>
            <span>{property.rooms}</span>
            <span>{property.price}</span>
            <span>{property.type}</span>
          </div>

          <p>
            En utvald bostad i {property.location} med fokus på läge,
            planlösning och boendekvalitet. Här presenteras bostaden i ett
            stilrent format med tydlig information för spekulanter.
          </p>

          <div className="property-modal-actions">
            <a href="#sell" onClick={onClose}>
              Kontakta mäklare
            </a>

            <button type="button" onClick={onClose}>
              Stäng
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PropertyModal;