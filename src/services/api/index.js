import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

export const login = async (user) => {
  const result = await axios.post(`${url}/login`, user);
  return result;
};

export const register = async (user) => {
  const result = await axios.post(`${url}/register`, user);
  return result;
};
