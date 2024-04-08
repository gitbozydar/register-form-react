import styles from "./App.module.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>JOIN US !</h1>
        <Form />
      </div>
    </>
  );
}

export default App;
