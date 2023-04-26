<template>
  <div class="container">
    <img class="banner" src="../assets/images/banner.png" alt="" />
    <img class="title" src="../assets/images/新品上线.jpg" alt="" />
    <div class="main">
      <div class="top">
        <span>排序：</span>
        <span>综合</span>
        <span>价格</span>
        <span>销量</span>
      </div>
      <!-- 商品信息 -->
      <div class="content">
        <div><img /></div>
        <div>
          <span class="title">新品上新价</span> <span class="unit">kd</span
          ><span class="price">168.000</span>
        </div>
        <div class="product-title">Modern Mininalist</div>
        <div>
          <img src="../assets/images/start.png" alt="" />
          <img src="../assets/images/start.png" alt="" />
          <img src="../assets/images/start.png" alt="" />
          <img src="../assets/images/start.png" alt="" />
          <img src="../assets/images/start.png" alt="" />
          <img src="../assets/images/love.png" alt="" />
        </div>
        <div class="button">立即抢购</div>
      </div>
    </div>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {



};
</script>

<style lang="less" scoped>
.container {
  width: 1920px;
  height: 3088px;
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
    .content {
      margin-top: 20px;
      width: 217px;
      height: 330px;
      background: #ffffff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
    }
  }
}
</style>
