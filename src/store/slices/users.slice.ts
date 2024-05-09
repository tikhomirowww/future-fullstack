import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../actions/users.actions";
import { ProfileType } from "../../types";

type StatesType = {
  error: null | string;
  loading: boolean;
  user: null | ProfileType;
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
    setError: (state, { payload }) => {
      state.error = payload;
    },
    logout: (state) => {
      localStorage.removeItem("tokens");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload!;
        state.loading = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      });
  },
});

export const { setError, logout } = usersSlice.actions;
