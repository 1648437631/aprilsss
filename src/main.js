import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import "../src/assets/css/common.css";
// import './assets/css/mycss.css'
import swiper from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import i18n from '@/lang' 




import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

Vue.use(ElementUI,{
	i18n:(key,value)=>i18n.t(key,value)
})
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
