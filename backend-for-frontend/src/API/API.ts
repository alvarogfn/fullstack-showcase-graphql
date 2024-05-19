import axios from "axios";

export const API = axios.create({
  baseURL: "http://backend:3000",
  responseType: "json",
});
