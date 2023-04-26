import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;
const HOST = BaseUrl.HOST;
const searchApi = {
    /**GET获取首页搜索数据接口
   *接口 /api/products
   *参数 header
   */
  querySearchProduct(keywords){
    let url = BMDURL + "/api/products?keyword="+keywords;
    return myaxios.get(url); 
  }
}
export default searchApi