
<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOption" v-for="(item, index) in category"
          :key="index">
      <swiper-slide  @mouseenter.native="enter()" @mouseleave.native="leave()">
        {{ item.cate_name }}
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import swiper from 'swiper'
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      category: "", //分列列表
      swiperOption: {
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false, //true表示滚动到最后一页后停止滚动
          disableOnInteraction: false, //true：交互后，不继续滚动
        },
        
        loop: true, //首尾循环
        spaceBetween: 30, //板块间隔

        navigation: {  //左右切换按钮
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    //暫停輪播
enter(){
  this.$refs.mySwipers.autoplay.start()
},
leave(){

  this.$refs.mySwipers.autoplay.stop()
},

    init() {
    httpApi.homepageApi.queryCategory().then((res) => {
        console.log("分列列表", res);
        this.category = res.data.data;
      });
  },
  },

  // computed: {
  //   showSwiper () {
  //     return this.category.length
  //   }
  // }
}
</script>

<style lang="less" scoped>

 .wrapper{
width:1200px;
height: 42px;
margin: 0 auto;
  display: flex;
  position: relative;

.swiper-slide{
  white-space: nowrap;
  overflow: hidden;
  margin-left:30px;
  width:40px;
}
.swiper-button-prev{
  width:20px;
  height:20px;
  position: absolute;
}
}

</style>

