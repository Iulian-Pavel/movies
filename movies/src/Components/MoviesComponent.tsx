import { Link } from "react-router-dom";
import { POSTER_PATH } from "../constants";
import styles from "../styles/MovieCard.module.scss";
import { Movie } from "../services/tmdb.type";

type Props = {
  movie: Movie;
};

function MoviesComponent({ movie }: Props) {
  const {
    id = 0,
    title = "Unknown",
    release_date = "Unreleased",
    poster_path = "",
    popularity = "",
  } = movie;

  return (
    <div className={styles.movie_card}>
      <div className={styles.movie_card_poster}>
        <img
          src={`${POSTER_PATH}${poster_path}`}
          width="100%"
          height="100%"
          alt="placeholder"
        />
      </div>
      <div className={styles.movie_card_details}>
        <button>
          <Link to={`/movies/${id}`}>{title}</Link>
        </button>
        <p>{release_date}</p>
        <p>{popularity}</p>
      </div>
    </div>
  );
}

export default MoviesComponent;
