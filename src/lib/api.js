import axios from "axios";

const BACKEND_URL = "https://himaanix-backend.vercel.app";
export const API_BASE = `${BACKEND_URL}/api`;

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// Attach bearer token if we have one in localStorage as a fallback
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("hx_token");
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
