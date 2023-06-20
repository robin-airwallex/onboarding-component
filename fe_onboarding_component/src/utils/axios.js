import axios from "axios";

export const axiosUtil = axios.create({
  baseURL: "https://api-demo.airwallex.com/api/",
});

export const axiosBackend = axios.create({
  baseURL: "http://localhost:4242",
});
