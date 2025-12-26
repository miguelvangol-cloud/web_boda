import React from 'react';

const hotels = [
  {
    id: 1,
    title: 'Giralda Center',
    image: '/images/hotel1.jpg',
    website: 'https://example.com/giralda-center',
    mapsQuery: 'Giralda Center Sevilla'
  },
  {
    id: 2,
    title: 'Sevilla Center',
    image: '/images/hotel2.jpg',
    website: 'https://example.com/sevilla-center',
    mapsQuery: 'Sevilla Center hotel'
  }
  // Add more entries here as needed
];

export default function Alojamiento() {
  return (
    <section id="alojamiento" className="accom-section">
      <div className="container">
        <h3 className="location-title">Alojamiento</h3>
      </div>

      <div className="container accom-grid">
        {hotels.map((h) => (
          <article key={h.id} className="accom-card">
            <div className="accom-photo">
              <img src={h.image} alt={h.title} />
            </div>
            <div className="accom-body">
              <h4 className="accom-title">{h.title}</h4>
              <div className="accom-links">
                <a className="accom-site" href={h.website} target="_blank" rel="noopener noreferrer">Visitar web</a>
                <a className="accom-map-btn" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.mapsQuery)}`} target="_blank" rel="noopener noreferrer">Ver en maps</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
