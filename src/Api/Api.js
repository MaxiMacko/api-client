import axios from 'axios';

export const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// const Api = {
//   userData: userName =>
//     axiosInstance({
//       url: `https://api.github.com/users/${userName}`,
//       method: 'get',
//     }),
// };
