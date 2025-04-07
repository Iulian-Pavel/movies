import { useEffect, useState } from "react";
import { fetchPopularMovies, Movie } from "../services/tmdb";
import styles from "../styles/MovieCard.module.scss";

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

  const POSTER_PATH = "https://image.tmdb.org/t/p/w500";

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie_card}>
            <div className={styles.movie_card_poster}>
              <img src={`${POSTER_PATH}${movie.poster_path}`} alt="placeholder" />
            </div>
            <div className="movie_card_details">
              <h1>{movie.title}</h1>
              <p>{movie.release_date}</p>
              <p>{movie.popularity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
