import { useEffect, useState } from "react";
import { fetchPopularMovies, Movie } from "../services/tmdb";

function PopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data);
        console.log(data);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> - {movie.release_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularMovies;
