import React from "react";
import { SelectedMovie } from "../../interfaces";
import styles from "./infobox.module.css";

interface InfoboxProps {
  selectedMovie: SelectedMovie;
}

const Infobox: React.FC<InfoboxProps> = ({ selectedMovie }) => {
  return (
    <div className={styles.container}>
      {selectedMovie.isSelected ? (
        <div className={styles.infoData}>
          <h1>
            Episode {selectedMovie.movie?.episode_id} -
            {selectedMovie.movie?.title}
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html: selectedMovie.movie?.opening_crawl || "",
            }}
          ></div>

          <p>Directed by:- {selectedMovie.movie?.director}</p>
        </div>
      ) : (
        <div className={styles.nomovie}>No movie selected!</div>
      )}
    </div>
  );
};

export default Infobox;
