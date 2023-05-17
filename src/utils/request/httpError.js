import { Message } from 'element-ui'

// 定义错误状态码
const errorMap = new Map([
  [404, '请求地址错误，请联系运维人员'],
  [500, '服务出错了，请稍后再试']
])

// 定义其他错误
const errMes = (msg) => {
  if (msg.includes('timeout')) return '请求超时'
  if (msg.includes('Network')) return '网络错误'
  return '请检查你的网络'
}

/**
 * http请求异常处理
 * @param {*} error 
 * @returns 
 */
export default function httpError (error) {
  if (error.__CANCEL__) return Promise.reject() //请求取消
  const { response: { status } = {}, message } = error
  Message.error(status ? (errorMap.get(status) || '系统异常，请联系运维人员') : errMes(message))
  return Promise.reject()
}