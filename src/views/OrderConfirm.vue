<template>
  <div>
    <div class="box-card">
      <div slot="header" class="clearfix">
        <!-- <divider></divider> -->
        <!-- 默認地址 -->
        <div>送货地址</div>
      </div>
      <div class="address-body">
        <ul>
          <li>
            <img src="../assets/images/组 1126@3x.png" />
            <span class="name"
              >{{ addressInfo.real_name }}
              <span class="phone">{{ addressInfo.phone }} </span>
              <span class="province">{{ addressInfo.province }} </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="readyship">
        待送货商品

        <div class="list">
          <ul class="list-ul" v-for="(item, indexs) in cartInfo" :key="indexs">
            <li>
              <div class="single-time">
                <div class="d0">2022-02-22 12:00:00</div>
                <div class="d1">订单号:{{ data.orderKey }}</div>
              </div>
              <div class="single-content">
                <div class="single-right">
                  <img src="" alt="" />
                  <div class="single-name">
                    <p class="pp1">{{ item.productInfo.store_name }}</p>
                    <p class="pp2">{{ item.productInfo.attrInfo.barcode }}</p>
                    <p class="pp3">{{ item.productInfo.attrInfo.price_o }}</p>
                  </div>
                </div>
                <!-- 空運海運 -->
                <img class="item-detail" :src="value==1?item.transport==1
                ?'https://q8store.q8gz.com/uploads/default/hc.png':'https://q8store.q8gz.com/uploads/default/gc.png'
                :item.transport==2?'https://q8store.q8gz.com/uploads/default/rfj.png':'https://q8store.q8gz.com/uploads/default/gfj.png'" alt="" v-for="value in item.productInfo.transport_mode"
                 :key="value" @click="chooseTransport(indexs,value)">
                
                <!-- 空運海運 -->

                <div class="single-num">x{{ item.cart_num }}</div>

                <div class="single-total">
                  <div class="total-price">
                    <p>实付款：</p>
                    USD {{ item.kd_total }}
                  </div>
                  <div class="freight-price">订单:KD{{ item.kd_total }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 订单备注 -->
      <div class="section-note">
        <div class="message">
          订单备注(10/100)
          <div class="box"></div>
        </div>
        <div class="message">
          选择支付方式
          <div class="pay-way">
            <div
              class="pay pay-paykent"
              :class="{ checked: payType == 'kent' }"
              @click="toPay('kent', 2)"
            >
              <img class="first" src="../assets/images/组 968@3x.png" />
            </div>
            <div
              class="pay pay-payvisa"
              :class="{ checked: payType == 'visa' }"
              @click="toPay('visa', 1)"
            >
              <img class="second" src="../assets/images/visa@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <!-- 订单备注 -->
      <div class="section-total">
        <div>
          <div>合计：KD: {{ priceGroup.kd_total }}</div>
          <div>运费：KD:0:000</div>
        </div>
        <div>
          <el-button type="danger" @click="Sum(addressId, payType, source, key)"
            >结算</el-button
          >
        </div>
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

      data: null, //訂單確認
      addressInfo: "", //地址確認
      cartInfo: "", // 購物車列表
      payType: "", // 支付方式
      priceGroup: "",
      addressId: "",
      source: "",
      key: "",
      uid: "", //用戶id
      orderId: "", //訂單id
      is_h5: 1,
      type: "",
      transportMode: [], //選擇交通方式
    };
  },

  mounted() {
    this.init();
  },
  methods: {
    //結算
   async Sum(addressId, payType, source, key) {
      //console.log("payty", payType);

      let data = {
        addressId,
        payType,
        source,
        key,
        transportMode:this.transportMode
      };
      await this.createNewOrder(data)
      await this.submitOrder()
    },
      //創建訂單
 createNewOrder(data){
    httpApi.orderApi.queryOrderCreateNew(data).then((res) => {
          console.log("新訂單:", res);
          let result = res.data.data.result;
          // console.log(result);
          let orderId = result.orderId;
          this.orderId = orderId;
          console.log(orderId);
          this.user_id = this.uid;
        });
   },
       
     submitOrder(){
         //提交訂單信息
         httpApi.orderApi
          .queryFatoorahPay({
            order_id: this.orderId,
            user_id: this.uid,
            type: this.type,
            is_h5: this.is_h5,
          })
          .then((res) => {
            console.log("tijiao新訂單", res);
            let data = res.data;
            let d = JSON.parse(data);
            window.open(d.data.PaymentURL);
          });
      
    } ,
     

       

    // 選擇運輸方式

    chooseTransport(index,value) {
      // console.log('res:',index,value);
      console.log('index',index)
      console.log('val',value)
      // if (val == 1) {
      //   // this.show = true;
      // } else {
      //   this.show = false;
      // }
      this.cartInfo[index].transport=value
    },

// chooseTransport(index){
//   console.log(index);
// },

    //選擇支付方式
    toPay(val1, val2) {
      console.log(val1, val2); //kent 2
      // this.payType
      if (val2 == "1") {
        this.payType = val2;
        this.type = this.payType;
        console.log("hhgh", val2);
        this.$message("正在用visa支付");
      } else if (val2 == "2") {
        this.payType = val2;
        this.type = this.payType;
        this.$message("正在用kent支付");
      }
    },

    init() {
      httpApi.orderApi.queryOrderConfirm(this.$route.query).then((res) => {
        console.log("訂單確認", res);
        let data = res.data.data;
        this.data = data;
        console.log("訂單確認", data);
        let addressInfo = res.data.data.addressInfo;
        this.addressInfo = addressInfo;
        let priceGroup = res.data.data.priceGroup;
        this.priceGroup = priceGroup;
        let cartInfo = res.data.data.cartInfo;
        this.cartInfo = cartInfo;
        let orderKey = res.data.data.orderKey;
        this.key = orderKey;
        let source = "pc";
        this.source = source;
        let addressId = data.addressInfo.id;
        this.addressId = addressId;
        let uid = res.data.data.userInfo.uid;
        this.uid = uid;

       
        cartInfo.forEach(value => {   
          this.transportMode.push({[value.id]:value.transport});
          
        });


        // console.log("訂單lie", cartInfo);

        // let kdTotal = [];
        // cartInfo.forEach((value) => {
        //  kdTotal.push(value.kd_total);
        // });
        // console.log(kdTotal);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  width: 1200px;
  margin: 0 auto;
  .clearfix {
    width: 1200px;
    background-color: #f9fafc;
    margin-top: 10px;
    div {
      font-size: 20px;
      margin-top: 10px;
      border-bottom: 1px solid #b6b2b2;
    }
  }
  .address-body {
    width: 1200px;
    background-color: #f9fafc;
    cursor: pointer;
    ul {
      height: 48px;
      background: #fff0e8;

      border-radius: 2px 2px 0px 0px;
      list-style: none;
      li {
        height: 48px;
        line-height: 48px;
        img {
          width: 20px;
          height: 20px;
        }
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
  .readyship {
    width: 1200px;
    background: #ffffff;
    .list-ul {
      margin: 0;
      padding: 0;
      width: 1200px;
      padding-top: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        list-style: none;
        width: 1152px;
        // height: 159px;
        margin-bottom: 20px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        .single-time {
          width: 1152px;
          height: 31px;
          background: #f2ffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          div {
            font-size: 12px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
          }
          .single-left {
            display: flex;
            .d0 {
              margin-left: 15px;
            }
            .d1 {
              margin-left: -385px;
            }
            .d2 {
              margin-left: 94px;
            }
          }
        }

        //content
        .single-content {
          width: 1152px;
          height: 128px;
          display: flex;
          align-items: center;

          .single-right {
            display: flex;
            margin-left: 13px;
            img {
              width: 98px;
              height: 101px;
            }
            .single-name {
              width: 297px;
              height: 101px;
              margin-left: 12px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              p {
                margin: 0;
                padding: 0;
                font-size: 13px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
              }
              .pp1 {
                color: #000000;
                word-wrap: break-word;
                text-align: left;
                overflow-wrap: break-word;
                overflow: hidden;
                text-overflow: ellipsis;
                /*！autoprefixer: on */
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                /*！autoprefixer: off */
              }
              .pp2 {
                color: #999999;
                text-align: left;
              }
              .pp3 {
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                color: #333333;
              }
            }
          }
.item-detail{
  margin-left:10px;
  img{
    width:50px;
    height:50px;

  }
  img:hover{
    background-image: url(../assets/images/air.png);
  }

}




          //数量
          .single-num {
            margin-left: 188px;
            font-size: 14px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #707070;
          }

          //总价
          .en-total {
            margin-left: 155px !important;
          }
          .ar-total {
            margin-left: 150px !important;
          }
          .single-total {
            // width: 128px;
            margin-left: 175px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .total-price {
              display: flex;
              font-size: 13px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #ff0000;
              p {
                padding: 0;
                margin: 0;
                color: #131313;
              }
            }
            // .freight-price{
            //     font-size: 12px;
            //     font-family: PingFang SC-Regular, PingFang SC;
            //     font-weight: 400;
            //     color: #131313;
            // }
          }

          //查看
          .en-see {
            margin-left: 68px !important;
          }
          .ar-see {
            margin-left: 80px !important;
          }
          .single-see {
            margin-left: 146px;
            font-size: 12px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
          }
        }
      }
    }
  }
  // .subscribe {
  //   width: 1200px;
  //   background: #ffffff;
  //   // display: flex;

  //   .time {
  //     width: 450px;
  //     height: 20px;
  //     border: 1px solid black;
  //     border-radius: 2%;
  //     margin-left: 30px;
  //   }
  //   .pay {
  //     margin-left: 580px;
  //   }
  //   .button {
  //     display: flex;
  //     justify-content: flex-end;
  //   }
  // }

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
        cursor: pointer;
        // span {
        //   margin-top: 14px;
        // }
        .pay .checked {
          border: 1px solid #ff6700;
        }
        .pay-paykent {
          margin-left: 30px;
          border: 1px solid #161616;
          // border: 1px solid #ff6700;
          width: 200px;
          height: 120px;
          img .first {
            margin-left: 10px;
            width: 200px;
            height: 80px;
          }
        }
        .pay.pay-payvisa {
          margin-left: 50px;
          border: 1px solid #161616;
          width: 200px;
          height: 120px;
          img .second {
            margin-top: 10px;
            width: 100px;
            height: 80px;
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
</style>
