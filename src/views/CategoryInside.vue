<template>
  <div class="container">
    <img class="banner-img" src="../assets/images/banner.png" />
    <!-- 双飞翼布局 -->
    <!-- <img class="title-img" src="../../public/厨具专场.jpg" alt="" /> -->
    <img class="title-img" :src="categoryname" alt="" />
    <ul class="top">
      <li>排序：</li>
      <li>综合</li>
      <li>价格</li>
    </ul>
    <div class="cfx">
      <div class="ctx" v-for="(item, index) in categoryList" :key="index">
        <div class="img"><img :src="item.image" /></div>

        <div class="price-bottom">
          <div class="price">
            <div class="price-title">
              {{ $t("index.home.more72") }}
            </div>
          </div>
          <div class="delunit">KD:</div>
          <div class="delprice">{{ item.price }}</div>
        </div>
        <div class="title">{{ item.goods_name }}</div>
        <div class="score">
          <div class="start">
            <img src="../assets/images/start.png" alt="" />
            <img src="../assets/images/start.png" alt="" />
            <img src="../assets/images/start.png" alt="" />
            <img src="../assets/images/start.png" alt="" />
            <img src="../assets/images/start.png" alt="" />
          </div>
          <img src="../assets/images/xin.png" alt="" />
        </div>
        <div class="button" :class="{ active: currentId == index }">
          <span class="bton" @click="goCart(index, item.id)">{{
            $t("index.home.more14")
          }}</span>
        </div>
      </div>
    </div>
    <!-- 商品分页 -->
    <div class="block">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page.sync="curPage"
        :page-size="pageSize"
        layout="->, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 分页 -->
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      category: "", //分列列表
      cid: "291", //291 291表示新品助推 281表示家具 280表示家厨
      currentId: "", //默认选中第一个
      //分页
      total: 0,
      curPage: 1,
      pageSize: 20,
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    $route: {
      handler(newValue, oldValue) {
        this.init(newValue.query.cid);
        //  console.log(newValue,oldValue);
        // console.log(newValue.query.cid);
        this.cid = newValue.query.cid;
      },
      immediate: true,
    },
  },
  //分类名称
  computed: {
    categoryname() {
      //如果是家具专场
      if (this.cid === "291") return "/static/家具专场.jpg";
      if (this.cid === "280") return "/static/厨具专场.jpg";
    },

    categoryList() {
      return this.category.slice(
        this.pageSize * (this.curPage - 1),
        this.pageSize * this.curPage
      );
    },
  },
  methods: {
    goCart(index, val) {
      // console.log(index, val);
      this.currentId = index;
    },

    //分页选择
    handleCurrentChange(val) {
      this.curPage = page;
    },
    init(cid) {
      let data = { page: 1, cid, limit: 200 };
      httpApi.homepageApi.queryCategoryInside(data).then((res) => {
        console.log("专区分类内页cate", res);
        this.category = res.data.data;
        this.total = this.category.length;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  //   height: 1791px;
  margin: 0 auto;
  background: #f9fafc;

  .banner-img {
    width: 1200px;
    height: 360px;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-img {
    width: 1200px;
    margin: 0 auto;
    height: 182px;
  }
  .parent {
    width: 1200px;
    height: 252px;

    .center {
      width: 144px;
      height: 50px;
      font-size: 36px;
      font-family: PingFang SC-Heavy, PingFang SC;
      font-weight: 800;
      color: #ed1b35;
      line-height: 0px;
      -webkit-text-stroke: 1px #ed1b35;
      // text-stroke: 1px #ED1B35;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
  }
  .top {
    margin: 0;
    padding: 0;
    list-style: none;
    margin: 0 auto;
    width: 1200px;
    height: 57px;
    background: #ffffff;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    line-height: 57px;
    text-align: center;
    display: flex;
    li {
      width: 48px;
      height: 22px;
      font-size: 16px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
      margin-left: 25px;
      margin-right: 70px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
  }

  .cfx {
    display: flex;
    flex-wrap: wrap;
    // height: 791px;
    overflow: hidden;
    .ctx {
      margin-top: 15px;
      margin-left: 12px;
      margin-right: 10px;
      width: 217px;
      height: 329px;
      background: #ffffff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;

      .img {
        img {
          width: 193px;
          height: 131px;
        }
      }

      .price-bottom {
        display: flex;
        list-style: none;
        margin-top: 10px;
        .price {
          margin-left: 10px;
          width: 52px;
          height: 26px;
          background: #ed1b35;
          border-radius: 13px 13px 13px 13px;
          opacity: 1;
          .price-title {
            width: 52px;
            height: 26px;
            font-size: 13px;
            font-family: PingFang SC-Heavy;
            font-weight: 800;
            color: #f8f1f1;
            line-height: 26px;
            text-align: center;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
        }
        .delunit {
          margin-top: 5px;
          margin-left: 10px;
          font-size: 12px;
        }
        .delprice {
          margin-top: 10px;
          width: 73px;
          height: 30px;
          font-size: 22px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #333333;
          line-height: 0px;
        }
      }

      .title {
        margin-top: 10px;
        width: 159px;
        height: 22px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
        line-height: 22px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      //评分
      .score {
        margin: 10px auto;
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
          }
        }
        img {
          width: 15px;
          height: 15px;
        }
      }
      .button {
        width: 176px;
        height: 35px;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        border: 1px solid #ed1b35;
        line-height: 35px;
        text-align: center;
        .bton {
          width: 80px;
          height: 28px;
          font-size: 20px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ed1b35;
          line-height: 28px;
          text-align: center;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
      }

      .button.active {
        width: 200px;
        height: 35px;
        background: #ed1b35;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        .bton {
          width: 80px;
          height: 28px;
          font-size: 20px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 28px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
      }
    }
  }

  .block {
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
