import React from "react";
import styles from "./listbox.module.css";
import { Movie } from "../../interfaces";

interface ListboxProps {
  list: Movie[];
  handleSelectMovie: (id: number) => void;
}

const Listbox: React.FC<ListboxProps> = ({ list, handleSelectMovie }) => {
  return (
    <div className={styles.container}>
      <h3>Movies</h3>
      <hr />

      <div>
        {list.map((movie) => (
          <div
            onClick={() => handleSelectMovie(movie.episode_id)}
            key={movie.episode_id}
          >
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieCard: React.FC<Movie> = (movie) => {
  return (
    <div className={styles.moviecard}>
      <div>
        <span className={styles.episode}>EPISODE {movie.episode_id}</span>
        <span>
          Episode {movie.episode_id} - {movie.title}
        </span>
      </div>

      <div className={styles.date}>{movie.release_date}</div>
    </div>
  );
};

export default Listbox;
