<template>
  <div class="confirmOrder">
    <!-- 头部END -->

    <!-- 主要内容容器 -->
    <div class="content">
      <!-- 选择地址 -->
      <div class="section-address">
        <p class="title">确认收货地址</p>
        <div class="address-body">
          <ul>
            <li>
              <i class="el-icon-edit"></i>
              <span class="name"
                >小松 <span class="phone">13242305360 </span>
                <span class="address">广东省广州市区</span>
              </span>
            </li>
            <li>
              <i class="el-icon-edit"></i>
              <span class="name"
                >小松 <span class="phone">13242305360 </span>
                <span class="address">广东省广州市区</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 选择地址END -->

      <!-- 商品 -->
      <div class="section-goods">
        <div class="title">
          <div class="first-title">
            <div class="fist">商品</div>
            <div class="second">
              <div class="inner">
                <img src="../assets/images/camera.png" />
                <div>
                  <div class="productName">American</div>
                  <div class="productType">栀子花香</div>
                  <div class="time">下单倒计时</div>
                </div>
              </div>
            </div>
          </div>
          <div class="first-title">
            <div class="fist">单价</div>
            <div class="second">
              <div class="inner">KD:199000</div>
            </div>
          </div>
          <div class="first-title">
            <div class="fist">数量</div>
            <div class="second">
              <div class="inner">
                <button>-</button>
                <button>3</button>
                <button>+</button>
              </div>
            </div>
          </div>
          <div class="first-title">
            <div class="fist">总计</div>
            <div class="second">
              <div class="inner">KD:199000</div>
            </div>
          </div>
          <div class="first-title">
            <div class="fist">编辑</div>
            <div class="second">
              <div class="inner">删除</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品END -->

      <!-- 订单备注 -->
      <div class="section-note">
        <div class="message">
          订单备注(10/100)
          <div class="box"></div>
        </div>
        <div class="message">
          选择支付方式
          <div class="pay-way">
            <div class="pay">
              <img src="../assets/images/组 968@3x.png" class="pay pay-ali" />
              <span>Knet 支付</span>
            </div>
            <div class="pay">
              <div class="pay-right">
                <a href="javascript;"
                  ><img src="../assets/images/组 969@3x.png"
                /></a>
                <a href="javascript;"
                  ><img src="../assets/images/组 970@3x.png"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 订单备注 -->
      <div class="section-total">
        <div>
          <div>合计：KD:199:000</div>
          <div>运费：KD:199:000</div>

     
        </div>
        <div><el-button type="danger">结算</el-button></div>
      </div>
    
    </div>

  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      // 虚拟数据
      confirmAddress: 1, // 选择的地址id
      // 地址列表
      address: [
        {
          id: 1,
          name: "陈同学",
          phone: "100861001010000",
          address: "广东 广州市 白云区 ***",
        },
        {
          id: 2,
          name: "陈同学",
          phone: "100861001010000",
          address: "广东 广州市 白云区 ***",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.confirmOrder {
  width: 1200px;
  margin: 0 auto;
  background: #f9fafc;
  overflow: hidden;

  .content {
    margin-top: 94px;
    width: 1200px;
    //   选择地址
    .section-address {
      width: 1200px;
      height: 280px;
      .title {
        font-size: 18px;
      }
      .address-body ul {
        list-style: none;
        li {
          border: 1px solid rgb(245, 11, 11);
          background-color: antiquewhite;
          border-radius: 2%;
          width: 1200px;
          height: 30px;
          margin-top: 30px;
          padding-top: 18px;
          .name {
            margin-top: 30px;
            margin-left: 30px;
            .phone {
              margin-left: 10px;
            }
            .address {
              margin-left: 30px;
            }
          }
        }
      }
    }
    //   选择地址
    // 商品
    .section-goods {
      margin-top: 10px;
      .title {
        list-style: none;
        font-size: 18px;
        display: flex;
        margin-left: -40px;
        .first-title:first-child {
          z-index: 10;
          margin-left: 10px;
          padding-left: 20px;
          height: 300px;
          width: 600px;
          background-color: #dfe0e2;
        }

        .fist {
          margin-left: 10px;
          padding-left: 54px;
        }
        .second {
          margin-top: 83px;
          .inner {
            display: flex;
            margin-left: 62px;
            img {
              margin-top: 20px;
              margin-left: 10px;
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }
    // 商品
    // 订单备注
    .section-note {
      margin: 0 auto;
      width: 1200px;
      height: 400px;
      display: flex;
      justify-content: space-around;
      //   margin-left: 250px;
      background-color: #f9fafc;
      .message {
        margin-top: 20px;
        .box {
          border: 1px solid rgb(110, 112, 110);
          width: 500px;
          height: 100px;
          img {
            width: 100px;
            height: 50px;
          }
        }
        .pay-way {
          display: flex;
          width: 600px;
          height: 159px;
          margin-top: 26px;
          span {
            margin-top: 14px;
          }
          .pay {
            display: flex;
            margin-left: 20px;

            img {
              height: 53px;
            }
            .payname {
              font-size: large;
              color: #fafafa;
            }
          }
        }
      }
   
    }
       //订单备注
       .section-total {
        display: flex;
    justify-content: end;
      }
  }
}
</style>
