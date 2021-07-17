import axios from 'axios';
import Reactotron from 'reactotron-react-js';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(response => {
  if (Reactotron.log)
    Reactotron.log({
      url: `${response.config.baseURL}${response.config.url}`,
      data: response.data,
    });
  return response;
});

export default api;
