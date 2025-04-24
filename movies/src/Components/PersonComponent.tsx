import { memo } from "react";
import { POSTER_PATH } from "../constants";
import { Link } from "react-router-dom";
import styles from "../styles/PersonComponent.module.scss";
import { Person } from "../services/tmdb.type.ts";

type Props = {
  person: Person;
};

function PersonComponent({ person }: Props) {
  const {
    id = 0,
    name = "Unknown",
    known_for_department = "N/A",
    profile_path = "",
    known_for = [],
  } = person;
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

export default memo(PersonComponent);
