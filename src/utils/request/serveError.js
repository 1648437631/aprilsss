import { Message } from 'element-ui'
import router from '@/router'

/**
 * 重定向登录
 */
const loginRedirect = () => {
  Message.error('请登录')
  router.push({ name: 'login' })
  return Promise.reject()
}
/**
 * 服务端返回错误处理
 * @param {*} responseCode 
 * @param {*} responseData 
 * @param {*} responseMsg 
 * @returns 
 */
export default function serveError (responseCode, responseData, responseMsg) {
  const errorMap = {
    '410000': loginRedirect
    // 其他错误状态
  }
  if (errorMap[responseCode]) return errorMap[responseCode]()
  return Promise.reject(responseMsg)
}