
/**
 * 取消请求控制器
 */
export default class Controller {
  cancelText = '请求已取消'
  cancel = undefined
  constructor(value) {
    value && (this.cancelText = value)
  }
  abort (value) {
    this.cancel && this.cancel(value || this.cancelText)
  }
}