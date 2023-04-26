<template>
  <div class="dataNav">
    <button class="dataNavPrev" @click="navPrev">&lt;</button>
    <div class="classification">{{ $t("index.tar.more33") }}</div>
    <ul class="dataNavList" ref="dataNavList">
      <li
        class="dataNavListItem"
        v-for="(item, index) in navList"
        :key="index"
        :style="{ transform: 'translateX(-' + move + 'px)' }"
      >
        {{ item.cate_name }}
      </li>
    </ul>

    <button class="dataNavNext" @click="navNext">></button>
  </div>
</template>

<script>
import httpApi from "@/http/index.js";
//import myaxios from "@/http/Myaxios.js";
export default {
  name: "HomeSwiper",

  data() {
    return {
      navList: [],
      move: 0,
      dataNavListRealWidth: 0,
      dataNavListViewWidth: 0,
    };
  },
  created() {
    this.init();
 

  },
  mounted() {
 
  },
  methods: {
    // 当菜单项向右的可移动距离大于单个菜单项的宽度时，move减去一个菜单项的宽度（即右移移动一个菜单项的宽度），
    // 当菜单项向右的可移动距离小于单个菜单项的宽度时，move等于0（即回到最开始没有移动的状态）
    navPrev() {
      if (this.move > 200) {
        this.move = this.move - 200;
      } else {
        this.move = 0;
      }
    },
    // 当菜单项向左的可移动距离大于单个菜单项的宽度时，move减去一个菜单项的宽度（即左移移动一个菜单项的宽度），
    // 当菜单项向左的可移动距离小于单个菜单项的宽度时，move等于可以向左移动的最大值（即到最末尾）
    navNext() {
      if (
        this.move <
        this.dataNavListRealWidth - this.dataNavListViewWidth - 200
      ) {
        this.move = this.move + 200;
      } else {
        this.move = this.dataNavListRealWidth - this.dataNavListViewWidth;
      }
    },

    init() {
      httpApi.homepageApi.queryCategory().then((res) => {
        console.log("分列列表", res);
        this.navList = res.data.data;
        // console.log(this.navList);
        this.$nextTick(() => {
      // scrollWidth获取整个菜单实际宽度
      this.dataNavListRealWidth = this.$refs.dataNavList.scrollWidth;;length;
      // offsetWidth获取菜单在当前页面可视宽度
      this.dataNavListViewWidth = this.$refs.dataNavList.offsetWidth;
      //实际宽度减去可视宽度就是可移动的范围即move的范围
      // 窗口大小变化时触发。实时更新可视宽度
      window.onresize = () => {
        return (() => {
          this.dataNavListViewWidth = this.$refs.dataNavList.offsetWidth;
          //注1，详见下方
          if (
            this.move >
            this.dataNavListRealWidth - this.dataNavListViewWidth - 200
          ) {
            this.move = this.dataNavListRealWidth - this.dataNavListViewWidth;
          }
        })();
      };
    });
      });


    
    },









    
  },
};
</script>

<style lang="less" scoped>
.dataNav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 109px;
  .classification {
    width: 389px;
    margin-top: 42px;
    height: 35px;
    line-height: 35px;
    background: #ed1b35;
    font-size: 18px;
    color: #0c0c0c;
    border-radius: 5px;
    text-align: center;
  }
  :hover{
    color: #fcfdfd;
  }
  .dataNavList {
    display: flex;
    // 超出部分隐藏
    overflow: hidden;
    .dataNavListItem {
      display: inline-block;
      overflow: hidden;
      height: 35px;
      //每个菜单项的宽度要固定，不然move值无法计算，当然也可以通过其他方法来设置以适应自己的表格
      width: 200px;
      min-width: 200px;
      margin: auto 0;
      border-radius: 5px;
      font-size: 18px;
      text-align: center;
      color: #0c0c0c;
      line-height: 35px;
      // 过渡效果
      transition: transform 0.2s;
    }
    :hover {
      color: #fcfdfd; 
      background-color: #ed1b35;
      cursor: pointer;
    }
  }
  // 按钮样式
  .dataNavPrev,
  .dataNavNext {
    display: inline-block;
    width: 35px;
    min-width: 35px;
    height: 35px;
    margin: auto 0;
    border: none;
    border-radius: 5px;
    text-align: center;
    line-height: 35px;
    background-color: rgba(0, 0, 0, 0);
    &:focus {
      outline: none;
    }
    &:hover {
      color: #1d4190;
      background-color: #c7cede;
      cursor: pointer;
    }
  }
  .dataNavNext {
    margin-left: auto;
  }
}
</style>
