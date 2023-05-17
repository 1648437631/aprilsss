import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;
const HOST = BaseUrl.HOST;
import { post } from '@/utils/request'
const homepageApi = {

  queryGuessLike(params){
    let url = BMDURL + "/api/product/getRelatedProduct";
    return myaxios.post(url,params)
  },
  /**GET获取首页数据接口
   *接口 /api/getFirstPageData
   *参数 page limit
   */
  queryPreProducts() {
    // let data = params
    let url = BMDURL + "/api/getFirstPageData";
    // console.log('dhdh',post(url))
    return myaxios.get(url);
  },

  /**GET全部一二级分类
   *接口 /api/category
   *参数 page limit
   */
  queryCategory(params) {
    // let data = params
    let url = BMDURL + "/api/category";
    // console.log('dhdh',post(url))
    return myaxios.get(url, params);
  },

  /**Post 首页喜欢和热销列表
   *接口 /api/likeOrHot
   *参数 multipart/form-data
   */
  querylikeOrHotProducts1(params) {
    let data = {
      type: 1,
    };
    let url = BMDURL + "/api/likeOrHot";
    return myaxios.post(url, data);
  },
  querylikeOrHotProducts2(params) {
    let data = {
      type: 2,
    };
    let url = BMDURL + "/api/likeOrHot";
    return myaxios.post(url, data);
  },

  /**Post 专区新品抢购，热销，空运，积分等
   *接口 /api/newProductInside
   *参数 multipart/form-data
   */

  queryNewProductsInside(params) {
    let data = params
    let url = BMDURL + "/api/newProductInside";
    return myaxios.post(url, data);
  },
  
  // 更改先换cid 
  /**Post 专区分类内页
   *接口 /api/getSectionCategoryInside
   *参数 multipart/form-data
   */
queryCategoryInside(params){
let data = params
let url = BMDURL + "/api/getSectionCategoryInside";
return myaxios.post(url, data);
},

  /**Post 专区轮播内页
   *接口 /api/section/getSectionBanner
   *参数 type category
   */
  querySectionBanner(params) {
    // let data = params
    let url = BMDURL + "/api/section/getSectionBanner";
    return myaxios.post(url, params);
  },

  //    /**GET获取商品详情
  //    *接口 /api/product/details?id="data.id"+'&type=0'+'is_stock=0'
  //    *参数token limit
  //    */

  queryDetails(data) {
    let url = BMDURL + "/api/product/details?id=" + data.id + "&is_stock=0";
    return myaxios.get(url, data);
  },

  //    /**GET获取首页秒杀数据
  //    *接口 /api/seckill/list?limit=4
  //    *参数token limit
  //    */

  querySecKill(params) {
    let url = BMDURL + "/api/seckill/list";

    return myaxios.get(url, params);
  },

  //   /**GET秒杀商品详情
  //    *接口 /api/seckill/detail/3
  //    *参数token limit
  //    */
  //    querySecKillDetails(params){
  //     let data = params
  //     let url = BMDURL + "/api/seckill/detail/3"

  //     return myaxios.get(url,params)
  //   },

  //   /**GET首页爆款推荐列表
  //    *接口 /api/products?activity_type=1&page=1&limit=8
  //    *参数token limit
  //    */
  //    queryActivityList(params){
  //     let data = params
  //     let url = BMDURL + "/api/products?activity_type=1&page=1&limit=8"
  //     // console.log('dhdh',post(url))
  //     return myaxios.get(url,params)
  //   },

  //   /**GET首页预售商品列表
  //    *接口 /api/products/preProducts?page=1&limit=4
  //    *参数token limit
  //    */
  //    queryActivityList(params){
  //     let data = params
  //     let url = BMDURL + "/api/products/preProducts?page=1&limit=4"
  //     // console.log('dhdh',post(url))
  //     return myaxios.get(url,params)
  //   },

  //  /**GET全部商品
  //    *接口 /api/products?page=1&limit=4&sid=30&cid=9&brand_id=44&activity_type=1&priceOrder=&salesOrder=&keyword=Apple
  //    *参数token limit
  // */

  // queryAllList(params){
  //   let data = params
  //   let url = BMDURL + "/api/products?page=1&limit=4&sid=30&cid=9&brand_id=44&activity_type=1&priceOrder=&salesOrder=&keyword=Apple"
  //   // console.log('dhdh',post(url))
  //   return myaxios.get(url,params)
  // },
};

export default homepageApi;
