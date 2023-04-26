import axios from 'axios'
import qs from 'qs'
import store from '@/store'

const instance = axios.create()
// 为每个axios发送一个请求，添加请求拦截器，处理token字符创
instance.interceptors.request.use(function(config){

  //为每个对象中保存着请求对象配置的信息，此处可以进行修改
  // config.headers['Authorization'] = store.state.token
 (config)=>{
  config.headers['Authorization'] ='Bearer + store.state.token'
 config.headers['Accept-Language'] = 'en'
 config.headers['Accept-Region'] = 'Kuwait'

}
return config
 
 
})
// ex966@qq.com 123456789

let myaxios = {

  /**
   * 发送get请求
   * @param {string} url  请求路径
   * @param {object} params  请求参数（对象的形式传递）
   * @returns Promise
   */
  get(url){
      return instance({
          url, 
          method: 'GET', 
      })
  },

  /**
   * 发送post请求
   * @param {string} url  请求路径
   * @param {object} params  请求参数（对象的形式传递）
   * @returns Promise
   */
  post(url, params){
      return instance({
          url, 
          method: 'POST',
          data: qs.stringify(params)
      })
  }

}

export default myaxios;
