import styles from "./DetailCard.module.css";
import { monthNames } from "../../constants";

export function DetailCard({ data, selectedDate }) {
  if (!selectedDate) {
    return null;
  }

  const date = new Date(selectedDate?.valid_date);
  const day = date.getDate();
  const month = date.getMonth();
  const text = `${day} ${monthNames[month]}`;

  const weatherIcon = selectedDate?.weather?.icon;
  const weatherDescription = selectedDate?.weather?.description;

  return (
    <>
      <div className={styles["detail-card"]}>
        <div className={styles["card-info"]}>
          <h1 className={styles["detail-temp"]}>{selectedDate?.temp}°C</h1>

          <h3>{data?.city_name}</h3>
          <p>{text}</p>
        </div>
        <div className={styles["detail-icon"]}>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`}
            alt="Weather Icon"
          />
          <p className={styles["weather-description"]}>{weatherDescription}</p>
        </div>
      </div>
    </>
  );
}
