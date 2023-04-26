<template>

    <div class="dataNav">

    <div class="classification">商品分类</div>
    <ul class="dataNavList" ref="dataNavList">
      <li
        class="dataNavListItem"
        v-for="(item, index) in category"
        :key="index"
        :style="{ transform: 'translateX(-' + move + 'px)' }"
      >
        {{ item.cate_name }}
      </li>
    </ul>


  <div>
    <div class="transport-view">
      <p>
        交通方式<em
          class="icon-down"
          :class="{ up: showDetail }"
          @click="showDetail = !showDetail"
        ></em>
      </p>
    </div>
    <div class="item-detail" v-if="showDetail">
      <img src="../assets/images/air.png" />
      <img src="../assets/images/sea.png" />
    </div>

</div>
</div>
</template>

<script>

import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  name: "Test",
  data() {
    return {
      category: "", //分列列表
    };
  },
mounted () {
    this.init();
},
  methods: {
    /** 初始化数据 */
    init() {
     httpApi.homepageApi.queryCategory().then((res) => {

        console.log("分列列表", res);
        this.category = res.data.data;
      });
    },
  },



}
</script>

<style lang="less" scoped>

.dataNav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 200px;
  .classification {
    width: 200px;
    margin-top: 84px;
    margin-right: -6px;
    height: 35px;
    line-height: 35px;
    background: #ed1b35;
    font-size: 16px;
    // font-weight: bold;
    border-radius: 5px;
    text-align: center;
  }
  .dataNavList {
    display: flex;
    // 超出部分隐藏
    overflow: hidden;
    .dataNavListItem {
      display: inline-block;
    //   overflow: hidden;
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
      color: #1d4190;
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


.icon-down {
  display: inline-block;
  width: 14px;
  height: 10px;
  background: url("../assets/images/an@2x.png") no-repeat center;
  background-size: contain;
  margin-left: 9px;
  transition: all 0.5s;
  cursor: pointer;
  &.up {
    transform: rotate(180deg);
  }
}
.icon-up {
  transform: rotate(180deg);
}

</style>
