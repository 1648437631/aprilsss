<template>
  <div>
    <div class="order-repair">
      维修订单
      <ul>
        <li class="active">全部</li>
        <li>申请中</li>
        <li>待送修</li>
        <li>维修中</li>
        <li>已完成</li>
      </ul>

      <div class="repair-content">
        <div class="repair-time">
          <div>2022-02-22</div>
          <div>订单号：1111111</div>
          <!-- 动态内容·    -->
          <div>已签收</div>
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
          <div class="repair-status">已签收</div>
          <!-- 动态内容·    -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    repairstates() {
      // -1全部，0申请中 1待送修 2待支付 3维修中 4已完成
      // 如果状态是申请中，详情页显示申请中

      
    },
  },
};
</script>

<style lang="less" scoped>
.order-repair {
  margin: 0 auto;
  width: 1200px;
  height: 685px;
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 25px;
      width: 71px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 6px 6px 6px 6px;
      opacity: 1;
      border: 1px solid #e2e2e2;
      color: black;
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
      margin-left: 80px;
    }
  }
}
</style>
