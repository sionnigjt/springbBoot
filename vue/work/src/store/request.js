import axios from 'axios';
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000,
  })
  instance.interceptors.request.use(config => {
    //认证访问
    //直接访问
    return config
  },
    err => {
      //错误处理
      console.log(err)
    }
  )
  return instance(config)
}