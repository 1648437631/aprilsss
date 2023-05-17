<template>
  <div class="content">
    <div class="order-repair">
      <ul>
        <li class="active">
          <router-link to="/myorder?type=-1">全部</router-link>
        </li>
        <li><router-link to="/myorder?type=-2">待付款</router-link></li>
        <li><router-link to="/myorder?type=-0">待发货</router-link></li>
        <li><router-link to="/myorder?type=1">运输中</router-link></li>
        <li><router-link to="/myorder?type=2">已入库</router-link></li>
        <li><router-link to="javascript;"></router-link> 待自提</li>
        <li><router-link to="javascript;"></router-link> 申请送货中</li>
        <li><router-link to="javascript;"></router-link> 待付运费</li>
        <li><router-link to="javascript;"></router-link> 已完成</li>
      </ul>
    </div>

    <!-- 订单列表 -->
    <div class="repair-content">
      <div class="repair-time">
        <div>2022-02-22</div>
        <div>订单号：1111111</div>
        <!-- 动态内容·    -->
        <div>已完成</div>
        <!-- 动态内容·    -->
      </div>
      <div class="repair-goods">
        <div class="repair-detail">
          <div class="detail-left">
            <img />
            <div>
              <div class="detail-name">living repair lineall7 shading</div>
              <div class="detail-rule">YLD-8080</div>
              <div class="detail-price">单价:1000.00pf</div>
            </div>
          </div>
        </div>
        <div class="repair-num">x2</div>
        <div class="repair-totol">总价:2000.000KD</div>
        <!-- 动态内容·    -->
        <div class="repair-status">
          <div>再次购买</div>
          <div>查看订单</div>
        </div>
        <!-- 动态内容·    -->
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
import myaxios from "@/http/Myaxios.js";
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
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let data = {
        page: 1,
        limit: 20,
        type: -1,
      };
      httpApi.orderApi.queryNewOrderList(data).then((res) => {
        console.log("rees", res);
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
      color: black;
      a {
        text-decoration: none;
      }
    }
    li.active {
      margin-left: 25px;
      width: 72px;
      height: 30px;
      background: #ed1b35;
      border-radius: 6px 6px 6px 6px;
      opacity: 1;
      color: white;
    }
  }

  //订单列表

  .repair-content {
    widows: 1200px;
    margin: 0 auto;
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
        margin-left: 741px;
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
</style>
