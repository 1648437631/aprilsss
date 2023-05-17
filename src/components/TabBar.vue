<template>
  <div class="tab">
    <!-- <div style="margin-bottom: 20px">
        <el-button size="small" @click="addTab(editableTabsValue)">
          add tab
        </el-button>
      </div> -->
    <el-tabs v-model="editableTabsValue" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in top_category"
        :key="index"
        :label="item.name"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      top_category: [], //导航，
      editableTabsValue: "2",
      tabIndex: 2,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    handleClick(val) {
      this.$emit("tabClick", val);
    },
    init() {
      httpApi.homepageApi.queryPreProducts().then((res) => {
        console.log("分列列表", res);
        this.bar = res.data.data;
        this.banner = res.data.data.banner;
        this.top_category = res.data.data.top_category;
        this.section = res.data.data.section;
        // let cid = []
        // this.section.forEach(value => {
        //   cid.push(value.id)
        // });
        // console.log(cid);
      });
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.top_category.push({
        title: "New Tab",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      //debugger
      let tabs = this.top_category;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.top_category = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>
<style lang="less" scoped>
.classfication {
  width: 156px;
  text-align: center;
  line-height: 44px;
  font-size: 44px;
  height: 44px;
  background: #ed1b35;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  color: #ffffff;
}
.tab {
  /deep/ .el-tabs.el-tabs--card.el-tabs--top {
    width: 1044px;
  }
  /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item {
    font-size: 18px;
    border: none;
    transition: initial;
  }
  /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }
  /deep/ .el-tabs--card > .el-tabs__header {
    border: none;
  }
  /deep/ .el-tabs__item:hover {
    color: initial;
  }
  /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    height: 25px;
    font-size: 18px;
    font-family: PingFang SC-Heavy, PingFang SC;
    font-weight: 800;
    color: #ed1b35;
  }
}
</style>
