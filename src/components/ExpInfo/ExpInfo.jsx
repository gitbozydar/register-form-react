import { useState } from "react";
import Button from "../Button/Button";
import styles from "./ExpInfo.module.css";

const ExpInfo = ({ children, register, remove, index }) => {
  const [showFeature, setShowFeature] = useState(true);

  const handleShowFeature = () => {
    setShowFeature(false);
  };

  return (
    <>
      {showFeature && (
        <li className={styles.wrapper}>
          <select
            required
            {...register(`experience.${index}.technology`)}
            className={styles.technologies}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C/C++/C#">C/C++/C#</option>
            <option value="other">Other</option>
          </select>
          <select required {...register(`experience.${index}.level`)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <Button
            onClick={() => {
              handleShowFeature();
              remove();
            }}
          >
            {children}
          </Button>
        </li>
      )}
    </>
  );
};
export default ExpInfo;
