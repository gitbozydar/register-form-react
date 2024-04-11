import styles from "./RadioWrapper.module.css";

const RadioWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
export default RadioWrapper;
