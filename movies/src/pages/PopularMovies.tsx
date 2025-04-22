import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMoviesThunk } from "../store/movieSlice";
import { AppDispatch } from "../store";
import MoviesComponent from "../Components/MoviesComponent";
import styles from "../styles/MovieCard.module.scss";
import SearchBar, { SearchTypes } from "../Components/SearchBar";
import { selectMoviesLoading, selectPopularMovies } from "../selectors/movieSelectors";

function PopularMovies() {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(selectPopularMovies);
  const loading = useSelector(selectMoviesLoading);

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
