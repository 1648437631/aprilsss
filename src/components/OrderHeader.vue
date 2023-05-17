<template>
  <div class="order-header">
    <div class="title">
      <h2>{{ title }}</h2>
      <h2 class="subtitle">{{ subtitle }}</h2>
    </div>
    <!-- <div class="line"></div> -->
  </div>
</template>
<script>
export default {
  name: "order-header",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
<style lang="less">
.order-header {
  width: 1200px;
  margin: 0 auto;

  .title {
    background: #f9fafc;
    width: 1200px;
    height: 22px;
    h2 {
      width: 100%;
      height: 22px;
      font-size: 16px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
      font-size: 16px;
      color: #333333;
    }
    .subtitle {
      width: 300px;
      height: 22px;
      font-size: 12px;
      margin-left: 966px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #5a77ce;
      line-height: 17px;
      text-align: center;
    }
    span {
      font-size: 14px;
      margin-top: 10px;
      color: #999999;
      font-weight: 200;
    }
  }
  // .line {
  //   margin-bottom: 10px;
  //   width: 1179px;
  //   height: 0px;
  //   opacity: 1;
  //   border: 1px solid rgba(112, 112, 112, 0.13);
  // }
  .username {
    float: right;
    a {
      color: #666666;
      font-size: 16px;
    }
  }
}
</style>
