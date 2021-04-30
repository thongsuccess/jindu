import axios from "axios";
import { getToken } from "@/utils/token.js";

axios.defaults.baseURL = "http://139.196.42.209:5004/api/";
// axios.defaults.baseURL = process.env.VUE_APP_URL
// axios.defaults.baseURL = process.prod.VUE_APP_URL

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.headers["token"] = getToken();
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios;
