import styles from "./LoadingSpinner.module.css";
export function LoadingSpinner() {
  return (
    <div className={styles["lds-ripple"]}>
      <div></div>
      <div></div>
    </div>
  );
}
