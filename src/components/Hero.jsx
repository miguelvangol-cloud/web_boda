import { useEffect, useState } from "react";

// Hero with a simple, elegant countdown under the date
export default function Hero() {
  const bg = '/images/photos/hero_toledo.jpg';
  const styleBg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: '50% 25%',
    backgroundSize: 'cover'
  };

  const target = new Date('2026-09-19T00:00:00');
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / (24 * 3600));
  const hours = Math.floor((seconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <>
      <section id="hero" className="relative hero bg-cover bg-center" style={{ ...styleBg, height: '120vh' }}>
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/90 to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white pb-24 md:pb-32 z-10">
          <div className="container">
            <img src="/images/photos/titulo_hero.png" alt="Celia &amp; Miguel" className="hero-title" />
            <h2 className="hero-subtitle text-white/90">Toledo - 19 de septiembre de 2026</h2>

            <div className="hero-countdown" aria-live="polite" aria-label="Cuenta atrás hasta el 19 de septiembre de 2026">
              <div className="hero-countdown-unit">
                <div className="hero-countdown-value">{pad(days)}</div>
                <div className="hero-countdown-label">Días</div>
              </div>
              <div className="hero-countdown-unit">
                <div className="hero-countdown-value">{pad(hours)}</div>
                <div className="hero-countdown-label">Horas</div>
              </div>
              <div className="hero-countdown-unit">
                <div className="hero-countdown-value">{pad(minutes)}</div>
                <div className="hero-countdown-label">Minutos</div>
              </div>
              <div className="hero-countdown-unit">
                <div className="hero-countdown-value">{pad(secs)}</div>
                <div className="hero-countdown-label">Segundos</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="reveal">
        <section id="intro" className="intro-section">
          <div className="container intro-grid">
              <div className="intro-text">
                {/* <img src="/images/photos/ornament.png" className="intro-ornament intro-ornament-top" alt="" aria-hidden="true" /> */}
                <p className="intro-text-left"><span className="drop-cap">"H</span>ace ya más de 8 años tuvimos la suerte de que nuestros caminos se cruzaran. Después de todo este tiempo, sentimos que ha llegado el momento de celebrarlo juntos."</p>
                <p className="intro-text-right">"Queremos que nuestro día sea especial e inolvidable y para ello os necesitamos, ya que sois parte fundamental de nuestras vidas."</p>
                <p className="intro-text-center-small">En esta página encontraréis toda la información necesaria; aun asi, no dudéis en preguntarnos cualquier cosa que necesitéis.</p>
                {/* <img src="/images/photos/ornament.png" className="intro-ornament intro-ornament-bottom" alt="" aria-hidden="true" /> */}
              </div>
          </div>
        </section>
      </div>
    </>
  );
}
