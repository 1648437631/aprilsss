<template>
  <div class="login">
    <div class="img"><img src="../assets/images/company-logo.png" /></div>
    <form class="content" :rules="rules" @submit.prevent="login(e)">
      <div class="first-line">
        <div class="text">电子邮箱</div>
        <div class="pwd">
          <input v-model="form.email" placeholder="请输入电话或电子邮箱" />
        </div>
      </div>
      <div class="second-line">
        <div class="text">密码</div>
        <div class="pwd">
          <input v-model="form.password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="inline">
        <div><a href="">立即注冊</a></div>
        <div><a href="">忘记密码？</a></div>
      </div>
      <div class="last">
        <div @click="login()">登录</div>
      </div>
      <!-- <div class="last">
        <div>谷歌登录</div>
      </div> -->
    </form>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          { required: true, trigger: "blur", message: "请输入账号或者邮箱" },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "6~15位字符，可以包含：数字、字母、下划线",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      let data = {
        email: this.form.email,

        password: this.form.password,
      };
      console.log(data);
      httpApi.msgApi.queryRegister(data).then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          //   //将用户存出
          // ex966@qq.com

          let token = res.data.data.token;
          // httpApi.adminApi.queryUserInfo({ token }).then((res) => {
          //   console.log("用户信息", res);
          //   localStorage.setItem("avatar", res.data.data.avatar);
          //   localStorage.setItem("nickname", res.data.data.nickname);
          //   localStorage.setItem("sex", res.data.data.sex);
          //   localStorage.setItem("birthday", res.data.data.birthday);
          //   this.$store.commit("updateUser", res.data.data);
          // });
          localStorage.setItem("token", token);

          this.$store.commit("saveToken", res.data.data.token);
          this.$router.push({
            name: "/user/client",
          });
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  .img {
    margin-top: 63px;
    margin-left: 455px;
  }
  .content {
    margin: 0 auto;
    margin-top: 50px;
    margin-left: 350px;
    width: 481px;
    // height: 38px;
    background: #ffffff;
    // border-radius: 5px 5px 5px 5px;
    opacity: 1;
    // border: 1px solid #c6c6c6;
    .first-line {
      .text {
        width: 64px;
        height: 22px;
        font-size: 16px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #333333;
        // line-height: 0px;
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
      .pwd input {
        margin-top: 15px;
        width: 381px;
        height: 38px;
        font-size: 14px;
      }
    }
    .second-line {
      margin-top: 15px;
      .text {
        width: 64px;
        height: 22px;
        font-size: 16px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #333333;
        // line-height: 0px;
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
      .pwd input {
        margin-top: 15px;
        width: 381px;
        height: 38px;
        font-size: 14px;
      }
    }

    .agree {
      margin-top: 15px;
      img {
      }
    }
    .inline {
      width: 381px;
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      div {
        margin-top: 10px;
        a {
          width: 64px;
          height: 22px;
          font-size: 16px;
          font-family: PingFang SC-Heavy, PingFang SC;
          font-weight: 800;
          color: #333333;

          // line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
          text-decoration: none;
        }
      }
    }
    .last {
      width: 381px;
      height: 49px;
      background: #ef2329;
      border-radius: 25px 25px 25px 25px;
      opacity: 1;
      div {
        font-size: 18px;
        margin-top: 40px;
        margin-left: 150px;
        height: 49px;
        line-height: 49px;
        color: white;
      }
    }
  }
}
</style>
