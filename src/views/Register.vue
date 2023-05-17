<template>
  <div class="login">
    <form class="content" :rules="rules" @submit.prevent>
      <div class="img">注册</div>
      <div class="line">
        <div class="text">账号</div>
        <div class="pwd">
          <input placeholder="请输入电话或电子邮箱" v-model="form.email" />
        </div>
      </div>

      <!-- 
      <div class="line">
        <div class="text">设置密码</div>
        <div class="pwd">
          <img :src="`https://test2.alkuwaityastore.com/api/getGraphicVerification?phone=${this.form.email}`" />
        </div>
      </div> -->

      <div class="line">
        <div class="text">验证码</div>
        <div class="pwd">
          <input placeholder="请输入验证码" v-model="form.verfycode" />

          <button class="button" @click="getcode()"><span>获取</span></button>
        </div>
      </div>
      <div class="line">
        <div class="text">设置密码</div>
        <div class="pwd">
          <input placeholder="请输入密码" v-model="form.password" />
        </div>
      </div>
      <div class="line">
        <div class="text">确认密码</div>
        <div class="pwd">
          <input placeholder="请确认密码" v-model="form.repwd" />
        </div>
      </div>
      <div class="agree">
        <img
          style="width: 18px; height: 18px"
          src="../assets/images/组 622@3x.png"
        />
        已同意<span>用户协议</span>和<span>隐私政策</span>
      </div>
      <div class="last">
        <div><span @click="submit">立即注册</span></div>
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
      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (verify.test(this.form.email)) {
        let data = {
          email: this.form.email,
        };
        httpApi.msgApi.querySendEmail(data).then((res) => {
          console.log(res);
        });
      } else {
        let data = {
          phone: "00965" + "-" + this.form.email,
        };
        httpApi.msgApi.querySmsVerity(data).then((res) => {
          console.log(res);
        });
      }
      // this.codeurl = `https://test2.alkuwaityastore.com/api/getGraphicVerification?phone=${this.form.email}`;
      // console.log(11111);
    },
    submit() {
      let data = {
        email: this.form.email,
        password: this.form.password,
        code: this.form.verfycode,
        password_confirm: this.form.repwd,
      };
      httpApi.msgApi.queryRegister(data).then((res) => {
        console.log("注册账号", res);
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
      margin-top: 135px;
      margin-left: 130px;
      width: 40px;
      height: 28px;
      font-size: 20px;
      font-family: PingFang SC-Heavy, PingFang SC;
      font-weight: 800;
      color: #333333;
      line-height: 0px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
    .line {
      position: relative;
      margin-top: 20px;
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
        //       margin-top: 12px;
        //       font-size: 16px;
      }
      .pwd {
        position: relative;
        width: 481px;
        height: 38px;
        background: #ffffff;
        border-radius: 5px 5px 5px 5px;
        opacity: 1;
        border: 1px solid #c6c6c6;
        input {
          margin-left: 15px;
          margin-top: 9px;
          outline: none;
          border: none;
          width: 140px;
          height: 20px;
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          // line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
      }

      .button {
        position: absolute;
        margin-left: 246px;
        margin-top: 9px;
        width: 66px;
        height: 24px;
        background: #ed1b35;
        border-radius: 12px 12px 12px 12px;
        opacity: 1;
        span {
          color: white;
        }
      }
    }
    .agree {
      margin-top: 30px;
      font-size: 14px;
      img {
        margin-right: 10px;
      }
      span {
        padding-top: -2px;
        font-size: 14px;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 400;
        color: #ed1b35;
      }
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
    .last {
      margin-top: 31px;
      div {
        width: 481px;
        height: 49px;
        background: #ef2329;
        border-radius: 25px 25px 25px 25px;
        opacity: 1;
        line-height: 49px;
        text-align: center;
        span {
          color: white;
        }
      }
    }
  }
}
</style>
