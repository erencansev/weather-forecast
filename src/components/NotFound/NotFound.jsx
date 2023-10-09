import styles from "./NotFound.module.css";

export function NotFound({ city }) {
  return (
    <>
      {city ? (
        <div className={styles["not-found"]}>
          <h1 className={styles["not-found-header"]}>City doesn't exist!</h1>
          <p className={styles["not-found-paragraph"]}>
            Type a valid city name to get weekly forecast data
          </p>
        </div>
      ) : (
        <>
          <div className={styles["not-selected"]}>
            <h1 className={styles["not-selected-header"]}>
              No city is selected!
            </h1>
            <p className={styles["not-selected-paragraph"]}>
              Type any city name to get weekly forecast data
            </p>
          </div>
        </>
      )}
    </>
  );
}
