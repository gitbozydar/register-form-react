import styles from "./Error.module.css";

const Error = ({ message }) => {
  return <>{message && <span className={styles.error}>{message}</span>}</>;
};
export default Error;
