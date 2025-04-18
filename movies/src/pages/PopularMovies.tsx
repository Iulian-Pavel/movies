import { useEffect, useState } from "react";
import { fetchPopularMovies, Movie } from "../services/tmdb";
import MoviesComponent from "../Components/MoviesComponent";
import styles from "../styles/MovieCard.module.scss";
import SearchBar, { SearchTypes } from "../Components/SearchBar";

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
      <SearchBar searchType={SearchTypes.Movie} />
      <h1 className={styles.text_center}>Popular Now</h1>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <MoviesComponent
            key={movie.id}
            id={movie.id}
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
