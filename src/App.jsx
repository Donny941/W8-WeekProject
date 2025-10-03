import "./App.css";
import FilmGallery from "./components/FilmGallery";
import Footer from "./components/Footer";
import MainHead from "./components/MainHead";

import NetflixNav from "./components/NetflixNav";

function App() {
  return (
    <div className="bg-netflixbg min-vh-100">
      <NetflixNav />
      <MainHead />
      <FilmGallery galleryTitle="Trending Now" listFilms="spider man" />
      <FilmGallery galleryTitle="Watch It Again" listFilms="star wars" />
      <FilmGallery galleryTitle="New Releases" listFilms="nightmare" />
      <Footer />
    </div>
  );
}

export default App;
