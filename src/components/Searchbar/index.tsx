import styles from "./searchbar.module.css";

interface SearchbarProps {
  handleSearchMovie: (text: string) => void;
}
const Searchbar: React.FC<SearchbarProps> = ({ handleSearchMovie }) => {
  const handleChange = (val: string) => {
    handleSearchMovie(val);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search a movie..."
        className={styles.searchbar}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

export default Searchbar;
