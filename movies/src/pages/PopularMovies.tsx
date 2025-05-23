import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMoviesThunk } from "../store/movieSlice";
import { AppDispatch } from "../store";
import MoviesComponent from "../Components/MoviesComponent";
import styles from "../styles/MovieCard.module.scss";
import SearchBar from "../Components/SearchBar/SearchBar";
import { SearchTypes } from "../types/SearchBar.type";
import {
  selectMoviesLoading,
  selectPopularMovies,
  selectMoviesError,
} from "../selectors/movieSelectors";

function PopularMovies() {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(selectPopularMovies);
  const loading = useSelector(selectMoviesLoading);
  const error = useSelector(selectMoviesError);

  useEffect(() => {
    dispatch(fetchPopularMoviesThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;


  return (
    <>
      <SearchBar searchType={SearchTypes.Movie} />
      <h1 className={styles.text_center}>Popular Now</h1>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <MoviesComponent key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default PopularMovies;
