import { POSTER_PATH } from "../constants";
import styles from "../styles/MovieCard.module.scss";

interface Props {
  title: string,
  release_date: string,
  poster_path: string,
  popularity: number
}

function PopularMoviesComponent({
  title,
  release_date,
  poster_path,
  popularity,
}: Props) {

  return (
    <div>
      <div className={styles.movies}>
          <div className={styles.movie_card}>
            <div className={styles.movie_card_poster}>
              <img
                src={`${POSTER_PATH}${poster_path}`}
                alt="placeholder"
              />
            </div>
            <div className="movie_card_details">
              <h1>{title}</h1>
              <p>{release_date}</p>
              <p>{popularity}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default PopularMoviesComponent;
