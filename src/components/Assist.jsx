import { Link } from "react-router-dom";

export default function Assist() {
  return (
    <section id="asistencia" className="assist-section" aria-labelledby="assist-title">
      <div className="assist-bg" aria-hidden></div>
      <div className="assist-container">
        <div className="assist-new-grid">
          <div className="assist-photo-col">
            <img src="/images/photos/foto_nosotros.JPG" alt="Celia y Miguel" className="assist-photo" />
          </div>
          <div className="assist-text-col">
            <h2 id="assist-title" className="assist-title-large" style={{ viewTransitionName: 'assist-title' }}>¿Nos acompañarás en nuestro día?</h2>
            <Link viewTransition to="/confirmar-asistencia" className="assist-form-btn-link">
              <img src="/images/photos/rellenar_formulario.png" alt="Rellenar formulario" className="assist-form-btn-img" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
