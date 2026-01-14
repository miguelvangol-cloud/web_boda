import React from "react";

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
            <h2 id="assist-title" className="assist-title-large">¿Nos acompañarás en nuestro día?</h2>
            <a href="https://forms.gle/tu_formulario_aqui" target="_blank" rel="noopener noreferrer" className="assist-form-btn-link">
              <img src="/images/photos/rellenar_formulario.png" alt="Rellenar formulario" className="assist-form-btn-img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
