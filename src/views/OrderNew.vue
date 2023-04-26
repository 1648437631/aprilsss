<template>
  <div>






  </div>
</template>

<script>
import myaxios from "@/http/Myaxios";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {};
  },
mounted () {
    console.log(this.$route.query);
    this.init();
},
methods: {
  init(){
 let data = this.$route.query
    httpApi.orderApi.queryOrderCreateNew(data).then((res)=>{
        console.log('新訂單:', res);
    })
  }
},
};
</script>

<style lang="scss" scoped></style>
