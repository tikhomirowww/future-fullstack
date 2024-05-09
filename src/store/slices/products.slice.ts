import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";
import { getProducts } from "../actions/products.actions";

type StatesType = {
  products: ProductType[];
  loading: boolean;
  currentPage: number;
};

const INIT_STATE: StatesType = {
  products: [],
  loading: false,
  currentPage: 1,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INIT_STATE,
  reducers: {
    prevPage: (state) => {
      state.currentPage--;
    },
    nextPage: (state) => {
      state.currentPage++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.loading = false;
      });
  },
});

export const { nextPage, prevPage } = productsSlice.actions;
