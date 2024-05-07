import axios from "axios";

export const $axios = axios.create();

$axios.interceptors.request.use(async (config) => {
  config.baseURL = "http://34.173.115.25/api/v1";
  const tokens = JSON.parse(localStorage.getItem("tokens") as string);
  if (tokens) {
    config.headers.Authorization = `Bearer ${tokens.access}`;
  }
  return config;
});
