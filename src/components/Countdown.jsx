import { useEffect, useState } from "react";

// Countdown to 19 September 2026 (local time)
export default function Countdown() {
  const target = new Date("2026-09-19T00:00:00");
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

  const finished = diff <= 0;

  return (
    <section id="countdown" className="py-8 bg-ivory text-center">
      <div className="container">
        <h3 className="text-2xl mb-3 font-cursive text-gold">Faltan</h3>

        {!finished ? (
          <div className="countdown-grid" aria-live="polite">
            <div className="countdown-unit">
              <div className="countdown-value">{String(days).padStart(2, "0")}</div>
              <div className="countdown-label">Días</div>
            </div>
            <div className="countdown-unit">
              <div className="countdown-value">{String(hours).padStart(2, "0")}</div>
              <div className="countdown-label">Horas</div>
            </div>
            <div className="countdown-unit">
              <div className="countdown-value">{String(minutes).padStart(2, "0")}</div>
              <div className="countdown-label">Min</div>
            </div>
            <div className="countdown-unit">
              <div className="countdown-value">{String(secs).padStart(2, "0")}</div>
              <div className="countdown-label">Seg</div>
            </div>
          </div>
        ) : (
          <div className="text-xl font-cursive text-gold">¡Es el día! 🎉</div>
        )}
      </div>
    </section>
  );
}
