import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://backendvisavi.herokuapp.com/covid'
});

export default Api;