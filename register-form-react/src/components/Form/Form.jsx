import Header from "../Header/Header";
import InputWrapper from "../InputWrapper/InputWrapper";
import styles from "./Form.module.css";
import RadioWrapper from "../RadioWrapper/RadioWrapper";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form onSubmit={""}>
      <Header>Personal Details:</Header>
      <InputWrapper>
        <label htmlFor="firstName">First name:</label>
        <input type="text" name="firstName" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="lastName">Last name:</label>
        <input type="text" name="lastName" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="phoneNumber">Phone number:</label>
        <input type="text" name="phoneNumber" />
      </InputWrapper>
      <Header>Preferencje kursu</Header>
      <RadioWrapper>
        <p>Choose learning method:</p>
        <input type="radio" name="eduMethod" />
        <label htmlFor="eduMethod">Stationary</label>
        <input type="radio" name="eduMethod" />
        <label htmlFor="eduMethod">Remotly</label>
      </RadioWrapper>
      <select name="technologies" multiple size={5}>
        <option>HTML</option>
        <option>CSS</option>
        <option>JavaScript</option>
        <option>React.js</option>
        <option>Next.js</option>
      </select>
      <Header>Attach CV</Header>
      <input type="file" name="CV" />
      <Header>Programming experience:</Header>
      <div className={styles.experience}>
        <span>Do You have any?</span>
        <input type="checkbox" />
      </div>
      <Button>Send application</Button>
    </form>
  );
};
export default Form;
