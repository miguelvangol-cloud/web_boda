import React from 'react';

export default function ListaBoda() {
  return (
    <section id="lista-boda" className="lista-section">
      <div className="lista-container">
        <div className="lista-content">
          <h3 className="lista-title">Lista de boda</h3>
          <p className="lista-description">
            Lo más importante ya lo tenemos: compartir este día con vosotros. Si además queréis ayudarnos en esta nueva etapa, estaremos muy agradecidos.
          </p>
          <div className="lista-iban-container">
            <span className="lista-iban-label">Número de cuenta (IBAN)</span>
            <p className="lista-iban">ES81 2100 8014 6002 0008 5555</p>
            <p className="lista-iban-name">Celia Gómez Labrador</p>
            <p className="lista-iban-name">Miguel Alonso Sánchez</p>
          </div>
          <img src="/images/photos/flor.png" alt="Flor" className="lista-ornament" />
        </div>
        <div className="lista-image-col">
          <img src="/images/photos/pedida1.jpg" alt="Pareja" className="lista-img" />
        </div>
      </div>
    </section>
  );
}
