import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendvisavi.herokuapp.com/',
});

export default api;
