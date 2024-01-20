import styles from "./infobox.module.css";

const Infobox = () => {
  return (
    <div className={styles.container}>
      {false ? null : <div className={styles.nomovie}>No movie selected!</div>}
    </div>
  );
};

export default Infobox;
