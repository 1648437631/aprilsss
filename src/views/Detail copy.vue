<template>
  <div class="container">
    <!-- 头部导航栏 -->

    <div class="detail">
      <div class="detail-content">
        <!-- 左边商品轮播图 -->

        <div class="detail-left">
          <div v-if="video_url">
            <video
              id="video"
              :src="details.storeInfo.video_urlset"
              loop
              :autoplay="true"
              :interval="3000"
              :duration="1000"
              :circular="true"
              class="main-pic"
              @click="play()"
            ></video>
          </div>
          <div v-else>
            <img
              src="http://q8store.q8gz.com//uploads/attach/2023/01/20230106/c27437944a9289c95a6ccc6dd56dfab6.jpg"
            />
            <!-- <img :src="details.storeInfo.image" class="main-pic" /> -->
          </div>
          <div class="banner">
            <div class="left-bottom">
              <img src="../assets/images/路径 49@3x.png" alt="" />
            </div>

            <div class="banner-content">
              <el-carousel height="150px">
                <el-carousel-item v-for="item in slider_image" :key="item">
                  <img :src="item" alt="" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="right-bottom">
              <img src="../assets/images/路径 292@3x.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 右边商品详细属性 -->
        <div class="detail-right">
          <!-- 商品价格 -->
          <div class="price-title">
            {{ goodName }}
            <div class="goods-price">
              <div class="present-price">
                <p>价格</p>
                <p class="price">KD{{ skuList.price }}</p>
              </div>
              <div class="original-price">
                <p>KD{{ skuList.ot_price }}</p>
              </div>
            </div>
            <!-- 销量 -->
            <div class="sales">
              <p>销量</p>
              <p class="volume">{{ sales
}}</p>
            </div>
          </div>

          <!-- 商品评分  保修期 -->
          <div class="goods-score" v-if="details">
            <div class="score">
              <p>评分</p>

              <img
                :src="
                  index < 3
                    ? 'https://q8store.q8gz.com/uploads/default/Star-red.png'
                    : 'https://q8store.q8gz.com/uploads/default/Star-gray.png'
                "
                v-for="(item, index) in list"
                :key="index"
                @click="getScore(index)"
              />
            </div>
            <!-- 保修期 -->
            <div class="period">维保修：1年</div>
          </div>

          <!-- 商品规格  数据遍历 -->
          <!-- <div class="sku">
                              <p>编号</p>
                              <div class="sku-content">
                                <div class="item">JH024</div>
                              </div>
                            </div> -->

          <!-- 商品多规格 -->
          <div
            class="sku"
            v-for="(item, ida) in details.productAttr"
            :key="ida"
          >
            <p>{{ item.attr_name }}</p>
            <div
              class="sku-content"
              v-for="(value, index) in item.attr_value"
              :key="index"
              @click="
                getSku(index, ida, value.attr, item.checked == value.attr)
              "
              :class="
                item.checked !== value.attr || value.hasAttr ? '' : 'active'
              "
            >
              <p class="value">{{ value.attr }}</p>
            </div>
          </div>

          <!-- 库存 -->
          <div class="stock">
            <p>库存</p>
            <!-- <div class="stock-content">{{ details.storeInfo.stock }}</div> -->
          </div>

          <!-- 数量 收藏 分享 -->
          <div class="choose-num">
            <!-- 左边数量选择 -->
            <div class="left">
              <p>数量</p>
              <!-- 数量限制 -->
              <div class="num-limit">
                <div class="calculation">
                  <div class="buttom" @click="decreaseNum(num, -1)">-</div>
                  <div class="num">{{ num }}</div>
                  <div class="buttom" @click="addNum(num, +1)">+</div>
                </div>
                <!-- <p>
                  (最低起购量：{{
                    details.storeInfo.minimum_purchase_quantity
                  }})
                </p> -->
              </div>
            </div>
            <!-- 右边收藏 分享 -->
            <div class="right">
              <div class="collection">
                <img src="" alt="" />
                <p>收藏</p>
              </div>
              <div class="share">
                <img src="" alt="" />
                <p>分享</p>
              </div>
            </div>
          </div>

          <!-- 备注 -->
          <p class="remarks">备注：该商品不支持退换货</p>

          <!-- 加入购物车 立即购买 -->
          <div class="footer">
            <div class="add-car" @click="goCart({ id: id })">加入购物车</div>
            <div class="now-buy" @click="goBuy({ id: id })">立即购买</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 推荐商品 -->
    <div class="recommend">
      <div class="recommend-title">推荐商品</div>
    </div>

    <!-- 推荐商品列表 -->
    <div class="recommend-list">
      <!-- 商品列表 -->
      <div class="goods-item">
        <img src="" alt="" />
        <!-- 价格 -->
        <div class="goods-price">
          <!-- 现价 -->
          <div class="present-price">
            <p>KD</p>
            <!-- <p class="price">{{details.storeInfo.price}}</p> -->
          </div>
          <!-- 原价 -->
          <div class="original-price">
            <!-- <p>KD {{ details.storeInfo.ot_price
 }}</p> -->
          </div>
        </div>
        <!-- 商品名称 -->
        <div class="goods-name">{{ goodName }}</div>

        <!-- 评分和收藏 -->
        <div class="goods-score">
          <!-- 评分 -->
          <div class="score">
            <img src="../assets/images/redstart.png" alt="" />
            <img src="../assets/images/redstart.png" alt="" />
            <img src="../assets/images/redstart.png" alt="" />
            <img src="../assets/images/redstart.png" alt="" />
            <img src="../assets/images/redstart.png" alt="" />
          </div>
          <!-- 收藏 -->
          <img src="" alt="" class="collect" />
        </div>

        <!-- 立即购买 -->
        <div class="now-buy">立即购买</div>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="recommend" v-if="details" >
      <div class="recommend-title" v-if="details.storeInfo.description">{{ details.storeInfo.description }}</div>
    </div>

    <div class="detailed"></div>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      menu: false,
      details: "",
      guessid: "",
      num: 1, //商品数量
      page: 1,
      arr: "", //默认
      // id: "", //商品id
      goodName: "", //商品名称
      slider_image: [],
      video_url: "",
      productAttr: "", //商品规格
      start: [1, 2, 3, 4, 5],
      skuList: {},
      checkedArr: [],
      list: [],
      Value: "",
      id: "",
      sales:""

      
    };
  },
  created() {
    console.log(this.$route.query); //{id:'5011'}
    debugger
    console.log(this.$route.query.type);
    // console.log(this.$route.params.stock);
  },
  mounted() {
    this.init();
  },
  methods: {
    //选择商品规格
    getSku(index, ida, val) {
      console.log(index, ida, val);
      //     console.log(value.attr_value);
      let hasAttr = 0;
      httpApi.cartApi
        .queryProductCheckAttr({ id: 7146, type: ida, attr: val })
        .then((res) => {
          console.log("接口查找规格数据", res);
          if (res.data.status == 200) {
            hasAttr = res.data.data.findIndex((v) => {
              return v === val;
            });
            console.log("赋值后新数据", hasAttr);
            let ajaxAttr = res.data.data.join(",");
            let productAttr = this.productAttr;
            productAttr.forEach((v) => {
              v.attr_value = v.attr_value.map((k) => {
                return {
                  ...k,
                  hasAttr: ajaxAttr.indexOf(k.attr) == -1,
                };
              });
            });

            productAttr.forEach((v) => {
              if (v.checked) {
                let checkStatus = v.attr_value.filter((k) => {
                  return v.checked === k.attr;
                }); //找出对应选中规格状态
                if (checkStatus[0].hasAttr) {
                  checkStatus[0].check = false;
                  let index = this.checkedArr.findIndex((v) => {
                    return v === checkStatus[0].attr;
                  });
                }
              }
            });
            //更新视图
            this.$set(this.details, "productAttr", productAttr);
          }
        });
    },
    // 加减商品数
    decreaseNum(num, type) {
      if (num == 1 && type == -1) {
        this.$message.warning("商品至少保留一件");
        return;
      }
      this.num--;
    },
    addNum() {
      if (this.details?.storeInfo?.stock == 0) {
        return false;
      }
      if (this.details?.storeInfo?.quota == 0) {
        return false;
      }
      this.num++;
    },

    // 获取评分
    getScore(index) {
      // console.log(index);
      if (token) {
        let stars = index + 1;
        this.details.storeInfo.stars = stars;
        httpApi.cartApi
          .quertProductUserStar({
            product_id: this.details.storeInfo.id,
            stars,
          })
          .then((res) => {
            console.log("商品评:", res);
          });
      } else {
        this.$router.push({
          path: "/login",
        });
        this.$message.info("请登录");
      }
    },
    goCart(id) {
      console.log(id.id);
      let value = this.details.productAttr[0].attr_value[0].attr;
      let uniqueId = this.details.productValue[value].unique;
      httpApi.cartApi
        .queryCartAdd({
          productId: id.id,
          uniqueId: uniqueId,
          cartNum: 1,
          new: 0,
        })
        .then((res) => {
          let data = res.data.data;
          // console.log("jiarufouc:", data);
          this.$router.push({
            path: "/cart/list",
          });
        });
    },
    goBuy(id) {
      console.log(id.id);
      let value = this.details.productAttr[0].attr_value[0].attr;
      let uniqueId = this.details.productValue[value].unique;
      httpApi.cartApi
        .queryCartAdd({
          productId: id.id,
          uniqueId: uniqueId,
          cartNum: 1,
          new: 0,
        })
        .then((res) => {
          let data = res.data.data;
          // console.log("jiarufouc:", data);
          this.$router.push({
            path: "/cart/list",
            query: {
          id: id.id,
        },
          });
        })
    },
    init() {
      // console.log(this.$route.query.id);
      // console.log(this.$route.query.type);
      httpApi.homepageApi
        .queryDetails({
          id: this.$route.query.id,
          type: this.$route.query.type,
        })
        .then((res) => {
          let data = res.data.data;
          console.log("商品详情页:", data);
          this.details = data;
          this.id = data.id;
          this.guessid = data.storeInfo.id;
          this.skuList.image = data.storeInfo.image;
          this.skuList.stock = data.storeInfo.stock;
          this.skuList.price = data.storeInfo.price;
          this.goodName = data.storeInfo.store_name;
          this.video_url = this.details.storeInfo.video_url;
          this.slider_image = res.data.data.storeInfo.slider_image;
          this.productAttr = res.data.data.productAttr;
          this.list = res.data.data.productAttr;
          this.Value = res.data.data.productValue;
          let sales = data.storeInfo.sales
          this.sales = sales
          // console.log(sales);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  background: #f9fafc;
  overflow: hidden;
  .detail {
    margin: 0 auto;
    margin-top: 64px;
    width: 1200px;
    .detail-content {
      width: 1200px;
      display: flex;
      background-color: #fbf9f9;
      .detail-left {
        height: 635px;
        .main-pic {
          width: 488px;
          height: 488px;
        }
        .banner {
          // height:146px;
          display: flex;
          .left-bottom img {
            width: 11px;
            height: 21px;
            margin-top: 50px;
          }
          .banner-content {
            width: 500px;
            height: 100px;
            margin-left: 20px;
            img {
              margin-top: 20px;
              width: 100px;
              height: 100px;
              margin-left: 10px;
              background-color: aqua;
            }
          }
          .right-bottom img {
            width: 11px;
            height: 21px;
            margin-top: 50px;
            margin-left: -80px;
          }
        }
      }
      //右边商品详细属性
      .detail-right {
        margin-top: 20px;
        width: 660px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
        //商品标题
        .title {
          font-size: 16px;
          color: #333333;
          font-weight: 800;
        }
        //商品价格
        .price-title {
          margin-top: 30px;
          width: 555px;
          height: 40px;
          background-color: #ffeff1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .goods-price {
            margin-left: 10px;
            height: 40px;
            display: flex;
            align-items: center;
            .present-price {
              height: 20px;
              display: flex;
              align-items: flex-end;
              p {
                margin: 0;
                padding: 0;
                font-size: 15px;
                color: #333333;
              }
              .price {
                margin: 0;
                padding: 0;
                margin-left: 20px;
                font-size: 19px;
                color: #ed1b35;
              }
            }
            //原价
            .original-price {
              margin-left: 26px;
              p {
                font-size: 14px;
                color: #999999;
                text-decoration: line-through;
              }
            }
          }

          //销量
          .sales {
            margin-right: 16px;
            display: flex;
            align-items: center;
            p {
              font-size: 15px;
              color: #999999;
            }
            .volume {
              margin-left: 17px;
              font-size: 15px;
              color: #999999;
            }
          }
        }

        //商品评分
        .goods-score {
          margin-top: 24px;
          width: 502px;
          display: flex;
          justify-content: space-between;
          .score {
            display: flex;
            align-items: flex-end;
            p {
              margin: 0;
              padding: 0;
              font-size: 15px;
              color: #999999;
              margin-right: 30px;
            }
            img {
              width: 18px;
              height: 17px;
              margin-right: 4px;
            }
          }
          //保修期
          .period {
            font-size: 16px;
            color: #999999;
          }
        }

        //商品规格
        .sku {
          display: flex;
          // align-items: flex-end;
          p {
            margin: 0;
            padding: 0;
            margin-top: 40px;
            font-size: 15px;
            color: #999999;
            margin-right: 30px;
          }
          .sku-content {
            margin-top: 22px;
            width: 540px;
            display: flex;
            flex-wrap: wrap;
            .item {
              margin-right: 25px;
              margin-bottom: 10px;
              font-size: 13px;
              color: #333333;
              padding: 10px 36px;
              border: 1px solid #999999;
            }
          }
        }

        //库存
        .stock {
          margin-top: 12px;
          display: flex;
          align-items: flex-end;
          p {
            margin: 0;
            padding: 0;
            font-size: 15px;
            color: #999999;
            margin-right: 30px;
          }

          .stock-content {
            width: 162px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f4f5f9;
            border: 1px solid #999999;
            font-size: 13px;
          }
        }

        //数量 收藏 分享
        .choose-num {
          margin-top: 15px;
          width: 640px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            display: flex;
            align-items: center;
            p {
              margin: 0;
              padding: 0;
              font-size: 15px;
              color: #999999;
              margin-right: 30px;
            }
            .num-limit {
              display: flex;
              align-items: center;
              .calculation {
                width: 98px;
                height: 30px;
                display: flex;
                border: 1px solid #999999;
                border-radius: 4px;
                .buttom {
                  width: 30px;
                  height: 30px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .num {
                  width: 36px;
                  height: 30px;
                  border-left: 1px solid #999999;
                  border-right: 1px solid #999999;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              //最低起购量
              p {
                margin-left: 16px;
                font-size: 13px;
                color: #ed1b35;
              }
            }
          }

          //收藏 分享
          .right {
            display: flex;
            align-items: center;
            .collection {
              display: flex;
              align-items: center;
              margin-right: 35px;
              img {
                width: 22px;
                height: 20px;
              }
              p {
                margin-left: 13px;
                font-size: 15px;
                color: #666666;
              }
            }
            .share {
              display: flex;
              align-items: center;
              img {
                width: 22px;
                height: 20px;
              }
              p {
                margin-left: 13px;
                font-size: 15px;
                color: #666666;
              }
            }
          }
        }

        //备注
        .remarks {
          margin: 0;
          padding: 0;
          margin-top: 40px;
          font-size: 15px;
          color: #999999;
        }

        //加入购物车 立即购买
        .footer {
          margin-top: 14px;
          width: 390px;
          height: 46px;
          display: flex;
          justify-content: space-between;
          .add-car {
            width: 178px;
            height: 44px;
            border: 1px solid #ed1b35;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ed1b35;
            background: #ffeded;
          }
          .now-buy {
            width: 178px;
            height: 44px;
            border: 1px solid #ed1b35;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            background: #ed1b35;
          }
        }
      }
    }
  }

  //推荐商品
  .recommend {
    margin: 0 auto;
    margin-top: 300px;
    margin-bottom: 16px;
    width: 1200px;
    height: 38px;
    background: #f2f2f2;
    .recommend-title {
      width: 126px;
      height: 38px;
      background: #ed1b35;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  //推荐商品列表
  .recommend-list {
    margin: 0 auto;
    margin-top: 16px;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    .goods-item {
      margin-right: 48px;
      margin-bottom: 16px;
      width: 192px;
      height: 326px;
      background: #ffffff;
      overflow: hidden;
      img {
        width: 192px;
        height: 192px;
      }
      .goods-price {
        width: 180px;
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        .present-price {
          display: flex;
          align-items: flex-end;
          p {
            margin: 0;
            padding: 0;
            color: #333333;
            font-size: 10px;
          }
          .price {
            margin-left: 7px;
            font-size: 15px;
          }
        }
        .original-price {
          margin-left: 10px;
          p {
            margin: 0;
            padding: 0;
            font-size: 8px;
            color: #999999;
            text-decoration: line-through;
          }
        }
      }

      //商品名称
      .goods-name {
        margin: 0 auto;
        margin-top: 8px;
        width: 180px;
        font-size: 12px;
        color: #333333;
        text-align: left;
      }

      //评分和收藏
      .goods-score {
        margin: 0 auto;
        margin-top: 10px;
        width: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .score {
          display: flex;
          img {
            width: 12px;
            height: 12px;
            margin-right: 4px;
          }
        }
        .collect {
          width: 16px;
          height: 14px;
        }
      }

      //立即购买
      .now-buy {
        margin: 0 auto;
        margin-top: 15px;
        width: 174px;
        height: 33px;
        border: 1px solid #ed1b35;
        font-size: 18px;
        color: #ed1b35;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  //商品详情信息 一般都是没有的 后期可能需要删除该排版
  .detailed {
    margin: 0 auto;
    width: 1200px;
    height: 590px;
    background-color: #ffffff;
  }

  .bar {
    margin-top: 90px;
    width: 100%;
    background: #ffffff;
  }
}
</style>
