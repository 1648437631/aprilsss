<template>
  <div>
    <Header></Header>
    <OrderHeader v-bind:title="title" v-bind:subtitle="subtitle">
      <template v-slot:tip>
        <span>{{ tip }}</span>
      </template>
    </OrderHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
export default {
  name: "order",
  components: {
    OrderHeader,
  },
  data() {
    return {
      title: "",
      subtitle: "",
      tip: "",
    };
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/order/detail") {
      this.title = "个人中心/我的订单/订单详情";
      this.tip = "请谨防钓鱼链接";
    } else if (path == "/order/pay") {
      this.title = "个人中心/我的订单/订单支付";
      this.tip = "请认真填写地址";
    } else if (path == "/order/confirm") {
      this.title = "个人中心/我的订单/送货上门";
      this.tip = "请认真确认订单";
    } else if (path == "/order/list") {
      this.title = "个人中心/我的订单";
    } else if (path == "/order/address") {
      this.title = "个人中心/我的订单/确认收货地址  ";
    } else if (path == "/order/repair") {
      this.title = "个人中心/维修订单";
    } else if (path == "/order/total") {
      this.title = "个人中心/我的订单";
    }
  },
};
</script>

<style lang="scss" scoped></style>
