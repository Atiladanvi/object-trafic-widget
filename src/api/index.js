
import axios from 'axios'

const makeAPi = function(config) {
  return axios.create({
    baseURL: config.baseUrl,
    timeout: 1000,
    headers: config.headers
  });
}

export default makeAPi
