import Navbar from "./Components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import PopularMovies from "./pages/PopularMovies";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
