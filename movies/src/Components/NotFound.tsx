import img404 from "../assets/404.png";
import styles from "../styles/NotFound.module.scss";

function NotFound() {
  return (
    <>
      <div className={styles.notfound}>
        <img src={img404} alt="" width="100%"/>
        <p>
            Oops, looks like the movie youre searching for
            <br />
            Is no longer in cinemas
        </p>
      </div>
    </>
  );
}

export default NotFound;
