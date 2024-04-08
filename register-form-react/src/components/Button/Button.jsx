import styles from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={styles.primary}>{children}</button>;
};
export default Button;
