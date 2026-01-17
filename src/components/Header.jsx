import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#b78646" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {open && (
          <nav id="main-menu" className="menu-panel" role="menu">
            <a className="menu-item" href="#hero" onClick={() => setOpen(false)}>
              Inicio
            </a>
            <a className="menu-item" href="#ubicacion" onClick={() => setOpen(false)}>
              Ubicación
            </a>
            <a className="menu-item" href="#horarios" onClick={() => setOpen(false)}>
              Horarios
            </a>
            <a className="menu-item" href="#asistencia" onClick={() => setOpen(false)}>
              Asistencia
            </a>
            <a className="menu-item" href="#alojamiento" onClick={() => setOpen(false)}>
              Alojamiento
            </a>
            <a className="menu-item" href="#lista-boda" onClick={() => setOpen(false)}>
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
