<template>
  <div class="container">
    <!-- 确认送货地址 -->
    <div class="addr">
      <div class="addr-title">
        <div class="confirm">确认收货地址</div>
        <div class="manage" >管理收货地址</div>
      </div>
      <!-- 地址列表 -->
      <div class="addr-list">
        <div class="bottom">
          <!-- 弹出修改框 -->
          <el-dialog :visible.sync="centerDialogVisible" width="90%" center>
            <el-form ref="addressInfo" label-width="80px" :model="addressInfo">
              <el-form-item label="收件人">
                <el-input
                  placeholder="请输入收件人姓名"
                  v-model="addressInfo.real_name"
                />
              </el-form-item>

              <el-form-item label="手机号码:">
                <el-input
                  placeholder="请输入联系电话"
                  v-model="addressInfo.phone"
                />
              </el-form-item>

              <el-form-item label=" 收件地址"> </el-form-item>

              <div class="block">
                <span class="demonstration">国家:</span>
                <el-cascader
                  v-model="value"
                  :options="options"
                  @change="handleChange"
                ></el-cascader>
              </div>
              <div class="consignee">
                <el-form-item label="详细地址">
                  <el-input
                    type="textarea"
                    v-model="addressInfo.detail"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="consignee">
                <div @click="changeAddress()">
                  确认修改
                </div>
              </div>
            </el-form>
          </el-dialog>
        </div>

        <!-- 优惠券 -->
        <div>
          <ul class="coupon">
            <li>优惠券</li>
            <li class="second">
              <img src="../assets/images/组 1126@3x.png" />3kd优惠券
            </li>
            <li>10kd优惠券</li>
          </ul>
        </div>

        <!-- // 底部 -->
        <div class="bottom-box">
          <div>合计：KD199:000</div>
          <div class="bom">结算(3)</div>
        </div>
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
            children: city,
          };
        });
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
      console.log(this.province);
      httpApi.addressApi.queryAddressEdit(data).then((res) => {
        console.log("添加/修改收获地址", res);
      });
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
    margin: 0 auto;
    margin-top: 14px;
    width: 1200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .addr-title {
      width: 1160px;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #ececec;
      .confirm {
        font-size: 16px;
        color: #333333;
      }
      .manage {
        font-size: 14px;
        color: #5a77ce;
      }
    }
  }
  .addr-list {
    width: 1160px;
    margin: 10px 0;
    ul {
      margin: 0;
      padding: 0;
      .active {
        border: 2px solid #ed1b35;
        background-color: #fff0e8;
      }
      li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .left {
          display: flex;
          align-items: center;
          img {
            margin: 0 14px;
            width: 20px;
            height: 20px;
          }
          .user-name {
            font-size: 14px;
            color: #333333;
          }
          .phone {
            margin: 0 8px;
            font-size: 14px;
            color: #333333;
          }
          .address-detail {
            font-size: 14px;
            color: #333333;
          }
        }
        .edit {
          font-size: 14px;
          color: #5a77ce;
          margin: 0 20px;
          a {
            text-decoration: none;
          }
        }
      }
    }

    .bottom {
      width: 1160px;
      background-color: #ffffff;
      position: absolute;
      margin-top: 3px;
      .four-consignee {
        display: flex;
        margin-left: 51px;
        margin-top: 20px;
        justify-content: space-between;
        .consignee-country {
          width: 158px;
          height: 43px;
          border-radius: 6px 6px 6px 6px;
          opacity: 1;
          border: 1px solid #707070;
          input {
            margin-top: 12px;
            border: none;
            width: 104px;
            height: 18px;
            font-size: 13px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 18px;
            text-align: center;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
          select#name {
            border: none;
          }
        }
      }
      .consignee {
        display: flex;
        margin-left: 51px;
        margin-top: 20px;
        div {
          margin-top: 32px;
          width: 70px;
          height: 20px;
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .consignee-name {
          margin-top: 20px;
          margin-left: 36px;
          width: 197px;
          height: 43px;
          border-radius: 3px 3px 3px 3px;
          opacity: 1;
          border: 1px solid #707070;
          input {
            margin-top: 12px;
            border: none;
          }
        }
        .consignee-phone {
          width: 405px;
          height: 43px;
          border-radius: 6px 6px 6px 6px;
          opacity: 1;
          border: 1px solid #707070;
          input {
            margin-top: 12px;
            border: none;
          }
        }

        .consignee-details {
          width: 485px;
          height: 96px;
          border-radius: 6px 6px 6px 6px;
          opacity: 1;
          border: 1px solid #707070;
          input {
            margin-top: 40px;
            border: none;
          }
        }
      }
      .consignee {
        margin-left: 51px;
        margin-top: 20px;
        button {
          width: 119px;
          line-height: 53px;
          background: #ef2329;
          border-radius: 12px 12px 12px 12px;
          opacity: 1;
          color: white;
        }
      }
    }
    ul.coupon {
      margin-top: 605px;
      margin-bottom: 15px;
      position: absolute;
      width: 1200px;
      height: 49px;
      background: #ffffff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      list-style: none;
      display: flex;
      li {
        margin-left: 49px;
        margin-top: 15px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;

        // line-height: 0px;
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
      img {
        margin-left: 10px;
        width: 18px;
        height: 18px;
        background: #ef2329;
        opacity: 1;
        border: 1px solid #ef2329;
      }
      li.second {
        width: 140px;
        height: 20px;
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #ed1b35;
        line-height: 20px;
        text-align: center;

        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
    }
    .bottom-box {
      background: #ffffff;
      margin-left: 800px;
      margin-top: 705px;
      position: absolute;
      display: flex;
      align-items: center;
      div {
        margin-left: 10px;
      }
      div.bom {
        width: 119px;
        // height: 53px;
        background: #ef2329;
        border-radius: 12px 12px 12px 12px;
        opacity: 1;

        color: white;
        line-height: 53px;
        text-align: center;
        align-items: center;
      }
    }
  }
}
</style>
