import { useEffect, useState } from "react";
import { fetchPopularMovies, Movie } from "../services/tmdb";
import MoviesComponent from "../Components/MoviesComponent";
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
    <>
      <h1 className={styles.text_center_only}>Popular Movies Page</h1>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <MoviesComponent
            title={movie.title}
            release_date={movie.release_date}
            popularity={movie.popularity}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
}

export default PopularMovies;
