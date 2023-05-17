import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;
const HOST = BaseUrl.HOST;
const searchApi = {
  /**GET获取首页搜索数据接口
   *接口 /api/products
   *参数 header
   */
  querySearchProduct(keywords) {
    let url = BMDURL + "/api/products?keyword=" + keywords;
    return myaxios.get(url);
  },

  /**GET文章所有分类数据接口
   *接口/api/article/category/list
   *参数 header
   */
  queryArticleProduct() {
    let url = BMDURL + "/api/article/category/list";
    return myaxios.get(url);
  },
  /**GET文章详情
   *接口/api/article/details/5
   *参数 header
   */
  queryArticleProductDetail(id) {
    let url = BMDURL + "/api/article/details/"+id;
    return myaxios.get(url);
  },
};
export default searchApi;
