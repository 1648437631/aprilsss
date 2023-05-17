<template>
  <div>
    <div
      class="Item"
      refs="Item"
      v-for="(item, index) in listData"
      :key="index"
    >
      {{ item.infoData }}
    </div>
    <div class="bottom" ref="bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "123132",
        },
        {
          infoData: "12313333",
        },
        {
          infoData: "12313333",
        },
        {
          infoData: "12313333",
        },
        {
          infoData: "12313333",
        },
        {
          infoData: "12313333",
        },
        {
          infoData: "12313333",
        },
        {
          infoData: "12313333",
        },
      ],
    };
  },
  methods: {
    /**
     * [handleScroll description]滚动到底部
     *
     * @param   {[type]}  e  [e description]
     *
     * @return  {[type]}     [return description]
     */
    handleScroll(e) {
      console.log(e.target.scrollingElement.clientHeight); //1342
      console.log(e.target.scrollingElement.clientTop); //0 
      console.log(e.target.scrollingElement.scrollHeight); //2020
      console.log(e.target.scrollingElement.scrollTop); //678
      // clientTop

      if (e.target.scrollingElement.scrollTop+ e.target.scrollingElement.clientHeight >= e.target.scrollingElement.scrollHeight) {
        //在此处放入你的加载更多方法
// 请求更多数据

      } else{
        alert ('我滑动到底部了')
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped></style>
