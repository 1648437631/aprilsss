<template>
  <div>
    <div class="top">
      <span>排序：</span>
      <span>综合</span>
      <span>价格</span>
      <span>销量</span>
    </div>
    <div class="fex">
      <div class="item" v-for="(item, index) in searchResult" :key="index">
        <div><img :src="item.image" alt="" /></div>
        <div>
          <span class="unit">kd </span
          ><span class="price"> {{ item.price }} </span>
        </div>
        <div class="title">item.goods_name</div>

        <div class="score">
          <span class="star">
            <img src="../assets/images/redstart.png" alt="" />
            <img src="../assets/images/redstart.png" alt="" />
            <img src="../assets/images/redstart.png" alt="" />
            <img src="../assets/images/redstart.png" alt="" />
            <img src="../assets/images/redstart.png" alt="" />
          </span>
          <span class="wuj">
            <img src="../assets/images/cel_shoucan.png" alt=""
          /></span>
        </div>

        <div class="button">立即购买</div>
      </div>

      
     
   

      
    </div>
  </div>
</template>

<script>
import httpApi from "../http";
export default {
  data() {
    return {
      searchResult: [], //搜索列表
    };
  },
  created() {
    console.log(this.$route.query.keywords);  //
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      httpApi.searchApi.querySearchProduct(this.$route.query.keywords).then((res) => {
        console.log("qinqqiushuju", res);
        this.searchResult = res.data.data.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  width: 1200px;
  margin: 0 auto;
  height: 44px;
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
  .item {
    width: 217px;
    height: 329px;
    background: #ffffff;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    img {
      width: 217px;
      height: 131px;
    }
    .unit {
      font-size: 14px;
    }
    .price {
      width: 103px;
      height: 28px;
      font-size: 20px;
      font-family: PingFang SC-Heavy, PingFang SC;
      font-weight: 800;
      color: #333333;
      line-height: 0px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
    .title {
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
      margin-top: 240px;
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
    }
  }
}
.fex {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .item {
    margin-top: 20px;
    margin-left: 10px;
    width: 217px;
    height: 329px;
    background: #ffffff;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    img {
      width: 100px;
      height: 100px;
    }
    div .unit {
      margin-top: 189px;
      font-size: 14px;
    }
    div .price {
      margin-top: 189px;
      width: 103px;
      height: 28px;
      font-size: 20px;
      font-family: PingFang SC-Heavy, PingFang SC;
      font-weight: 800;
      color: #333333;
      line-height: 0px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
    .title {
      margin-top: 20px;
      width: 159px;
      height: 22px;
      font-size: 16px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
      line-height: 0px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
    .score {
      width: 217px;
      height: 18px;
      .star {
        width: 329px;
        img {
          width: 12px;
          height: 11px;
        }
      }
      .wuj {
        margin-left: 134px;
        img {
          width: 12px;
          height: 11px;
        }
      }
    }
    .button {
      margin-left: 8px;
      margin-top: 86px;
      width: 200px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      background: #ed1b35;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
    }
  }
}
</style>
