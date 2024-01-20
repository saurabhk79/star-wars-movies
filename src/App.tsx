import styles from "./app.module.css";
import Infobox from "./components/Infobox";
import Listbox from "./components/Listbox";
import Searchbar from "./components/Searchbar";
import Sorter from "./components/Sorter";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <Searchbar />
        <Sorter />
      </div>

      <Listbox />

      <Infobox />
    </div>
  );
};

export default App;
