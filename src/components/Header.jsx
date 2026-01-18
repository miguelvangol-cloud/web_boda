import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const wrapperRef = useRef(null);

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
  <header className="header-bar relative text-center bg-ivory shadow-sm border-b border-gold">
      {/* decorative ornament at top-left */}

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
            <a className={`menu-item ${activeSection === "hero" ? "menu-item-active" : ""}`} href="#hero" onClick={() => setOpen(false)}>
              Inicio
            </a>
            <a className={`menu-item ${activeSection === "ubicacion" ? "menu-item-active" : ""}`} href="#ubicacion" onClick={() => setOpen(false)}>
              Ubicación
            </a>
            <a className={`menu-item ${activeSection === "horarios" ? "menu-item-active" : ""}`} href="#horarios" onClick={() => setOpen(false)}>
              Horarios
            </a>
            <a className={`menu-item ${activeSection === "asistencia" ? "menu-item-active" : ""}`} href="#asistencia" onClick={() => setOpen(false)}>
              Asistencia
            </a>
            <a className={`menu-item ${activeSection === "alojamiento" ? "menu-item-active" : ""}`} href="#alojamiento" onClick={() => setOpen(false)}>
              Alojamiento
            </a>
            <a className={`menu-item ${activeSection === "lista-boda" ? "menu-item-active" : ""}`} href="#lista-boda" onClick={() => setOpen(false)}>
              Lista de Boda
            </a>
          </nav>
        )}
      </div>

      <div className="container header-inner">
        <a href="#hero" className="header-logo" aria-label="Ir al inicio">
          <img src="/images/photos/logo_cm_icon.svg" alt="Logo Celia y Miguel" />
        </a>
        {/* Desktop horizontal navigation (visible on wide screens) */}
        <nav className="desktop-nav" aria-label="Menú principal">
          <a href="#hero">Inicio</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#horarios">Horarios</a>
          <a href="#asistencia">Asistencia</a>
          <a href="#alojamiento">Alojamiento</a>
          <a href="#lista-boda">Lista de Boda</a>
        </nav>
      </div>
    </header>
  );
}
