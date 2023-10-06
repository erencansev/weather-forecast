import styles from "./DetailCard.module.css";
import { monthNames } from "../../constants";

export function DetailCard({ data, selectedDate }) {
  const date = new Date(selectedDate?.valid_date);
  const day = date.getDate();
  const month = date.getMonth();
  const text = `${day} ${monthNames[month]}`;

  return (
    <>
      <div className={styles["detail-card"]}>
        <h1 className="detail-temp">{selectedDate?.max_temp}°C</h1>

        <h3>{data?.city_name}</h3>
        <p>{text}</p>
        <div className="weather-icon">{selectedDate?.weather?.description}</div>
      </div>
    </>
  );
}
