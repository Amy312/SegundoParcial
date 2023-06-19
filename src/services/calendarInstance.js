import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL_LOCAL;

export const calendarAPI = axios.create({
  baseURL: BASE_URL,
});