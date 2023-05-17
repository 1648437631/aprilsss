<template>
  <div class="container">
    <!-- 确认送货地址 -->
    <div class="address">
      <div class="address-title">
        <div class="confirm">确认收货地址</div>
        <div class="manage">管理收货地址</div>
      </div>
      <!-- 地址列表 -->
      <div class="address-list">
        <ul>
          <li v-for="(item, index) in addressInfo" :key="index">
            <!-- left -->
            <div class="left">
              <img
                v-if="item.is_default !== 1"
                class="img"
                src="../assets/images/will_be@2x.png"
                alt=""
                @click="changeAddress(index)"
              />
              <img
                v-if="item.is_default == 1"
                class="img"
                src="../assets/images/组 1126@3x.png"
                alt=""
              />
              <div class="user-name">{{ item.real_name }}</div>
              <div class="phone">{{ item.phone }}</div>
              <div class="address-detail">
                收货地址：{{ item.province }} {{ item.city }} {{ item.detail }}
              </div>
            </div>
            <!-- right -->
            <div class="edit" @click="goAddress(item)">修改本地址</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="goods-list">
      <!-- title -->
      <div class="title">
        <div class="orderid">商品信息</div>
        <div class="price">单价</div>
        <div class="num">数量</div>
        <div class="total">总价</div>
        <div class="transport">运输方式</div>
      </div>
      <!-- content -->
      <div class="content" v-for="(item, index) in confirmlist" :key="index">
        <!-- 产品信息 -->
        <div class="left">
          <!-- img -->
          <img class="img" :src="item.productInfo.image" alt="" />
          <!-- right -->
          <div class="goods-info">
            <div class="goods-name">{{ item.productInfo.store_name }}</div>
            <div class="suk">{{ item.productInfo.attrInfo.suk }}</div>
          </div>
        </div>
        <!-- 单价 -->
        <div class="item-price">KD：{{ item.productInfo.attrInfo.price }}</div>
        <!-- 数量 -->
        <div class="item-num">x{{ item.cart_num }}</div>
        <!-- 总计 -->
        <div class="item-total">KD：{{ item.total }}</div>
        <!-- 运输方式 -->
        <div class="item-transport">
          <img
            class="img"
            :src="
              value == 1
                ? item.transport == 1
                  ? 'https://q8store.q8gz.com/uploads/default/hc.png'
                  : 'https://q8store.q8gz.com/uploads/default/gc.png'
                : item.transport == 2
                ? 'https://q8store.q8gz.com/uploads/default/rfj.png'
                : 'https://q8store.q8gz.com/uploads/default/gfj.png'
            "
            alt=""
            v-for="value in item.productInfo.transport_mode"
            :key="value"
            @click="chooseTransport(index, value)"
          />
        </div>
      </div>
    </div>

    <!-- 订单备注  选择支付方式 -->
    <div class="pay">
      <!-- titile -->
      <div class="pay-title">
        <div class="mask">订单备注</div>
        <div class="type">选择支付方式</div>
      </div>
      <!-- content -->
      <div class="pay-content">
        <textarea name="" id="" cols="30" rows="10" v-model="mask"></textarea>
        <div class="pay-type">
          <!-- knet支付 -->
          <div
            class="knet"
            :class="payType == 1 ? 'active' : ''"
            @click="choosePay(1)"
          >
            <img class="img" src="../assets/images/k.png" alt="" />
            <p>Knet支付</p>
          </div>
          <!-- visa支付 -->
          <div
            class="visa"
            :class="payType == 2 ? 'active' : ''"
            @click="choosePay(2)"
          >
            <img class="img" src="../assets/images/visa.png" alt="" />
            <p>Visa支付</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="settlement">
      <div class="left">
        <div class="total">合计：KD:{{ total }}</div>
        <div class="total">空运运费：KD:{{ airFreight }}</div>
      </div>
      <div class="button" @click="createOrder">
        结算({{ this.confirmlist.length }})
      </div>
    </div>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios";
import httpApi from "@/http/index.js";
import { parse } from "qs";
export default {
  data() {
    return {
      show: true, // 顯示運輸方式
      confirmlist: [], //訂單確認
      addressInfo: [], //地址確認
      cartInfo: "", // 購物車列表
      payType: "", // 支付方式
      priceGroup: "",
      addressId: "", //地址id
      source: "",
      orderKey: "", //订单key
      uid: "", //用戶id
      orderId: "", //訂單id
      is_h5: 1,
      type: "",
      transportMode: [], //選擇交通方式
      local_addr_id: "",
      addr_id: "",
      mask: "", //备注
      airFreight: 0, //空运运费
      total: 0, //总价
      paymentname: "", //支付类别
    };
  },

  created() {
    this.init();
  },
  methods: {
    goAddress(item) {
      this.$router.push({
        name: "order-address",
        params: {
          ...item,
        },
      });
    },
    //选择地址
    changeAddress(index) {
      this.addressInfo.forEach((value) => {
        value.is_default = 0;
      });
      this.addressInfo[index].is_default = 1;
      this.addressId = this.addressInfo[index].id;
    },
    //创建订单
    createOrder() {
      if (!this.paymentname) {
        alert("请选择支付方式");
        return false; //未选择支付方式 终止操作
      }
      let data = {
        key: this.orderKey,
        payType: this.paymentname,
        addressId: this.addressId,
        mark: this.mask,
        transportMode: this.transportMode,
        source: "web",
      };
      httpApi.orderApi.queryOrderCreateNew(data).then((res) => {
        let orderId = res.data.data.result.orderId;
        this.user_id = this.uid;
        console.log("创建订单", res);
        this.submitOrder(orderId, this.payType);
      });
    },

    submitOrder(order_id, type) {
      //提交訂單信息
      let params = {
        order_id,
        user_id: this.uid,
        type,
        is_h5: 1,
      };
      httpApi.orderApi.queryFatoorahPay(params).then((res) => {
        let data = res.data;
        let link = JSON.parse(data);
        this.$router.replace({
          path: "/pay/pay",
          query: { link: link.data.PaymentURL },
        });
        // this.$router.back({})
        console.log("生成支付连接", link);
      });
    },

    //选择运输方式
    chooseTransport(index, value) {
      this.confirmlist[index].transport = value;
      let id = this.confirmlist[index].id;
      this.transportMode[index][id] = value;
      this.calculation();
    },

    //计算空运运费
    calculation() {
      let total = 0;
      let surcharge = 0;
      this.confirmlist.forEach((value, index) => {
        if (value.transport == 2) {
          total = total + value.airFreight * 1;
        }
      });
      //保留两位小数 toFixed(2)
      //内部附加费 surcharge
      this.airFreight = total.toFixed(2) * 1 + surcharge * 1;
    },

    choosePay(val) {
      this.payType = val;
      if (val == 1) {
        this.paymentname = "knet";
      } else if (val == 2) {
        this.paymentname = "visa";
      }
    },

    init() {
      // 获取地址信息
      httpApi.addressApi.queryAddress().then((res) => {
        console.log("地址信息:", res);
        let data = res.data.data.data;
        this.addressInfo = data;
        data.forEach((value) => {
          if (value.is_default == 1) {
            this.addressId = value.id;
          }
        });
      });
      let params = {
        cartId: this.$route.query.cartId,
        local_addr_id: 1241,
        addr_id: "",
      };
      httpApi.orderApi.queryOrderConfirm(params).then((res) => {
        let data = res.data.data.cartInfo;
        this.confirmlist = data;
        this.total = res.data.data.priceGroup.totalPrice;
        this.orderKey = res.data.data.orderKey;
        this.uid = res.data.data.userInfo.uid;
        //运输方式
        let transportMode = [];
        for (var i = 0; i < data.length; i++) {
          var id = data[i].id;
          transportMode[i] = {
            [id]: data[i].transport,
          };
        }
        this.transportMode = transportMode;
        console.log("运输方式", transportMode);
        console.log("确认订单", res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  // width: 1200px;
  width: 100%;
  background-color: #fafafa;
  caret-color: rgba(0, 0, 0, 0);
  // margin: 0 auto;
  cursor: default;
  overflow: hidden;
  .address {
    margin: 0 auto;
    margin-top: 14px;
    width: 1200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .address-title {
      width: 1160px;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #ececec;
      .confirm {
        font-size: 16px;
        color: #333333;
      }
      .manage {
        font-size: 14px;
        color: #5a77ce;
      }
    }
    //地址列表
    .address-list {
      width: 1160px;
      margin: 10px 0;
      ul {
        margin: 0;
        padding: 0;
        .active {
          border: 2px solid #ed1b35;
          background-color: #fff0e8;
        }
        li {
          list-style: none;
          width: 1160px;
          height: 38px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          .left {
            display: flex;
            align-items: center;
            .img {
              margin: 0 14px;
              width: 20px;
              height: 20px;
            }
            .user-name {
              font-size: 14px;
              color: #333333;
            }
            .phone {
              margin: 0 8px;
              font-size: 14px;
              color: #333333;
            }
            .address-detail {
              font-size: 14px;
              color: #333333;
            }
          }
          .edit {
            font-size: 14px;
            color: #5a77ce;
            margin: 0 20px;
            a {
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  //商品列表
  .goods-list {
    margin: 30px auto;
    width: 1200px;
    background-color: #ffffff;
    // margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      width: 1160px;
      padding: 16px 0;
      display: flex;
      font-size: 16px;
      color: #333333;
      .orderid {
        width: 600px;
      }
      .price {
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .num {
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .total {
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .transport {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    //content
    .content {
      width: 1160px;
      padding-bottom: 20px;
      display: flex;
      align-items: center;
      .left {
        width: 600px;
        height: 98px;
        display: flex;
        align-items: flex-start;
        overflow: hidden;
        .img {
          width: 96px;
          height: 96px;
          border: 1px solid #ececec;
        }
        .goods-info {
          margin: 0 16px;
          margin-top: 6px;
          overflow: hidden;
          .goods-name {
            font-size: 16px;
            color: #333333;
          }
          .suk {
            margin-top: 10px;
            font-size: 14px;
            color: #a3a3a3;
          }
        }
      }
      .item-price {
        width: 120px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        color: #333333;
      }
      .item-num {
        width: 120px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        color: #333333;
      }
      .item-total {
        width: 120px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        color: #333333;
      }
      .item-transport {
        width: 200px;
        display: flex;
        justify-content: center;
        .img {
          width: 40px;
          height: 40px;
          margin: 0 10px;
          cursor: pointer;
        }
      }
    }
  }

  //订单备注 选择支付方式
  .pay {
    margin: 0 auto;
    width: 1200px;
    height: 160px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .pay-title {
      width: 1160px;
      padding: 14px 0;
      display: flex;
      .mask {
        width: 622px;
        font-size: 14px;
        color: #a3a3a3;
      }
      .type {
        width: 538px;
        font-size: 14px;
        color: #a3a3a3;
      }
    }
    .pay-content {
      width: 1160px;
      height: 100px;
      display: flex;
      align-items: center;
      textarea {
        width: 536px;
        height: 80px;
        resize: none;
        background-color: #fafafa;
        border: none;
        caret-color: #ef2329;
        padding: 10px;
      }
      .pay-type {
        margin-left: 62px;
        width: 448px;
        height: 88px;
        display: flex;
        justify-content: space-between;
        .active {
          border: 2px solid #ef2329;
          background-color: #fff0e8;
        }
        .knet {
          width: 210px;
          height: 88px;
          background-color: #fafafa;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          .img {
            width: 44px;
            height: 34px;
            margin: 0 9px;
          }
          p {
            margin: 0 9px;
            padding: 0;
            font-size: 14px;
            color: #333333;
          }
        }
        .visa {
          width: 210px;
          height: 88px;
          background-color: #fafafa;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          .img {
            width: 44px;
            height: 34px;
            margin: 0 9px;
          }
          p {
            margin: 0 9px;
            padding: 0;
            font-size: 14px;
            color: #333333;
          }
        }
      }
    }
  }

  //结算
  .settlement {
    margin: 66px auto;
    // margin: 66px 88px 0 0;
    width: 1200px;
    height: 120px;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .left {
      .total {
        font-size: 18px;
        color: #333333;
      }
    }
    .button {
      padding: 14px 20px;
      background-color: #ef2329;
      font-size: 25px;
      color: #ffffff;
      font-weight: bold;
      border-radius: 10px;
      margin: 0 20px;
      cursor: pointer;
    }
  }
}
</style>
