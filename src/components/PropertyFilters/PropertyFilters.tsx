import "./PropertyFilters.css";
import type { PropertyType } from "../../data/properties";

type PropertyFiltersProps = {
  searchTerm: string;
  selectedType: "alla" | PropertyType;
  selectedStatus: "alla" | string;
  maxPrice: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: "alla" | PropertyType) => void;
  onStatusChange: (value: "alla" | string) => void;
  onMaxPriceChange: (value: string) => void;
  onReset: () => void;
};

function PropertyFilters({
  searchTerm,
  selectedType,
  selectedStatus,
  maxPrice,
  onSearchChange,
  onTypeChange,
  onStatusChange,
  onMaxPriceChange,
  onReset,
}: PropertyFiltersProps) {
  return (
    <div className="property-filters">
      <div className="filter-field filter-field-wide">
        <label htmlFor="search">Sök område eller adress</label>
        <input
          id="search"
          type="text"
          placeholder="Ex. Stockholm, Göteborg, Svalövsvägen..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="filter-field">
        <label htmlFor="type">Bostadstyp</label>
        <select
          id="type"
          value={selectedType}
          onChange={(event) =>
            onTypeChange(event.target.value as "alla" | PropertyType)
          }
        >
          <option value="alla">Alla</option>
          <option value="villa">Villa</option>
          <option value="lägenhet">Lägenhet</option>
          <option value="fritidshus">Fritidshus</option>
        </select>
      </div>

      <div className="filter-field">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={selectedStatus}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="alla">Alla</option>
          <option value="På förhand">På förhand</option>
          <option value="Visning">Visning</option>
        </select>
      </div>

      <div className="filter-field">
        <label htmlFor="maxPrice">Maxpris</label>
        <select
          id="maxPrice"
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(event.target.value)}
        >
          <option value="">Ingen gräns</option>
          <option value="3000000">3 000 000 kr</option>
          <option value="4000000">4 000 000 kr</option>
          <option value="5000000">5 000 000 kr</option>
        </select>
      </div>

      <button className="filter-reset" type="button" onClick={onReset}>
        Rensa filter
      </button>
    </div>
  );
}

export default PropertyFilters;