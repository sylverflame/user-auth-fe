import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};
    const token = localStorage.getItem("token");
    if (
      config.url?.includes("/auth/login") ||
      config.url?.includes("/auth/register")
    ) {
      // No auth header for login
      config.headers["Content-Type"] = "application/json";
    } else {
      // General API headers
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
