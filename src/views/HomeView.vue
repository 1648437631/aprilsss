<template>
  <div class="body">
    <div class="container">
      <div class="nav" ref="dataNavList">
        <div class="classfication">
          {{ $t("index.tar.more33") }}
        </div>
        <TabBar @tabClick="tabClick"></TabBar>
        <!-- <li
          :class="{ active: currentIndex == index }"
          v-for="(item, index) in top_category"
          :key="index"
          @click="handleClick(index)"
        >
          {{ item.name }}
        </li> -->
      </div>

      <!-- 切换面板 -->
      <div>
        <div v-show="0 == currentIndex">
          <div class="ban">
            <div id="cid">
              <!-- 商品轮播 -->
              <div class="banner">
                <swiper class="top-banner" :options="swiperOptions">
                  <swiper-slide
                    v-for="(item, index) in banner"
                    :key="index"
                    @click.native="jump(item.product_id, item.cate_id)"
                    ><img :src="item.image" alt=""
                  /></swiper-slide>
                </swiper>
              </div>
              <!-- 商品轮播 -->

              <!-- 小分类轮播 -->
              <div class="botton-banner">
                <ul>
                  <li>
                    <img src="../assets/images/lunbodian.jpg" alt="" />
                    <div>{{ $t("index.home.more40") }}</div>
                  </li>
                  <li>
                    <img src="../assets/images/lunbo4.jpg" alt="" />
                    <div>{{ $t("index.home.more41") }}</div>
                  </li>
                  <li>
                    <img src="../assets/images/lunbo2y.jpg" alt="" />
                    <div>{{ $t("index.home.more42") }}</div>
                  </li>
                  <li>
                    <img src="../assets/images/lunbo3d.jpg" alt="" />
                    <div>{{ $t("index.home.more43") }}</div>
                  </li>
                  <li>
                    <img src="../assets/images/lunbo4.jpg" alt="" />
                    <div>{{ $t("index.home.more44") }}</div>
                  </li>
                </ul>
              </div>
              <!-- 小分类轮播 -->

              <!-- 第三层新品上线|好物热卖 -->
              <div class="campaign">
                <!-- 新品上线|劲爆超值 -->

                <div class="launch-new">
                  <div class="new xinp">
                    <span
                      class="xinp"
                      :class="{ fontColor: isactive1 }"
                      @click="changeMenu(1)"
                      >{{ $t("index.home.more45") }}</span
                    >
                    <span class="division"></span>
                    <span
                      class="jinbao"
                      :class="{ fontColor: isactive2 }"
                      @click="changeMenu(2)"
                      >{{ $t("index.home.more65") }}</span
                    >
                    <!-- <a href="/newarrival" class="more"
                      >{{ $t("index.home.more") }}
                    </a> -->
                    <router-link to="/newarrival?type=1" class="more"
                      >{{ $t("index.home.more") }}
                      <i class="el-icon-arrow-right"></i
                    ></router-link>
                  </div>
                  <div>
                    <div class="pic-content">
                      <div
                        class="pic"
                        v-for="(item, index) in ProductInsideLeft"
                        :key="index"
                      >
                        <img :src="item.image" alt="" />
                        <div class="price-bottom">
                          <div class="price">
                            <div class="price-title">
                              {{ $t("index.home.more72") }}
                            </div>
                          </div>
                          <div class="delunit">KD:</div>
                          <div class="delprice">{{ item.price }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="launch-hot">
                  <div class="hot">
                    <span
                      class="hotsale"
                      :class="{ colorActive: isactive3 }"
                      @click="updateMenu(3)"
                      >{{ $t("index.home.more47") }}</span
                    >
                    <span class="division"></span>
                    <span
                      class="jinbao"
                      :class="{ colorActive: isactive4 }"
                      @click="updateMenu(4)"
                      >{{ $t("index.home.more61") }}</span
                    >
                    <router-link to="/newarrival?type=3" class="more"
                      >{{ $t("index.home.more") }}
                      <i class="el-icon-arrow-right"></i
                    ></router-link>
                  </div>
                  <div class="pic-content2">
                    <div
                      class="pic2"
                      v-for="(item, index) in ProductInsideRight"
                      :key="index"
                    >
                      <img :src="item.image" alt="" />

                      <div class="re">
                        <div class="re1">
                          <div>{{ $t("index.home.more68") }}</div>
                        </div>
                        <div class="re2">
                          <div class="goodsname">{{ item.goods_name }}</div>
                          <div class="bang">
                            <div class="ba">{{ $t("index.home.more69") }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 新品上线|劲爆超值 -->
            </div>

            <!-- 第四层限时抢购 -->
            <div class="time-limit">
              <div>
                <span class="xianshi">{{ $t("index.home.more46") }}</span>
                <!-- <a href="/newarrival" class="more">{{
                  $t("index.home.more")
                }}</a> -->
                <router-link to="/newarrival?type=2" class="more"
                  >{{ $t("index.home.more") }}
                  <i class="el-icon-arrow-right"></i>
                </router-link>
              </div>
              <div class="photo">
                <img src="" alt="" />
              </div>
              <div class="box">
                <div
                  class="content"
                  v-for="(item, index) in category.slice(1, 6)"
                  :key="index"
                  @click="jumpDetail(item.id)"
                >
                  <div class="time-down">{{ $t("index.home.more74") }}</div>
                  <!-- 修改计时器 -->

                  <div class="time">
                    00：00：00
                    <!-- <span class="hour">{{ hour }}</span> <strong>:</strong>
                    <span class="minute">{{ minute }}</span> <strong>:</strong>
                    <span class="second">{{ second }}</span> -->
                  </div>
                  <img :src="item.image" />
                  <div class="second">
                    <div class="title">{{ $t("index.home.more72") }}</div>

                    <div class="unit">
                      kd
                      <span class="price">{{ item.price }}</span>
                    </div>
                  </div>
                  <div class="third">{{ $t("index.home.more75") }}kd 200</div>
                  <div class="product-title">{{ item.goods_name }}</div>
                  <div class="start">
                    <img src="../assets/images/start.png" alt="" />
                    <img src="../assets/images/start.png" alt="" />
                    <img src="../assets/images/start.png" alt="" />
                    <img src="../assets/images/start.png" alt="" />
                    <img class="al" src="../assets/images/xin.png" alt="" />
                  </div>
                  <div class="button">
                    <span class="but">{{ $t("index.list.more1") }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 第五层家具专场 -->
            <div class="furniture">
              <div>
                <span class="fur">{{ $t("index.home.more70") }}</span>
                <router-link to="/categoryinside?cid=291" class="more"
                  >{{ $t("index.home.more") }}
                  <i class="el-icon-arrow-right"></i
                ></router-link>
                <!-- <a href="/" class="more">{{ $t("index.home.more") }}</a> -->
              </div>
              <div class="photo"><img /></div>

              <div class="cfx">
                <div
                  class="ctx"
                  v-for="(item, index) in category.slice(1, 6)"
                  :key="index"
                  @click="jumpDetail(item.id)"
                >
                  <div class="img"><img :src="item.image" /></div>

                  <div class="price-bottom">
                    <div class="price">
                      <div class="price-title">
                        {{ $t("index.home.more72") }}
                      </div>
                    </div>
                    <div class="delunit">KD:</div>
                    <div class="delprice">{{ item.price }}</div>
                  </div>
                  <div class="title">{{ item.goods_name }}</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                    </div>
                    <img src="../assets/images/xin.png" alt="" />
                  </div>
                  <div class="button">{{ $t("index.home.more14") }}</div>
                </div>
              </div>
            </div>

            <!-- 第六层厨具专场 -->
            <div class="kitchen">
              <div>
                <span class="fur">{{ $t("index.home.more71") }}</span>
                <router-link to="/categoryinside?cid=280" class="more"
                  >{{ $t("index.home.more") }}
                  <i class="el-icon-arrow-right"></i
                ></router-link>
                <!-- <a href="/" class="more">{{ $t("index.home.more") }}</a> -->
              </div>
              <div class="photo"><img /></div>

              <div class="cfx">
                <div
                  class="ctx"
                  v-for="(item, index) in category.slice(21, 26)"
                  :key="index"
                  @click="jumpDetail(item.id)"
                >
                  <div class="img"><img :src="item.image" /></div>
                  <div class="price-bottom">
                    <div class="price">
                      <div class="price-title">
                        {{ $t("index.home.more72") }}
                      </div>
                    </div>
                    <div class="delunit">KD:</div>
                    <div class="delprice">{{ item.price }}</div>
                  </div>
                  <div class="title">{{ item.goods_name }}</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                    </div>
                    <img src="../assets/images/xin.png" alt="" />
                  </div>
                  <div class="button" @click="jumpDetail(item.id)">
                    {{ $t("index.home.more14") }}
                  </div>
                </div>
              </div>
            </div>

            <!-- 第七层猜你喜欢 -->

            <div class="adorable">
              <div class="fur">
                {{ $t("index.home.more60")
                }}<a href="/" class="more">{{ $t("index.home.more") }}</a>
              </div>
              <div class="photo"><img /></div>

              <div class="cfx">
                <div
                  class="ctx"
                  v-for="(item, index) in limitList"
                  :key="index"
                  @click="jumpDetail(item.id)"
                >
                  <div class="img"><img img :src="item.image" /></div>
                  <!-- <div class="price">
                    <span class="sales"
                      ><span class="deal">
                        {{ $t("index.home.more72") }}</span
                      ></span
                    ><span class="unit">kd:</span><span class="ju">200:00</span>
                  </div> -->
                  <div class="price-bottom">
                    <div class="price">
                      <div class="price-title">
                        {{ $t("index.home.more72") }}
                      </div>
                    </div>
                    <div class="delunit">KD:</div>
                    <div class="delprice">{{ item.price }}</div>
                  </div>

                  <div class="title">{{ item.goods_name }}</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                    </div>
                    <img src="../assets/images/xin.png" alt="" />
                  </div>
                  <div class="button">
                    {{ $t("index.home.more14") }}
                  </div>
                </div>
                <!-- <div class="ctx">
                  <div class="img"><img /></div>
                  <div class="price">
                    <span class="sales">特卖价</span
                    ><span class="unit">kd:</span><span class="ju">200:00</span>
                  </div>
                  <div class="title">modernist munifnfnfn</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                    </div>
                    <img src="../assets/images/cel_shoucan.png" alt="" />
                  </div>
                  <div class="button">加入购物车</div>
                </div>
                <div class="ctx">
                  <div class="img"><img /></div>
                  <div class="price">
                    <span class="sales">特卖价</span
                    ><span class="unit">kd:</span><span class="ju">200:00</span>
                  </div>
                  <div class="title">modernist munifnfnfn</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                      <img src="../assets/images/start.png" alt="" />
                    </div>
                    <img src="../assets/images/cel_shoucan.png" alt="" />
                  </div>
                  <div class="button">加入购物车</div>
                </div> -->
              </div>
            </div>
            <!-- 分页效果 -->
            <div class="pagination_sectionpagination_section">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="curPage"
                :page-size="pageSize"
                layout="->,prev, pager, next"
                :total="total"
                hide-on-single-page:false
              >
              </el-pagination>
            </div>
            <!-- 分页效果 -->
          </div>
        </div>
        <!-- 切换面板厨房用具 -->
        <div class="one" v-show="1 == currentIndex">
          <ul class="top">
            <li>排序：</li>
            <li>综合</li>
            <li>价格</li>
            <li>销量</li>
          </ul>
          <div class="main">
            <div
              class="content"
              v-for="(item, index) in limitList"
              :key="index"
            >
              <div class="img"><img :src="item.image" /></div>
              <div class="first-price">
                <div class="num"><span>KD</span>{{ item.price }}</div>
                <div class="del-num">{{ item.ot_price }}</div>
              </div>
              <div class="second-title">{{ item.goods_name }}</div>
              <div class="third-star">
                <div class="third">
                  <img src="../assets/images/start.png" alt="" />
                </div>
                <div class="third">
                  <img src="../assets/images/start.png" alt="" />
                </div>
                <div class="third">
                  <img src="../assets/images/start.png" alt="" />
                </div>
                <div class="third">
                  <img src="../assets/images/start.png" alt="" />
                </div>
                <div class="third">
                  <img src="../assets/images/start.png" alt="" />
                </div>
                <div class="third-img">
                  <img src="../assets/images/cel_shoucan.png" alt="" />
                </div>
              </div>
              <div class="four-button active"><div>立即购买</div></div>
            </div>
          </div>

          <!-- 分页 -->
          <div class="pagination_sectionpagination_section">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="curPage"
              :page-size="pageSize"
              layout="->,prev, pager, next, jumper"
              :total="total"
              hide-on-single-page:false
            >
            </el-pagination>
          </div>
          <!-- 分页 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  components: { TabBar },
  data() {
    return {
      category: "", //分列列表
      ProductInsideLeft: "", //专区分类左内页
      ProductInsideRight: "", //专区分类右边页
      menu: "",
      isactive: true,
      top_category: [], //导航，
      banner: [], //轮播贴图
      section: [], //分区专块
      currentIndex: 0, //当前默认选中
      swiperOptions: {
        // effect: "cube",
        loop: true,
        autoplay: true,
      },

      //分页
      total: 0,
      pageSize: 10, //每页数量
      curPage: 1, //当前页
      isactive1: false,
      isactive2: false,
      isactive3: false,
      isactive4: false,

      // 定时器
      // hour: "",
      // minute: "",
      // second: "",
    };
  },
  mounted() {
    this.init();
  },
  created() {
    this.changeMenu(1);
    this.updateMenu(3);
    //定时器
    // setInterval(this.timeCount, 1000);
  },
  // destroyed () {
  //   let a= setInterval(this.timeCount, 1000);
  //   clearInterval(a);
  // },
  computed: {
    limitList() {
      return this.category.slice(
        this.pageSize * (this.curPage - 1),
        this.pageSize * this.curPage
      );
    },
  },
  methods: {
    // // 定时器
    // timeCount() {
    //   var inputTime = +new Date("2023-12-27 09:10:10");
    //     //我们先调用countDown函数，可以避免在打开界面后停一秒后才开始倒计时
    //     //定时器 每隔一秒变化一次
    //     //获取当前时间的时间戳（单位毫秒）
    //     var nowTime = +new Date();
    //     //把剩余时间毫秒数转化为秒
    //     var times = (inputTime - nowTime) / 1000;
    //     //计算小时数 转化为整数
    //     const h = parseInt(times / 60 / 60 % 24);parseInt(times / 60 / 60 % 24);
    //     //如果小时数小于 10，要变成 0 + 数字的形式 赋值给盒子
    //     this.hour = h < 10 ? "0" + h : h;
    //     //计算分钟数 转化为整数
    //     const m = parseInt(times / 60 % 60);
    //     //如果分钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
    //     this.minute = m < 10 ? "0" + m : m;
    //     //计算描述 转化为整数
    //     const s = parseInt(times % 60);
    //     //如果秒钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
    //     this.second = s < 10 ? "0" + s : s;
    // },

    // 当前页码更改
    handleCurrentChange(page) {
      this.curPage = page; //当前页
    },
    changeMenu(menu) {
      // console.log(menu);
      this.menu = menu;
      if (this.menu == 1) {
        this.isactive1 = true;
        this.isactive2 = false;
      } else {
        this.isactive1 = false;
        this.isactive2 = true;
      }
      let data = {
        page: 1,
        limit: 20,
        type: menu,
      };
      httpApi.homepageApi.queryNewProductsInside(data).then((res) => {
        console.log("left专区新品抢购，热销，空运，积分", res);
        this.ProductInsideLeft = res.data.data;
      });
    },
    updateMenu(menu) {
      this.menu = menu;
      if (this.menu == 3) {
        this.isactive3 = true;
        this.isactive4 = false;
      } else {
        this.isactive3 = false;
        this.isactive4 = true;
      }
      let data = {
        page: 1,
        limit: 20,
        type: menu,
      };
      httpApi.homepageApi.queryNewProductsInside(data).then((res) => {
        console.log("右边专区新品抢购，热销，空运，积分", res);
        this.ProductInsideRight = res.data.data;
      });
    },
    tabClick(val) {
      this.currentIndex = val.index;
    },
    //跳转
    jump(val1, val2) {
      console.log("val1", val1);
      console.log("val2", val2);
      if (val1 !== "") {
        this.$router.push({
          path: "/detail",
          query: {
            id: val1,
          },
        });
      } else {
        console.log(1111);
        this.$router.push({
          path: "/categoryinside",
          query: {
            cid: val2,
          },
        });
      }
    },
    jumpDetail(val1) {
      console.log("val1", val1);
      this.$router.push({
        path: "/detail",
        query: {
          id: val1,
        },
      });
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

      // 专区分类
      let data = {
        page: 1,
        limit: 1000,
        sort: 1,
        // order:DESC,
        // cid: 292,
      };
      httpApi.homepageApi.queryCategoryInside(data).then((res) => {
        console.log("限时抢购专区分类内页cate", res);
        this.category = res.data.data;
        this.total = res.data.data.length;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  margin: 0 auto;
  width: 1920px;
  height: 5545px;
  background: #f9fafc;
  border-radius: 0px 0px 0px 0px;

  .container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .nav {
      margin-top: 23px;
      display: flex;
      li {
        list-style: none;
        margin-left: 10px;
        width: 86px;
        height: 25px;
        font-size: 16px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
        margin-top: 10px;
        text-align: center;
        // margin-left: 48px;
        // margin-top: -15px;
        white-space: nowrap;
        //     overflow: hidden;
        // text-overflow: ellipsis;
      }
      li.active {
        width: 86px;
        height: 25px;
        font-size: 18px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #ed1b35;

        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
      .classfication {
        width: 156px;
        text-align: center;
        line-height: 44px;
        height: 44px;
        background: #ed1b35;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        font-weight: bold;
          color: #ffffff;


      }
    }
    .ban {
      margin-top: 10px;

      #cid {
        width: 1200px;
        margin: 0 auto;

        .banner {
          position: relative;
          margin: 0 auto;
          width: 1200px;
          height: 506px;
          .top-banner {
            position: absolute;

            width: 1200px;
            height: 506px;
            img {
              width: 1200px;
              height: 506px;
              // background-color: #ed1b35;
            }
          }
        }

      .botton-banner {
        width: 1200px;
        height: 195px;
        background: #ffffff;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        ul {
          display: flex;
          list-style: none;
          li {
            width: 271px;
            height: 195px;
            img {
              width: 196px;
              height: 119px;
            }
            div {
              width: 72px;
              height: 25px;
              font-size: 18px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #333333;
              line-height: 25px;
              text-align: center;
              margin-left: 64px;
            }
          }
        }
      }
      .campaign {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        .fontColor {
          color: #ed1b35 !important;
        }
        .launch-new {
          margin-top: 60px;
          margin-right: 13px;
          width: 587px;
          height: 341px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          overflow: hidden;
          element.style{
          display: flex;
        }
          .new {
            .xinp {

              // width: 112px;
              // height: 40px;
              font-size: 28px;
              font-family: PingFang SC-Heavy, PingFang SC;
              font-weight: 800;
              // line-height: 0px;
              margin-left: 26px;
            }

            .division {
              width: 0px;
              height: 24px;
              margin-left: 13px;
              opacity: 1;
              border: 2px solid #333333;
            }
            .jinbao {
              // width: 112px;
              // height: 40px;
              font-size: 28px;
              font-family: PingFang SC-Heavy, PingFang SC;
              font-weight: 800;
              color: #333333;
              // line-height: 0px;
              margin-left: 10px;
              padding-right: 200px;
            }
            .more {
              text-decoration: none;
              // width: 60px;
              // height: 40px;
              font-size: 15px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #999999;
              // line-height: 0px;
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
.price-bottom{
  display: flex;
  list-style: none;
  margin-top: 10px;
.price{
  margin-left: 10px;
  width: 52px;
height: 26px;
background: #ED1B35;
border-radius: 13px 13px 13px 13px;
opacity: 1;
.price-title{
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
.delunit{
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
}
.delprice{
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
        // 不冲
        element.style{
          display: flex;
        }
        .launch-hot {
          margin-left: 13px;
          margin-top: 60px;
          // width: 587px;
          // height: 341px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          overflow: hidden;
          .hot {
            margin-top: 10px;
            .hotsale {
              // width: 112px;
              // height: 40px;
              font-size: 28px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              line-height: 0px;
              margin-left: 26px;
            }
            .division {
              width: 0px;
              margin-left: 13px;
              height: 24px;
              opacity: 1;
              border: 2px solid #333333;
            }
            .jinbao {
              // width: 112px;
              // height: 40px;
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
                  white-space: wrap;
                  // overflow: hidden;
                  text-overflow: ellipsis;
                }
                .bang {
                  width: 20px;
                  height: 19px;
                  background: #ed1b35;
                  border-radius: 0px 0px 0px 0px;
                  opacity: 1;
                .ba {
                  margin-left:3px;
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


    }
  }
      // 限时抢购
      element.style {
    display: flex;
    justify-content:space-between ;
    // align-items: center;
    height: 60px;
}
      .time-limit {
        margin-top: 60px;
        .xianshi {
          // width: 112px;
          // height: 40px;
          font-size: 28px;
          font-family: PingFang SC-Heavy, PingFang SC;
          font-weight: 800;
          color: #333333;
          line-height: 0px;
        }
        .more {
          text-decoration: none;
          margin-left:947px;
          // width: 60px;
          height: 21px;
          font-size: 15px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          // line-height: 0px;
        }
        .photo {
          width: 1200px;
          margin: 0 auto;
          height: 400px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
        }
        .box {
          display: flex;
          flex-wrap: wrap;
          height: 381px;

          .content {
            overflow: hidden;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 20px;
            width: 217px;
            height: 381px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;

            .time-down {
              margin-top:4px;
              margin-left: 5px;
              width: 60px;
              height: 14px;
              font-size: 10px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #ed1b35;
              // line-height: 0px;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
            .time {
              margin-left: 10px;
              width: 68px;
              height: 14px;
              font-size: 10px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: #ed1b35;
              // line-height: 0px;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
            img {
              width: 217px;
              height: 170px;
              background: #ffffff;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
            }
            .second {
              width: 217px;
              height: 31px;
              background: linear-gradient(90deg, #f9001f 0%, #ff3d78 100%);
              display:flex;
              .title {
                margin-left: 5px;
                font-size: 14px;
                // width: 217px;
                height: 31px;
                line-height: 31px;
                margin-right: 20px;
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                color: #ffffff;
                background: linear-gradient(90deg, #f9001f 0%, #ff3d78 100%);
                border-radius: 0px 0px 0px 0px;
                opacity: 1;
              }
              .unit {
                width: 105px;
                height: 30px;
                font-size: 14px;
                // margin-left: 8px;
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                color: #ffffff;
                line-height: 30px;
                .price {
                // width: 105px;
                // height: 30px;
                font-size: 22px;
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                color: #ffffff;
                line-height: 30px;
                align-items: center;
                // margin-left:15px;
                // -webkit-background-clip: text;
                // -webkit-text-fill-color: transparent;
              }
              }

            }
            .third {
              margin-top: 20px;
              width: 120px;
              height: 20px;
              font-size: 14px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #ed1b35;
              line-height: 0px;
              white-space: nowrap;
              text-overflow: ellipsis;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
            .product-title {
              margin-right: 53px;
              width: 159px;
              height: 22px;
              font-size: 16px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #333333;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
            .start img {
              width: 12px;
              height: 11px;
              opacity: 1;
            }
            .start img.al {
              margin-left: 110px;
              width: 12px;
              height: 11px;
              opacity: 1;
            }
            .button {
              width: 200px;
              height: 35px;
              background: #f9fafc;
              border: 1px solid #ed1b35;
              opacity: 1;
              .but {
                margin-left: 60px;
                height: 35px;
                align-items: center;
                font-size: 20px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #ed1b35;
                line-height: 35px;
              }

              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
          }
        }
      }

      //家具专场
      element.style {
    display: flex;
    justify-content:space-between ;
    // align-items: center;
    height: 60px;
}
      .furniture {
        margin-top: 100px;

        .fur {
          // width: 112px;
          // height: 40px;
          font-size: 28px;
          font-family: PingFang SC-Heavy, PingFang SC;
          font-weight: 800;
          color: #333333;
          line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .more {
          text-decoration: none;
          margin-left: 899px;
          // width: 60px;
          // height: 21px;
          font-size: 15px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          // line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }

        .photo {
          width: 1202px;
          height: 400px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
        }
        .cfx {
          display: flex;
          flex-wrap: wrap;
          height: 328px;
          .ctx {
            margin-top: 10px;
            margin-left: 20px;
            margin-right: 20px;
            width: 193px;
            height: 328px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;

            .img {
              img {
                width: 193px;
                height: 131px;
              }
            }

            .price-bottom{
  display: flex;
  list-style: none;
  margin-top: 10px;
.price{
  margin-left: 10px;
  width: 52px;
height: 26px;
background: #ED1B35;
border-radius: 13px 13px 13px 13px;
opacity: 1;
.price-title{
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
.delunit{
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
}
.delprice{
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




            // .sales {
            //   width: 35px;
            //   height: 15px;
            //   background: #ed1b35;
            //   border-radius: 8px 8px 8px 8px;
            //   opacity: 1;
            //   // -webkit-background-clip: text;
            //   // -webkit-text-fill-color: transparent;
            //   margin-right: 10px;
            //   .deal {
            //     width: 30px;
            //     height: 14px;
            //     font-size: 10px;
            //     font-family: PingFang SC-Bold, PingFang SC;
            //     font-weight: bold;
            //     color: #ffffff;
            //     line-height: 0px;
            //     // // -webkit-background-clip: text;
            //     // // -webkit-text-fill-color: transparent;
            //   }
            // }
            // .unit {
            //   font-size: 14px;
            // }
            // .ju {
            //   width: 103px;
            //   margin-left: 10px;
            //   height: 28px;
            //   font-size: 20px;
            //   font-family: PingFang SC-Heavy, PingFang SC;
            //   font-weight: 800;
            //   color: #333333;
            //   line-height: 0px;
            //   // -webkit-background-clip: text;
            //   // -webkit-text-fill-color: transparent;
            // }
            .title {
              margin-top: 10px;
              width: 159px;
              height: 22px;
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #333333;
              line-height: 22px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            //评分
            .score {
              margin: 10px auto;
              width: 180px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .start {
                display: flex;
                img {
                  width: 14px;
                  height: 14px;
                  margin-right: 4px;
                }
              }
              img {
                width: 15px;
                height: 15px;
              }
            }
            .button {
              width: 176px;
              height: 35px;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
              border: 1px solid #ed1b35;
              line-height: 35px;
              text-align: center;
            }
          }
        }
      }

      //厨具专场

      .kitchen {
        margin-top: 100px;
        width: 1200px;
        element.style{
        display:flex;
        justify-content: space-between;
      }
        .cfx{
          height: 328px
        }
        .fur {
          // width: 112px;
          // height: 40px;
          font-size: 28px;
          font-family: PingFang SC-Heavy, PingFang SC;
          font-weight: 800;
          color: #333333;
          line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .more {
          text-decoration: none;
          margin-left: 899px;
          // width: 60px;
          // height: 21px;
          font-size: 15px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .photo {
          width: 1202px;
          height: 400px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
        }
        .cfx {
          display: flex;
          flex-wrap: wrap;
          // height: 791px;
          .ctx {
            margin-right: 47px;
            margin-top: 20px;
            width: 193px;
            height: 7px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;

            .img {
              img {
                width: 193px;
                height: 131px;
              }
            }
            // .sales {
            //   width: 35px;
            //   height: 15px;
            //   background: #ed1b35;
            //   border-radius: 8px 8px 8px 8px;
            //   opacity: 1;
            //   // -webkit-background-clip: text;
            //   // -webkit-text-fill-color: transparent;
            //   margin-right: 10px;
            //   .deal {
            //     width: 30px;
            //     height: 14px;
            //     font-size: 10px;
            //     font-family: PingFang SC-Bold, PingFang SC;
            //     font-weight: bold;
            //     color: #ffffff;
            //     line-height: 0px;
            //     // // -webkit-background-clip: text;
            //     // // -webkit-text-fill-color: transparent;
            //   }
            // }
            // .unit {
            //   font-size: 14px;
            // }
            // .ju {
            //   width: 103px;
            //   margin-left: 10px;
            //   height: 28px;
            //   font-size: 20px;
            //   font-family: PingFang SC-Heavy, PingFang SC;
            //   font-weight: 800;
            //   color: #333333;
            //   line-height: 0px;
            //   // -webkit-background-clip: text;
            //   // -webkit-text-fill-color: transparent;
            // }
            .price-bottom{
  display: flex;
  list-style: none;
  margin-top: 10px;
.price{
  margin-left: 10px;
  width: 52px;
height: 26px;
background: #ED1B35;
border-radius: 13px 13px 13px 13px;
opacity: 1;
.price-title{
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
.delunit{
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
}
.delprice{
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
            .title {
              margin-top: 10px;
              width: 159px;
              height: 22px;
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #333333;
              line-height: 22px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            //评分
            .score {
              margin: 10px auto;
              width: 180px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .start {
                display: flex;
                img {
                  width: 14px;
                  height: 14px;
                  margin-right: 4px;
                }
              }
              img {
                width: 15px;
                height: 15px;
              }
            }
            .button {
              width: 176px;
              height: 35px;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
              border: 1px solid #ed1b35;
              line-height: 35px;
              text-align: center;
            }
          }
        }
      }
      // 猜你喜欢
      element.style{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .adorable {
        margin-top: 100px;
        width: 1200px;

        .fur {
          // width: 112px;
          // height: 40px;
          font-size: 28px;
          font-family: PingFang SC-Heavy, PingFang SC;
          font-weight: 800;
          color: #333333;
          // line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .more {
          text-decoration: none;
          margin-left: 900px;
          // width: 60px;
          // height: 21px;
          font-size: 15px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          // line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .photo {
          width: 1202px;
          height: 400px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
        }
        .cfx {
          display: flex;
          flex-wrap: wrap;
          // height: 791px;
          .ctx {
            margin-top: 10px;
            margin-left: 20px;
            margin-right: 20px;
            width: 193px;
            height: 328px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;

            .img {
              img {
                width: 193px;
                height: 131px;
              }
            }
            // .sales {
            //   width: 35px;
            //   height: 15px;
            //   background: #ed1b35;
            //   border-radius: 8px 8px 8px 8px;
            //   opacity: 1;
            //   // -webkit-background-clip: text;
            //   // -webkit-text-fill-color: transparent;
            //   margin-right: 10px;
            //   .deal {
            //     width: 30px;
            //     height: 14px;
            //     font-size: 10px;
            //     font-family: PingFang SC-Bold, PingFang SC;
            //     font-weight: bold;
            //     color: #ffffff;
            //     line-height: 0px;
            //     // // -webkit-background-clip: text;
            //     // // -webkit-text-fill-color: transparent;
            //   }
            // }
            // .unit {
            //   font-size: 14px;
            // }
            // .ju {
            //   width: 103px;
            //   margin-left: 10px;
            //   height: 28px;
            //   font-size: 20px;
            //   font-family: PingFang SC-Heavy, PingFang SC;
            //   font-weight: 800;
            //   color: #333333;
            //   line-height: 0px;
            //   // -webkit-background-clip: text;
            //   // -webkit-text-fill-color: transparent;
            // }
            .price-bottom{
  display: flex;
  list-style: none;
  margin-top: 10px;
.price{
  margin-left: 10px;
  width: 52px;
height: 26px;
background: #ED1B35;
border-radius: 13px 13px 13px 13px;
opacity: 1;
.price-title{
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
.delunit{
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
}
.delprice{
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
            .title {
              margin-top: 10px;
              width: 159px;
              height: 22px;
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #333333;
              line-height: 22px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            //评分
            .score {
              margin: 10px auto;
              width: 180px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .start {
                display: flex;
                img {
                  width: 14px;
                  height: 14px;
                  margin-right: 4px;
                }
              }
              img {
                width: 15px;
                height: 15px;
              }
            }
            .button {
              width: 176px;
              height: 35px;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
              border: 1px solid #ed1b35;
              line-height: 35px;
              text-align: center;
            }
          }
        }
      }






    //  切换面板1
    div.one {
      width: 1200px;
      // height:2490px;
      margin: 0 auto;
      ul.top {
        width: 1200px;
        height: 44px;
        background: #ffffff;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        display: flex;
        list-style: none;
        li {
          height: 44px;
          line-height: 44px;
          margin-left: 70px;
          font-size: 16px;
        }
      }
      .main {
        width: 1200px;
        display: flex;

        .content {
          margin-left: 29px;
          width: 217px;
          height: 329px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          .img {
            img {
              width: 217px;
              height: 198px;
            }
          }
          .first-price {
            // width: 217px;
            display: flex;
            .num {
              width: 103px;
              height: 28px;
              font-size: 18px;
              font-family: PingFang SC-Heavy, PingFang SC;
              font-weight: 800;
              color: #333333;
              line-height: 0px;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
              span {
                font-size: 14px;
              }
            }
            .del-num {
              width: 56px;
              height: 14px;
              font-size: 10px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #999999;
              text-decoration: line-through;
            }
          }
          .second-title {
            width: 217px;
            width: 159px;
            height: 22px;
            font-size: 16px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #333333;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            overflow: hidden;
            white-space: nowrap;
          }
          .third-star {
            display: flex;
            .third img {
              width: 12px;
              height: 11px;
              // background: #A7A7A7;
              opacity: 1;
              margin-left: 4px;
            }
            .third-img img {
              width: 13px;
              height: 12px;
              background: #ffffff;
              opacity: 1;
              margin-left: 110px;
              // border: 1px solid #ef2329;
            }
          }
          .four-button {
            width: 217px;
            height: 37px;
            background: #ed1b35;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            div {
              margin-top: 4px;
              margin-left: 60px;
              width: 80px;
              height: 28px;
              font-size: 20px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #fff;
              line-height: 28px;
              text-align: center;
            }
          }
        }
      }
.pagination_section{
  width: 381px;
height: 43px;
background: #FFFFFF;
opacity: 1;
}

@deep: ~'>>>';
    //样式修改
    @{deep}.el-pager{
      .number,.el-icon{
            // border-radius: 50% !important;

border: 1px solid #EBEBEB !important;
            margin-left: 10px;
        }
    }
    @{deep}.btn-prev{
        // border-radius:#ED1B35 !important;
        background-color:#fff !important;
    }
    @{deep}.btn-next{
        // border-radius: 50% !important;
        background-color:#fff !important;
    }






    }
  }
}
</style>
