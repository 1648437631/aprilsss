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
        <div class="tab-box">
          <li v-for="(item, index) in category" :key="index">
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
        </div>
      </div>
      <!-- 分页 -->
      <div class="pagination_section">
        <ul>
          <li>
            <a class="pre" href="#"><span @click="First">前一页</span></a>
          </li>
          <li>
            <a class="one active" href="#"><span>1</span></a>
          </li>
          <li>
            <a class="one" href="#"><span>2</span></a>
          </li>
          <li>
            <a class="one" href="#"><span>3</span></a>
          </li>
          <li>
            <a class="one" href="#"><span>4</span></a>
          </li>
          <li>
            <a class="one" href="#"><span>5</span></a>
          </li>
          <li>
            <a class="last" href="#"><span @click="Next">后一页</span></a>
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
      data: "", //页面数据
      category: [], //页面数据
      num: 0,
      page: 1, //当前页数
      Total: 5, //总页数（向上取整）
      limit: 15, //默认加载数量
      sort: 1, //价格排序判断,
      cid: 279, //商品类别
      pageNum: "", //最终页数
      
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    //封装方法

    getData() {
      let data = { page: this.page, limit: 3, sort: 1, cid: 279 };
      httpApi.homepageApi.querySectionCategoryInside(data).then((res) => {
        this.Total = res.data.data.length;
        console.log(this.Total);
        7;
        var arr = [];
        //限制获取数量
        // for (var i = 0; i < this.limit; i++) {
        //   //加载数据							页数+数量
        //   // if (res.data.data[this.num + i] != undefined) {
        //   //   arr.push(res.data.data[this.num + i]);
        //   // }
        //    arr.push(res.data.data[this.num + i]);
        // }
        console.log(arr); // 15
        this.data = arr;
        this.pageNum = Math.ceil(this.Total / this.data.length);
        console.log(this.pageNum); // 1
        console.log("切换页面数据", res);
        this.category = res.data.data;
      });
    },
    // 下一页
    Next() {
      console.log('出发')
      if (this.page< this.Total) {
        // this.page = total;
        this.page++;
        this.getData()
      } else {
        console.log('错误')
      }
      // 加载数据
      this.num = (this.page - 1) * this.limit;
      //重新加载数据
      // this.getData();
    },

    //上一页
    First() {
      if ((this.page = 1)) {
        this.page = 1;
      } else {
        this.page--;
        this.getData()
      }
      //加载数据
      this.num = this.page - 1 + this.limit;
      //重新加载数据
      // this.getData();
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
    width: 1200px;
    .tab-box {
      width: 1200px;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      li {
        list-style: none;
        width: 191px;
        white-space: wrap;
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
.pagination_section {
  margin-left: 737px;
  width: 381px;
  height: 43px;
  background: #ffffff;
  opacity: 1;
  ul {
    width: 381px;
    display: flex;
    list-style: none;
    height: 43px;
    li {
      margin-left: 20px;
      .pre {
        width: 94px;
        height: 43px;
        background: #ffffff;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        border: 1px solid #ebebeb;
        line-height: 43px;
        text-decoration: none;
      }
      .one {
        text-decoration: none;
        width: 39px;
        height: 43px;
        line-height: 43px;
        .active {
          text-decoration: none;
          width: 39px;
          height: 43px;
          line-height: 43px;
          background: #ed1b35;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
        }
      }
      .last {
        width: 94px;
        height: 43px;
        background: #ffffff;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        border: 1px solid #ebebeb;
        line-height: 43px;
        text-decoration: none;
      }
    }
  }
}
</style>
