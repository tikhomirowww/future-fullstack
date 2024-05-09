import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { registerUser } from "../../store/actions/users.actions";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

const RegisterPage = () => {
  const [user, setUser] = useState({
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
    dispatch(registerUser({ data: user, navigate }));
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Sign up</button>
    </form>
  );
};

export default RegisterPage;
