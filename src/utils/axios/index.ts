import axios from "axios";
const token = sessionStorage.getItem("token");

export const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

export const instanceAuth = axios.create({
  // baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: `Bearer ${token}`,
  },
});

export const coinGeckoApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-uhBk1J5xCfTEee8SkwWdw1BJ",
  },
});
