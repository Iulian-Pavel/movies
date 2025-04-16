import Navbar from "./Components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import PopularMovies from "./pages/PopularMovies";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";
import PersonDetails from "./pages/PersonDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/person/:personid" element={<PersonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
