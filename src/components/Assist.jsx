import { Link } from "react-router-dom";

export default function Assist() {
  return (
    <>
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

      <section id="dress-code" className="dress-code-section">
        <div className="assist-container">
          <div className="final-message-box">
            <div className="dress-code-flex-layout">
              <div className="dress-code-text-side">
                <p className="final-title-elegant">Dress Code</p>
                <p className="final-text-elegant">
                  No hay etiqueta estricta, pero nos encantará veros guapos y elegantes.
                  <br/>
                  A las chicas os recomendamos evitar tacón fino por el tipo de suelo del Cigarral.
                  <br/>
                  ¡Queremos que disfrutéis al máximo!
                </p>
              </div>
              <div className="dress-code-img-side">
                <img src="/images/photos/vestuario.png" alt="Vestuario" className="dress-code-icon-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
