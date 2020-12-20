import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://backendvisavi.herokuapp.com/',
  baseURL: 'https://visavi-server-2.herokuapp.com/',
});

export default api;
