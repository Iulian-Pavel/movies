import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import PopularMovies from "./pages/PopularMovies";
import NotFound from "./pages/NotFound";
import PersonDetails from "./pages/PersonDetails";
import PeoplePage from "./pages/PeoplePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/person/:personid" element={<PersonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
