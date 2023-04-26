<template>
  <div>
    <!--页面主体-->
    <el-main>
      <!-- justify="start" -->
      <el-row>
        <el-col :push="12"><div class="grid-content">购物</div></el-col>
        <el-col :pull="12"><div class="grid-content">购物</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg">
        <el-row>
          
          <el-col :span="4"
            >   <el-checkbox label="quan'xuan" name="type"></el-checkbox></el-col
          >

          <el-col :span="4"
            ><div class="grid-content bg-purple-light">商品信息</div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">单价</div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple-light">数量</div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">总计</div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple-light">编辑</div></el-col
          >
        </el-row>
      </el-row>

      <el-row type="flex">
        <el-row>
          <el-col :span="8"
            ><div class="grid-content bg-purple">全选</div></el-col
          >
          <el-col :span="8"
            ><div class="grid-content bg-purple-light">删除</div></el-col
          >
          <el-col :span="8"
            ><div class="grid-content bg-purple">合计</div></el-col
          >
        </el-row>
      </el-row>
    </el-main>
    <!--页面主体-->
  </div>
</template>

<script>
export default {};
</script>

<style>
.grid-content {
  margin-left: 0px;
}
</style>
