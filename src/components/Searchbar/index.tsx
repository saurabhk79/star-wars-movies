import styles from "./searchbar.module.css";

const Searchbar = () => {
  return (
    <>
      <input type="text" placeholder="Search a movie..." className={styles.searchbar} />
    </>
  );
};

export default Searchbar;
