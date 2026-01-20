import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const wrapperRef = useRef(null);

  const triggerLoading = () => {
    setLoading(false);
    // Use a tiny timeout to reset the animation if it was already running
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000); // Duration matches CSS animation
    }, 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
  <header className="header-bar sticky top-0 text-center bg-ivory shadow-sm border-b border-gold z-[1000]">
      {/* Loading Bar */}
      <div className="loading-bar-container">
        <div className={`loading-bar ${loading ? 'active' : ''}`}></div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: 'rgba(183, 134, 70, 0.1)' }}>
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%`, height: '100%', background: 'var(--amarillo)', transition: 'width 0.1s ease-out' }}></div>
      </div>

  {/* Menu button top-left */}
  <div className="menu-wrapper absolute left-4 top-3" ref={wrapperRef}>
        <button
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((s) => !s)}
          className="menu-button"
        >
          <span className="sr-only">Abrir menú</span>
          <img src="/images/photos/logo_cm_icon.svg" alt="Menú" className="menu-button-logo" />
        </button>

        {open && (
          <nav id="main-menu" className="menu-panel" role="menu">
            <a className={`menu-item ${activeSection === "hero" ? "menu-item-active" : ""}`} href="#hero" onClick={() => { setOpen(false); triggerLoading(); }}>
              Inicio
            </a>
            <a className={`menu-item ${activeSection === "ubicacion" ? "menu-item-active" : ""}`} href="#ubicacion" onClick={() => { setOpen(false); triggerLoading(); }}>
              Ubicación
            </a>
            <a className={`menu-item ${activeSection === "horarios" ? "menu-item-active" : ""}`} href="#horarios" onClick={() => { setOpen(false); triggerLoading(); }}>
              Horarios
            </a>
            <a className={`menu-item ${activeSection === "asistencia" ? "menu-item-active" : ""}`} href="#asistencia" onClick={() => { setOpen(false); triggerLoading(); }}>
              Asistencia
            </a>
            <a className={`menu-item ${activeSection === "alojamiento" ? "menu-item-active" : ""}`} href="#alojamiento" onClick={() => { setOpen(false); triggerLoading(); }}>
              Alojamiento
            </a>
            <a className={`menu-item ${activeSection === "lista-boda" ? "menu-item-active" : ""}`} href="#lista-boda" onClick={() => { setOpen(false); triggerLoading(); }}>
              Lista de Boda
            </a>
          </nav>
        )}
      </div>

      <div className="container header-inner">
        <a href="#hero" className="header-logo" aria-label="Ir al inicio" onClick={triggerLoading}>
          <img src="/images/photos/logo_cm_icon.svg" alt="Logo Celia y Miguel" />
        </a>
        {/* Desktop horizontal navigation (visible on wide screens) */}
        <nav className="desktop-nav" aria-label="Menú principal">
          <a href="#hero" onClick={triggerLoading}>Inicio</a>
          <a href="#ubicacion" onClick={triggerLoading}>Ubicación</a>
          <a href="#horarios" onClick={triggerLoading}>Horarios</a>
          <a href="#asistencia" onClick={triggerLoading}>Asistencia</a>
          <a href="#alojamiento" onClick={triggerLoading}>Alojamiento</a>
          <a href="#lista-boda" onClick={triggerLoading}>Lista de Boda</a>
        </nav>
      </div>

    </header>
  );
}
