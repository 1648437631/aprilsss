import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;
import { get } from '@/utils/request'
const adminApi = {
  /**GET 获取用户信息
   *接口 /api/userinfo
   *参数 token
   */
  queryUserInfo () {
    return get('/api/userinfo');
  },
  // queryUserInfo(params) {
  //   let url = BMDURL + "/api/userinfo";
  //   return myaxios.get(url, params);
  // },

  /**post  修改用户信息
   *接口 /api/user/edit
   *参数 avatar  province_id  nickname sex birthday
   */
  queryUserEdit (params) {
    let url = BMDURL + "/api/user/edit";
    return myaxios.get(url, params);
  },

  /**post  修改密码
   *接口 /api/register/reset
   *参数 email password password_confirm
   */
  queryRegisterReset (params) {
    let data = params
    console.log("ggbb", data);
    let url = BMDURL + " /api/register/reset";
    return myaxios.post(url, data);
  },
};

export default adminApi;
