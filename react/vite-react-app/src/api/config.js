// fetch 
// ajax 请求的封装
import axios from 'axios' ;
// 1. 设置统一的地址前缀 
export const baseUrl = 'http://localhost:3000';
// 2. 返回axios 实例
const axiosInstance = axios.create({
  baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "111")
  }
)

export {
  axiosInstance
}