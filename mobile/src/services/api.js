import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.103:7777',
});

export default api;
