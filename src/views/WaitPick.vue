<template>
  <div class="content">
    <OrderHeader v-bind:title="title"> </OrderHeader>
    <router-view></router-view>
    <div class="order-status">
      <div class="myorder"><span>我的订单</span></div>
      <div class="order-repair">
        <ul>
          <li class="active">全部</li>
          <li>待付款</li>
          <li>待发货</li>
          <li>运输中</li>
          <li>已入库</li>
          <li>已完成</li>
        </ul>
      </div>
    </div>
    <!-- 订单列表 -->
    <div class="repair-box">
      <div class="repair-content" v-for="(items, index) in data" :key="index">
        <div class="repair-time">
          <div>2022-02-22</div>
          <div>订单号：{{ items.order_id }}</div>
          <!-- 动态内容·    -->
          <!-- <div>{{ item.status == 1 }}?运输中,''</div> -->
          <!-- 动态内容·    -->
        </div>
        <div class="repair-goods">
          <template v-if="type == -2">
            <div
              class="repair-detail"
              v-for="(item, index) in items.cartInfo"
              :key="index"
            >
              <div class="detail-left">
                <img :src="item.image" />
                <div>
                  <div class="detail-name">{{ item.goods_name }}</div>
                  <div class="detail-rule">YLD-8080</div>
                  <div class="detail-price">单价:{{ item.price }}</div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="repair-detail">
              <div class="detail-left">
                <img :src="items.image" />
                <div>
                  <div class="detail-name">{{ items.goods_name }}</div>
                  <div class="detail-rule">YLD-8080</div>
                  <div class="detail-price">单价:{{ items.price }}</div>
                </div>
              </div>
            </div>
          </template>
          <div class="repair-num">
            x{{ type == -2 ? items.total_num : items.number }}
          </div>
          <div class="repair-totol">
            总价:{{
              type == -2 ? items.total_price_kd : items.price * items.number
            }}KD
          </div>
          <!-- 动态内容·    -->
          <div class="repair-status">
            <div>再次购买</div>
            <div>查看订单</div>
          </div>
          <!-- 动态内容·    -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
import myaxios from "@/http/Myaxios";
import httpApi from "@/http/index.js";
export default {
  name: "order",
  components: {
    OrderHeader,
  },
  data() {
    return {
      title: "",
      tip: "",
      data: [],
      type: "-1", // -1全部，0：待发货；1运输中；
      // 2已入库 ;3已完成（代付款用旧接口） （-2：待付款，
      //   status: "", //订单状态(订单状态 0：待发货；1运输中；2已入库 ;3已完成) 5已退款
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    init(type) {
      let data = {
        page: 1,
        limit: 20,
        type,
      };
      httpApi.orderApi.queryNewOrderList(data).then((res) => {
        // console.log("rees", res);
        this.data = res.data.data;
        let status = [];
        this.data.forEach((value) => {
          status.push(value.status);

          console.log(status);
          // for (var i = 0; i <= status.length; i++) {
          //   if (status[i].status == 2) {
          //     status.push("已入库");
          //   } else if (status[i].status == 0) {
          //     status.push("已fahuo");
          //   }
          // }
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  margin: 0 auto;
  width: 1200px;
  height: 685px;
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  .order-status {
    width: 1200px;
    height: 131px;
    background: #ffffff;
    .myorder {
      width: 80px;
      height: 28px;
      font-size: 20px;
      font-family: PingFang SC-Heavy, PingFang SC;
      font-weight: 800;
      color: #333333;
      line-height: 0px;
      margin-left: 5px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
    ul {
      width: 1200px;
      display: flex;
      list-style: none;
      li {
        margin-left: 25px;
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 6px 6px 6px 6px;
        opacity: 1;
        border: 1px solid #e2e2e2;
        a {
          text-decoration: none;
          color: #000000;
        }
      }
      li.active {
        margin-left: 25px;
        width: 71px;
        height: 30px;
        background: #ed1b35;
        border-radius: 6px 6px 6px 6px;
        opacity: 1;
        border-radius: 6px 6px 6px 6px;
        opacity: 1;
        a {
          text-decoration: none;
          color: #ffffff;
        }
      }
    }
  }

  //订单列表
  .repair-box {
    height: 480px;
    overflow: hidden;
    .repair-content {
      widows: 1200px;
      margin: 0 auto;
      // height: 2011px;
      background: #ffffff;
      .repair-time {
        width: 1152px;
        height: 36px;
        background: #fff6f7;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        display: flex;
        margin-left: 15px;
        line-height: 36px;
        text-align: center;
        div:first-child {
          margin-right: 30px;
        }
        div:last-child {
          margin-left: 640px;
        }
      }
    }
    .repair-goods {
      width: 1152px;
      height: 128px;
      background: #ffffff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      display: flex;
      .detail-left {
        width: 613px;
        display: flex;
        img {
          margin-left: 13px;
          margin-top: 12px;
          margin-right: 12px;
          width: 98px;
          height: 101px;
          background-color: #ed1b35;
        }
        .detail-name {
          margin-top: 16px;
          width: 351px;
          height: 42px;
          font-size: 15px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #000000;
          // line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .detail-rule {
          width: 111px;
          height: 20px;
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 15px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .repair-price {
          width: 119px;
          height: 20px;
          font-size: 14px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #333333;
          line-height: 15px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
      }
      .repair-num {
        margin-left: 60px;
        margin-top: 66px;
      }
      .repair-totol {
        margin-top: 61px;
        margin-left: 80px;
      }
      .repair-status {
        margin-top: 56px;
        margin-left: 100px;
      }
    }
  }
}
</style>
