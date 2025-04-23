import { POSTER_PATH } from "../constants";
import { Link } from "react-router-dom";
import styles from "../styles/PersonComponent.module.scss";
import { Person } from "../services/tmdb";

function PersonComponent({
  id,
  name,
  known_for_department,
  profile_path,
  known_for,
}: Person) {
  return (
    <div className={styles.person_info}>
      <img
        src={`${POSTER_PATH}${profile_path}`}
        alt="actor photo"
        width="15%"
      />
      <Link to={`/person/${id}`}>{name}</Link>
      <p>{known_for_department}</p>
      {known_for.map((media) => (
        <p>{media.title}</p>
      ))}
    </div>
  );
}

export default PersonComponent;
