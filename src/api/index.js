
import axios from 'axios'

const makeAPi = function(config) {
  return axios.create({
    baseURL: config.baseUrl,
    timeout: 5000,
    headers: config.headers
  });
}

export default makeAPi
