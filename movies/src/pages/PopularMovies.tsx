import { useEffect, useState } from "react";
import { useDispatch, UseSelector, useSelector } from "react-redux";
import { fetchPopularMoviesThunk } from "../store/movieSlice";
import { RootState, AppDispatch } from "../store"
import { fetchPopularMovies, Movie } from "../services/tmdb";
import MoviesComponent from "../Components/MoviesComponent";
import styles from "../styles/MovieCard.module.scss";
import SearchBar, { SearchTypes } from "../Components/SearchBar";

function PopularMovies() {
  // const [movies, setMovies] = useState<Movie[]>([]);
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.movies.popular);
  const loading = useSelector((state: RootState) => state.movies.loading);

  useEffect(() => {
    dispatch(fetchPopularMoviesThunk());
  }, [dispatch]);

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
