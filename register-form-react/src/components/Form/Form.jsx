import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import InputWrapper from "../InputWrapper/InputWrapper";
import RadioWrapper from "../RadioWrapper/RadioWrapper";
import Button from "../Button/Button";
import ExpInfo from "../ExpInfo/ExpInfo";
import Error from "../Error/Error";

import styles from "./Form.module.css";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const Form = () => {
  const [file, setFile] = useState(null);
  const [experience, setExperience] = useState(false);
  const [formData, setFormData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const imageURL = file ? URL.createObjectURL(file) : "";

  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const schema = z.object({
    firstName: z.string().min(3, { message: "required" }),
    lastName: z.string().min(3, { message: "required" }),
    email: z
      .string()
      .min(1, { message: "required." })
      .email("not valid e-mail"),
    phoneNumber: z
      .string()
      .min(9, { message: "at least 9 digits" })
      .regex(phoneRegex, "Invalid number"),
    eduMethod: z.string(),
    technologies: z
      .array(z.string())
      .min(1, { message: "at least 1 technology must be selected" }),
    experience: experience
      ? z
          .array(
            z.object({
              technology: z.string(),
              level: z.string(),
            })
          )
          .min(1, { message: "add at least one experience" })
      : z.array(),
    imageURL: z.string().optional(),
  });

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const handleChange = () => {
    setExperience((prev) => !prev);
    remove();
  };

  const handleAddExpInfo = () => {
    append({ technology: "", level: "1" });
  };

  const onSubmit = (data) => {
    const formData = { ...data, imageURL };
    reset();
    setExperience(false);
    setFormData(formData);
    setShowModal(true);
    console.log(formData);
  };

  return (
    <>
      {!showModal ? (
        <>
          <h1>JOIN US !</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Header>Personal Details:</Header>
            <InputWrapper>
              <label htmlFor="firstName">
                First name: <Error message={errors.firstName?.message} />
              </label>
              <input
                {...register("firstName")}
                placeholder="First name"
                type="text"
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="lastName">
                Last name: <Error message={errors.lastName?.message} />
              </label>
              <input
                {...register("lastName")}
                placeholder="Last name"
                type="text"
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="email">
                Email: <Error message={errors.email?.message} />
              </label>
              <input {...register("email")} placeholder="E-mail" type="email" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="phoneNumber">
                Phone number: <Error message={errors.phoneNumber?.message} />
              </label>
              <input
                {...register("phoneNumber")}
                placeholder="Phone number"
                type="text"
              />
            </InputWrapper>
            <Header>Preferencje kursu</Header>
            <RadioWrapper>
              <p>Choose learning method:</p>
              <input
                {...register("eduMethod")}
                type="radio"
                value="stationary"
              />
              <label htmlFor="eduMethod">Stationary</label>
              <input
                required
                {...register("eduMethod")}
                type="radio"
                value="online"
              />
              <label htmlFor="eduMethod">Online</label>
            </RadioWrapper>
            <select required {...register("technologies")} multiple size={5}>
              <option>HTML</option>
              <option>CSS</option>
              <option>JavaScript</option>
              <option>React.js</option>
              <option>Next.js</option>
            </select>
            <Header>Attach CV</Header>
            <input
              accept="image/png, image/jpeg"
              required
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <Header>Programming experience:</Header>
            <div className={styles.experience}>
              <span>Do You have any?</span>
              <input type="checkbox" onChange={handleChange} />
            </div>
            {experience && (
              <>
                <Button
                  type="button"
                  onClick={handleAddExpInfo}
                  styleClass={"add-exp"}
                >
                  Add experience
                </Button>
                <Error message={errors.experience?.message} />
                <ul className={styles.expWrapper}>
                  {fields.map((item, index) => {
                    console.log(fields[index]);
                    return (
                      <ExpInfo
                        key={item.id}
                        remove={() => {
                          remove(index);
                        }}
                        register={register}
                        index={index}
                      >
                        Delete
                      </ExpInfo>
                    );
                  })}
                </ul>
              </>
            )}
            <Button type="submit">Send application</Button>
          </form>
        </>
      ) : (
        <Modal data={formData} />
      )}
    </>
  );
};
export default Form;
