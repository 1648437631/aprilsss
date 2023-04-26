<template>
  <div>
    <!--页面主体-->
    <el-main>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="全选" width="120" @change="doCheckAll()">
          <!-- <template slot-scope="scope">{{scope.row.image}} </template> -->
          <template v-slot:default="scope">
            <el-image :src="scope.row.image" alt=""></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品" width="120">
        </el-table-column>
        <el-table-column prop="price" label="单价" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="num" label="数量" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="总计" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="编辑" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
          >切换第二、第三行的选中状态</el-button
        >
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </el-main>
    <!--页面主体-->
  </div>
</template>

<script>

import myaxios from "../http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  name: "cart",
  data() {
    return {
      tableData: [
        {
          image:
            "https://cdn.tmooc.cn/bsfile//courseImg///d7018e5f28764959969f4ff439fe95b1.jpg",
          name: "王小虎",
          price:"20",
         num: "11",
        },
        {
          image:
            "https://cdn.tmooc.cn/bsfile//courseImg///d7018e5f28764959969f4ff439fe95b1.jpg",
          name: "王小虎",
          price:"30",
          num: "3",
        },
        {
          image:
            "https://cdn.tmooc.cn/bsfile//courseImg///d7018e5f28764959969f4ff439fe95b1.jpg",
          name: "王小虎",
          price:"40",
          num: "5",
        },
        {
          image:
            "https://cdn.tmooc.cn/bsfile//courseImg///d7018e5f28764959969f4ff439fe95b1.jpg",
          name: "王小虎",
          price:"60",
          num: "8",
        },
      ],
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    // https://test2.alkuwaityastore.com/
    doCheckAll() {
      let url = "https://test2.alkuwaityastore.com/api/newProductInside";
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
init(){
    httpApi.cartApi.queryCartList().then((res)=>{
    console.log("购物车列表",res);
  })

  httpApi.cartApi.queryCartAdd({productId:557, new:0,secKillId:53} ).then((res)=>{
    console.log("添加购物车产品",res);
  })

  // httpApi.cartApi.queryCartDel(data).then((res)=>{
  //   console.log("删除购物车产品",res);
  // })
  // httpApi.cartApi.queryCartNum(data).then((res)=>{
  //   console.log("添加商品数量",res);
  // })
  // httpApi.cartApi.queryCartCount(data).then((res)=>{
  //   console.log("购物车中的商品种类数量",res);
  // })




}


    
  },
};
</script>

<style></style>


