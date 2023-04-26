import axios from 'axios'
export function request(config){
  const instance = axios.create()
// 为每个axios发送一个请求，添加请求拦截器，处理token字符创
instance.interceptors.request.use(function(config){

  //为每个对象中保存着请求对象配置的信息，此处可以进行修改
  // config.headers['Authorization'] = store.state.token
 (config)=>{
  config.headers['Authorization'] ='Bearer ' + store.state.token

 config.headers['Accept-Language'] = 'en'
 config.headers['Accept-Region'] = 'Kuwait'

}
return config
 
 
})
}



