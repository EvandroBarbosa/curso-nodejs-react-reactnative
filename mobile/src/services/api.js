import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.15:7777',
});

export default api;
