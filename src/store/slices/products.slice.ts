import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";
import {
  addToFavorites,
  getProducts,
  getFavoriteProducts,
} from "../actions/products.actions";

type StatesType = {
  products: ProductType[];
  loading: boolean;
  currentPage: number;
  favoriteProducts: any;
};

const INIT_STATE: StatesType = {
  products: [],
  loading: false,
  currentPage: 1,
  favoriteProducts: [],
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
      })
      .addCase(getProducts.rejected, (state) => console.log(state))
      .addCase(addToFavorites.pending, (state) => console.log(state))
      .addCase(addToFavorites.fulfilled, (state) => console.log(state))
      .addCase(getFavoriteProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFavoriteProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.favoriteProducts = payload;
      })
      .addCase(getFavoriteProducts.rejected, (state) => console.log(state));
  },
});

export const { nextPage, prevPage } = productsSlice.actions;
