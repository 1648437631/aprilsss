<template>
  <div id="app">
    <Header />
    <KeepAlive v-if="$route.meta.KeepAlive">
      <router-view />

    </KeepAlive>
    <router-view />
    <Footer />
  </div>
</template>
<script>
// 引入
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
export default {
  // 注册
  components: { Header, Footer, GoToTop },
  mounted () {
    this.init()

  },
  methods: {
    init () {
     
    }
  },
};
</script>

<style >
/* 去除 scroll-view 组件的滚动条（不支持nvue页面） */
/* ::-webkit-scrollbar {
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	} */

/* @import "../src/assets/css/common.css";
  @import "../src/assets/css/mycss.css"; */
</style>
