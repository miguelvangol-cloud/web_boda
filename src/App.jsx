import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Timetable from "./components/Timetable";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Assist from "./components/Assist";
import PhotoStrip from "./components/PhotoStrip";
import Alojamiento from "./components/Alojamiento";
import ListaBoda from "./components/ListaBoda";

export default function App() {
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
    <div className="app-root">
      <Header />
      <main className="app-main">
        <Hero />
        <div className="reveal"><Location /></div>
        <div className="reveal"><Timetable /></div>
        <div className="reveal"><Assist /></div>
        <div className="reveal"><Alojamiento /></div>
        {/* <PhotoStrip /> */}
        <div className="reveal"><ListaBoda /></div>
      </main>
      <BackToTop />
      <div className="reveal">
        <Footer className="site-footer" />
      </div>
    </div>
  );
}
