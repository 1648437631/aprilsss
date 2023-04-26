// index.js 提供访问具体某接口模块对象
import msgApi from './apis/MsgApi'
import adminApi from './apis/AdminApi'
import homepageApi from './apis/HomePageApi'
import cartApi from './apis/CartApi'
import addressApi from './apis/AddressApi'
import orderApi from './apis/OrderApi'
import searchApi from './apis/SearchApi'
const httpApi = {
    msgApi,
    adminApi,
    homepageApi,
    cartApi,
    addressApi,
    orderApi,
    searchApi
}
export default httpApi