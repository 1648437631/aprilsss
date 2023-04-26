<template>
    <div>
      <el-container>
        <el-main class="main">
          <!-- 主体 -->
          <el-image
            style="width: 480px; height: 120px"
            :src="require('../assets/images/company-logo.png')"
          ></el-image>
          <el-form
            :rules="rules"
            :model="form"
            status-icon
            ref="form"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="账号"
              prop="email"
              placeholder="请输入电话或电子邮箱"
            >
              <el-input
                class="user"
                type="email"
                v-model="form.email"
                placeholder="请输入电话或电子邮箱"
              ></el-input>
              <em
                class="icon_error"
                style="display: inline"
                v-if="status_email == 2 || status_email == 3 || status_email == 4"
              ></em>
              <em
                class="icon_ok"
                style="display: inline"
                v-if="status_email == 5"
              ></em>
              <i style="display: inline" v-if="status_email == 2"
                >请输入您的注册邮箱</i
              >
              <i style="display: inline" v-if="status_email == 3"
                >请输入正确的邮箱</i
              >
              <i style="display: inline" v-if="status_email == 4">邮箱已被注册</i>
            </el-form-item>
  
            <!-- <el-form-item
          prop="codeinput"
          label="验证码"
          class="code"
          @click="getcode()"
        >
          <el-input
            class="input"
            type="text"
            placeholder="请输入验证码"
            id="codeinput"
            v-model="form.codeinput"
          ></el-input>
          <span class="codeimg" ref="codeimg">验证码图片</span>
        </el-form-item> -->
  
            <el-form-item label="验证码" prop="verfycode">
              <el-input
                status-icon
                class="code"
                type="text"
                v-model="form.verfycode"
                placeholder="请输入验证码"
              ></el-input
              ><el-button type="danger" @click="getcode()">获取</el-button>
            </el-form-item>
  
            <el-form-item label="设置密码" prop="password">
              <el-input
                class="password"
                type="password"
                v-model="form.password"
                placeholder="请输入验证码"
                ><el-button>获取</el-button></el-input
              >
            </el-form-item>
            <el-form-item label="确认密码" prop="repwd">
              <el-input
                class="repwd"
                type="repwd"
                v-model="form.repwd"
                placeholder="请输入验证码"
                ><el-button>获取</el-button></el-input
              >
            </el-form-item>
  
            <el-form-item>
              <el-button type="primary" @click="submitForm()">立即注册</el-button>
            </el-form-item>
          </el-form>
          <!-- 主体结束 -->
        </el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </div>
  </template>
  
  <script>
  import myaxios from "@/http/Myaxios";
  import httpApi from "@/http/index.js";
  
  export default {
    name: "login",
    data() {
      return {
        status_email: 1,
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
    mounted() {
      // this.init();
    },
    methods: {
      // init() {
      //   httpApi.msgApi.queryRegister(  ).then((res) => {
      //     console.log(res);
      //   });
  
      // },
      // checkEmail(){
      //    let email=this.form.email.trim();
      //         // 1.什么都不显示
      //         // 2.非空
      //         if(email.length==0) return(this.status_email=2)
      //         // 3.格式错误
      //         var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      //         if(reg.test(email)) return(this.status_email=3)
      //         // 4.已注册(dingding@qq.com)
      //         let url="user_check_uname.php?uname="+email;
      //         this.axios.get(url).then((res)=>{
      //             console.log(res);
      //             // code=1已存在，code=2不存在
      //             if(res.data.code==1){
      //                 this.status_email=4;
      //             }else{
      //                 this.status_email=5
      //             }
      //         })
      //         // 5.成功
  
      // },
      getcode() {
        // this.$refs["ruleForm"].validateField("email")
  
        // // 从res中解析token， 并且存在localStorage中  供后续请求使用
        // let token = res.data.token;
        // console.log(token);
        // localStorage.setItem("token", token);
        let data = {
          email: this.email,
          password: this.password,
          verfycode: this.verfycode,
          repwd: this.repwd,
        };
        httpApi.msgApi.querySendEmail(data).then((res) => {
          console.log(res);
        });
      },
    },
  };
  </script>
  
  <style scoped></style>
  