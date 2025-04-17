import img404 from "../assets/404.png";
import styles from "../styles/NotFound.module.scss";
import texts from "../texts.json";

function NotFound() {
  return (
    <>
      <div className={styles.notfound}>
        <img src={img404} alt="" width="100%"/>
        <p>
            {texts.notFoundPage.title}
            <br />
            {texts.notFoundPage.message}
            <br />
            {texts.notFoundPage.suggestion}
        </p>
      </div>
    </>
  );
}

export default NotFound;
