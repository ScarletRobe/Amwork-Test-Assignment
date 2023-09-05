import axios from "axios";

const REQUEST_TIME = 5000;

export const todoAPi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: REQUEST_TIME,
});
