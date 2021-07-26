import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/",
  headers: {
    Accept: "application/json",
    'x-api-key' : 'pk_test-0d61389b4644e9eed0b97ae2bb4068ebc7771221'
  }
});
apiClient.interceptors.request.use(config => {
  return config;
});

apiClient.interceptors.response.use(response => {
  return response.data;
});
