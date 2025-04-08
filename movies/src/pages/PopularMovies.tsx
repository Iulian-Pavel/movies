import { useEffect, useState } from "react";
import { fetchPopularMovies, Movie } from "../services/tmdb";
import PopularMoviesComponent from "../Components/PopularMoviesComponent";

function PopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Popular Movies Page</h1>
      {movies.map((movie) => (
        <PopularMoviesComponent
          title={movie.title}
          release_date={movie.release_date}
          popularity={movie.popularity}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}

export default PopularMovies;
