import styles from "./Header.module.css";

const Header = ({ children }) => {
  return <h2 className={styles.header}>{children}</h2>;
};
export default Header;
