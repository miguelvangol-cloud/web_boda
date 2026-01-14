import React from 'react';

export default function ListaBoda() {
  return (
    <section id="lista-boda" className="lista-section">
      <div className="lista-grid">
        <div className="lista-image-col">
          <img src="/images/photos/pedida1.jpg" alt="Pareja" className="lista-img" />
        </div>
        <div className="lista-content">
          <div className="lista-content-inner">
            <h3 className="location-title">Lista de boda</h3>
            <p className="lista-description">
            Vuestra presencia es nuestro mayor regalo. No obstante, si queréis tener un detalle con nosotros, podéis hacerlo a través de la siguiente cuenta:
          </p>
            <p className="lista-iban">ES12 3456 7890 1234 5678</p>
          </div>
        </div>
      </div>
    </section>
  );
}
