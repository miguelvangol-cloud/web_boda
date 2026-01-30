import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const wrapperRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const triggerLoading = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }, 10);
  };

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

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
    if (!isHome) {
      setActiveSection("");
      setScrollProgress(0);
      return;
    }

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
  }, [isHome]);

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "ubicacion", label: "Ubicación" },
    { id: "horarios", label: "Horarios" },
    { id: "asistencia", label: "Asistencia" },
    { id: "alojamiento", label: "Alojamiento" },
    { id: "lista-boda", label: "Lista de Boda" }
  ];

  const getLinkProps = (id) => {
    if (isHome) {
      return { href: `#${id}`, onClick: () => { setOpen(false); triggerLoading(); } };
    }
    return { to: `/#${id}`, onClick: () => { setOpen(false); triggerLoading(); } };
  };

  return (
    <header className="header-bar sticky top-0 text-center bg-ivory shadow-sm border-b border-gold z-[1000]">
      {/* Loading Bar */}
      <div className="loading-bar-container">
        <div className={`loading-bar ${loading ? 'active' : ''}`}></div>
      </div>

      {/* Scroll Progress Indicator */}
      {isHome && (
        <div className="scroll-progress-container" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: 'rgba(183, 134, 70, 0.1)' }}>
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%`, height: '100%', background: 'var(--amarillo)', transition: 'width 0.1s ease-out' }}></div>
        </div>
      )}

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
            {navItems.map(item => {
              const props = getLinkProps(item.id);
              if (props.to) {
                return (
                  <Link key={item.id} className={`menu-item ${activeSection === item.id ? "menu-item-active" : ""}`} to={props.to} onClick={props.onClick}>
                    {item.label}
                  </Link>
                );
              }
              return (
                <a key={item.id} className={`menu-item ${activeSection === item.id ? "menu-item-active" : ""}`} href={props.href} onClick={props.onClick}>
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      <div className="container header-inner">
        <Link viewTransition to="/" className="header-logo" aria-label="Ir al inicio" onClick={triggerLoading}>
          <img src="/images/photos/logo_cm_icon.svg" alt="Logo Celia y Miguel" />
        </Link>
        {/* Desktop horizontal navigation */}
        <nav className="desktop-nav" aria-label="Menú principal">
          {navItems.map(item => {
            const props = getLinkProps(item.id);
            if (props.to) {
              return (
                <Link key={item.id} to={props.to} onClick={props.onClick}>
                  {item.label}
                </Link>
              );
            }
            return (
              <a key={item.id} href={props.href} onClick={props.onClick}>
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
