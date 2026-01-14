import React from 'react';

const images = [
  '/images/photos/strip1.jpg',
  '/images/photos/strip2.jpg',
  '/images/photos/strip3.jpg',
  '/images/photos/strip4.jpg'
];

export default function PhotoStrip() {
  return (
    <section className="photo-strip" aria-hidden>
      <div className="photo-strip-full">
        <div className="photo-grid">
          {images.map((src, i) => (
            <div key={i} className="photo-card">
              <img src={src} alt={`Foto ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
