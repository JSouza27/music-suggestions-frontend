import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

export const login = (user) => {
  axios.post(`${url}/login`, user)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const register = (user) => {
  axios.post(`${url}/register`, user)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
