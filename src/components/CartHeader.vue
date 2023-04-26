<template>
  <div class="cart-header">
    购物车
    <div class="cartcon_title">
      <span><input type="checkbox" /> 全选</span>
      <span>商品</span>
      <span class="price">单价</span>
      <span>数量</span>
      <span>总计</span>
      <span>编辑</span>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.cart-header {
  width: 1200px;
  margin: 0 auto;
    background-color: #fff;
  margin-top: 80px;
  font-size: 16px;
  .cartcon_title {
    width: 1200px;
    background-color: #fff;
    span {
      margin-left: 90px;
    }
    .price {
      margin-left: 440px;
    }
  }
}
</style>
