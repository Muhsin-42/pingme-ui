import axios from "axios";

const axiosWithToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
});

axiosWithToken.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("user_token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosWithToken.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (error.response?.request?.responseURL?.endsWith("check-token")) {
        return;
      }
      if (typeof window !== "undefined") {
        localStorage.removeItem("user_token");
        localStorage.removeItem("case-storage");
        localStorage.removeItem("access-token");
        localStorage.removeItem("auth-storage");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosWithToken;
