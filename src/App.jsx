import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Timetable from "./components/Timetable";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Assist from "./components/Assist";
import Alojamiento from "./components/Alojamiento";
import ListaBoda from "./components/ListaBoda";
import ConfirmarAsistencia from "./components/ConfirmarAsistencia";

// ScrollToTop utility to reset scroll or jump to hash when route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small delay to allow page content to render before scrolling to anchor
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);
  
  return null;
}

function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <div className="reveal"><Location /></div>
      <div className="reveal"><Timetable /></div>
      <div className="reveal"><Assist /></div>
      <div className="reveal"><Alojamiento /></div>
      <div className="reveal"><ListaBoda /></div>
    </>
  );
}



export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-root">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/confirmar-asistencia" element={<ConfirmarAsistencia />} />
          </Routes>
        </main>
        <BackToTop />
        <div>
          <Footer />
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}
