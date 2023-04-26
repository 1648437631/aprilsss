<template>
  <div>
    <!--顶部导航 -->
    <div class="top-bar">
      <ul class="dataNavList">
        <li :class="{active:index==currentIndex}" v-for="(item, index) in category" 
        @click=" handleClick(index)"
        
        >
          {{ item.cate_name }}
        </li>
      </ul>
    </div>

    <div>
     
      <div v-show="0==currentIndex ">a</div>
      <div v-show="1==currentIndex ">b</div>
      <div v-show="2==currentIndex ">c</div>
      <div v-show="3==currentIndex ">d</div>
    </div>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      category: "",
      currentIndex: 0,

    };
  },
  mounted() {
    this.init(); // 初始化数据
  },
  methods: {
    handleClick(index) {
      console.log(index);
      this.currentIndex = index;
    },

    init() {
      httpApi.homepageApi.queryCategory().then((res) => {
        console.log("分列列表", res);
        this.category = res.data.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.dataNavList {
  display: flex;
  // 超出部分隐藏
  overflow: hidden;
  list-style: none;
  li {
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
li.active {
    color: #1d4190;
    background-color: #ed1b35;
    cursor: pointer;
  }
}
</style>
