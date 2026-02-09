import { useEffect, useState } from "react";

// Hero with a simple, elegant countdown under the date
export default function Hero() {
  const bg = '/images/photos/hero_toledo.jpg';
  const styleBg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: '50% 25%',
    backgroundSize: 'cover'
  };

  const target = new Date('2026-09-19T13:30:00');
  // const target = new Date('2026-02-08T21:48:00');
  const [now, setNow] = useState(() => new Date());
  const [fireworks, setFireworks] = useState([]);
  const [activeEffect, setActiveEffect] = useState(false);

  const triggerFireworks = () => {
    setActiveEffect(true);
    const newFireworks = Array.from({ length: 40 }).map((_, i) => ({
      id: Date.now() + i,
      left: 0 + Math.random() * 100,
      top: 10 + Math.random() * 70,
      color: ['#B78646', '#708238', '#CBB895', '#FFD700', '#FFFFFF'][Math.floor(Math.random() * 5)],
      delay: Math.random() * 4
    }));
    setFireworks(newFireworks);
    
    setTimeout(() => {
      setActiveEffect(false);
      setFireworks([]);
    }, 10000);
  };

  useEffect(() => {
    // Only trigger on mount if the countdown is already at 0 or passed
    if (new Date() >= target) {
      triggerFireworks();
    }

    let hasTriggeredAtZero = false;

    const id = setInterval(() => {
      const currentTime = new Date();
      setNow(currentTime);
      
      // Trigger exactly when it hits zero for the first time
      const isPastOrEqual = currentTime.getTime() >= target.getTime();
      
      if (isPastOrEqual && !hasTriggeredAtZero) {
        // If we were before the date just a second ago (roughly)
        // or if we just happened to land on it.
        // Actually, if we are past and haven't triggered yet, we should trigger
        // only if we haven't ALREADY triggered on mount.
        // But wait, if we are already past on mount, hasTriggeredAtZero starts false,
        // but it already triggered above.
        
        // Let's be simpler:
        if (new Date(currentTime.getTime() - 2000) < target) {
           triggerFireworks();
        }
        hasTriggeredAtZero = true;
      }
    }, 1000);
    return () => clearInterval(id);
  }, []); // Remove now dependency

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
            <img src="/images/photos/titulo_hero.png" alt="Celia &amp; Miguel" className="hero-title" loading="eager" fetchpriority="high" />
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

        {/* Fireworks Effect Overlay */}
        {activeEffect && (
          <div className="effect-container">
            {fireworks.map((fw) => (
              <div 
                key={fw.id} 
                className="firework-burst" 
                style={{ 
                  left: `${fw.left}%`, 
                  top: `${fw.top}%`,
                  animationDelay: `${fw.delay}s` 
                }}
              >
                {[...Array(25)].map((_, j) => {
                  const angle = (j / 25) * 2 * Math.PI;
                  const dist = 120 + Math.random() * 180;
                  const size = 3 + Math.random() * 6;
                  return (
                    <div 
                      key={j} 
                      className="firework-particle"
                      style={{
                        backgroundColor: fw.color,
                        width: `${size}px`,
                        height: `${size}px`,
                        '--dx': `${Math.cos(angle) * dist}px`,
                        '--dy': `${Math.sin(angle) * dist}px`,
                        animationDelay: `${fw.delay + Math.random() * 0.4}s`
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="reveal">
        <section id="intro" className="intro-section">
          <div className="container intro-grid">
              <div className="intro-text">
                <p className="intro-text-left">"Hace ya más de 8 años tuvimos la suerte de que nuestros caminos se cruzaran. Después de todo este tiempo, sentimos que ha llegado el momento de celebrarlo juntos."</p>
                <p className="intro-text-right">"Queremos que nuestro día sea especial e inolvidable y para ello os necesitamos, ya que sois parte fundamental de nuestras vidas."</p>
                <p className="intro-text-center-small">En esta página encontraréis toda la información necesaria; aun así, no dudéis en preguntarnos cualquier cosa que necesitéis.</p>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}
