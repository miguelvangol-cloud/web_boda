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
            <a className="menu-item" href="#our-story" onClick={() => setOpen(false)}>
              Nuestra historia
            </a>
            <a className="menu-item" href="#gallery" onClick={() => setOpen(false)}>
              Galería
            </a>
            <a className="menu-item" href="#rsvp" onClick={() => setOpen(false)}>
              RSVP
            </a>
            <a className="menu-item" href="#map" onClick={() => setOpen(false)}>
              Ubicación
            </a>
          </nav>
        )}
      </div>

      <div className="container header-inner">
        {/* Header left intentionally compact: title moved to hero */}
        <div style={{height: '1px'}} aria-hidden></div>
        {/* Desktop horizontal navigation (visible on wide screens) */}
        <nav className="desktop-nav" aria-label="Menú principal">
          <a href="#hero">Inicio</a>
          <a href="#our-story">Nuestra historia</a>
          <a href="#gallery">Galería</a>
          <a href="#rsvp">RSVP</a>
          <a href="#map">Ubicación</a>
        </nav>
      </div>
    </header>
  );
}
