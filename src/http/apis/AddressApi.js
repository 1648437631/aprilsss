import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;
const HOST = BaseUrl.HOST;

const addressApi = {
  /**get 获取地址
   *接口 /api/address/list
   *参数 GET 
   */
queryAddress(params){
  console.log(1111);
  let url = BMDURL+ "/api/address/list";
  return myaxios.get(url, params);
}
,
  /**post 添加修改收货地址数据接口
   *接口 /api/address/edit
   *参数 token
   */
   queryAddressEdit() {
    console.log(1111);
    let data = params;
    let url = BMDURL+ "/api/address/edit";
    // console.log('dhdh',post(url))
    return myaxios.post(url, params);
  },

  /**get 全部国家
   *接口 /api/address/provinces
   *参数 token
   */
   queryAddressProvinces() {
                    let data = params;
                    let url = BMDURL+ "/api/address/provinces";
                    // console.log('dhdh',post(url))
                    return myaxios.post(url, params);
                  },

 /**post 添加修改收货地址数据接口
   *接口 /api/address/edit
   *参数 token
   */
   queryAddressCitys() {
                    let data = params;
                    let url = BMDURL+ "/api/address/provinces/1241/citys";
                    // console.log('dhdh',post(url))
                    return myaxios.post(url, params);
                  }
};
export default addressApi