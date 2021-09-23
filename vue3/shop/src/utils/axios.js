import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

axios.defaults.baseURL = process.env.NODE_ENV == 'developement' ? '//47.99.134.126:28019/api/v1' : '//47.99.134.126:28019/api/v1'
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截

// 响应拦截
axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务器端异常');
    return Promise.reject(res)
  }
  if (res.data.resultCode !== 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.resultCode == 416) {
      Toast.fail('登录失效')
      setTimeout(() => {
        router.push({ path: '/login' })
      }, 1000)
    }
    return Promise.reject(res.data)
  }
  return res.data
})


export default axios;