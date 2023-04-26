<template>
    <div class="success">
      <div class="content">
        <div class="left">
          <img src="../assets/images/success.png" />
        </div>
        <div class="right">
          <div class="done">支付成功！</div>
          <div class="purchase">感谢您的购买</div>
          <div class="return">
            <a href=""> 返回</a><a class="text" herf="/cart">我的购物车</a><a  herf="/">|</a
            ><a class="text" href="">首页</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="less" scoped>
  .success {
    margin-top: 30px;
    width: 1200px;
    height: 300px;
    margin: 0 auto;
  
    background-color: aquamarine;
    .content {
      display: flex;
  
      .left {
        margin-left: 300px;
        margin-top: 50px;
      }
      .right {
        margin-top: 80px;
        margin-left: 50px;
        .done {
          font-size: 18px;
        }
        .purchase {
          margin-top: 8px;
          font-size: 18px;
        }
        .return {
          margin-top: 8px;
          font-size: 14px;
          a {
            text-decoration: none;
            margin-left: 8px;
     
          }
  a.text{
            color:red
           }
        }
      }
    }
  }
  </style>
  