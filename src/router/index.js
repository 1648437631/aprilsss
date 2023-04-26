import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Client from "../views/user/Client.vue";
import Info from "../views/user/Info.vue";
import Cart from "../views/Cart.vue";
import Test from "../views/pagination.vue";
import Address from "../views/Address.vue";
import Order from "../views/Order.vue";
import Logistic from "../views/Logistic.vue";

import HomeChat from "../views/home/HomeChat.vue";
import HomeSearch from "../views/home/HomeSearch.vue";
import HomeLike from "../views/home/HomeLike.vue";
import Detail from "../views/Detail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/detail",
    props: true,
    name: "detail",
    component: Detail,
  },
  {
    path: "/user/client",
    name: "client",
    component: Client,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/user/info",
    name: "info",
    component: Info,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/homechat",
    name: "homechat",
    component: HomeChat,
  },

  {
    path: "/homesearch",
    name: "homesearch",
    component: HomeSearch,
  },
  {
    path: "/homelike",
    name: "homelike",
    component: HomeLike,
  },
  {
    path: "/logistic",
    name: "logistic",
    component: Logistic,
  },
  {
    path: "/address",
    name: "address",
    component: Address,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/cart",
    name: "cart",
    meta: {
      keepAlive: true,
    },
    component: Cart,
    children: [
      {
        path: "no-data",
        name: "no-data",
        component: () => import("../views/CartNoData.vue"),
      },
      {
        path: "list",
        name: "list",
        component: () => import("../views/CartList.vue"),
      },
    ],
  },
  {
    path: "/order",
    name: "order",
    meta: {
      keepAlive: true,
    },
    component: Order,
    children: [
      {
        path: "address",
        name: "order-address",
        component: () => import("../views/OrderAddress.vue"),
      },
      {
        path: "list",
        name: "order-list",
        component: () => import("../views/OrderList.vue"),
      },
      {
        path: "pay",
        name: "order-pay",
        component: () => import("../views/OrderPay.vue"),
      },
      {
        path: "confirm",
        name: "order-confirm",
        component: () => import("../views/OrderConfirm.vue"),
      },
      {
        path: "success",
        name: "order-success",
        component: () => import("../views/OrderSuccess.vue"),
      },
      {
        path: "new",
        name: "order-new",
        component: () => import("../views/OrderNew.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 添加全局前置守卫

// router.beforeEach((to,from,next)=>{
//   console.log(to) //
//   if(to.path =='/user/login' || store.state.account){
//     next()
//   }
// else{
//   router.push('user/register')
// }})
export default router;
