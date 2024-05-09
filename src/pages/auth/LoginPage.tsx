import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { loginUser, registerUser} from "../../store/actions/users.actions";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    dispatch(loginUser({ data: user, navigate }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login form</h2>
      {error && <h2 style={{ color: "red" }}>{error}!!!</h2>}
      {Object.keys(user).map((item) => (
        <input
          onChange={handleChange}
          name={item}
          key={item}
          type="text"
          placeholder={item}
        />
      ))}
      <Button>Sign in</Button>
    </form>
  );
};

export default LoginPage;
