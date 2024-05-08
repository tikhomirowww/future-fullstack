import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginValues, RegisterValues } from "../../types";
import { $axios } from "../../helpers/axios";
import { setError } from "../slices/users.slice";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (
    {
      data,
      navigate,
    }: { data: RegisterValues; navigate: (path: string) => void },
    { dispatch }
  ) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirm", data.password_confirm);
    try {
      await $axios.post("/account/register/", formData);
      navigate("/login");
      dispatch(setError(null));
    } catch (error: any) {
      console.log(Object.values(error.response.data).flat(2)[0]);
      dispatch(setError(Object.values(error.response.data).flat(2)[0]));
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (
    { data, navigate }: { data: LoginValues; navigate: (path: string) => void },
    { dispatch }
  ) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    try {
      const { data } = await $axios.post("/account/login/", formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      navigate("/");
      dispatch(setError(null));
    } catch (error: any) {
      console.log(Object.values(error.response.data).flat(2)[0]);
      dispatch(setError(Object.values(error.response.data).flat(2)[0]));
    }
  }
);
