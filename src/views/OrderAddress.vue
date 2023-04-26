<template>
  <div>
    <!-- 选择地址 -->
    <div class="section-address">
      <div class="address-body">
        <ul>
          <li>
            <img src="../assets/images/组 1126@3x.png" />
            <span class="name"
              >小松 <span class="phone">13242305360 </span>
              <span class="address">广东省广州市区</span>
            </span>
            <span class="update-address">修改本地址</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import httpApi from '../http';
export default {
mounted () {
  this.init();
},
  methods: {
    init() {
      httpApi.addressApi.queryAddressEdit().then((res)=>{
        console.log("添加/修改收获地址",res);
      })
    }
  },
};
</script>

<style lang="less" scoped>
.section-address {
  width: 1200px;
  margin: 0 auto;
  height: 280px;
  .title {
    font-size: 18px;
  }
  .address-body ul {
    list-style: none;
    li {
      border: 1px solid rgb(245, 11, 11);
      background-color: antiquewhite;
      border-radius: 2%;
      width: 1200px;
      height: 30px;

      margin-top: 30px;
      padding-top: 18px;
      img{
        margin-left:10px;
            width:20px;
            height:20px;
           
        }
      .name {
        margin-top: 30px;
        margin-left: 30px;
        
        .phone {
          margin-left: 10px;
        }
        .address {
          margin-left: 30px;
        }
      }
      .update-address {
        margin-left: 700px;
      }
    }
  }
}
</style>
