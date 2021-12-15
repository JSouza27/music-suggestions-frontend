import axios from 'axios';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_API_BASE_URL;
const errMessage = 'Não foi possível logar, tente novamente mais tarde!:';

export const login = (user) => {
  axios.post(`${url}/login`, user)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(`${errMessage} ${error.message}`);
    });
};

export const register = (user) => {
  axios.post(`${url}/register`, user)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(`${errMessage} ${error.message}`);
    });
};
