import styles from "./NotFound.module.css";

export function NotFound({ city }) {
  console.log(city);
  return (
    <>
      {city ? (
        <div className={styles["not-found"]}>
          <h1 className="not-found-header">City doesn't exist!</h1>
          <p className="not-found-paragraph">
            Type a valid city name to get weekly forecast data
          </p>
        </div>
      ) : (
        <>
          <div className="not-selected-container">
            <h1 className="not-selected-header">No city is selected!</h1>
            <p className="not-selected-paragraph">
              Type any city name to get weekly forecast data
            </p>
          </div>
        </>
      )}
    </>
  );
}
