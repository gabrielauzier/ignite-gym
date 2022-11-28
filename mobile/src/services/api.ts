import axios from "axios";
import { AppError } from "@helpers/AppError";

const api = axios.create({
  baseURL: "http://192.168.15.3:3333",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(new AppError(error));
    }
  }
);

export { api };
