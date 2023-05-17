<template>
  <div class="container">
    <!-- 头部导航栏 -->
    <!-- <topBar></topBar> -->

    <div class="detail" v-if="detail">
      <div class="detail-content">
        <!-- 左边商品轮播图 -->
        <div class="detail-left">
          <div
            class="show-video"
            v-if="index == -1 && detail.storeInfo.video_url"
          >
            <video
              autoplay
              controls
              loop
              width="486px"
              height="486px"
              :src="detail.storeInfo.video_urlset"
            ></video>
          </div>
          <!-- banner大图 后续需要做放大镜效果 -->
          <img
            v-if="index != -1 || !detail.storeInfo.video_url"
            :src="banner"
            alt=""
            class="big-img"
          />
          <!-- 底部图片切换 -->
          <div class="banner">
            <div class="left-bottom" @click="sliders(1)">
              <img src="../assets/images/left.png" alt="" />
            </div>
            <!-- 轮播 是否需要自写轮播  -->
            <div class="banner-content">
              <div
                class="banner-slider"
                :class="
                  slider == 1
                    ? 'slider-left'
                    : slider == 2
                    ? 'slider-right'
                    : ''
                "
              >
                <!-- 视频 -->
                <div
                  class="video"
                  v-if="detail.storeInfo.video_url"
                  @click="active(-1)"
                  :class="index == -1 ? 'active' : ''"
                >
                  <video
                    width="98px"
                    height="98px"
                    :src="detail.storeInfo.video_urlset"
                  ></video>
                  <img
                    class="play-video"
                    src="../assets/images/play.png"
                    alt=""
                  />
                </div>
                <!-- <video width="98px" height="98px" id="video" loop class="video" :src="detail.storeInfo.video_urlset" v-if="detail.storeInfo.video_url"></video> -->
                <img
                  :class="index == ida ? 'active' : ''"
                  :src="item"
                  alt=""
                  v-for="(item, ida) in detail.storeInfo.slider_image"
                  :key="ida"
                  @click="active(ida)"
                />
              </div>
            </div>
            <div class="right-bottom" @click="sliders(2)">
              <img src="../assets/images/right.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 右边商品详细属性 -->
        <div class="detail-right">
          <div class="title">{{ detail.storeInfo.store_name }}</div>
          <!-- 商品价格 -->
          <div class="price-title">
            <div class="goods-price">
              <div class="present-price">
                <p>price</p>
                <p class="price">KD：{{ detail.storeInfo.price }}</p>
              </div>
              <div class="original-price">
                <p>KD：{{ detail.storeInfo.ot_price }}</p>
              </div>
            </div>
            <!-- 销量 -->
            <div class="sales">
              <p>sales</p>
              <p class="volume">{{ detail.storeInfo.sales }}</p>
            </div>
          </div>

          <!-- 商品评分  保修期 -->
          <div class="goods-score">
            <div class="score">
              <div class="p">评分</div>
              <img
                :src="
                  index < detail.storeInfo.stars
                    ? 'https://q8store.q8gz.com/uploads/default/Star-red.png'
                    : 'https://q8store.q8gz.com/uploads/default/Star-gray.png'
                "
                alt=""
                v-for="(item, index) in 5"
                :key="index"
                @click="score(index)"
              />
            </div>
            <!-- 保修期 -->
            <div class="period">维保修：1年</div>
          </div>

          <!-- 商品规格  数据遍历 -->
          <div class="sku">
            <div class="p">编号</div>
            <div class="sku-content">
              <div class="item">{{ detail.id }}</div>
            </div>
          </div>

          <!-- 商品多规格 -->
          <div
            class="sku"
            v-for="(item, index) in detail.productAttr"
            :key="index"
          >
            <div class="p">{{ item.attr_name }}</div>
            <div class="sku-content">
              <div
                class="item"
                v-for="(ite, ida) in item.attr_value"
                :key="ida"
                @click="clickSpec(index, ida)"
                :class="ite.check ? 'active' : ''"
              >
                {{ ite.attr }}
              </div>
            </div>
          </div>

          <!-- 库存 -->
          <div class="stock">
            <div class="p">库存</div>
            <div class="stock-content">{{ stock }}</div>
          </div>

          <!-- 数量 收藏 分享 -->
          <div class="choose-num">
            <!-- 左边数量选择 -->
            <div class="left">
              <div class="p">数量</div>
              <!-- 数量限制 -->
              <div class="num-limit">
                <div class="calculation">
                  <div class="buttom" @click="reduce">-</div>
                  <div class="num">{{ num }}</div>
                  <div class="buttom" @click="add">+</div>
                </div>
                <p>(最低起购量：1)</p>
              </div>
            </div>
            <!-- 右边收藏 分享 -->
            <div class="right">
              <div class="collection">
                <img
                  v-if="!detail.storeInfo.userCollect"
                  src="../assets/images/xin.png"
                  alt=""
                  @click="collection"
                />
                <img
                  v-if="detail.storeInfo.userCollect"
                  src="../assets/images/love.png"
                  alt=""
                  @click="buycollection"
                />
                <p>收藏</p>
              </div>
              <div class="share">
                <img src="../assets/images/share@2xy.png" alt="" />
                <p>分享</p>
              </div>
            </div>
          </div>

          <!-- 备注 -->
          <p class="remarks">备注：该商品不支持退换货</p>

          <!-- 加入购物车 立即购买 -->
          <div class="footer">
            <div class="add-car" @click="addCar(0)">加入购物车</div>
            <div class="now-buy" @click="addCar(1)">立即购买</div>
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
      <div class="goods-item" v-for="(item, index) in guesslist" :key="index">
        <img :src="item.image" alt="" @click="topack(item.id)" />
        <!-- 价格 -->
        <div class="goods-price">
          <!-- 现价 -->
          <div class="present-price">
            <p>KD</p>
            <p class="price">{{ item.price }}</p>
          </div>
          <!-- 原价 -->
          <div class="original-price">
            <p>KD {{ item.price_o }}</p>
          </div>
        </div>
        <!-- 商品名称 -->
        <div class="goods-name">{{ item.goods_name }}</div>

        <!-- 评分和收藏 -->
        <div class="goods-score">
          <!-- 评分 -->
          <div class="score">
            <img
              :src="
                idx < item.stars
                  ? 'https://q8store.q8gz.com/uploads/default/Star-red.png'
                  : 'https://q8store.q8gz.com/uploads/default/Star-gray.png'
              "
              alt=""
              v-for="(ite, idx) in 5"
              :key="idx"
            />
            <!-- <img src="../assets/images/redstart.png" alt=""> -->
            <!-- <img src="../assets/images/redstart.png" alt=""> -->
            <!-- <img src="../assets/images/redstart.png" alt=""> -->
            <!-- <img src="../assets/images/redstart.png" alt=""> -->
            <!-- <img src="../assets/images/redstart.png" alt=""> -->
          </div>
          <!-- 收藏 -->
          <img
            v-if="item.userCollect"
            src="../assets/images/cel_shoucan.png"
            alt=""
            class="collect"
          />
          <img
            v-if="!item.userCollect"
            src="../assets/images/xin.png"
            alt=""
            class="collect"
          />
        </div>

        <!-- 立即购买 -->
        <div class="now-buy" @click="topack(item.id)">立即购买</div>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="recommend">
      <div class="recommend-title">商品详情</div>
      <!-- <div class="recommend-desc" v-if="detail.storeInfo.description">
        {{ detail.storeInfo.description }}
      </div> -->
    </div>

    <div class="detailed"></div>

    <!-- 底部组件 -->
    <!-- <div class="bar">
          <buttom-bar></buttom-bar>
      </div> -->
  </div>
</template>

<script>
import axios from "axios";
import myaxios from "@/http/Myaxios";
import store from "@/store";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      detail: null,
      spec_list: null, //商品规格列表
      current_spec: null, //选中商品规格参数
      lang_sn: null, //商品id
      list: [0, 1, 2, 3, 4, 5, 6, 7],
      guessid: "", //猜你喜欢关联id
      guesslist: [], //猜你喜欢列表
      banner: "", //自切换banner图
      slider: 0, //滑动效果标识
      index: -1, //选中下标标识
      num: 1, //商品数量 需要判断该商品是否是限购商品
      suk: [], //查找规格数据
      unique: "", //规格id
      stock: 0, //库存
    };
  },
  methods: {
    topack(id) {
      //初始化
      this.detail = "";
      this.guessid = "";
      this.guesslist = [];
      this.banner = "";
      this.slider = 0;
      this.index = -1;
      this.suk = [];
      this.unique = "";
      this.stock = 0;
      window.scrollTo(0, 0);
      this.init(id);
      // this.$router.push({name:'detail',query:{id}})
    },
    //评分
    score(index) {
      let token = store.state.token;
      if (token) {
        this.detail.storeInfo.stars = index + 1;
        let data = {
          product_id: this.detail.storeInfo.id,
          stars: index + 1,
        };
        httpApi.cartApi.quertProductUserStar(data).then((res) => {
          console.log(res);
        });
      } else {
        alert("请登录");
      }
    },
    buycollection() {
      let token = store.state.token;
      if (token) {
        let id = this.detail.storeInfo.id;
        let data = {
          id,
          category: "product",
          is_app: 1,
        };
        this.detail.storeInfo.userCollect = false;
        httpApi.homepageApi.queryBuyCollection(data).then((res) => {
          console.log(res);
        });
      } else {
        alert("请登录");
      }
    },
    collection() {
      let token = store.state.token;
      if (token) {
        let id = this.detail.storeInfo.id;
        let data = {
          id,
          category: "product",
          is_app: 1,
        };
        this.detail.storeInfo.userCollect = true;
        httpApi.homepageApi.queryCollection(data).then((res) => {
          console.log(res);
        });
      } else {
        alert("请登录");
      }
    },
    reduce() {
      if (this.num != 1) {
        this.num--;
      }
    },
    add() {
      if (this.detail.storeInfo.limit_quantity == 0) {
        this.num++;
      } else {
        if (this.num < this.detail.storeInfo.limit_quantity) {
          this.num++;
        } else {
          alert("超过采购限制数量");
        }
      }
    },
    active(val) {
      console.log("点击事件", val);
      this.index = val;
      if (val != -1) {
        this.banner = this.detail.storeInfo.slider_image[val];
      }
    },
    //滑动
    sliders(val) {
      //添加滑动条件 遍历长度必须大于4 不满足条件不允许滑动
      if (this.detail.storeInfo.video_url) {
        if (this.detail.storeInfo.slider_image.length > 3) {
          this.slider = val;
        }
      } else {
        if (this.detail.storeInfo.slider_image.length > 4) {
          this.slider = val;
        }
      }
    },
    //获取商品详情
    init(id) {
    //   console.log("111", id);
      httpApi.homepageApi.queryDetails({ id }).then((res) => {
        console.log("获取商品详情", res);
        let data = res.data.data;
        this.detail = data;
        this.banner = data.storeInfo.slider_image[0];
        this.stock = data.storeInfo.stock;
        let guessid = data.storeInfo.id;
        this.guessLike(guessid);
      });
    },
    //获取猜你喜欢商品
    guessLike(id) {
      let data = {
        product_id: id,
        page: 1,
        limit: 20,
      };
      httpApi.homepageApi.queryGuessLike(data).then((res) => {
        console.log("猜你喜欢", res);
        this.guesslist = res.data.data;
      });
    },
    //选择规格
    clickSpec(index, idx) {
      console.log("选中规格", index, idx);
      this.detail.productAttr[index].attr_value.forEach((val) => {
        val.check = false;
      });
      this.detail.productAttr[index].attr_value[idx].check = true;
      this.suk[index] = this.detail.productAttr[index].attr_value[idx].attr; //添加选中规格数据
      this.getSpecData();
    },
    //选中规格后，查找当前规格数据
    getSpecData() {
      if (this.suk.length == this.detail.productAttr.length) {
        let suk = "";
        if (this.suk.length == 1) {
          suk = this.suk[0];
        } else {
          suk = this.suk.join(",");
        }
        //查找规格id  unique   多规格处理逻辑有问题 存在没有该规格情况
        console.log("suk", this.detail.productValue[suk].stock);
        this.unique = this.detail.productValue[suk].unique;
        this.stock = this.detail.productValue[suk].stock;
        console.log("规格id", this.detail.productValue[suk].unique);
      }
    },

    //加入购物车
    addCar(value) {
      let token = store.state.token;
      if (!token) {
        alert("请登录");
        return false; //未登录 终止操作
      } else if (this.stock == 0) {
        alert("库存不足");
        return false; //库存为0 终止操作
      } else if (!this.unique) {
        alert("请选择规格");
        return false; //未选择规格 终止操作
      }
      let data = {
        productId: this.detail.id,
        uniqueId: this.unique,
        cartNum: this.num,
        new: value, // value=0  暂存购物车    value=1  直接购买
      };
      httpApi.cartApi.queryCartAdd(data).then((res) => {
        console.log("加入购物车", res);
        //加入购物车 直接购买 都走购物车流程
        if (res.data.status == 200) {
          if (value == 0) {
            this.$router.push({
              path: "/cart/list",
            });
          } else {
            console.log("直接购买", res);
            this.$router.push({
              path: "/order/confirm",
              query: { cartId: res.data.data.cartId },
            });
          }
        } else {
          alert(res.data.msg);
        }
      });
    },

    //立即购买
    buyNow() {
      this.$router.push({
        name: "settlement",
        query: {
          type: 1,
          good_id: this.lang_sn,
          spec_id: this.current_spec.tb_sku_id,
          num: 1,
          order_type: 1,
        },
      });
    },
  },
  created() {
    let id = this.$route.query.id;
    this.lang_sn = id;
    this.init(id);
    window.scrollTo(0, 0); //设置页面跳转滚动距离清零
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  background: #f9fafc;
  overflow: hidden;
  caret-color: rgba(0, 0, 0, 0); //取消文字中竖线
  cursor: default; //设置鼠标移入样式
  .detail {
    margin: 0 auto;
    margin-top: 64px;
    width: 1200px;
    .detail-content {
      width: 1200px;
      display: flex;
      background-color: #ffffff;
      .detail-left {
        margin-top: 20px;
        margin-left: 20px;
        width: 488px;
        .big-img {
          width: 486px;
          height: 486px;
          border: 1px solid #f2f2f2;
        }
        //底部轮播图
        .banner {
          margin-top: 10px;
          width: 504px;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left-bottom {
            cursor: pointer;
            img {
              width: 12px;
              height: 24px;
            }
          }
          .right-bottom {
            cursor: pointer;
            img {
              width: 12px;
              height: 24px;
            }
          }
          .banner-content {
            width: 450px;
            height: 100px;
            display: flex;
            overflow: hidden;
            //设置左右滑动效果
            .slider-left {
              margin-left: 0;
              animation: slider 20s infinite;
            }
            .slider-right {
              margin-left: -450px;
              animation: slider 20s infinite;
            }
            .banner-slider {
              height: 100px;
              display: flex;
              .video {
                margin-right: 10px;
                width: 98px;
                height: 98px;
                border: 1px solid #f2f2f2;
                position: relative;
                background-color: #333333;
                cursor: pointer;
                .play-video {
                  position: absolute;
                  width: 30px;
                  height: 30px;
                  z-index: 2;
                  top: 34px;
                  left: 34px;
                  border: none !important;
                }
              }
              .active {
                border: 1px solid red !important;
              }
              img {
                margin-right: 10px;
                width: 98px;
                height: 98px;
                border: 1px solid #f2f2f2;
                cursor: pointer;
              }
            }
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
          width: 660px;
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
            .p {
              width: 60px;
              margin: 0;
              padding: 0;
              font-size: 15px;
              color: #999999;
              margin-right: 10px;
            }
            img {
              width: 18px;
              height: 17px;
              margin-right: 4px;
              cursor: pointer;
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
          .p {
            width: 60px;
            margin: 0;
            padding: 0;
            margin-top: 40px;
            font-size: 15px;
            color: #999999;
            margin-right: 10px;
          }
          .sku-content {
            margin-top: 22px;
            width: 540px;
            display: flex;
            flex-wrap: wrap;
            .active {
              border: 1px solid red !important;
              background-color: #ed1b35;
              color: #ffffff !important;
            }
            .item {
              margin-right: 25px;
              margin-bottom: 10px;
              font-size: 13px;
              color: #333333;
              padding: 10px 36px;
              border: 1px solid #999999;
              cursor: pointer;
            }
          }
        }

        //库存
        .stock {
          margin-top: 12px;
          display: flex;
          align-items: flex-end;
          .p {
            width: 60px;
            margin: 0;
            padding: 0;
            font-size: 15px;
            color: #999999;
            margin-right: 10px;
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
            .p {
              width: 60px;
              margin: 0;
              padding: 0;
              font-size: 15px;
              color: #999999;
              margin-right: 10px;
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
                  cursor: pointer;
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
              cursor: pointer; //设置鼠标移入样式
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
              cursor: pointer;
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
            cursor: pointer;
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
            cursor: pointer;
          }
        }
      }
    }
  }

  //推荐商品
  .recommend {
    margin: 0 auto;
    margin-top: 20px;
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
      cursor: pointer;
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
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
