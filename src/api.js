import axios from 'axios';

class Api {
  static client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
      Accept: 'application/json',
    },
  });

  static get(path, config = {}) {
    return this.client.get(path, config).then((response) => response.data);
  }
}

Api.client.defaults.params = {};
Api.client.interceptors.request.use((config) => {
  config.params.apikey = process.env.REACT_APP_API_KEY;
  return config;
});

export default Api;
