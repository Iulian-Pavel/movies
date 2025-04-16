import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tmdb } from "../services/tmdb";
import { API_KEY, POSTER_PATH } from "../constants";
import styles from "../styles/PersonDetails.module.scss";

interface PeopleDetailsData {
  name: string;
  birthday: string;
  biography: string;
  place_of_birth: string;
  profile_path: string;
  popularity: number;
  known_for_department: string;
}

function PersonDetails() {
  const { personid } = useParams<{ personid: string }>();
  const [person, setPerson] = useState<PeopleDetailsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await tmdb.get<PeopleDetailsData>(
          `person/${personid}?api_key=${API_KEY}`
        );
        console.log(response.data);
        setPerson(response.data);
      } catch (error) {
        console.log("Error while getting person data");
      } finally {
        setLoading(false);
      }
    };
    fetchPerson();
  }, [personid]);

  if (loading) return <p>Loading...</p>;
  if (!person) return <p>Failed to load the details about the person</p>;

  return (
    <>
      <div className={styles.person_details}>
        <img src={`${POSTER_PATH}${person.profile_path}`} alt="" />
        <div className={styles.person_information}>
          <h1>{person.name}</h1>
          <p>{person.known_for_department}</p>
          <p>{person.birthday}</p>
          <p>{person.place_of_birth}</p>
          <p>{person.biography}</p>
        </div>
      </div>
    </>
  );
}

export default PersonDetails;
