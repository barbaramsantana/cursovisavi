import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://reactnative.dev/'
});

export default Api;