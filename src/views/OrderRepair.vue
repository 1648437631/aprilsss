<template>
  <div class="tabs">
    <div class="tab-content">
      维修订单
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <!-- 动态内容 -->
          <div class="repair-content">
            <div class="repair-time">
              <div>2022-02-22</div>
              <div>订单号：122222222</div>
              <!-- 动态内容·    -->
              <!-- <div>{{ item.status == 1 }}?运输中,''</div> -->
              <!-- 动态内容·    -->
            </div>
            <div class="repair-goods">
              <template>
                <div class="repair-detail">
                  <div class="detail-left">
                    <img />
                    <div>
                      <div class="detail-name">mususzal sssf</div>
                      <div class="detail-rule">YLD-8080</div>
                      <div class="detail-price">单价:1800</div>
                    </div>
                  </div>
                </div>
              </template>

              <div class="repair-num">222222</div>
              <div class="repair-totol">总价:{{ 88888 }}KD</div>
              <!-- 动态内容·    -->
              <div class="repair-status">
                <div>再次购买</div>
                <div>查看订单</div>
              </div>
              <!-- 动态内容·    -->
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待付款" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="待发货" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="运输中" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  width: 1200px;
  margin: 0 auto;
}
/deep/.el-tabs__active-bar {
  display: none;
}
/deep/.el-tabs__item:hover {
  color: #ed1b35;
}
/deep/.el-tabs.el-tabs--top {
  margin-top: 30px;
}
/deep/.el-tabs__item {
  width: 71px;
  height: 30px;
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  border: 1px solid #e2e2e2;
  margin-right: 25px;
  font-size: 14px;
  font-family: PingFang SC-Heavy, PingFang SC;
  font-weight: 800;
  color: #333333;
  line-height: 30px;
  text-align: center;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
}

/deep/.el-tabs__nav-wrap::after {
  height: 0px;
}

/deep/.el-tabs__active-bar {
  background-color: transparent !important;
}

/deep/.el-tabs__item.is-active {
  // width: 42px;
  // height: 20px;
  font-size: 14px;
  font-family: PingFang SC-Heavy, PingFang SC;
  font-weight: 800;
  color: #ffffff;
  // line-height: 0px;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  background-color: #ed1b35;
}
.tab-content {
  background-color: #ffffff;
  margin-top: 28px;
  margin-left: 21px;

  font-size: 20px;
  font-family: PingFang SC-Heavy, PingFang SC;
  font-weight: 800;
  color: #333333;
  // line-height: 0px;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  .repair-content {
    widows: 1200px;
    margin: 0 auto;
    // height: 2011px;
    background: #ffffff;
    .repair-time {
      background: #fff6f7;

      opacity: 1;
      display: flex;
      justify-content: space-between;

      font-size: 14px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
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
