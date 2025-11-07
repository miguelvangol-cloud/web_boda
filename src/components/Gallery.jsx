import { useState, useEffect, useRef } from "react";

const photos = [
  "/images/photo1.svg",
  "/images/photo2.svg",
  "/images/photo3.svg",
];

// Peek carousel: center slide prominent, neighbors partially visible behind, infinite loop
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const carouselRef = useRef(null);
  const autoplayDelay = 4500;

  // sizing
  const [containerW, setContainerW] = useState(0);
  // make peek larger on desktop so center slide is smaller and neighbors are more hidden
  const peek = containerW > 900 ? 140 : containerW > 600 ? 96 : 24; // px visible of neighboring slides
  const gap = 16; // px between slides

  useEffect(() => {
    function update() {
      const el = carouselRef.current;
      if (!el) return;
      setContainerW(el.clientWidth);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function startAutoplay() {
    stopAutoplay();
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % photos.length), autoplayDelay);
  }
  function stopAutoplay() {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
  }

  function goPrev() { stopAutoplay(); setIndex((i) => (i - 1 + photos.length) % photos.length); }
  function goNext() { stopAutoplay(); setIndex((i) => (i + 1) % photos.length); }

  // touch
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isTouching = useRef(false);
  function onTouchStart(e) { stopAutoplay(); isTouching.current = true; touchDeltaX.current = 0; touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX; }
  function onTouchMove(e) { if (!isTouching.current) return; const x = e.touches ? e.touches[0].clientX : e.clientX; touchDeltaX.current = x - touchStartX.current; }
  function onTouchEnd() { if (!isTouching.current) return; isTouching.current = false; const t=50; if (touchDeltaX.current>t) goPrev(); else if (touchDeltaX.current<-t) goNext(); else startAutoplay(); touchDeltaX.current=0; }

  // compute relative delta with wrap-around (shortest signed distance)
  const N = photos.length;
  function signedDelta(i) {
    let d = i - index;
    d = ((d % N) + N) % N; // 0..N-1
    if (d > N/2) d = d - N; // signed
    return d;
  }

  // sizing: center slide width = containerW - 2*peek
  const centerW = Math.max(220, containerW - peek * 2);
  // height based on 16:9 aspect ratio so the absolutely-positioned slides have a container height
  const centerH = Math.round((centerW * 9) / 16);
  const step = centerW * 0.78 + gap; // how much to move per delta (overlap)

  return (
    <section id="gallery" className="py-16 bg-white text-center">
      <div className="container">
        <h2 className="text-3xl mb-6 font-cursive text-gold">Galería</h2>

        <div
          className="carousel peek max-w-3xl mx-auto rounded-xl overflow-visible shadow-md"
          ref={carouselRef}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ position: "relative", height: `${centerH}px` }}
        >
          {photos.map((src, idx) => {
            const d = signedDelta(idx);
            const absd = Math.abs(d);
            // limit shown slides for performance
            const visible = absd <= 3;
            const left = (containerW - centerW) / 2 + d * step;
            const scale = d === 0 ? 1 : Math.max(0.82, 1 - 0.08 * absd);
            const z = 100 - absd;
            const opacity = absd > 2 ? 0 : 1 - absd * 0.15;
            return (
              <div
                key={idx}
                className={`carousel-peek-slide ${idx === index ? "is-active" : ""}`}
                style={{
                    position: "absolute",
                    top: "50%",
                    width: `${centerW}px`,
                    left: `${left}px`,
                    zIndex: z,
                    transform: `translateY(-50%) scale(${scale})`,
                    opacity: opacity,
                    pointerEvents: idx === index ? "auto" : "none",
                  }}
                  aria-hidden={idx === index ? false : true}
                onClick={() => setIndex(idx)}
              >
                <div className="ratio-16-9">
                  <div className="ratio-inner">
                    <img loading="lazy" src={src} alt={`Foto ${idx + 1}`} className="img-cover" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* side controls positioned over carousel (left/right) */}
          <button onClick={goPrev} aria-label="Anterior" className="carousel-prev">‹</button>

          <button onClick={goNext} aria-label="Siguiente" className="carousel-next">›</button>

        </div>

        {/* controls below carousel so they don't get hidden behind absolutely-positioned slides */}
        <div className="carousel-controls mt-4 flex items-center justify-center gap-4">
          <div className="carousel-indicators" role="tablist" aria-label="Indicadores de galería">
            {photos.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${idx === index ? "active" : ""}`}
                onClick={() => { stopAutoplay(); setIndex(idx); }}
                aria-current={idx === index}
                aria-label={`Ir a la foto ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
