const axios = require('axios');
const axiosInstance = axios.create({
  baseURL: 'https://api.hatchways.io/assessment/blog/posts',
  responseType: 'json',
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { response } = error;
    return Promise.reject(response);
  }
);
module.exports = { axiosInstance };
