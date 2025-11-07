import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Gallery from "./components/Gallery";
import RSVPForm from "./components/RSVPForm";
import Map from "./components/Map";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Countdown from "./components/Countdown";

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
  <Hero />
  <Countdown />
  <OurStory />
        <Gallery />
        <RSVPForm />
        <Map />
      </main>
      <BackToTop />
      <Footer className="site-footer" />
    </div>
  );
}
