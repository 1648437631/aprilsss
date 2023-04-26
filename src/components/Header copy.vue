<template>
  <!-- 标题栏开始 -->
  <el-header>
    <el-row type="flex">
      <el-col :span="16">
        <image :src="require('../assets/images/logo.png')"></image>
       <!-- 搜索欄語言 -->
        <el-dropdown>
          <span class="el-dropdown-link"  @click="changeLang ()">
            {{$t('科威特')}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
           
            <el-dropdown-item icon="el-icon-edit" :disabled="this.$i18n.locale === 'zh'">中文</el-dropdown-item>
            
            <el-dropdown-item icon="el-icon-edit" :disabled="this.$i18n.locale === 'en'">英文</el-dropdown-item>
         
            <el-dropdown-item icon="el-icon-edit" :disabled="this.$i18n.locale === 'ar'">阿拉伯语</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    <!-- 搜索欄語言 -->

        <image :src="require('../assets/images/love.png')"></image
        ><span>收藏</span></el-col
      >
      <el-col :span="8">
        <image :src="require('../assets/images/user.png')"></image
        ><a href="/user/info">个人中心</a>
        <a href="/user/client">会员中心</a>
        <image :src="require('../assets/images/clock.png')"></image
        ><a href="">消息中心</a>
        <image :src="require('../assets/images/cart.png')"></image
        ><a href="">购物车</a>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-image
        style="width: 263px; height: 62px"
        :src="require('../assets/images/company-logo.png')"
      ></el-image>
      <el-row>
        <div class="input" >
  <el-input placeholder="请输入内容" style="width: 663px">
    <template type="danger" slot="append">搜索</template>
  </el-input>
</div>

      </el-row>
    </el-row>
  </el-header>
</template>

<script>
export default{
  methods: {
    changeLang(type){
      token.set("language",type) //存入token 
      // 改变当前的多语言 
      this.$i18n.locale = type // 替换之前的locale
     }
  },
}
</script>

<style scoped>
/* .el-row {
  width: 1200px;
  margin: 0 auto;
}
.el-col span {
  margin: 15px;
  font-size: 14px;
}
.el-image {
  width: 10px;
  height: 10px;
  margin-top: 30px;
}
.el-input {
  width: 60%;
  margin-left: 123px;
}

/* .el-button {
  margin-top: 51px;
  background-color: rgb(252, 6, 6);
  border-radius: 10%;
} */ 
</style>
