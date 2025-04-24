import { useEffect } from "react";
import {
  selectPeople,
  selectPeopleLoading,
  selectPeopleError,
} from "../selectors/peopleSelectors";
import { fetchPeopleThunk } from "../store/personSlice";
import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import PersonComponent from "../Components/PersonComponent";
import styles from "../styles/PersonComponent.module.scss";

function PeoplePage() {
  const dispatch = useDispatch<AppDispatch>();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectPeopleLoading);
  const error = useSelector(selectPeopleError);

  useEffect(() => {
    dispatch(fetchPeopleThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (!people) return <p>{error}</p>;
  return (
    <>
      <div className={styles.person_container}>
        {people.map((person) => (
          <PersonComponent key={person.id} person={person} />
        ))}
      </div>
    </>
  );
}

export default PeoplePage;
