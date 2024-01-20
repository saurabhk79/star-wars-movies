import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

import styles from "./app.module.css";
import Infobox from "./components/Infobox";
import Listbox from "./components/Listbox";
import Searchbar from "./components/Searchbar";
import Sorter from "./components/Sorter";

import { Movie, SelectedMovie } from "./interfaces";

const App = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovie>({
    isSelected: false,
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const getMoviesList = async () => {
      const res = await fetch("https://swapi.dev/api/films/?format=json");
      const data = await res.json();

      setMoviesList(data.results);
      setFilteredMoviesList(data.results);
    };

    getMoviesList();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSelectMovie = (id: number) => {
    const movie = moviesList.find((mov) => mov.episode_id === id);

    setSelectedMovie({ isSelected: true, movie: movie });
  };

  const handleSearchMovie = (text: string) => {
    if (!text.length) {
      setFilteredMoviesList(moviesList);
    }
    const filteredMovies = moviesList.filter((mov) =>
      mov.title.toLowerCase().includes(text)
    );

    setFilteredMoviesList(filteredMovies);
  };

  const handleSort = (sortBy: string) => {
    const sortedList: Movie[] = [...filteredMoviesList];

    if (sortBy === "date") {
      sortedList.sort(
        (a, b) =>
          new Date(a.release_date).getTime() -
          new Date(b.release_date).getTime()
      );
    } else if (sortBy === "episode_id") {
      sortedList.sort((a, b) => a.episode_id - b.episode_id);
    }

    setFilteredMoviesList(sortedList);
  };

  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <ClimbingBoxLoader />
        </div>
      ) : (
        <div className={styles.app}>
          <div className={styles.topbar}>
            <Searchbar handleSearchMovie={handleSearchMovie} />
            <Sorter onSort={handleSort} />
          </div>

          <Listbox
            list={filteredMoviesList}
            handleSelectMovie={handleSelectMovie}
          />

          <Infobox selectedMovie={selectedMovie} />
        </div>
      )}
    </>
  );
};

export default App;
