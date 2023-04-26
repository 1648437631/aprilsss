<template>
  <div class="container">
    <!-- 头部导航栏 -->
    <!-- <topBar></topBar> -->

    <div class="car-content">
      <div class="title"><p>购物车</p></div>

      <!-- 全选  -->
      <div class="choose-top">
        <!-- 左 -->
        <div class="left">
          <div class="choose" @click="allSelect">
            <img
              v-if="allChecked"
              src="../assets/images/组 622@3x.png"
              alt=""
            />
            <img v-else src="../assets/images/组 633@3x.png" alt="" />
          </div>
          <p>全选</p>
          <div class="goods">
            <p>商品</p>
          </div>
        </div>
        <!-- 右 -->
        <div class="right">
          <p class="price">单价</p>
          <p class="num">数量</p>
          <p class="tatol">总计</p>
          <p class="edit">编辑</p>
        </div>
      </div>

      <!-- 商品列表遍歷 -->
      <div class="goods-list">
        <ul>
          <li v-for="(item, index) in cartlist" :key="index">
            <!-- 左 -->
            <div class="left">
              <!-- 选中按钮 -->
              <div class="choose-buttom" @click="change(item, index)">
                <img
                  v-if="item.checked"
                  src="../assets/images/组 622@3x.png"
                  alt=""
                />
                <img v-else src="../assets/images/组 633@3x.png" alt="" />
              </div>
              <!-- 商品信息 -->
              <div class="goods-content">
                <img src="item.productInfo.image" alt="" />
                <div class="goods-info">
                  <p>{{ item.productInfo.store_name }}</p>
                  <span>{{ item.productInfo.attrInfo.barcode }}</span>
                </div>
              </div>
            </div>

            <!-- 右 -->
            <div class="right">
              <!-- 价格 -->
              <div class="price">KD:{{ item.truePrice }}</div>
              <!-- 数量 -->
              <div class="num-buttom">
                <div class="reduce" @click="reduceCount(index, item.id)">-</div>
                <div class="num">{{ item.cart_num }}</div>
                <div class="plus" @click="addCount(index, item.id)">+</div>
              </div>
              <!-- 总计 -->
              <div class="total">KD:{{ item.truePrice * item.cart_num }}</div>
              <!-- 删除 -->
              <div class="delete">删除</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 结算 -->
      <div class="settlement">
        <!-- 左 -->
        <div class="left">
          <div class="choose">
            <img src="" alt="" />
            <p>全选</p>
          </div>
          <div class="delete">
            <p>删除</p>
          </div>
        </div>
        <!-- 右 -->
        <div class="right">
          <div class="total">
            合计：
            <p>KD:{{ checkedPrice }}</p>
          </div>
          <div class="foot" @click="goOrder(cartId, local_addr_id, addr_id)">
            结算{{ checkedNum }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      cartlist: [], //购物车列
      // addressInfo: [], //收货地址
      ids: [], //选中的商品id数组
      allChecked: true, //默認選中為false
      cartdd: "",
      cartId: "",
      province_id: "",
      id: "",
      local_addr_id: "",
      addr_id: "",
    };
  },
  computed: {
    // 计算出选中的数量

    checkedNum() {
      let total = 0;
      // 遍历出checked为true的商品
      this.ids.forEach((item) => {
        if (item.checked) total += 1;
      });
      return total;
    },
    // 计算出总金额
    checkedPrice() {
      // debugger
      let total = 0;
      // 遍历出checked为true的商品
      this.ids.forEach((item) => {
        if (item.checked) total += item.truePrice * item.cart_num;
      });
      return total;
    },
  },
  methods: {
    //確認訂單
    goOrder() {
      this.$router.push({
        path: "/order/confirm",
        // query:{
        //   cartdd:cartId,
        //   province_id:local_addr_id,
        //   id:addr_id
        // }
        query: {
          cartId: this.cartdd,
          local_addr_id: this.province_id,
          addr_id: this.id,
        },
      });
      //   let data ={
      //     cartId:this.cartdd,
      //     local_addr_id :this.province_id,
      //     addr_id:this.id
      //   }
      //   // console.log(data);
      // httpApi.orderApi.queryOrderConfirm(data).then((res)=>{
      //   console.log('訂單確認',res);
      // })
    },
    allSelect() {
      if (this.allChecked) {
        this.allChecked = false;
        this.cartlist.forEach((item) => {
          this.$set(item, "checked", false);
        });
      } else {
        this.allChecked = true;
        this.cartlist.forEach((item) => {
          this.$set(item, "checked", true);
        });
      }
    },
    //控制显示隐藏
    change(item, index) {
      // console.log(item,index);
      //index 下标
      this.cartlist[index].checked = !this.cartlist[index].checked;

      //set 三个参数 数组，元素，得到的新值
      this.$set(this.cartlist[index], "checked", this.cartlist[index].checked);

      this.goPicked();
    },
    // 购物车选中的商品列表数据
    goPicked() {
      console.log();
      let arr = [];
      this.cartlist.forEach((value) => {
        if (value.checked) {
          arr.push(value);
        }
      });
      this.ids = arr;
      console.log("选中的商品id数组", arr);
      console.log(this.ids);
      let arrid = [];
      this.ids.forEach((value) => {
        if (value.checked) {
          arrid.push(value.id);
        }
      });
      // console.log(arrid);
      this.cartId = arrid;
      this.cartdd = this.cartId.join(",");
      // console.log(cartdd);
    },

    //購物車數量增減
    reduceCount(index, ids) {
      console.log(index, ids);
      if (this.cartlist[index].cart_num == 1) {
        return false;
      } else {
        let number = this.cartlist[index].cart_num - 1;
        this.cartlist[index].cart_num = number;
        httpApi.cartApi.queryCartDel({ ids, number }).then((res) => {
          // console.log("商品数目jian:", res);
        });
      }
    },
    addCount(index, id) {
      let number = this.cartlist[index].cart_num + 1;
      this.cartlist[index].cart_num = number;
      httpApi.cartApi.queryCartNum({ id, number }).then((res) => {
        // console.log("商品数目jia:", res);
      });
    },
    // 获取购物车列表

    init() {
      httpApi.cartApi
        .queryCartList({ id: this.$route.query.id })
        .then((res) => {
          let cartlist = res.data.data.valid;
          cartlist.forEach((val) => {
            val.checked = true;
            if (!val.checked) this.allSelect = false;
          });

          this.cartlist = cartlist;
          this.goPicked();
          console.log("购物车页:", cartlist);
        });
      // 获取地址信息
      httpApi.addressApi.queryAddress().then((res) => {
        console.log("地址信息:", res);
        let addressInfo = res.data.data.data;
        this.addressInfo = addressInfo;
        console.log("res", addressInfo);
        addressInfo.forEach((value) => {
          if (value.is_default == 1) {
            this.province_id = value.province_id;
            this.id = value.id;
          }
          console.log(this.province_id);
          console.log(this.id);
        });
      });
    },
  },
  created() {
    //获取购物车列表
    this.init();
  },
  mounted () {

  },
 
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  background-color: #f9fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  .car-content {
    width: 1200px;
    // 购物车
    .title {
      width: 1200px;
      height: 40px;
      display: flex;
      align-items: center;
      p {
        margin-left: 20px;
        font-size: 16px;
        color: #333333;
      }
    }

    //全选
    .choose-top {
      width: 1200px;
      height: 46px;
      margin-bottom: 38px;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      .left {
        display: flex;
        align-items: center;
        .choose {
          display: flex;
          align-items: center;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
          }
          p {
            margin: 0;
            padding: 0;
            margin-left: 10px;
            font-size: 16px;
            color: #333333;
          }
        }
        .goods {
          margin-left: 92px;
          p {
            margin: 0;
            padding: 0;
            font-size: 16px;
            color: #333333;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        p {
          margin: 0;
          padding: 0;
          font-size: 16px;
          color: #333333;
        }
        .price {
          margin-right: 102px;
        }
        .num {
          margin-right: 102px;
        }
        .tatol {
          margin-right: 102px;
        }
        .edit {
          margin-right: 26px;
        }
      }
    }

    //商品列表
    .goods-list {
      width: 1200px;
      ul {
        margin: 0;
        padding: 0;
        li {
          width: 1200px;
          height: 118px;
          background-color: #ffffff;
          list-style: none;
          margin: 0;
          padding: 0;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            display: flex;
            align-items: center;
            .choose-buttom {
              width: 20px;
              height: 20px;
              margin-left: 20px;
              cursor: pointer;
              img {
                width: 20px;
                height: 20px;
              }
            }
            //商品信息
            .goods-content {
              margin-left: 104px;
              display: flex;
              overflow: hidden;
              img {
                width: 95px;
                height: 95px;
                border: 1px solid #f2f2f2;
              }
              .goods-info {
                width: 300px;
                height: 95px;
                margin-left: 15px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                overflow: hidden;
                p {
                  margin: 0;
                  padding: 0;
                  margin-top: 5px;
                  font-size: 16px;
                  color: #333333;
                }
                span {
                  margin: 0;
                  padding: 0;
                  margin-top: 10px;
                  font-size: 12px;
                  color: #aeaeae;
                }
              }
            }
          }

          .right {
            display: flex;
            align-items: center;
            .price {
              margin-right: 54px;
              font-size: 12px;
              color: #333333;
            }
            //数量
            .num-buttom {
              width: 100px;
              height: 30px;
              margin-right: 50px;
              background-color: #f2f2f2;
              display: flex;
              align-items: center;
              justify-content: space-around;
              .reduce {
                font-size: 24px;
                color: #707070;
              }
              .plus {
                font-size: 24px;
                color: #707070;
              }
              .num {
                width: 38px;
                height: 22px;
                background-color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333333;
                font-size: 12px;
              }
            }
            //总计
            .total {
              margin-right: 90px;
              font-size: 12px;
              color: #333333;
            }
            //删除
            .delete {
              margin-right: 28px;
              font-size: 12px;
              color: #333333;
            }
          }
        }
      }
    }

    //结算
    .settlement {
      width: 1200px;
      height: 116px;
      margin-top: 10px;
      margin-bottom: 88px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .choose {
          margin-left: 20px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
          p {
            margin: 0;
            padding: 0;
            margin-left: 10px;
            font-size: 16px;
            color: #333333;
          }
        }
        //删除
        .delete {
          margin-left: 92px;
          p {
            margin: 0;
            padding: 0;
            font-size: 16px;
            color: #333333;
          }
        }
      }

      //右
      .right {
        display: flex;
        align-items: center;
        .total {
          margin-right: 20px;
          display: flex;
          align-items: center;
          font-size: 20px;
          color: #333333;
          p {
            margin: 0;
            padding: 0;
          }
        }
        .foot {
          margin-right: 38px;
          width: 120px;
          height: 54px;
          background-color: #ef2329;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 9px;
          font-size: 26px;
          color: #ffffff;
        }
      }
    }
  }

  .bar {
    // margin-top: 90px;
    width: 100%;
    background: #ffffff;
  }
}
</style>
