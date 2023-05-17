<template>
  <div></div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.campaign {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .fontColor {
    color: #ed1b35 !important;
  }
  .launch-new {
    margin-top: 60px;
    margin-right: 20px;
    width: 587px;
    height: 341px;
    background: #ffffff;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    overflow: hidden;
    .new {
      .xinp {
        width: 112px;
        height: 40px;
        font-size: 28px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        // line-height: 0px;
        margin-left: 26px;
      }

      .division {
        width: 0px;
        height: 24px;
        padding-top: 10px;
        margin-left: 13px;
        opacity: 1;
        border: 2px solid #333333;
      }
      .jinbao {
        width: 112px;
        height: 40px;
        font-size: 28px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #333333;
        line-height: 0px;
        margin-left: 10px;
        padding-right: 200px;
      }
      .more {
        text-decoration: none;
        width: 60px;
        height: 40px;
        font-size: 15px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 0px;
      }
    }
  }
  .pic-content {
    margin-left: 21px;
    width: 587px;
    display: flex;
    // overflow: hidden;

    .pic {
      margin-top: 30px;
      margin-right: 10px;
      img {
        width: 175px;
        height: 177px;
        border: 1px solid #e1e1e1;
      }
      .price-bottom {
        display: flex;
        list-style: none;
        margin-top: 10px;
        .price {
          margin-left: 10px;
          width: 52px;
          height: 26px;
          background: #ed1b35;
          border-radius: 13px 13px 13px 13px;
          opacity: 1;
          .price-title {
            width: 52px;
            height: 26px;
            font-size: 13px;
            font-family: PingFang SC-Heavy;
            font-weight: 800;
            color: #f8f1f1;
            line-height: 26px;
            text-align: center;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
        }
        .delunit {
          margin-top: 5px;
          margin-left: 10px;
          font-size: 12px;
        }
        .delprice {
          margin-top: 10px;
          width: 73px;
          height: 30px;
          font-size: 22px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #333333;
          line-height: 0px;
        }
      }
    }
  }

  .colorActive {
    color: #d68b07 !important;
  }
  .launch-hot {
    margin-left: 13px;
    margin-top: 60px;
    width: 587px;
    height: 341px;
    background: #ffffff;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    overflow: hidden;
    .hot {
      margin-top: 10px;
      .hotsale {
        width: 112px;
        height: 40px;
        font-size: 28px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        line-height: 0px;
        margin-left: 26px;
      }
      .division {
        padding-top: 5px;
        width: 0px;
        margin-left: 13px;
        height: 24px;
        opacity: 1;
        border: 2px solid #333333;
      }
      .jinbao {
        width: 112px;
        height: 40px;
        font-size: 28px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #333333;
        line-height: 0px;
        margin-left: 10px;
        padding-right: 200px;
      }
      .more {
        text-decoration: none;
        width: 60px;
        height: 40px;
        font-size: 15px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 0px;
      }
    }
  }
  .pic-content2 {
    margin-left: 21px;
    width: 587px;
    height: 242px;
    display: flex;
    overflow: hidden;
    .pic2 {
      // margin-top:30px;
      width: 175px;
      height: 242px;
      background: #fff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      margin-left: 10px;
      img {
        width: 175px;
        height: 177px;
      }
      .re {
        width: 175px;
        height: 65px;
        background: #f2f2f2;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        .re1 {
          margin-top: 5px;
          margin-left: 20px;
          width: 120px;
          height: 22px;
          background: #d9b77a;
          border-radius: 13px 13px 13px 13px;
          opacity: 1;
          div {
            margin-left: 20px;
            width: 65px;
            height: 20px;
            font-size: 14px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 20px;
            text-align: center;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
        }
        .re2 {
          margin-left: 20px;
          margin-top: 10px;
          // width: 56px;
          height: 65px;
          font-size: 14px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #333333;
          display: flex;
          justify-content: space-between;

          .goodsname {
            width: 56px;
            height: 20px;
            font-size: 14px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #333333;
            line-height: 20px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .bang {
            width: 20px;
            height: 19px;
            background: #ed1b35;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            .ba {
              margin-left: 3px;
              margin-right: 200px;
              width: 13px;
              height: 19px;
              font-size: 13px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #f1eeee !important;
              line-height: 19px;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
          }
        }
      }
    }
  }
}
</style>
