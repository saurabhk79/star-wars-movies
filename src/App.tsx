import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Infobox from "./components/Infobox";
import Listbox from "./components/Listbox";
import Searchbar from "./components/Searchbar";
import Sorter from "./components/Sorter";

import { Movie, SelectedMovie } from "./interfaces";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovie>({
    isSelected: false,
  });

  useEffect(() => {
    const getMoviesList = async () => {
      const res = await fetch("https://swapi.dev/api/films/?format=json");
      const data = await res.json();

      setMoviesList(data.results);
      setFilteredMoviesList(data.results);
    };

    getMoviesList();
  }, []);

  const handleSelectMovie = (id: number) => {
    const movie = moviesList.find((mov) => mov.episode_id === id);

    setSelectedMovie({ isSelected: true, movie: movie });
  };

  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <Searchbar />
        <Sorter />
      </div>

      <Listbox list={filteredMoviesList} handleSelectMovie={handleSelectMovie} />

      <Infobox selectedMovie={selectedMovie} />
    </div>
  );
};

export default App;
