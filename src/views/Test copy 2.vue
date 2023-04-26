<template>
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
</template>

<script>
export default {
  data() {
    return {
      showDetail: false, //是否显示運輸详情
    };
  },
};
</script>

<style lang="less" scoped>
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
