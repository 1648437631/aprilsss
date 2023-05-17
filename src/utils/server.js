// import axios from "axios";
// // import store from '@/store'

// // 创建axios实例
// const instance = axios.create({
//   header : {
//     timeout: 60000, 
//     'language':'zh',
//   'region':'Kuwait',//Kuwait Qatar 
//   'content-type':'application/x-www-form-urlencoded',
//  },
// })

// // 为axios发送的每一个请求，添加请求拦截器，处理token字符串
// instance.interceptors.request.use(
//   function(config){
//     // config对象中保存着请求对象的配置信息，此处可以进行修改
//     config.headers['Authorization'] = store.state.token
//     // 返回处理过后的config对象
//     return config
// },
// function (error) {
//   // 对请求错误做些什么
//   console.log(error);
//   return Promise.reject(error);
// }
// )
// export default instance;


