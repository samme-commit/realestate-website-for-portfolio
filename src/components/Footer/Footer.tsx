import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="footer-logo-mark">S&S</span>
            <span>Stad & Strand</span>
          </a>

          <p>
            En fiktiv mäklarhemsida skapad som ett portfolio-projekt med React,
            TypeScript och modern frontend-design.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Sidor</h3>
            <a href="#properties">Bostäder</a>
            <a href="#agents">Mäklare</a>
            <a href="#sell">Sälj bostad</a>
          </div>

          <div>
            <h3>Kontakt</h3>
            <a href="mailto:kontakt@stadochstrand.se">
              kontakt@stadochstrand.se
            </a>
            <a href="tel:0101234567">010-123 45 67</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Stad & Strand. Fiktiv mäklarhemsida skapad som ett portfolio-projekt</p>
      </div>
    </footer>
  );
}

export default Footer;