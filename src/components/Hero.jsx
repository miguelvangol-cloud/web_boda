export default function Hero() {
  // Use a safe placeholder SVG shipped in public/images if hero.jpg is not present
  const bg = '/images/hero.jpg';
  const fallback = '/images/hero-placeholder.svg';
  const styleBg = { backgroundImage: `url(${bg}), url(${fallback})` };

  return (
  <section id="hero" className="relative hero bg-cover bg-center" style={styleBg}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-cursive text-gold mb-2">Celia &amp; Miguel</h1>
          <h2 className="text-2xl md:text-3xl mb-2">Nuestra historia comienza aquí</h2>
          <p className="text-lg">Con amor, alegría y familia</p>
          <div className="mt-6">
            <a href="#rsvp" className="btn-primary">Confirmar asistencia</a>
          </div>
        </div>
      </div>
    </section>
  );
}
