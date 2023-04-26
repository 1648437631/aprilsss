<template>
  <div class="content">
    <div class="logistics-header">
      {{ $t("logistics.more1") }}/{{ $t("logistics.more2") }}
    </div>

    <!-- 订单派送中 -->
    <div class="sending">
      <!-- 左 -->
      <div class="sending-left">
        <div class="order-number">订单号: 12345678998</div>
        <div class="status-sending">订单状态</div>
        <div class="consignee">收件人</div>
        <div class="consignee-name">
          <p>姓名:</p>
          <span>广广春</span>
        </div>
        <div class="connect">
          <p>联系方式:</p>
          <span>12345678998</span>
        </div>
        <div class="address">
          <p>地址:</p>
          <span>广州市越秀区先烈中路80号绘画商大厦1906-1907</span>
        </div>
      </div>

      <div class="split-line"></div>

      <!-- 右  这里分为上下两部分排版比较好 -->
      <div class="sending-right">
        <!-- 上下排版 -->
        <div class="sending-repeat">
          <div class="sending-top">
            <!-- <img class="im1" src="../assets/img/组 867@3x.png" alt="">
                                        <img class="im2" src="../assets/img/直线 66@3x.png" alt="">
                                        <img class="im3" src="../assets/img/组 864@3x.png" alt="">
                                        <img class="im4" src="../assets/img/直线 66@3x.png" alt="">
                                        <img class="im5" src="../assets/img/组 863@3x.png" alt="">
                                        <img class="im6" src="../assets/img/直线 66@3x.png" alt="">
                                        <img class="im7" src="../assets/img/组 5410@3x.png" alt="">
                                        <img class="im8" src="../assets/img/直线 66@3x.png" alt="">
                                        <img class="im9" src="../assets/img/组 5414@3x.png" alt=""> -->
          </div>
          <div class="sending-bottom">
            <div
              class="send-status send1"
              :class="
                lang == 'en' ? 'en-send1' : lang == 'ar' ? 'ar-send1' : ''
              "
            >
              <p>已装箱</p>
              <span class="sp1">2022-01-01</span>
              <span class="sp2">14:50:36</span>
            </div>
            <div
              class="send-status send2"
              :class="
                lang == 'en' ? 'en-send2' : lang == 'ar' ? 'ar-send2' : ''
              "
            >
              <p>运输中</p>
              <span class="sp1">2022-01-01</span>
              <span class="sp2">14:50:36</span>
            </div>
            <div
              class="send-status send3"
              :class="
                lang == 'en' ? 'en-send3' : lang == 'ar' ? 'ar-send3' : ''
              "
            >
              <p>已到港</p>
              <span class="sp1">2022-01-01</span>
              <span class="sp2">14:50:36</span>
            </div>
            <div
              class="send-status send4"
              :class="
                lang == 'en' ? 'en-send4' : lang == 'ar' ? 'ar-send4' : ''
              "
            >
              <p>已入库</p>
              <span class="sp1">2022-01-01</span>
              <span class="sp2">14:50:36</span>
            </div>
            <div
              class="send-status send5"
              :class="
                lang == 'en' ? 'en-send5' : lang == 'ar' ? 'ar-send5' : ''
              "
            >
              <p>已完成</p>
              <span class="sp1">2022-01-01</span>
              <span class="sp2">14:50:36</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 运输线 -->
    <!-- <div class="transport"> -->
    <!-- 左 -->
    <!-- <div class="transport-left">
        <img src="" alt="" />
        <div class="transport-text">
          <div class="d1">
            <p>物流公司:</p>
            <span>顺丰快递</span>
          </div>
          <div class="d2">
            <p>官方电话:</p>
            <span>1234567991</span>
          </div>
        </div>
      </div> -->

    <!-- 右 -->
    <!-- <div class="transport-right">
        <div class="transport-time">
          <p>2022-01-01 18:30:30</p>
          <p>2022-01-01 18:30:30</p>
          <p>2022-01-01 18:30:30</p>
          <p>2022-01-01 18:30:30</p>
        </div> -->
    <!-- 图标需要更改  字体大小 颜色需要更改 -->
    <!-- <div style="height: 176px; width: 500px">
          <el-steps direction="vertical" :active="3">
            <el-step
              title="已入库"
              description="【新都区】 新都派件员：小库 电话 12345678998 您的商品已入库请及时领取"
            ></el-step>
            <el-step
              title="已到港"
              description="【新都区】 新都派件员：小库 电话 12345678998 正在为您派件"
            ></el-step>
            <el-step title="运输中..."></el-step>
            <el-step title="已装箱"></el-step>
          </el-steps>
        </div> -->
    <div class="order-inform">
      订单处理信息
      <div class="order-status">
        <div class="left">
          <div class="title-deal">
            <span>处理时间</span>
            <div style="height: 300px">
              <el-steps direction="vertical" title="2023年12月21日" >
                <el-step title="2023年12月21日"></el-step>
                <el-step title="2023年12月21日"></el-step>
                <el-step title="2023年12月21日"></el-step>
              </el-steps>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="title-deal">处理信息</div>
          <div class="inform">
            <span name="title">已入库</span>
            <div name="address">【新都区】 新都派件员：小库 电话 12345678998 您的商品已入库请及时领取"</div>
          </div>
          <div class="inform">
            <span name="title">已入库</span>
            <div name="address">【新都区】 新都派件员：小库 电话 12345678998 您的商品已入库请及时领取"</div>
          </div>
          <div class="inform">
            <span name="title">已入库</span>
            <div name="address">【新都区】 新都派件员：小库 电话 12345678998 您的商品已入库请及时领取"</div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div>
    </div> -->

    <!-- 订单商品列表 -->
    <div class="order-lists">
      <div class="orderlist-header">
        <p class="o1">{{ $t("logistics.more20") }}</p>
        <p
          class="o2"
          :class="lang == 'en' ? 'en-o2' : lang == 'ar' ? 'ar-o2' : ''"
        >
          {{ $t("logistics.more21") }}
        </p>
        <p
          class="o3"
          :class="lang == 'en' ? 'en-o3' : lang == 'ar' ? 'ar-o3' : ''"
        >
          {{ $t("logistics.more22") }}
        </p>
        <p
          class="o4"
          :class="lang == 'en' ? 'en-o4' : lang == 'ar' ? 'ar-o4' : ''"
        >
          {{ $t("logistics.more23") }}
        </p>
      </div>

      <div class="product-list">
        <ul>
          <li>
            <div class="product-name">
              <img src="" alt="" />
              <div class="parameter">
                <p>商品名称</p>
                <span>商品参数</span>
              </div>
            </div>
            <div class="num">x2</div>
            <div class="one-price">200.000KD</div>
            <div class="totals">400.000KD</div>
          </li>
        </ul>
      </div>

      <!-- 订单参数 -->
      <div class="order-parameter">
        <div class="order-record">
          <div class="record-content re1">
            <p>{{ $t("logistics.more24") }}:</p>
            <span>USD: 199.000</span>
          </div>
          <div class="record-content re2">
            <p :class="lang == 'ar' ? 'ar-p2' : lang == 'en' ? 'en-p2' : ''">
              {{ $t("logistics.more25") }}:
            </p>
            <span>ken支付</span>
          </div>
          <div class="record-content re3">
            <p :class="lang == 'ar' ? 'ar-p3' : lang == 'en' ? 'en-p3' : ''">
              {{ $t("logistics.more26") }}:
            </p>
            <span>200积分</span>
          </div>
          <div class="record-content re4">
            <p :class="lang == 'ar' ? 'ar-p4' : lang == 'en' ? 'en-p4' : ''">
              {{ $t("logistics.more27") }}:
            </p>
            <span>USD: --</span>
          </div>
          <div class="record-content re5">
            <p :class="lang == 'ar' ? 'ar-p5' : lang == 'en' ? 'en-p5' : ''">
              {{ $t("logistics.more28") }}:
            </p>
            <span>USD: 60</span>
          </div>
          <div class="record-content re6">
            <p :class="lang == 'ar' ? 'ar-p6' : lang == 'en' ? 'en-p6' : ''">
              {{ $t("logistics.more29") }}:
            </p>
            <span>USD: 199.000</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部组件 -->
    <!-- <div class="bar">
                            <buttom-bar></buttom-bar>
                        </div>
                 -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      lang: null,
    };
  },
  methods: {
    getLogistics() {
      axios({
        method: "get",
        url: this.baseUrl + "mapleOrder/getExpress",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
          lang: localStorage.getItem("lang"),
        },
        data: {
          express_order_id: "",
        },
      }).then((res) => {
        console.log("获取物流信息", res);
      });
    },
  },
  created() {
    this.lang = localStorage.getItem("lang");
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #f9fafc;
  .logistics-header {
    width: 1188px;
    display: flex;
    padding-left: 12px;
    margin-top: 20px;
    font-size: 14px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #333333;
  }

  //订单派送中
  .sending {
    width: 1200px;
    // height: 313px;
    margin-top: 15px;
    background: #ffffff;
    display: flex;

    //左
    .sending-left {
      width: 285px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .order-number {
        margin: 0 auto;
        margin-top: 35px;
        font-size: 14px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
      }
      .status-sending {
        margin: 0 auto;
        margin-top: 36px;
        font-size: 22px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #01c5c4;
      }

      .consignee {
        margin-left: 21px;
        margin-top: 47px;
        font-size: 12px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #000000;
      }

      .consignee-name {
        display: flex;
        margin-top: 10px;
        margin-left: 21px;
        // margin-bottom: 30px;
        font-size: 12px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #666666;
        p {
          margin: 0;
          padding: 0;
        }
        span {
          margin: 0;
          padding: 0;
          padding-left: 10px;
        }
      }
      .connect {
        display: flex;
        margin-top: 10px;
        margin-left: 21px;
        font-size: 12px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #666666;
        p {
          margin: 0;
          padding: 0;
        }
        span {
          margin: 0;
          padding: 0;
          padding-left: 10px;
        }
      }

      .address {
        display: flex;
        margin-top: 10px;
        margin-left: 21px;
        margin-bottom: 30px;
        font-size: 12px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #666666;
        p {
          margin: 0;
          padding: 0;
          margin-right: 10px;
          white-space: nowrap;
        }
        span {
          margin: 0;
          padding: 0;
          padding-right: 58px;
          white-space: wrap;
          text-align: left;
        }
      }
    }

    //分割线  这里的高度有问题
    .split-line {
      width: 0px;
      height: 298px;
      // height: 100%;
      // margin-top: 2%;
      border: 1px solid #e8e8e8;
    }

    //右
    .sending-right {
      width: 984px;
      display: flex;
      align-items: center;
      justify-content: center;

      .sending-repeat {
        .sending-top {
          display: flex;
          align-items: center;
          .im1 {
            width: 40px;
            height: 40px;
          }
          .im2 {
            width: 131px;
          }
          .im3 {
            width: 40px;
            height: 40px;
          }
          .im4 {
            width: 131px;
          }
          .im5 {
            width: 40px;
            height: 40px;
          }
          .im6 {
            width: 131px;
          }
          .im7 {
            width: 40px;
            height: 40px;
          }
          .im8 {
            width: 131px;
          }
          .im9 {
            width: 40px;
            height: 40px;
          }
        }
        .sending-bottom {
          display: flex;
          .send-status {
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
              margin: 0;
              padding: 0;
              margin-top: 11px;
              font-size: 14px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #000000;
            }
            .sp1 {
              margin: 0;
              padding: 0;
              margin-top: 3px;
              font-size: 12px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #333333;
            }
            .sp2 {
              margin: 0;
              padding: 0;
              margin-top: 3px;
              font-size: 12px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #333333;
            }
          }
          .send1 {
            margin-left: -14px;
          }
          .send2 {
            margin-left: 105px;
          }
          .send3 {
            margin-left: 104px;
          }
          .send4 {
            margin-left: 105px;
          }
          .send5 {
            margin-left: 105px;
          }
          .en-send1 {
            margin-left: -56px !important;
          }
          .en-send2 {
            margin-left: 58px !important;
          }
          .en-send3 {
            margin-left: 106px !important;
          }
          .en-send4 {
            margin-left: 106px !important;
          }
          .en-send5 {
            margin-left: 73px !important;
          }
          .ar-send1 {
            margin-left: -41px !important;
          }
          .ar-send2 {
            margin-left: 69px !important;
          }
          .ar-send3 {
            margin-left: 104px !important;
          }
          .ar-send4 {
            margin-left: 102px !important;
          }
          .ar-send5 {
            margin-left: 92px !important;
          }
        }
      }
    }
  }

  //运输线
  //   .transport {
  //     display: flex;
  //     width: 1200px;
  //     height: 234px;
  //     background: #ffffff;
  //     margin-top: 26px;
  //     .transport-left {
  //       width: 285px;
  //       height: 234px;
  //       display: flex;
  //       align-items: center;
  //       border-right: 1px solid #e8e8e8;
  //       img {
  //         width: 103px;
  //         height: 105px;
  //         margin-left: 12px;
  //       }
  //       .transport-text {
  //         margin-left: 15px;
  //         div {
  //           display: flex;
  //           font-size: 12px;
  //           font-family: PingFang SC-Regular, PingFang SC;
  //           font-weight: 400;
  //           color: #000000;
  //           p {
  //             margin: 0;
  //             padding: 0;
  //             margin-right: 10px;
  //           }
  //           span {
  //             margin: 0;
  //             padding: 0;
  //           }
  //         }
  //         .d1 {
  //           margin-bottom: 6px;
  //         }
  //         .d2 {
  //           margin-top: 6px;
  //         }
  //       }
  //     }

  //     .transport-right {
  //       width: 915px;
  //       height: 234px;
  //       display: flex;
  //       align-items: center;
  //       .transport-time {
  //         height: 167px;
  //         margin-left: 66px;
  //         margin-right: 35px;
  //         display: flex;
  //         flex-direction: column;
  //         justify-content: space-between;
  //         p {
  //           margin: 0;
  //           padding: 0;
  //           font-size: 12px;
  //           font-family: PingFang SC-Bold, PingFang SC;
  //           font-weight: bold;
  //           color: #333333;
  //         }
  //       }
  //     }
  //   }
  .order-inform {
    width: 1200px;
    margin: 0 auto;
    margin-top: 10px;
    .order-status {
      display: flex;
      margin-top: 10px;
    }
    .left {
      height:286px ;
      .title-deal {
        width: 400px;
        span{
                    margin-left:80px;
        }
        .el-step{
padding-top: 10px;
        }
      }
    }
    .right{
        .title-deal{
                    width: 800px;        
        }   
.inform{
margin-top:48px;
}
    }
  }

  //订单列表
  .order-lists {
    width: 1200px;
    background: #ffffff;
    margin-top: 29px;
    margin-bottom: 120px;
    .orderlist-header {
      display: flex;
      align-items: center;
      width: 1200px;
      height: 36px;
      background: #f8ffff;
      p {
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
      .o1 {
        margin-left: 153px;
      }
      .o2 {
        margin-left: 369px;
      }
      .o3 {
        margin-left: 160px;
      }
      .o4 {
        margin-left: 150px;
      }

      .en-o2 {
        margin-left: 305px !important;
      }
      .en-o3 {
        margin-left: 136px !important;
      }
      .en-o4 {
        margin-left: 120px !important;
      }
      .ar-o2 {
        margin-left: 345px !important;
      }
      .ar-o3 {
        margin-left: 138px !important;
      }
      .ar-o4 {
        margin-left: 94px !important;
      }
    }

    .product-list {
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          display: flex;
          width: 1200px;
          height: 106px;
          align-items: center;
          border-bottom: 1px solid #efefef;
          .product-name {
            display: flex;
            margin-left: 31px;
            img {
              width: 63px;
              height: 65px;
            }
            .parameter {
              width: 223px;
              margin-left: 16px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-between;
              p {
                width: 223px;
                margin: 0;
                padding: 0;
                font-size: 12px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #000000;
                white-space: wrap;
                text-align: left;
              }
              span {
                margin: 0;
                padding: 0;
                font-size: 12px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #999999;
              }
            }
          }

          .num {
            margin-left: 243px;
            font-size: 13px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #707070;
          }

          .one-price {
            margin-left: 150px;
            font-size: 13px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #131313;
          }

          .totals {
            margin-left: 106px;
            font-size: 13px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #131313;
          }
        }
      }
    }

    //订单参数
    .order-parameter {
      width: 1200px;
      display: flex;
      flex-direction: row-reverse;
      .order-record {
        margin-right: 34px;
        .record-content {
          display: flex;
          margin-bottom: 10px;
          .ar-p2 {
            margin-left: 11px;
          }
          .ar-p3 {
            margin-left: -8px;
          }
          .ar-p4 {
            margin-left: 8px;
          }
          .ar-p5 {
            margin-left: -13px;
          }
          .ar-p6 {
            margin-left: -9px;
          }
          .en-p2 {
            margin-left: 6px;
          }
          .en-p3 {
            margin-left: 13px;
          }
          .en-p4 {
            margin-left: 42px;
          }
          .en-p5 {
            margin-left: 8px;
          }
          .en-p6 {
            margin-left: 2px;
          }
          p {
            margin: 0;
            padding: 0;
            margin-right: 50px;
            font-size: 13px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
          }
          span {
            margin: 0;
            padding: 0;
            font-size: 13px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #333333;
          }
        }

        .re1 {
          margin-top: 30px;
        }
        .re4 {
          margin-left: 26px;
        }
        .re5 {
          margin-left: 13px;
        }
        .re6 {
          margin-left: 13px;
          p {
            margin-right: 22px !important;
          }
          span {
            font-size: 16px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #ff0000;
          }
        }
      }
    }
  }

  .bar {
    width: 100%;
    background: #ffffff;
  }
}
</style>
