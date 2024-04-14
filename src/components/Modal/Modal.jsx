import styles from "./Modal.module.css";

const Modal = ({ data }) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    eduMethod,
    technologies,
    experience,
    imageURL,
  } = data;
  return (
    <>
      <h1>Success!</h1>
      <div className={styles.wrapper}>
        <div className={styles.userInfoWrapper}>
          <h2>Personal details:</h2>
          <ul>
            <li>First name: {firstName}</li>
            <li>Last name: {lastName}</li>
            <li>E-mail: {email}</li>
            <li>Phone number: {phoneNumber}</li>
          </ul>
        </div>
        {experience.length >= 1 && (
          <div className={styles.userInfoWrapper}>
            <h2>Experience:</h2>
            <ul>
              {experience.map(({ technology, level }) => {
                return (
                  <li>
                    Technology: {technology} / level: {level}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className={styles.userInfoWrapper}>
          <h2>Course specification:</h2>
          <p>Type: {eduMethod}</p>
          <p>Technologies: </p>
          <ul className={styles.technologies}>
            {technologies.map((technology, index) => {
              return <li key={index}>{technology}</li>;
            })}
          </ul>
        </div>
        <div className={styles.userInfoWrapper}>
          <h2>Curriculum Vitae:</h2>
          <img src={imageURL} alt="cv" />
        </div>
      </div>
    </>
  );
};

export default Modal;
