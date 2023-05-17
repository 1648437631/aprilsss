<template>
  <div class="container">
    <img class="banner" src="../assets/images/banner.png" alt="" />
    <!-- <img class="title" src="../../public/static/新品上线.jpg" alt="" /> -->
    <img class="title" :src="newarrivalname" alt="" />
    <div class="main">
      <div class="top">
        <span>排序：</span>
        <span>综合</span>
        <span>价格</span>
        <span>销量</span>
      </div>

      <div class="main-box">
        <div class="box">
          <div
            class="content"
            v-for="(item, index) in limitNewProduct"
            :key="index"
          >
            <img :src="item.image" />
            <div class="second">
              <span class="title">{{ newarrivaldetail }}</span>
              <span class="unit">kd</span
              ><span class="price">{{ item.price }}</span>
            </div>
            <div class="third">限量抢，抢完恢复kd 200</div>
            <div class="product-title">{{ item.goods_name }}</div>
            <div class="start">
              <img src="../assets/images/start.png" alt="" />
              <img src="../assets/images/start.png" alt="" />
              <img src="../assets/images/start.png" alt="" />
              <img src="../assets/images/start.png" alt="" />
              <img src="../assets/images/start.png" alt="" />
              <img class="al" src="../assets/images/xin.png" alt="" />
            </div>
            <div class="button" :class="{ active: currentId == index }">
              <span class="but" @click="goBuy(index)">立即购买</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="->, prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>

      <!-- 分页 -->
    </div>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      pageSize: 10, // 每页5条
      currentPage: 1, //当前第4页
      total: 0,
      newProductsInside: [],
      type: "1", //1 代表新品上线 2 代表限时抢购 3 代表热品竞卖
      currentId: 0, //当前默认选中
      //分页
      total: 0,
      currentPage: 1,
      pageSize: 20,
    };
  },
  mounted() {
    this.init();
  },

  watch: {
    $route: {
      handler(val, oldVal) {
        console.log(val.query.type);
        this.type = val.query.type;
        this.init(val.query.type);
      },
      // 深度观察监听
      immediate: true,
    },
  },

  computed: {
    newarrivaldetail() {
      // 如果是新品上新 ，详情页显示新品上新价
      if (this.type === "1") return this.$t("index.home.more76");
      if (this.type === "2") return this.$t("index.home.more77");
      if (this.type === "3") return this.$t("index.home.more77");
    },
    newarrivalname() {
      //如果是新品上线
      if (this.type === "1") return "/static/新品上线.jpg";
      if (this.type === "2") return "/static/限时抢购.jpg";
      if (this.type === "3") return "/static/好物热卖.jpg";
    },
    limitNewProduct() {
      return this.newProductsInside.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage
      );
    },
  },
  methods: {
    goBuy(val) {
      console.log(val);
      this.currentId = val;
    },
    // handleSizeChange(val) {
    //     console.log(`每页 ${val} 条`);
    //   },
    handleCurrentChange(page) {
      this.currentPage = page;
    },

    init(type) {
      let data = {
        page: 1,
        limit: 250,
        type,
      };
      httpApi.homepageApi.queryNewProductsInside(data).then((res) => {
        console.log("新品上新", res);
        this.newProductsInside = res.data.data;
        this.total = this.newProductsInside.length;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1920px;
  // height: 3088px;
  margin: 0 auto;
  background: #f9fafc;
  border-radius: 0px 0px 0px 0px;
  .banner {
    width: 1920px;
    margin: 0 auto;
  }
  .title {
    width: 1920px;
    margin: 0 auto;
  }
  .main {
    width: 1200px;
    margin: 0 auto;

    .top {
      margin: 0 auto;
      width: 1200px;
      height: 57px;
      background: #ffffff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      display: flex;
      span {
        height: 44px;
        line-height: 44px;
        margin-left: 70px;
        font-size: 16px;
      }
    }

    .box {
      width: 1200px;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      .content {
        margin-right: 23px;
        margin-top: 15px;
        width: 217px;
        height: 383px;
        background: #ffffff;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;

        img {
          width: 217px;
          height: 198px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
        }
        .second {
          width: 217px;
          height: 31px;
          background: linear-gradient(90deg, #f9001f 0%, #ff3d78 100%);

          .title {
            margin-left: 5px;
            font-size: 14px;
            width: 217px;
            height: 31px;
            margin-right: 20px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #ffffff;
            background: linear-gradient(90deg, #f9001f 0%, #ff3d78 100%);
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
          }
          .unit {
            font-size: 22px;
            margin-right: 20px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #ffffff;
          }
          .price {
            width: 105px;
            height: 30px;
            font-size: 22px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #ffffff;
            line-height: 30px;
            align-items: center;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
        }
        .third {
          margin-top: 20px;
          width: 162px;
          height: 20px;
          font-size: 14px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #ed1b35;
          line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .product-title {
          margin-right: 53px;
          width: 159px;
          height: 22px;
          font-size: 16px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #333333;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .start img {
          width: 12px;
          height: 11px;
          opacity: 1;
        }
        .start img.al {
          margin-left: 110px;
          width: 12px;
          height: 11px;
          opacity: 1;
        }
        .button {
          width: 200px;
          height: 35px;
          background: #f9fafc;
          border: 1px solid #ed1b35;
          opacity: 1;

          .but {
            margin-left: 60px;
            height: 35px;
            align-items: center;
            font-size: 20px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #ed1b35;
            line-height: 35px;
          }
        }

        .button.active {
          width: 200px;
          height: 35px;
          background: #ed1b35;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          .but {
            margin-left: 60px;
            height: 35px;
            align-items: center;
            font-size: 20px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 35px;
          }
        }
      }
    }
  }

  .block {
    width: 381px;
    height: 83px;
    .el-pagination {
      margin-top: 40px;
      height: 83px;
      // line-height: 83px;
      text-align: center;
    }
  }
}
</style>
