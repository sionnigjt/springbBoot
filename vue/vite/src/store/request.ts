import axios, { AxiosRequestConfig } from 'axios';
export function request(config: AxiosRequestConfig<any>) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
  })

  instance.interceptors.request.use(
    //请求拦截
    config => {

    },
    error => {

    })

  instance.interceptors.response.use(
    config => {


      return config;
    },
    error => {
      //错误处理
      return error;
    })
  return instance(config)
}