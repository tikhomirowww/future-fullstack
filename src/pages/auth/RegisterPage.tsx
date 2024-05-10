import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { registerUser } from "../../store/actions/users.actions";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input";

import { RegisterValues } from "../../types";
import styles from "./regLog.module.css";


const RegisterPage = () => {
  const [user, setUser] = useState<RegisterValues>({
    email: "",
    password: "",
    password_confirm: "",
  });

  const { error } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!user.email || !user.password || !user.password_confirm) {
      alert("Please fill in all fields!");
      return;
    }

    //  for (let key in user) {
    //    if (!user[key]) {
    //      alert("Please fill in all fields!");
    //      return;
    //    }
    //  }

    if (user.password.length <= 6) {
      alert("Min length of password is 6 symbols");
      return;
    }

    if (user.password !== user.password_confirm) {
      alert("Passowrds do not match!");
      return;
    }

    dispatch(registerUser({ data: user, navigate }));
  }


  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit}  className={styles.form}>
      <h2>Register form</h2>
      {error && <h2 style={{ color: "red" }}>{error}!!!</h2>}
      {Object.keys(user).map((item) => (
        <Input
          onChange={handleChange}
          name={item}
          key={item}
          type="text"
          placeholder={item}
        />
      ))}
     <button className={styles.button}>Sign up</button>
    </form>


    </div>
  );
};

export default RegisterPage;
