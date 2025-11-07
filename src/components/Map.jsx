export default function Map() {
  return (
    <section id="map" className="py-16 bg-white text-center">
      <div className="container">
        <h2 className="text-3xl mb-6 font-cursive text-gold">Ubicación</h2>
        <div className="max-w-5xl mx-auto map-with-image">
          <div className="map-frame">
            {/* iframe will fill the grid row height set by the photo via CSS */}
            <iframe
              className="map-iframe"
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.5583123631927!2d-4.048603925125633!3d39.861730289233364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0b19ac3f21df%3A0xf0e9eb90cd922f24!2sCigarral%20del%20%C3%81ngel!5e0!3m2!1ses!2ses!4v1760809444166!5m2!1ses!2ses"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <figure className="map-photo mt-4">
            {/* use the provided photo (jpg) for best photographic quality */}
            <img src="/images/fachada_cigarral.jpg" alt="Fachada Cigarral" className="img-cover" />
            <figcaption className="sr-only">Fachada del Cigarral</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
