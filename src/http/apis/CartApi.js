import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;
const HOST = BaseUrl.HOST;
const cartApi = {

  
 /**商品评分 
   * POST
   * api接口/api/store/saveProductUserStars
   * 参数：token product_id 
   */
quertProductUserStar(params){
  let data = params
  let url = BMDURL + "/api/store/saveProductUserStars";
  return myaxios.post(url, data);
},




 /**查找商品规格
   * POST
   * api接口/api/product/checkAttr
   * 参数：token id,type
   */
 queryProductCheckAttr(params){
  let data = params
  let url = BMDURL + "/api/product/checkAttr";
  return myaxios.post(url, data);
},



  /**添加产品到购物车
   * POST
   * api接口 /api/cart/add
   * 参数：cartNum 1 ，new:1 productLd,
   * uniqueld ，productld,iniqueld,is_integral
   */
  queryCartAdd(params) {
    let data = params
    // console.log('ggbb',data)
    let url = BMDURL + "/api/cart/add";
    return myaxios.post(url, data);
  },
  /**删除购物车商品
   * POST
   * api接口 /api/cart/add
   * 参数：cartNum 1 ，new:1 productLd,
   * uniqueld ，productld,iniqueld,is_integral
   */
  queryCartDel(params) {
    let data = params;
    let url = BMDURL + "/api/cart/del";
    return myaxios.post(url, params);
  },

    /**添加商品数量
   *   POST 购物车添加商品数量
   * api接口 /api/cart/num
   * 参数：id number
   */
     queryCartNum(params) {

      let data = params;
      let url = BMDURL + "/api/cart/num";
          
      return myaxios.post(url, params);
    },
  
        /**
   *   GET购物车中的商品种类数量
   * api接口/api/cart/count
   * 参数：token
   */
         queryCartCount(params) {
          let data = params;
          let url = BMDURL + "/api/cart/num";
          return myaxios.post(url, params);
        },
      
      /**GET 购物车列表
       * /api/cart/list 
       * 参数<token>
       * */  
      queryCartList(){
        // console.log(1111);
        // let data = params;
        let url = BMDURL + "/api/cart/list ";
        return myaxios.get(url);
      }







};
export default cartApi