<template>
  <div class="login">
    <form class="content" :rules="rules">
      <div class="img"><img src="../assets/images/company-logo.png" /></div>
      <div class="text">账号</div>
      <div class="pwd">
        <input placeholder="请输入电话或电子邮箱" v-model="form.email" />
      </div>
      <div class="text">验证码</div>
      <div class="container">
        <input placeholder="请输入验证码" v-model="form.verfycode" />
        <button type="button" @click="getcode()">获取</button>
      </div>
      <div class="text">设置密码</div>
      <div class="pwd">
        <input placeholder="請輸入密碼" v-model="form.password" />
      </div>
      <div class="text">确认密码</div>
      <div class="pwd">
        <input placeholder="請确认密码" v-model="form.repwd" />
      </div>
      <div class="agree">
        <img
          style="width: 18px; height: 18px"
          src="../assets/images/组 622@3x.png"
        />
        已同意用戶協議和隱私政策
      </div>
      <div class="last">
        <div>立即注册</div>
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
        verfycode: "",
        repwd: "",
      },
      rules: {
        email: [{ required: true, message: "请填写邮箱", trigger: "blur" }],
        code: [
          { required: true, message: "请填写验证码", trigger: "blur" },
          {
            reg: /d{4}/,
            message: "4位数字",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^\w{6,15}$/,
            message: "6~15位字符，可以包含：数字、字母、下划线",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请再次密码", trigger: "blur" },
          {
            pattern: /^\w{6,15}$/,
            message: "6~15位字符，可以包含：数字、字母、下划线",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    getcode() {
      console.log(11111);
      let data = {
        email: this.form.email,
        password: this.form.password,
        verfycode: this.form.verfycode,
        repwd: this.form.repwd,
      };
      httpApi.msgApi.querySendEmail(data).then((res) => {
        console.log(res);
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
    .container {
      margin-top: 15px;
      width: 381px;
      height: 38px;
      font-size: 14px;
      position: relative;
      input {
        width: 330px;
        height: 38px;
        font-size: 14px;
      }
      button {
        position: absolute;
        height: 40px;
        background-color: #ef2329;
        border-radius: 1%;
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
