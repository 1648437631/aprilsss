<template>
  <div>
  

    <el-col :span="12">
      <el-card class="box-card">
        <div>
          <span class="title"> 好物热卖 </span> | <span class="none">热销尖货 </span>
          <span class="more"> 查看更多<i class="el-icon-arrow-right"></i></span>
        </div>

        <el-carousel height="300px" direction="horizontal" :autoplay="false" >
          <el-carousel-item v-for="(item, index) in data" :key="index">
            <el-row>
              <el-col :span="8">
                <div>
                  <div><el-image :src="item.image"></el-image></div>
                  <div>
                    <span class="del">{{ item.ot_price }}</span>
                    <span>{{ item.price }}</span>
                  </div>
                </div></el-col
              >
              <el-col :span="8">
                <div>
                  <div><el-image :src="item.image"></el-image></div>
                  <div>
                    <span class="del">{{ item.ot_price }}</span>
                    <span>{{ item.price }}</span>
                  </div>
                </div></el-col
              >
              <el-col :span="8">
                <div>
                  <div><el-image :src="item.image"></el-image></div>
                  <div>
                    <span class="del">{{ item.ot_price }}</span>
                    <span>{{ item.price }}</span>
                  </div>
                </div></el-col
              >
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "NewArrival",
  props: {
    data: [],
  },
};
</script>

<style scoped>
</style>
