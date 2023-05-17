<template>
  <div class="user-info">
    <div class="user-title">个人中心</div>

    <div class="client-content">
      <el-image
        style="width: 80px; height: 80px"
        :src="require('../../assets/images/tou.png')"
      />

      <el-tabs :tab-position="tabPosition">
        <!-- <span slot="label">     
           <el-image
        style="width: 80px; height: 80px"
        :src="require('../../assets/images/tou.png')"
      />
      </span> -->
        <el-tab-pane>
          <span slot="label"><i class="el-icon-user"></i>个人信息</span>
          <div class="info-title">个人信息</div>
          <el-image style="width: 40px; height: 40px" :src="url"
            >头像<i class="el-icon-right"></i
          ></el-image>
          <el-form
            :model="form"
            ref="form"
            label-width="100px"
            class="demo-form"
          >
            <el-form-item label="昵称" prop="nickname">
              <el-input type="nickname" v-model="userInfo.nickname"></el-input>
            </el-form-item>
            <!-- <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="userInfo.sex">
                <el-radio label="2"></el-radio>
                <el-radio label="1"></el-radio>
              </el-radio-group>
            </el-form-item> -->
            <el-form-item label="性别" prop="sex">
              <el-select v-model="userInfo.sex">
                <el-option :value="2" label="男"></el-option>
                <el-option :value="1" label="女"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="出生年月" prop="birthday">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="userInfo.birthday"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()">保存</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-user"></i>我的收货地址</span>
          <div class="info-title">收货地址</div>
          <el-form status-icon label-width="100px" class="demo-ruleForm">
            <el-form-item label="收货人">
              <el-input
                type="receiver"
                autocomplete="off"
                placeholder="请输入收件人姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
              <el-input
                type="phone"
                autocomplete="off"
                placeholder="请输入联系人电话"
              ></el-input>
            </el-form-item>
            <el-form-item label="收货地址" prop="checkPass">
              <el-cascader
                v-model="value"
                :options="options"
                @change="handleChange"
              >
              </el-cascader>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input type="textarea"></el-input>
            </el-form-item>

            <div class="inline-text">横线</div>
            <el-table :data="addressInfo" style="width: 100%" class="table">
              <el-table-column prop="real_name" label="收货人" width="180">
              </el-table-column>
              <el-table-column prop="phone" label="联系方式" width="180">
              </el-table-column>
              <!-- <el-table-column prop="address" label="收货地址">
                <el-cascader
                  v-model="value"
                  :options="options"
                  @change="handleChange"
                >
                </el-cascader>
              </el-table-column> -->

              <el-table-column prop="detail" label="详细地址">
              </el-table-column>
              <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button
                    class="default"
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >编辑</el-button
                  >
                  <el-button
                    class="default"
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >删除</el-button
                  >
                  <el-button
                    class="default"
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >设置为默认</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="支付密码修改">
          <div class="info-title">修改支付密码</div>

          <div class="editble">
            您是否修改账号
            <span class="edit">{{ userInfo.email }}</span> 当前使用的支付密码
          </div>
          <div class="type">
            <div class="cancel" @click="cancel()">取消</div>
            <div class="cancel active" @click="edit()">修改</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="账号安全">
          <div class="info-title">账号安全</div>
          <el-form label-width="80px" :model="formLabelAlign">
            <el-form-item label="账户安全">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="formLabelAlign.email"></el-input>
            </el-form-item>
            <el-form-item label="绑定账号">
              <el-input v-model="formLabelAlign.account"></el-input>
            </el-form-item>
            <el-form-item label="修改登录密码">
              <el-input v-model="formLabelAlign.password"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="关于我们">
          <div class="info-title">关于我们</div>
        </el-tab-pane>
        <el-tab-pane label="用户协议">角色管理</el-tab-pane>
      </el-tabs>
    </div>

    <div class="logout" @click="logout">退出登陆</div>
  </div>
</template>

<script>
import AdminApi from "../../http/apis/AdminApi";
import httpApi from "@/http/apis/SearchApi"
import addressApi from "@/http/apis/AddressApi"
export default {
  data() {
    return {
      categoryids: [], //所有文章列表
      categoryid: [],
      //文章列表详情标题
      userInfo: {
        email: "",
        avatar: "",
        birthday: "",
        nickname: "",
        sex: "",
        province_id: "",
      }, // 用户信息
      addressInfo: [], //地址信息
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      tabPosition: "left",
      form: {
        name: "",
        sex: "",
        age: "",
        date1: "",
      },

      formLabelAlign: {
        name: "",
        email: "",
        account: "",
        password: "",
      },

      addressInfo: [
        {
          real_name: "工藤静香",
          phone: "13893725460",
          address: "上海市普陀区金沙江路 1518 弄",
          detail: "工藤静香 13893725460 上海市普陀区金沙江路 1518 弄",
        },
        {
          real_name: "工藤静香",
          phone: "13893725460",
          address: "上海市普陀区金沙江路 1518 弄",
          detail: "工藤静香 13893725460 上海市普陀区金沙江路 1518 弄",
        },
        {
          real_name: "工藤静香",
          phone: "13893725460",
          address: "上海市普陀区金沙江路 1518 弄",
          detail: "工藤静香 13893725460 上海市普陀区金沙江路 1518 弄",
        },
      ],

      value: [],
      options: [], //城市列表
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    logout(state) {
      state.avatar = null;
      state.nickname = null;
      state.sex = null;
      state.birthday = null;
      localStorage.setItem("avatar", "");
      localStorage.setItem("nickname", "");
      localStorage.setItem("sex", "");
      localStorage.setItem("birthday", "");
      this.$router.push("/register");
    },
    //修改密码
    cancel() {
      this.$message.success({
        title: "取消成功",
        type: "info",
      });
    },
    edit() {
      let data = {
        email: " 2863758@qq.com",
        password: "12345678",
        password_confirm: "12345678",
      };
      console.log(data);
      httpApi.adminApi.queryRegisterReset(data).then((res) => {
        console.log("修改账号", res);
      });
      Message.success({
        title: "修改成功",
      });
    },
    //获取用户信息
    init() {
      //获取所有分类文章列表
      httpApi.queryArticleProduct().then((res) => {
        console.log("文章列表", res);
        this.categoryids = res.data.data;
        this.categoryid = { ...this.categoryids };
        console.log(this.categoryid);
      });

      //获取所有分类文章列表详情
      let id = 1;
      httpApi.queryArticleProductDetail(id).then((res) => {
        console.log("分类文章接口详情", res);
      });
      //获取收获地址
      addressApi.queryAddress().then((res) => {
        console.log("地址信息:", res);
        const data = res.data.data.data;
        this.options = data.map((item) => {
          debugger 
          const city = item.city.map((val) => {
            return { value: val, label: val };
          });
          return {
            value: item.country_code,
            label: item.country_name,
            children: city,
          };
        });
      });

      //获取用户信息
      let data = {
        email: this.userInfo.email,
      };
      AdminApi.queryUserInfo(data).then((res) => {
        console.log("用户信息", res);
        this.userInfo = res.data.data;
      });
    },
    handleChange(val) {
      console.log(val);
    },
    submitForm() {
      localStorage.setItem(this.userInfo.nickname);
    },
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="less" scoped>
.user-info {
  width: 100%;
  background-color: #fafafa;
  height: 1000px;
  .user-title {
    background: #f5f3f3;
    margin: 0 auto;
    width: 1200px;
    height: 40px;
    line-height: 40px;
  }
  .client-content {
    width: 1200px;
    height: 776px;
    margin: 0 auto;
    background: #fff;
    border-radius: 3px 3px 3px 3px;
    opacity: 1;
    .el-image {
      margin-left: 74px;
      margin-top: 30px;
    }
    .inline-text {
      margin-top: 10px;
      width: 100%;
      height: 0px;
      opacity: 1;
      border: 1px solid #e6e6e6;
    }
    .editble {
      margin-top: 100px;
      margin-left: 160px;
      // width: 411px;
      height: 33px;
      font-size: 16px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
      line-height: 0px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      .edit {
        font-size: 24px;
      }
    }
    .type {
      display: flex;
      margin-left: 160px;
      .cancel {
        margin-top: 74px;
        margin-left: 33px;
        margin-right: 48px;
        width: 155px;
        height: 43px;
        background: #ffffff;
        border-radius: 6px 6px 6px 6px;
        opacity: 1;
        border: 1px solid #707070;
        line-height: 43px;
        text-align: center;
        font-weight: 400;
        font-size: 14px;
        color: black;
      }
      .active {
        width: 155px;
        height: 43px;
        background: #ef2329;
        border-radius: 6px 6px 6px 6px;
        opacity: 1;
        color: white;
        line-height: 43px;
        text-align: center;
        font-weight: 400;
        font-size: 14px;
      }
    }

    /deep/.el-tabs--left .el-tabs__header.is-left {
      float: left;
      margin-top: 35px;
      margin-bottom: 0;
      margin-right: 58px;
    }
    /deep/.user-info .client-content .el-image[data-v-675c7b05] {
      margin-left: 74px;
      margin-top: 30px;
    }
    /deep/.el-tabs__item.is-active {
      margin-left: 34px;
      width: 195px;
      height: 37px;
      background: #ed1b35;
      border-radius: 6px 6px 6px 6px;
      opacity: 1;
      color: white;
    }
    /deep/.el-tabs__content {
      // marign-left: 10px;
      margin-top: -50px;
    }
    /deep/.info-title {
      margin-top: 89px;
      color: #000;
      margin-left: 420px;
    }
    /deep/.el-tabs__item:hover {
      /* color: #409EFF; */
      cursor: pointer;
    }

    /deep/.el-tabs--left .el-tabs__item.is-left {
      text-align: center;
      margin-bottom: 30px;
    }

    /deep/.el-button--primary {
      width: 200px;
      // color: #fff;
      // background-color: #ed1b35;
      /* border-color: #409EFF; */
    }
    /deep/.user-info.client-content[data-v-675c7b05].el-tabs__content {
      margin-top: -79px;
    }
    /deep/.el-form-item {
      margin-left: 0px;
      margin-bottom: 30px;
    }
    /deep/.button.el-button.tuichu.el-button--default {
      margin-left: 70px;
      margin-top: 20px;
    }
    /deep/.el-textarea {
      width: 60%;
      margin-top: 20px;
      position: relative;
      vertical-align: bottom;
      font-size: 14px;
    }
    /deep/div#pane-1 {
      height: 600px;
    }
    /deep/.el-button {
      background: #ed1b35;
      color: #fff;
    }
    /deep/.el-input {
      width: 50%;
      margin-left: 22px;
    }
    // /deep/input.el-input__inner {
    //   border: 0;
    // }
    /deep/.el-tabs__active-bar {
      background-color: transparent !important;
    }
    /deep/.el-tabs__nav-wrap::after {
      position: static !important;
    }

    /deep/div#pane-3 {
      margin-left: 100px;
    }
    // /deep/.el-table tr{
    //    background: #091B37;
    //     height:20px;
    //   }
    /deep/.el-table th {
      background-color: #eeeeee;
    }
    /deep/.el-table__empty-text {
      color: #333333;
      font-size: 15px;
    }

    /deep/.el-table .cell {
      color: black;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-all;
      // line-height: 0px;
      padding-left: 0px;
      padding-right: 10px;
    }
    /deep/.user-info .client-content[data-v-675c7b05] .el-button {
      /* background: #ed1b35; */
      color: #333333;
      /* margin-top: 30px; */
      /* margin-left: 50px; */
    }

    /deep/.el-button--text {
      border-color: transparent;
      color: #333333;
      background: 0 0;
      padding-left: 0;
      padding-right: 0;
    }

    /deep/.el-button--small {
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
    }

    /deep/.el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      // background: #fff;
      // border: 1px solid #DCDFE6;
      // color: #606266;
      // -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
  .logout {
    /* margin-top: 100px; */
    width: 100px;
    height: 30px;
    border: 1px solid black;
    border-radius: 12px;
    line-height: 30px;
    text-align: center;
    margin-top: -183px;
    margin-left: 250px;
  }
}
</style>
