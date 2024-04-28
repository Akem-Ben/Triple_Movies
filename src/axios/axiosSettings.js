import axioz from 'axios';

const axios = axioz.create({
  // baseURL: 'http://ec2-54-82-52-93.compute-1.amazonaws.com:8080',
  // http://ec2-54-82-52-93.compute-1.amazonaws.com:8080
  baseURL:  'https://main--triple-movies.netlify.app',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

//'http://localhost:3030/'
//https://main--triple-movies.netlify.app/

export default axios;
