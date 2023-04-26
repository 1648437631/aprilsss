<template>
  <div id="app">
<Header/>
<KeepAlive v-if="$route.meta.KeepAlive">
  <router-view />

</KeepAlive>
<router-view />
   <Footer/>
  </div>
</template>
<script>
// 引入
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
export default {
  // 注册
  components: {Header,Footer, GoToTop },
  mounted () {
    this.init()
  
  },
  methods: {
init(){
  let token = localStorage.getItem('token') 
 if(!token){
  localStorage.setItem('token','token') //存值
}
  localStorage.setItem('language','en')
}
  },
};
</script>

<style>
/* @import "../src/assets/css/common.css";
  @import "../src/assets/css/mycss.css"; */
</style>
