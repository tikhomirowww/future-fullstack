import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "../../helpers/axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await $axios.get(`/products/${window.location.search}`);
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "products/addToFavorites",
  async (id: number) => {
    console.log(id);

    try {
      const response = await $axios.get(`products/${id}/toggle_favorites/`);
      console.log(response);
      alert("Adding successfully!");
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFavoriteProducts = createAsyncThunk(
  "favoriteProducts/getFavoriteProducts",
  async () => {
    try {
      const response = await $axios.get("/favorites");
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async () => {
    const { data } = await $axios.get("/category/list/");
    return data.results;
  }
);
