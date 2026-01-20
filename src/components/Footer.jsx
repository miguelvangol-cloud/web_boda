export default function Footer({ className = '' }) {
  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-container">
        <div className="footer-row">
          <img src="/images/photos/horcajo.png" alt="Horcajo" className="footer-ornament-img" />
          <div className="footer-center">
            <img src="/images/photos/logo_cm.png" alt="Logo Celia y Miguel" className="footer-logo" />
            <p className="footer-text">19.09.2026</p>
          </div>
          <img src="/images/photos/illescas.png" alt="Illescas" className="footer-ornament-img" />
        </div>
        <p className="footer-copyright">&copy; Celia&Miguel</p>
      </div>
    </footer>
  );
}
