import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const Api = {
  getTestData: () => axiosInstance({
    url: 'https://api.github.com/users/maximacko',
    method: 'get',
  }),
};

export default Api;