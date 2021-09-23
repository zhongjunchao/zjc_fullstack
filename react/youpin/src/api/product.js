import axios from './axios';

export default {
  // es6 id 默认值
  info(id=0) {
    return axios.get('/product/info', {
      params: {
        id
      }
    })
  }
}