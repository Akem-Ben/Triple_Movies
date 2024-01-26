import axioz from 'axios';

const axios = axioz.create({
  baseURL: 'http://localhost:3010/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
