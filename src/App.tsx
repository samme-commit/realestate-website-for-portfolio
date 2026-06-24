import "./index.css";
import Header from "./components/Header/Header";
import { useMemo, useState } from "react";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import PropertyFilters from "./components/PropertyFilters/PropertyFilters";
import { properties, type Property, type PropertyType } from "./data/properties";
import PropertyModal from "./components/PropertyModal/PropertyModal";
import { agents } from "./data/agents";
import AgentCard from "./components/AgentCard/AgentCard";
import BorderGlow from "./components/BorderGlow/BorderGlow";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<"alla" | PropertyType>("alla");
  const [selectedStatus, setSelectedStatus] = useState<"alla" | string>("alla");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [valuationSubmitted, setValuationSubmitted] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        property.title.toLowerCase().includes(search) ||
        property.location.toLowerCase().includes(search);

      const matchesType =
        selectedType === "alla" || property.type === selectedType;

      const matchesStatus =
        selectedStatus === "alla" || property.status === selectedStatus;

      const matchesPrice =
        maxPrice === "" || property.priceValue <= Number(maxPrice);

      return matchesSearch && matchesType && matchesStatus && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedStatus, maxPrice]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType("alla");
    setSelectedStatus("alla");
    setMaxPrice("");
  };

  const handleValuationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValuationSubmitted(true);
  };

  return (
    <>
      <Header />

      <main>
        <section className="hero-section">
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow">Stad & Strand</p>
            <h1>Hitta ditt nästa hem med trygghet.</h1>
            <p>
              En modern mäklarhemsida för dig som vill köpa, sälja eller
              värdera bostad med en personlig och premium känsla.
            </p>

            <div className="hero-actions">
              <a href="#properties" className="primary-button">
                Se nya bostäder
              </a>
              <a href="#sell" className="secondary-button">
                Sälj din bostad
              </a>
            </div>
          </div>
        </section>

        <section id="agents" className="section">
          <div className="section-header">
            <p className="eyebrow">Mäklare</p>
            <h2>Hitta rätt mäklare för din bostadsaffär.</h2>
            <p>
              Våra mäklare kombinerar lokalkännedom, erfarenhet och personlig rådgivning
              för att skapa en trygg bostadsaffär från första möte till avslut.
            </p>
          </div>

          <div className="agent-grid">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        <section id="properties" className="section">
          <div className="section-header">
            <p className="eyebrow">Nya bostäder</p>
            <h2>Utvalda hem just nu.</h2>
            <p>
              Bläddra bland nya bostäder med starkt läge, genomtänkt planlösning
              och hög boendekvalitet.
            </p>
          </div>

          <PropertyFilters
            searchTerm={searchTerm}
            selectedType={selectedType}
            selectedStatus={selectedStatus}
            maxPrice={maxPrice}
            onSearchChange={setSearchTerm}
            onTypeChange={setSelectedType}
            onStatusChange={setSelectedStatus}
            onMaxPriceChange={setMaxPrice}
            onReset={resetFilters}
          />

          {filteredProperties.length > 0 ? (
            <div className="property-grid">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSelect={setSelectedProperty}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Inga bostäder hittades</h3>
              <p>Testa att ändra sökningen eller rensa dina filter.</p>
              <button type="button" onClick={resetFilters}>
                Rensa filter
              </button>
            </div>
          )}
        </section>

        <section className="section benefits-section">
          <div className="section-header">
            <p className="eyebrow">Varför oss</p>
            <h2>En bostadsaffär ska kännas trygg från start till slut.</h2>
          </div>

          <div className="benefit-grid">
            <BorderGlow as="article" className="benefit-card">
              <h3>Lokal expertis</h3>
              <p>
                Vi känner områdena, marknaden och vad köpare faktiskt letar efter.
              </p>
            </BorderGlow>

            <BorderGlow as="article" className="benefit-card">
              <h3>Premium presentation</h3>
              <p>
                Varje bostad presenteras med stark bildkänsla, tydlig text och genomtänkt
                digital exponering.
              </p>
            </BorderGlow>

            <BorderGlow as="article" className="benefit-card">
              <h3>Personlig rådgivning</h3>
              <p>
                Du får en tydlig plan för värdering, försäljning, visning och avslut.
              </p>
            </BorderGlow>
          </div>
        </section>

        <section id="sell" className="section sell-section">
          <BorderGlow  className="sell-card">
            <div>
              <p className="eyebrow">Sälj bostad</p>
              <h2>Funderar du på att sälja?</h2>
              <p>
                Boka en kostnadsfri värdering och få en tydlig bild av din
                bostads möjligheter på marknaden.
              </p>
            </div>

            {valuationSubmitted ? (
              <div className="form-success">
                <span>✓</span>
                <h3>Tack! Vi kontaktar dig inom kort.</h3>
                <p>
                  Din förfrågan har registrerats. En mäklare från Stad & Strand hör av
                  sig med nästa steg.
                </p>

                <button type="button" onClick={() => setValuationSubmitted(false)}>
                  Skicka en ny förfrågan
                </button>
              </div>
            ) : (
              <form className="sell-form" onSubmit={handleValuationSubmit}>
                <input type="text" placeholder="Namn" required />
                <input type="email" placeholder="E-post" required />
                <input type="text" placeholder="Bostadsadress" required />
                <button type="submit">Boka värdering</button>
              </form>
            )}
          </BorderGlow>
        </section>

        <Footer />
      </main>

      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </>
  );
}

export default App;