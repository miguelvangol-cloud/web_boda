import React from "react";

export default function Location() {
  return (
    <>
      <section id="ubicacion" className="location-section">
        <div className="container location-grid">
          <div className="location-content">
            <h3 className="location-title">Ubicación</h3>
            <p className="location-text">El lugar elegido para la celebración es <strong>El Cigarral del Ángel</strong> en Toledo. </p>
            <p className="location-text">El más antiguo de los cigarrales toledanos que aun se conservan, es testimonio de la historia de la ciudad. Fue levantado como palacio árabe en el s.XI sobre restos romanos.</p>
            <p className="location-text">Desde entonces ha ido cambiando de manos hasta nuestros días, conformando un espacio único donde convergen arte, arquitectura, naturaleza y <strong>gastronomía</strong>.</p>
          </div>

          <aside className="location-aside">
            <div className="location-callout">
              <img src="/images/photos/ubicacion.png" alt="Vista del Cigarral" className="location-image" loading="lazy" decoding="async" />
              <a href="https://www.google.com/maps/search/?api=1&query=Cigarral+del+Ángel+Toledo" target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps" className="location-map-link">
                <img src="/images/photos/como_llegar.png" alt="Cómo llegar" className="location-map-image" loading="lazy" decoding="async" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
