import styles from "./SearchBar.module.css";
import { SearchIcon } from "../icons/SearchIcon";

export function SearchBar({ setCity, searchTerm, setSearchTerm }) {
  return (
    <div className={styles["search-bar"]}>
      <div className={styles["input-container"]}>
        <form
          className={styles["input-container"]}
          onSubmit={(event) => {
            event.preventDefault();
            setCity(searchTerm);
          }}
        >
          <input
            type="text"
            placeholder="Search City"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              border: "none",
              backgroundColor: "transparent",
              position: "absolute",
              right: "25px",
            }}
          >
            <SearchIcon className={styles["search-icon"]} />
          </button>
        </form>
      </div>
    </div>
  );
}
