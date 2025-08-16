import axios from 'axios';
import { useCookies } from 'vue3-cookies';
import { baseURL } from '@/lib/utils/baseUrl';

const { cookies } = useCookies();

const httpClient = axios.create({
  baseURL: baseURL,
  headers: {
    'X-CLIENT-ID': +import.meta.env.VITE_APP_CLIENT_ID,
    'X-CLIENT-SECRET': import.meta.env.VITE_APP_NOT_SECRET_CODE,
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    throw error;
  },
);

httpClient.interceptors.response.use(
  (response) => {
    if (
      (response.config.method === 'post' ||
        response.config.method === 'patch' ||
        response.config.method === 'put' ||
        response.config.method === 'delete') &&
      (response.status === 200 || response.status === 201)
    ) {
      // show toast or something
    }
    if (response.data) return response.data;
    else return response;
  },
  (error) => {
    if (
      error?.response?.data?.message ||
      error?.response?.data?.result?.message ||
      error?.response?.data?.data?.message
    ) {
      // show toast or something
    }
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      cookies.remove('token');
      // route to login page
    }
    throw error;
  },
);

export default httpClient;
