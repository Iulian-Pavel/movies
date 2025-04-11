import { Link } from "react-router-dom";
import { POSTER_PATH } from "../constants";
import styles from "../styles/MovieCard.module.scss";

interface Props {
  id: number,
  title: string;
  release_date: string;
  poster_path: string;
  popularity: number;
}

function MoviesComponent({
  id,
  title,
  release_date,
  poster_path,
  popularity,
}: Props) {
  return (
        <div className={styles.movie_card}>
          <div className={styles.movie_card_poster}>
            <img src={`${POSTER_PATH}${poster_path}`} width={"100%"} height={"100%"} alt="placeholder" />
          </div>
          <div className={styles.movie_card_details}>
            <button><Link to={`/movies/${id}`}>{title}</Link></button>
            <p>{release_date}</p>
            <p>{popularity}</p>
          </div>
        </div>
  );
}

export default MoviesComponent;
