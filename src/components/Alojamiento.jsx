import React from 'react';

const hotels = [
  {
    id: 1,
    title: 'Hotel Los Cigarrales **',
    image: '/images/accom/hotel_loscigarrales.jpg',
    website: 'https://hotelcigarrales.com/',
    mapsQuery: 'Hotel Los Cigarrales Toledo',
    text: <><strong>Código descuento: BODACM19092026</strong> para reservas directamente en la web</>
  },
  {
    id: 2,
    title: 'Hotel La Bastida ***',
    image: '/images/accom/hotel_labastida.jpg',
    website: 'https://www.hotellabastida.com/',
    mapsQuery: 'Hotel La Bastida Toledo',
    text: <>10% de descuento reservando a trevés del correo electrónico <strong>reservas@hotellabastida.com</strong> con concepto <strong>'Boda Celia y Miguel'</strong></>
  },
  {
    id: 3,
    title: 'AC Hotel Ciudad de Toledo ****',
    image: '/images/accom/AC_hotel.jpg',
    website: 'https://www.marriott.com/en-us/hotels/madto-ac-hotel-ciudad-de-toledo/',
    mapsQuery: 'AC Hotel Ciudad de Toledo'
  }
];

export default function Alojamiento() {
  return (
    <section id="alojamiento" className="accom-section">
      <div className="container">
        <h3 className="location-title">Alojamiento</h3>
        <p className="location-text">Si deseas descansar allí después de darlo todo el día de la boda o disfrutar del fin de semana en esta maravillosa ciudad te recomendamos <strong>reserves lo antes posible</strong>, ya que aunque Toledo tiene mucha oferta de alojamientos ¡Septiembre es un mes muy solicitado!</p>
        <p className="location-text">Aquí van algunas recomendaciones que creemos que por ubicación y precio pueden ser interesantes, algunas con precio especial:</p>
      </div>

      <div className="container accom-grid">
        {hotels.map((h) => (
          <article key={h.id} className="accom-card">
            <div className="accom-photo">
              <img src={h.image} alt={h.title} />
            </div>
            <div className="accom-body">
              <h4 className="accom-title">{h.title}</h4>
              {h.text && <p className="accom-text">{h.text}</p>}
              <div className="accom-links">
                <a className="accom-site external-link-hint" href={h.website} target="_blank" rel="noopener noreferrer">Visitar web</a>
                <a className="accom-map-btn" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.mapsQuery)}`} target="_blank" rel="noopener noreferrer">Ver en maps</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
