<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="title">
        <h2>{{ title }}<slot name="tip"></slot></h2>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
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
  padding: 30px 0;
  width: 1200px;
  margin: 0 auto;
  .title {
//  margin-left:20px;
    margin-top: 54px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    h2 {
      // margin-left:1000px;
      font-size: 16px;
      color: #333333;
    } 
    .subtitle{
      font-size: 12px;
      color:#5A77CE 
    }
    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999999;
      font-weight: 200;
    }
  }
  .username {
    float: right;
    a {
      color: #666666;
      font-size: 16px;
    }
  }
}
</style>
