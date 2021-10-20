import axios from 'axios';
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
  })

  instance.interceptors.request.use(
    //请求拦截
    config => {
      //认证拦截
      if (window.sessionStorage.getItem('token')) {
        config.headers.token = window.sessionStorage.getItem('token')
        console.log("拦截的" + window.sessionStorage.getItem('token'));
      }
      return config
    },
    error => {

    })

  instance.interceptors.response.use(
    config => {
     
      
      return config;
    },
    error => {
      //错误处理
      return Promise.reject(error);
    })
  return instance(config)
}