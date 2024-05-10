import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "../../helpers/axios";
import { ReviewType, newProduct } from "../../types";

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

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async ({
    product,
    navigate,
  }: {
    product: newProduct;
    navigate: (path: string) => void;
  }) => {
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("image", product.image!);
    try {
      await $axios.post("/products/", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number, { dispatch }) => {
    await $axios.delete(`/products/${id}/`);
    dispatch(getProducts());
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

export const toggleLike = createAsyncThunk(
  "products/toggleLike",
  async (id: number, { dispatch }) => {
    await $axios.get(`/products/${id}/toggle_like/`);
    dispatch(getProducts());
  }
);

export const sendComment = createAsyncThunk(
  "products/sendComment",
  async (object: ReviewType, { dispatch }) => {
    await $axios.post("/reviews/", object);
    dispatch(getProducts());
  }
);
