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
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <Hero />
        <Location />
        <Timetable />
        <Assist />
        <Alojamiento />
        {/* <PhotoStrip /> */}
        <ListaBoda />
      </main>
      <BackToTop />
      <Footer className="site-footer" />
    </div>
  );
}
