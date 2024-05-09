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
