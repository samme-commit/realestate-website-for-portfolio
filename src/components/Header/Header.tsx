import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <a href="#" className="logo">
        <span className="logo-mark">S&S</span>
        <span>Stad & Strand</span>
      </a>

      <nav className="nav-links">
        <a href="#properties">Bostäder</a>
        <a href="#agents">Mäklare</a>
        <a href="#sell">Sälja</a>
      </nav>

      <a href="#valuation" className="header-cta">
        Boka värdering
      </a>
    </header>
  );
}

export default Header;