import axios from 'axios';

export const baseAPI = 'http://localhost:8000';

export const api = axios.create({ baseURL: baseAPI });
