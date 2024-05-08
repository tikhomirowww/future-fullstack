import { createSlice } from "@reduxjs/toolkit";

type StatesType = {
  error: null | string;
  loading: boolean;
  user: null | any;
};

const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  user: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: () => {
      localStorage.removeItem("tokens");
    },
  },
});

export const { setError, logout } = usersSlice.actions;
