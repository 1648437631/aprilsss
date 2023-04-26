<template>
  <div>
    <!-- 底部组件 -->
    <div class="content">
      <!-- 顶部邮件列表 -->
      <div class="mailing-list">
        <img src="../assets/images/send.png" alt="" />
        <div class="mail-text">{{ $t("index.footer.more1") }}</div>
      </div>
      <!-- 订阅输入框 -->
      <div class="subscribe">
        <input type="text" placeholder="你的邮件" />
        <div class="subscribe-button">{{ $t("index.footer.more2") }}</div>
      </div>
      <!-- 中间层 -->
      <!-- 中间层图片 -->
      <div class="middle-picture">
        <img src="../assets/images/foot_icon1.png" alt="" />
        <img src="../assets/images/foot_icon2.png" alt="" />
        <img src="../assets/images/foot_icon3.png" alt="" />
        <img src="../assets/images/foot_icon4.png" alt="" />
        <img src="../assets/images/foot_icon5.png" alt="" />
      </div>
      <div class="middle">
        <div class="middle-content">
          <div class="contact-support">
            <div class="contact-first">
              <span class="any-time"> {{ $t("index.footer.more3") }}</span>
              <span class="channel"> {{ $t("index.footer.more4") }}</span>
            </div>
          </div>
          <div class="contact">
            <img src="../assets/images/963@3x.png" alt="" />
            <div>
              <p>{{ $t("index.footer.more5") }}</p>
              <p>info@q8store.com</p>
            </div>
          </div>
          <div class="contact">
            <img src="../assets/images/组 964@3x.png" alt="" />
            <div>
              <p>{{ $t("index.footer.more6") }}</p>
              <p>0096568886446</p>
            </div>
          </div>
          <div class="contact">
            <img src="../assets/images/组 965@3x.png" alt="" />
            <div>
              <p>{{ $t("index.footer.more7") }}</p>
              <p>{{ $t("index.footer.more8") }}</p>
            </div>
          </div>
          <div class="contact">
            <img src="../assets/images/组 966@3x.png" alt="" />
            <div>
              <p>{{ $t("index.footer.more7") }}</p>
              <p>Whatsapp</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 底层 -->
      <div class="floor">
        <!-- 这里排版有问题 -->
        <img src="" alt="" />
        <!-- 单独排 -->
        <div class="floor-second">
          <div>{{ $t("index.footer.more29") }}</div>
          <ul>
            <li>{{ $t("index.footer.more9") }}</li>
            <li>{{ $t("index.footer.more10") }}</li>
            <li>{{ $t("index.footer.more11") }}</li>
            <li>{{ $t("index.footer.more12") }}</li>
            <li>{{ $t("index.footer.more13") }}</li>
            <li>{{ $t("index.footer.more14") }}</li>
            <li>{{ $t("index.footer.more15") }}</li>
            <li>{{ $t("index.footer.more15-1")}}</li>
            <li>{{ $t("index.footer.more16") }}</li>
            <li>{{ $t("index.footer.more17") }}</li>
          </ul>
        </div>

        <div class="floor-content">
          <span> Alkuwaitiya商店 </span>
          <ul>
            <li>{{ $t("index.footer.more18") }}</li>
            <li>{{ $t("index.footer.more19") }}</li>
            <li>{{ $t("index.footer.more20") }}</li>
            <li>{{ $t("index.footer.more21") }}</li>
            <li>{{ $t("index.footer.more22") }}</li>
          </ul>
        </div>

        <div class="floor-content">
          <span>{{ $t("index.footer.more23") }}</span>
          <ul>
            <li>{{ $t("index.footer.more23") }}</li>
            <li>{{ $t("index.footer.more24") }}</li>
            <li>{{ $t("index.footer.more25") }}</li>
          </ul>
        </div>

        <div class="floor-icon">
          <div>{{ $t("index.footer.more26") }}</div>
          <ul>
            <li><img src="../assets/images/组 958@3x.png" alt="" /></li>
            <li><img src="../assets/images/组 957@3x.png" alt="" /></li>
            <li><img src="../assets/images/组 960@3x.png" alt="" /></li>
            <li><img src="../assets/images/组 959@3x.png" alt="" /></li>
            <li><img src="../assets/images/组 961@3x.png" alt="" /></li>
            <li><img src="../assets/images/组 962@3x.png" alt="" /></li>
          </ul>
        </div>

        <div class="floor-download">
          <span>{{ $t("index.footer.more27") }}</span>
          <div>
            <img src="../assets/images/待发货_03.png" alt="" />
            <img src="../assets/images/待发货_07.png" alt="" />
          </div>
        </div>
      </div>

      <!-- 支付选择 版本所有权 -->
      <div class="pay">
        <div class="pay-left">
          <img src="../assets/images/组 969@3x.png" alt="" />
          <img src="../assets/images/组 968@3x.png" alt="" />
          <img src="../assets/images/组 970@3x.png" alt="" />
        </div>
        <div class="pay-right">
          <p>
            {{ $t("index.footer.more28") }}
            <img src="../assets/images/logol.png" alt="" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.content {
  margin:0 auto;
  //顶部邮件列表
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .mailing-list {
    display: flex;
    align-items: center;
    margin-top: 51px;
    img {
      width: 23px;
      height: 16px;
      background: #01c5c4;
    }
    .mail-text {
      margin-left: 9px;
      // width: 96px;
      height: 22px;
      font-size: 16px;
      font-family: PingFang SC-Heavy, PingFang SC;
      font-weight: 800;
      // color: #01C5C4;
      color: #ed1b35;
      line-height: 20px;
    }
  }

  //订阅提交信息框
  .subscribe {
    width: 583px;
    height: 52px;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    border: 1px solid #eeeeee;
    margin-top: 43px;
    display: flex;
    input {
      padding-left: 19px;
      width: 481px;
      height: 50px;
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #c6c6c6;
      border: 0px solid white;
    }
    .subscribe-button {
      width: 102px;
      height: 52px;
      background: #ed1b35;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      text-align: center;
      line-height: 52px;
      font-size: 16px;
      font-family: PingFang SC-Heavy, PingFang SC;
      font-weight: 800;
      color: #ffffff;
    }
  }

  //中间层
  .middle-picture {
    display: flex;
    img {
      width: 100px;
      height: 100px;
      margin-top: 10px;
      margin-left: 15px;
    }
  }
  .middle {
    margin-top: 45px;
    width: 1920px;
    height: 143px;
    // background: #01C5C4;
    background: #ed1b35;
    border-radius: 0px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    // opacity: 1;
    .middle-content {
      width: 1140px;
      height: 143px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .contact-support {
        display: flex;
        .contact-first {
          // width: 240px;
          height: 57px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .any-time {
            font-size: 20px;
            font-family: PingFang SC-Heavy, PingFang SC;
            font-weight: 800;
            color: #ffffff;
          }
          .channel {
            display: block;
            margin-top: 10px;
            text-align: left;
            font-size: 12px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
          }
        }
      }
      .contact {
        display: flex;
        align-items: center;
        height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
        div {
          margin-left: 10px;
          height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          p {
            margin: -20px 0px;
            display: block;
            font-size: 14px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
          }
        }
      }
    }
  }

  //底层 196 32
  .floor {
    margin-top: 33px;
    display: flex;
    width: 1140px;
    height: 220px;
    justify-content: space-between;
    align-content: flex-start;
    .floor-right {
      margin-top: 47px;
      img {
        width: 196px;
        height: 32px;
      }
    }

    //单独排
    .floor-second {
      div {
        font-size: 14px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #333333;
        text-align: left;
      }
      ul {
        width: 227px;
        padding: 0;
        margin: 0;
        margin-top: 28px;
        display: flex;
        flex-wrap: wrap;
        li {
          list-style: none;
          font-size: 12px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #666666;
          padding-right: 20px;
        }
      }
    }

    .floor-content {
      span {
        font-size: 14px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #333333;
      }
      ul {
        padding: 0;
        margin: 0;
        margin-top: 28px;
        li {
          list-style: none;
          font-size: 12px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #666666;
          margin-bottom: 14px;
        }
      }
    }

    //底部图标
    .floor-icon {
      width: 126px;
      div {
        font-size: 14px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #333333;
        text-align: left;
      }
      ul {
        padding: 0;
        margin: 0;
        margin-top: 28px;
        width: 126px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          // margin-right: 10px;
          list-style: none;
          img {
            width: 35px;
            height: 35px;
          }
        }
      }
    }

    //下载
    .floor-download {
      span {
        font-size: 14px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #333333;
      }
      div {
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        img {
          width: 145px;
          height: 44px;
          margin-bottom: 9px;
        }
      }
    }
  }

  //支付选择 版本所有权

  .pay {
    margin-top: -283px;
    width: 1140px;
    height: 737px;
    margin-bottom: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pay-left {
      display: flex;
      img {
        width: 57px;
        height: 37px;
        margin-right: 8px;
      }
    }
    .pay-right {
      display: flex;
      align-items: center;
      p {
        font-size: 12px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #000000;
      }
      img {
        width: 300px;
        height: 120px;
        margin-left: 14px;
      }
    }
  }
}
</style>
