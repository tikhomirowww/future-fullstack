import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../actions/users.actions";

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
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload!;
      });
  },
});

export const { setError, logout } = usersSlice.actions;
