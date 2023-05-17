import myaxios from "../Myaxios";
import BaseUrl from "../BaseUrl";
const BMDURL = BaseUrl.BMDURL;
const HOST = BaseUrl.HOST;
const orderApi = {
  /**货物自提
   * POST
   * /api/order/pickingList
   * 参数：page limit count
   */
  queryPickList() {
    let data = params;
    let url = BMDURL + "/api/pay/MyFatoorahPay";
    return myaxios.post(url, data);
  },

  /**订单支付
   * POST
   * api接口api/pay/MyFatoorahPay
   * 参数：order_id,user_id,type,is_app:1
   */
  queryFatoorahPay(params) {
    let data = params;
    // console.log("支付", data);
    let url = BMDURL + "/api/pay/MyFatoorahPay";
    return myaxios.post(url, data);
  },

  /**确认订单
   * POST
   * api接口/api/order/confirm
   * 参数：token cartId addr_id  local_addr_id
   */
  queryOrderConfirm(params) {
    let url = BMDURL + "/api/order/confirm";
    return myaxios.post(url, params);
  },
  /**創建新訂單
   * POST
   * api接口/api/order/createNew
   * 参数：addressID payType source key transportmode[1]
   */
  queryOrderCreateNew(params) {
    let data = params;
    // console.log("创建订单222", data);
    let url = BMDURL + "/api/order/createNew";
    return myaxios.post(url, data);
  },
  /**新訂單列表
   * POST
   * api接口/api/order/getNewOrderList
   * Content-Type：multipart/form-data
   * 参数：page 1 limit 20, type 3
   */
  queryNewOrderList(params) {
    let data = params;
    let url = BMDURL + "/api/order/getNewOrderList";
    return myaxios.post(url, data);
  },
  /**创建维修订单
   * POST
   * api接口/api/order/getNewOrderList
   * Content-Type：multipart/form-data
   * 参数：page 1 limit 20, type 3
   */









};
export default orderApi;
