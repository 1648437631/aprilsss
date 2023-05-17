import axios from 'axios'
import qs from 'qs'
import i18n from '@/lang'
import httpError from './httpError'
import serveError from './serveError'
const CancelToken = axios.CancelToken

// 创建axios实例
const instance = axios.create({
  timeout: 60000,
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
    'Accept-Language': localStorage.getItem('language') || 'zh',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  withCredentials: false,
})

instance.interceptors.request.use(
  config => {
    // 序列化参数
    if (Object.prototype.toString.call(config.data) !== '[object FormData]') config.data = qs.stringify(config.data)
    // 设置取消请求控制器
    const abortController = config.cancelToken
    if (abortController) config.cancelToken = new CancelToken(cancel => abortController.cancel = cancel)
    // 设置token和语言
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token') || ''}`
    config.headers['Accept-Language'] = i18n.locale
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  response => {
    const { status, data, msg } = response.data
    if (status === 200) return data
    return serveError(status, data, msg)
  },
  err => {
    return httpError(err)
  }
)

/**
 * get请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} options 其他配置项
 * @returns 
 */
export function get (url, params, options) {
  const { config = {}, cancelToken } = options || {}
  if (cancelToken) config.cancelToken = cancelToken
  return instance.get(url, params, config)
}

/**
 * post请求
 * @param {string} url 请求地址
 * @param {object} data 请求参数
 * @param {object} options 其他配置项
 * @returns 
 */
export function post (url, data, options) {
  const { config = {}, cancelToken } = options || {}
  if (cancelToken) config.cancelToken = cancelToken
  return instance.post(url, data, config)
}
