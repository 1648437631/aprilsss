<template>
  <div class="container">
    <!-- 确认送货地址 -->
    <div class="addr">
      <div class="addr-title">
        <div class="confirm">确认收货地址</div>
        <div class="manage">管理收货地址</div>
      </div>
      <!-- 地址列表 -->
      <div class="addr-list">
        <el-form ref="form" :model="addressInfo">
          <div class="consignee-one">
            <el-form-item label="收件人">
              <el-input
                placeholder="请输入收件人姓名"
                v-model="addressInfo.real_name"
              />
            </el-form-item>
          </div>

          <div class="consignee-two">
            <el-form-item label="手机号码:">
              <el-input
                placeholder="请输入联系电话"
                v-model="addressInfo.phone"
              />
            </el-form-item>
          </div>

          <div class="consignee-three">
            <el-form-item label=" 收件地址"> </el-form-item>
          </div>

          <div class="consignee-four">
            <div class="demonstration">国家:</div>
            <el-cascader
              v-model="value"
              :options="options"
              @change="handleChange"
            >
            </el-cascader>
          </div>
          <div class="consignee-five">
            <el-form-item label="详细地址">
              <el-input type="textarea" v-model="addressInfo.detail"></el-input>
            </el-form-item>
          </div>
          <div class="consignee-six">
            <el-button type="primary" @click="changeAddress()">
              确认修改</el-button
            >
            <!-- <div @click="changeAddress((dialogFormVisible = false))">
                   
                  </div> -->
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import httpApi from "../http";
export default {
  data() {
    return {
      options: [], //城市列表
      value: [],

      showDetail: false,
      addressInfo: {
        area_code: "",
        city: "",
        city_id: "",
        country_code: "",
        detail: "",
        email: "",
        id: "",
        is_default: "",
        phone: "",
        province: "",
        province_id: "",
        real_name: "",
      },
      countryList: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 获取城市列表信息
    init() {
      // let arr=[]

      // arr.join({
      //   vaule:555
      // })
      httpApi.addressApi.queryShipCityData().then((res) => {
        console.log("获取城市列表", res);
        const arr = res.data.data;
        this.options = arr.map((item) => {
          const city = item.city.map((val) => {
            return { value: val, label: val };
          });
          return {
            value: item.country_code,
            label: item.country_name,
            children:city,
          };
        });
        //
        arr.map((item) => {
          this.countryList[item.country_code] = item.country_name;
        });
      });
    },
    //选择城市列表
    handleChange(value) {
      console.log(value);
    },
    changeAddress() {
      let data = {
        id: this.addressInfo.id,
        address: {
          city: this.value[1],
          province: this.countryList[this.value[0]],
          detail: this.addressInfo.detail,
          country_code: this.value[0],
        },
        is_default: 0,
        is_complete: 1,
        real_name: this.addressInfo.real_name,
        phone: this.addressInfo.phone,
      };
      httpApi.addressApi.queryAddressEdit(data).then((res) => {
        console.log("添加/修改收获地址", res);
      });
      this.$message.info("修改成功");
      this.$router.go(-1);
    },
  },
  created() {
    console.log("this.$route.params", this.$route.params);
    this.addressInfo = { ...this.$route.params };
    this.value = [this.addressInfo.country_code, this.addressInfo.city];
    this.init();
  },
};
</script>
<style scoped lang="less">
.container {
  width: 1200px;
  margin: 0 auto;
  height: 980px;
  background-color: #fafafa;

  .addr {
    background: #fff;
    width: 1200px;
    margin: 0 auto;
    .addr-title {
      margin-top: 15px;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      .confirm {
        width: 96px;
        height: 22px;
        font-size: 16px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
        line-height: 0px;
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
      .manage {
        width: 72px;
        height: 17px;
        font-size: 12px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #5a77ce;
        line-height: 0px;
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
    }
    .addr-list {
      width: 1179px;
      height: 485px;
      background: #ffffff;
      border-radius: 0px 0px 10px 10px;
      opacity: 1;
      border: 1px solid #d6d6d6;
    }
    form.el-form {
      width: 60%;
    }
    .el-form-item {
      margin-left: 51px;
    }
    .consignee-one {
      height: 85px;
    }
    .consignee-two {
      height: 85px;
    }
    .consignee-three {
      height: 85px;
    }
    .consignee-four {
      height: 85px;
    }
    .consignee-five {
      height: 85px;
    }
    .consignee-six {
      height: 85px;
    }
    .el-cascader {
      margin-top: -141px;
    }
    .el-textarea {
      margin-top: -59px;
      margin-left: 60px;
    }

    .demonstration {
      margin-left: 60px;
      /* width: 42px; */
      height: 20px;
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
    .el-button--primary {
      margin-left: 1000px;
      width: 119px;
      height: 53px;
      background: #ef2329;
      border-radius: 12px 12px 12px 12px;
      opacity: 1;
    }
  }
}
</style>