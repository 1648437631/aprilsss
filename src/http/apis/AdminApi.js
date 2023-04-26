import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;

const adminApi = {
  /**GET 获取用户信息
   *接口 /api/userinfo
   *参数 header
   */
   queryUserInfo(params){
    let url = BMDURL+ "/api/userinfo";
    return myaxios.get(url, params);
  },
};

export default adminApi;
