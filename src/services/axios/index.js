import axios from 'axios';
import { useCookies } from 'vue3-cookies';
import { baseURL } from '@/lib/utils/baseUrl';
import { savedToken } from '@/lib/drive/googleAuth.js';

const { cookies } = useCookies();

// ---- Errors -----------------------------------------------------------------------------

/** The Google access token is missing or expired: the user has to reconnect. */
export class GoogleAuthError extends Error {}

/** A Google API error, with the HTTP status kept for callers (404 checks etc.). */
export class GoogleApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

// ---- Backend API ------------------------------------------------------------------------

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

// ---- Google APIs (Drive + account info) -------------------------------------------------

const GOOGLE_API = 'https://www.googleapis.com/';

export const httpGoogle = axios.create({
  baseURL: GOOGLE_API,
});

httpGoogle.interceptors.request.use(
  (config) => {
    const token = savedToken();
    if (token?.accessToken) {
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
    return config;
  },
  (error) => {
    throw error;
  },
);

httpGoogle.interceptors.response.use(
  (response) => (response.status === 204 ? null : response.data),
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      throw new GoogleAuthError('Google sign-in expired.');
    }
    const message =
      error?.response?.data?.error?.message ||
      (status ? `Google API error ${status}` : error?.message) ||
      'Google request failed.';
    throw new GoogleApiError(message, status);
  },
);

export default httpClient;
