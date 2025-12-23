import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
export const $axios = axios.create({
  baseURL,
});

$axios.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers["X-Requested-With"] = "XMLHttpRequest";
    }
    return config;
  },
  (error) => {
    const err = error.response?.data || { message: error.message };
    return Promise.reject(err);
  }
);
$axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response?.data || error)
);

export default $axios;