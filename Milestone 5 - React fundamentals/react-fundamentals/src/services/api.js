import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
});

api.interceptors.request.use(
    (config) => {
        console.log('Request made with ', config);
        return config;
    },
    (error) => {
        console.error('Error in request: ', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Error in response: ', error);
        return Promise.reject(error);
    }
);

export default api;
