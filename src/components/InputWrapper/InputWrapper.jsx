import styles from "./InputWrapper.module.css";

const InputWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
export default InputWrapper;
