// message.js 封装短信模块相关接口
import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;
const HOST = BaseUrl.HOST;

const msgApi = {
  /** GET 电话验证码
   * 接口/api/getGraphicVerification?phone=00965-123456789
   * 相关参数 00965-123456789
   */
  queryVerityPhone(email) {
    let url = BMDURL + `/api/getGraphicVerification?phone=${email}`;
    return myaxios.post(url);
  },


  /** GET 电话号码验证
   * 接口/api/getGraphicVerification?phone=00965-123456789
   * 相关参数 00965-123456789
   */
   querySmsVerity(params) {
    let url = BMDURL + "/api/sms/verity";
    return myaxios.post(url,params);
  },




  /**
   * POST 注册
   * 接口{{apiUrl}}/api/login/email
   * 相关参数 email password
   */
  queryRegister(params) {
    let url = BMDURL + "/api/login/email";
    let data = params;
    //    console.log('dsrj',data)
    return myaxios.post(url, data);
  },

  /** POST 发送邮件验证码
   * 接口 {{apiUrl}}/api/sendEmail
   * 相关参数 email:alkuwaitiya1@gmail.com ; email：1277862791@qq.com
   */
  querySendEmail(params) {
    let url = BMDURL + "/api/sendEmail";
    let data = params;
    return myaxios.post(url, data);
  },

  /**
     * POST 注册
     * 接口{{apiUrl}}/api/register 
     * 相关参数 
     * --form 'type="2"' \
    --form 'email=""' \
    --form 'phone="00965-13435835316"' \
    --form 'code="1234"' \
    --form 'password="12345678"' \
    --form 'password_confirm="12345678"' \
    --form 'extension_code="070810"'
    */
  // queryRegister() {
  //     let url = BMDURL+ "/api/register"
  //     return myaxios.post(url, params)
  // },

  /**POST 注册
   * 接口{{apiUrl}}/api/sms/verity
   * 相关参数 phone
   *
   */
  querySms() {
    let url = BMDURL + "/api/sms/verity";
    return myaxios.post(url, params);
  },
  /**POST 注册
   * 接口{{apiUrl}}/api/sms/checkVerity
   * 相关参数 phone code
   *
   */
  queryCheckVerity() {
    let url = BMDURL + "/api/sms/checkVerity";
    return myaxios.post(url, params);
  },
  /**POST 绑定/修改用户手机号
   * 接口 {{apiUrl}}/api/user/alterUserPhone
   * 相关参数 Token phone code
   */
  queryAlterUserPhone() {
    let url = BMDURL + "/api/user/alterUserPhone";
    return myaxios.post(url, params);
  },
  /** POST 绑定/修改用户邮箱(有验证码)
   * 接口 {{apiUrl}}/api/user/alterUserEmail
   * 相关参数Token email code
   */
  queryAlterUserEmail() {
    let url = BMDURL + "/api/user/alterUserEmail";
    return myaxios.post(url, params);
  },
  /** POST 绑定/修改用户邮箱(无验证码,以前接口)
   * 接口 {{apiUrl}}/api/editEmail
   * 相关参数new_email
   */
  queryEditEmail() {
    let url = BMDURL + "/api/editEmail";
    return myaxios.post(url, params);
  },
  /**POST 忘记密码
     *接口 {{apiUrl}}/api/register/reset
     相关参数 email password password_confirm
     */
  queryRegisterReset() {
    let url = BMDURL + "/api/register/reset";
    return myaxios.post(url, params);
  },
};
export default msgApi;
