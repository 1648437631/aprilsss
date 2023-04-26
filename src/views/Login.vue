<template>
  <div class="login">
    <form class="content" :rules="rules" @submit.prevent="login(e)">
      <div class="img"><img src="../assets/images/company-logo.png" /></div>
      <div class="text">电子邮箱</div>
      <div class="pwd">
        <input v-model="form.email" placeholder="请输入电话或电子邮箱" />
      </div>
      <div class="text">密码</div>
      <div class="pwd">
        <input v-model="form.password" placeholder="請輸入密碼" />
      </div>
      <div class="inline">
        <div><a href="">立即注冊</a></div>
        <div><a href="">忘記密碼？</a></div>
      </div>
      <div class="last">
        <div @click="login()">登录</div>
      </div>
      <div class="last">
        <div>谷歌登录</div>
      </div>
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
          localStorage.setItem("token", token);
          this.$store.commit("saveToken", res.data.data.token);
          this.$router.push("/");
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
  .content {
    margin-left: 350px;
    .img {
      margin: 0 auto;
      margin-left: 105px;
    }
    .text {
      margin-top: 12px;
      font-size: 16px;
    }
    .pwd input {
      margin-top: 15px;
      width: 381px;
      height: 38px;
      font-size: 14px;
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
          margin-top: 35px;
          font-size: 16px;
          text-decoration: none;
        }
      }
    }
    .last {
      background-color: #ef2329;
      width: 381px;
      height: 49px;
      border-radius: 25pt 25pt 25pt 25pt;
      font-size: 18px;
      margin-top: 10px;
      div {
        font-size: 18px;
        margin-top: 40px;
        margin-left: 150px;
        height: 49px;
        line-height: 49px;
      }
    }
  }
}
</style>
