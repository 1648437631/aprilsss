<template>
  <el-footer>
    <!-- 第一栏 -->

    <div class="text">
      <em><i class="el-icon-goods"></i></em> 订阅邮件列表
    </div>

    <el-row>
      <!-- 第二栏 -->
      <el-col :span="24"
        ><div style="margin-top: 15px">
          <el-input placeholder="您的邮箱">
            <template slot="append">订阅</template>
          </el-input>
        </div></el-col
      >
    </el-row>
    <!-- 第二栏 -->
    <!-- 第三栏 -->

    <el-row type="flex">
      <el-image :src="require('../assets/images/foot_icon1.png')" style="width:100px; height=100px"></el-image>
      <el-image :src="require('../assets/images/foot_icon2.png')"></el-image>
      <el-image :src="require('../assets/images/foot_icon3.png')"></el-image>
      <el-image :src="require('../assets/images/foot_icon4.png')"></el-image>
      <el-image :src="require('../assets/images/foot_icon5.png')"></el-image>
    </el-row>

    <!-- 第四栏 -->
    <el-row class="bg-purple-dark">
      <el-row type="flex">
        <el-col :span="8">
          <el-row type="flex">
            <el-col :span="24">
              <div class="grid-content bg-purple-light">
                我们随时24小时为您提供帮助
              </div>
              <div class="grid-content bg-purple-light">
                通过以下任何支持通道与我们联系
              </div></el-col
            >
          </el-row>
        </el-col>

        <el-col :span="4">
          <el-row type="flex">
            <em class="icon"> <i class="el-icon-phone"></i></em>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">直接连接</div>
              <div class="grid-content bg-purple-light">
                0096568886446
              </div></el-col
            >
          </el-row>
        </el-col>

        <el-col :span="4">
          <el-row type="flex">
            <em class="icon"> <i class="el-icon-chat-dot-square"></i></em>

            <el-col :span="12"
              ><div class="grid-content bg-purple-light">通过支持</div>
              <div class="grid-content bg-purple-light">在线聊天</div></el-col
            >
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row type="flex">
            <em class="icon"> <i class="el-icon-user"></i></em>

            <el-col :span="12"
              ><div class="grid-content bg-purple-light">通过支持</div>
              <div class="grid-content bg-purple-light">Whatsapp</div></el-col
            >
          </el-row>
        </el-col>
      </el-row>
      <!-- 第四栏 -->
    </el-row>
    <!-- 第五栏 -->

    <!-- 第五栏 -->
    <el-row type="flex" class="row-bg">
      <el-col :span="4"
        ><div class="bg-white">
          <el-image
            :src="require('../assets/images/company.png')"
          ></el-image></div
      ></el-col>
      <el-col :span="4"
        ><div class="bg-white">
          <el-row>
            <div class="grid-content bg-white">最受欢迎的类别</div>
            <div class="grid-content bg-purple-light">
              电器、家庭和厨房、家居家具、运动器材、
              呵护与美丽、电子产品、儿童和游戏、农产品、宠物、今日特卖、
            </div>
          </el-row>
        </div></el-col
      >
      <el-col :span="4"
        ><div class="bg-white">
          <div class="grid-content bg-white">Alkuwaitiya商店</div>
          <div class="grid-content bg-white">
            <div class="grid-content bg-purple-light">关于我们</div>
            <div class="grid-content bg-purple-light">条款和条件</div>
            <div class="grid-content bg-purple-light">隐私政策</div>
            <div class="grid-content bg-purple-light">退货政策</div>
            <div class="grid-content bg-purple-light">运输和交付</div>
          </div>
        </div></el-col
      >
      <el-col :span="4"
        ><div class="bg-white">
          <div class="grid-content bg-white">我的简历</div>
          <div class="grid-content bg-purple-light">
            <div class="grid-content bg-purple-light">我的简历</div>
            <div class="grid-content bg-purple-light">我的订单</div>
            <div class="grid-content bg-purple-light">我的最爱</div>
          </div>
        </div></el-col
      >
      <el-col :span="4"
        ><div class="bg-white">
          <div class="grid-content bg-white">关注我们的新闻并联系我们</div>
          <div class="grid-content">
            <el-row type="flex">
              <el-image :src="require('../assets/images/face.png')"></el-image>
              <el-image :src="require('../assets/images/video.png')"></el-image>
              <el-image
                :src="require('../assets/images/camera.png')"
              ></el-image>
            </el-row>

            <el-row type="flex">
              <el-image :src="require('../assets/images/ben.png')"></el-image>
              <el-image :src="require('../assets/images/fei.png')"></el-image>
              <el-image :src="require('../assets/images/ge.png')"></el-image>
            </el-row>
          </div></div
      ></el-col>
      <el-col :span="4"
        ><div class="bg-white">
          <div class="grid-content bg-purple-light">下载应用程序</div>

          <el-image :src="require('../assets/images/待发货_03.png')"></el-image>

          <el-image
            :src="require('../assets/images/待发货_07.png')"
          ></el-image></div
      ></el-col>
    </el-row>

    <!-- 第六栏 -->

    <el-row type="flex">
      <el-col :span="24"
        ><div class="grid-content bg-purple">
          <el-row type="flex">
            <el-col :span="8">
              <el-image :src="require('../assets/images/visa.png')"></el-image>
            </el-col>
            <el-col :span="8">
              <el-image :src="require('../assets/images/k.png')"></el-image>
            </el-col>
            <el-col :span="8">
              <el-image
                :src="require('../assets/images/double.png')"
              ></el-image> </el-col
          ></el-row>
        </div>
      </el-col>

      <el-col :span="24">
        <el-col type="flex">
        <el-row :span="24">
          <div class="grid-content bg-purple-gray">
            Alkuwaitiya商店保留所有版权 @2022
          </div>
        </el-row>
        <el-row :span="24">
          <div class="grid-content bg-purple-gray">
            <el-image
              :src="require('../assets/images/company-logo.png')"
            ></el-image>
          </div>
        </el-row>
      </el-col>
      </el-col>
    </el-row>

    <!-- 第六栏 -->
  </el-footer>
</template>

<script>
export default {};
</script>

<style scoped>


.grid-content .bg-white {
  font-size: 28px;
}
.grid-content .bg-purple-light {
  font-size: 18px;
}
.grid-content .bg-purple-gray {
  font-size: 14px;
}
.text {
  margin-left: 500px;
  color: #ed1b35;
}
.el-row .el-col {
  margin-left: 20px;
  margin-top: 20px;
}
.el-footer .el-row:second-child {
  width: 583px;
  height: 100px;
}
/* .el-footer .el-row:four-child {
  width: 20px;
  height: 200px;
  background-color: #ed1b35;
} */

.bg-purple-dark {
  background: #ed1b35;
  width: 1200px;
  height: 145px;
}

.icon {
  font-size: 40px;
}
.grid-content bg-purple-gray{
  margin-left: 10px;
}
</style>
