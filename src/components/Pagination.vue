<template>
  <div>
    <div class="pagination" >
      <el-pagination
        @current-change="pageChange"
        :current-page.sync="curPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [], //分页列表
      //分页数据
      total: 0,
      curPage: 1,
      pageSize: 10,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      httpApi.homepageApi
        .querySectionCategoryInside({
          page: 1,
          limit: 1000,
          sort: 1,
          // order:DESC,
          cid: 292,
        })
        .then((res) => {
          console.log("专区分类内页cate", res);
          this.category = res.data.data;
          this.total = this.category.length;
        });
    },
    pageChange(page) {
      this.curPage = page;
    },
  },
  computed: {
    limitList() {
      return this.category.slice(
        this.pageSize * (this.curPage - 1),
        this.pageSize * this.curPage
      );
    },
  },
};
</script>

<style lang="less" scoped></style>
