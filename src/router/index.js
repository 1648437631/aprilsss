import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import HomeView from "../views/HomeView.vue";
import NewArrival from "../views/NewArrival.vue";
import CategoryInside from "../views/CategoryInside.vue";
import Login from "../views/Login.vue";

import Register from "../views/Register.vue";
import Client from "../views/user/Client.vue";
import Info from "../views/user/Info.vue";
import Cart from "../views/Cart.vue";
import Test from "../views/Test.vue";
import Address from "../views/Address.vue";
import Order from "../views/Order.vue";
import WaitPick from "../views/WaitPick.vue";
import Logistic from "../views/Logistic.vue";

import HomeSearch from "../views/HomeSearch.vue";

import Detail from "../views/Detail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // redirect:'/login',
    name: "home",
    component: HomeView,
  },
  {
    path: "/waitpick",
    name: "waitpick",
    component: WaitPick,
  },
  {
    path: "/newarrival",
    name: "newarrival",
    component: NewArrival,
  },
  {
    path: "/categoryinside",
    name: "categoryinside",
    component: CategoryInside,
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
    meta: {
      role: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },

  {
    path: "/search",
    name: "homesearch",
    component: HomeSearch,
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
    meta: {
      role: true
    }
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: {
      role: true
    },
    children: [
      {
        path: "no-data",
        name: "no-data",
        component: () => import("../views/CartNoData.vue"),
      },
      {
        path: "list",
        name: "list",
        meta: {
          role: true
        },
        component: () => import("../views/CartList.vue"),
      },
    ],
  },
  {
    path: "/order",
    name: "order",
    meta: {
      keepAlive: true,
      role: true
    },
    component: Order,
    children: [
      {
        path: "total",
        name: "total",
        component: () => import("../views/Total.vue"),
      },

      {
        path: "repair",
        name: "order-repair",
        component: () => import("../views/OrderRepair.vue"),
      },
      {
        path: "address",
        name: "order-address",
        component: () => import("../views/OrderAddress.vue"),
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

router.beforeEach(async (to, from, next) => {
  try {
    if (to.meta.role) { await store.dispatch('initVuex') }
    next()
  } catch (err) { }
})
export default router;
