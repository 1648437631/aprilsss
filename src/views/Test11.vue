<template>
  <div>
    <!-- 家具专场 -->
    <div class="furniture">
      <div class="furniture-title">
        <p>{{ $t("index.home.more71") }}</p>
        <div class="more">
          <p>查看更多</p>
          <img src="" alt="" />
        </div>
      </div>
      <!-- <div class="furniture-poster">
                                  <img src="" alt="">
                              </div> -->
      <!-- 商品列表 -->
      <div class="furniture-list">
        <ul>
          <li v-for="(item, index) in insideItem" :key="index">
            <img :src="item.pic" alt="" />
            <div class="sale-price">
              <div class="sale">特卖价</div>
              <div class="price">
                <p class="company">KD</p>
                <p>200.000</p>
              </div>
            </div>
            <div class="product-name">
              <p>商品名称</p>
            </div>
            <!-- 评分 收藏 -->
            <div class="score">
              <div class="start">
                <img src="../assets/images/redstart.png" alt="" />
                <img src="../assets/images/redstart.png" alt="" />
                <img src="../assets/images/redstart.png" alt="" />
                <img src="../assets/images/redstart.png" alt="" />
                <img src="../assets/images/redstart.png" alt="" />
              </div>
              <img src="../assets/images/cel_shoucan.png" alt="" />
            </div>
            <div class="add-car">加入购物车</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  name: "Test",
  data() {
    return {
      insideItem: "", //分列列表
      timeLineHeight: "",
    };
  },
  mounted() {
    this.init();
    this.timeLineHeight = document.documentElement.clientHeight - 210;
    window.onresize = () => {
      this.timeLineHeight = document.documentElement.clientHeight - 210;
    };

  },
  methods: {
    /** 初始化数据 */
    init() {
      httpApi.homepageApi
        .querySectionCategoryInside({cid:291,page:1,limit:20, order: 'DESC',sort:'1',})
        .then((res) => {
          console.log("专区分类内页", res);
          this.insideItem = res.data.data;
        });
    },
  },
};
</script>

<style lang="less" scoped>
// //家具专场
.furniture {
  margin: 0 auto;
  width: 1200px;
  .furniture-title {
    margin: 0 auto;
    width: 1140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 26px;
      color: #333333;
      font-weight: bold;
    }
    .more {
      display: flex;
      align-items: center;
      p {
        font-size: 16px;
        color: #a3a3a3;
      }
      img {
        width: 8px;
        height: 12px;
      }
    }
  }
  // //海报
  // .furniture-poster{
  //     margin: 0 auto;
  //     width: 1200px;
  //     height: 400px;
  //     img{
  //         width: 1200px;
  //         height: 400px;
  //     }
  // }

  //家具专场商品列表
  .furniture-list {
    margin: 0 auto;
    margin-top: 28px;
    width: 1156px;
    ul {
      margin: 0;
      padding: 0;
      width: 1156px;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      li {
        list-style: none;
        width: 191px;
        margin: 0px -1px;
        border: 1px solid #9b9797;

        background: #ffffff;
        img {
          width: 192px;
          height: 192px;
        }
        //特卖价
        .sale-price {
          margin: 0 auto;
          width: 180px;
          display: flex;
          align-items: flex-end;
          .sale {
            color: #ffffff;
            background: #ed1b35;
            height: 15px;
            border-radius: 15px;
            font-size: 10px;
            padding: 0px 4px;
          }
          .price {
            margin-left: 9px;
            display: flex;
            align-items: flex-end;
            .company {
              font-size: 10px;
              margin-right: 7px;
            }
            p {
              margin: 0;
              padding: 0;
              color: #333333;
              font-size: 15px;
            }
          }
        }

        //商品名称
        .product-name {
          margin: 8px auto;
          width: 180px;
          p {
            margin: 0;
            padding: 0;
            text-align: left;
            color: #333333;
            font-size: 12px;
          }
        }
        //评分 收藏
        .score {
          margin: 0 auto;
          width: 180px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .start {
            display: flex;
            img {
              width: 14px;
              height: 14px;
              margin-right: 4px;
              margin-left: 2px;
            }
          }
          img {
            width: 15px;
            height: 15px;
          }
        }

        //加入购物车
        .add-car {
          margin: 0 auto;
          margin-top: 30px;
          margin-bottom: 10px;
          width: 176px;
          height: 35px;
          background: #ed1b35;
          color: #f2f2f2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
