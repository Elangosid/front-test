import axios from "axios";

const apiUrl = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add a request interceptor to attach the token to every request
apiUrl.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiUrl;
