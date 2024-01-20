import React, { useState } from "react";
import styles from "./sorter.module.css"
interface SorterProps {
  onSort: (sortBy: string) => void;
}

const Sorter: React.FC<SorterProps> = ({ onSort }) => {
  const [selectedSortBy, setSelectedSortBy] = useState<string>("");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedSortBy(selectedValue);
    onSort(selectedValue);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="sortDropdown">Sort by: </label>
      <select id="sortDropdown" value={selectedSortBy} onChange={handleSortChange}>
        <option value="" disabled>Sortby</option>
        <option value="date">Date</option>
        <option value="episode_id">Episode</option>
      </select>
    </div>
  );
};

export default Sorter;