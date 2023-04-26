<template>
  <div class="body">
    <div class="container">
      <div class="nav" ref="dataNavList">
        <div class="classfication">{{ $t("index.tar.more33") }}</div>
        <span
          :class="{ active: currentIndex == index }"
          v-for="(item, index) in bar"
          :key="index"
          @click="handleClick(index)"
          >{{ item.cate_name }}</span
        >
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
                    ><img src="../../src/assets/images/lun.png" alt=""
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

                <div class="launch">
                  <div class="new">
                    <span class="xinp" :class="{ 'fontColor': isActive1 }" @click=changeMenu(1) >{{ $t("index.home.more45") }}</span>
                    <span class="division"></span>
                    <span class="jinbao" :class="{ 'fontColor': isActive2 }" @click=changeMenu(2)>{{ $t("index.home.more65") }}</span>
                    <a href="/newarrival" class="more" >{{ $t("index.home.more") }} </a>
                  </div>
                  <div>
                    <div class="pic-content">
                      <div
                        class="pic"
                        v-for="(item, index) in ProductInsideLeft"
                        :key="index"
                      >
                        <img :src="item.image" alt="" />
                        <span class="price">特卖价</span>
                        <span class="del-price"
                          ><span class="unit">KD:</span>1258</span
                        >
                       
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 好物热卖|热销尖货 -->

                <div class="launch">
                  <div class="new">
                    <span class="hot" @click=updateMenu(3) >{{ $t("index.home.more47") }}</span>
                    <span class="division"></span>
                    <span class="jinbao"  @click=updateMenu(4) >{{ $t("index.home.more61") }}</span>
                    <a href="/hotdeal" class="more"  >{{ $t("index.home.more") }}</a>
                  </div>
                  <div class="pic-content">
                    <div
                      class="pic2"
                      v-for="(item, index) in ProductInsideRight"
                      :key="index"
                    >
                      <img :src="item.image" alt="" />

                      <div class="re">
                        <div class="re1">热度Top1</div>
                        <div class="re2">沙发套餐</div>
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
                <span class="xianshi">限时抢购</span>
                <a href="/" class="more">查看更多</a>
              </div>
              <div class="photo">
                <img src="" alt="" />
              </div>
              <div class="box">
                <div
                  class="content"
                  v-for="(item, index) in category"
                  :key="index"
                >
                  <div class="time-down">下架倒计时</div>
                  <div class="time">00：00：00</div>
                  <div><img :src="item.image" /></div>
                  <div class="center">特卖价 kd200</div>

                  <div class="limit">限量抢，抢完恢复kd200</div>
                  <div class="title">{{ item.goods_name }}</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/redstart.png" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                    </div>
                    <img src="../assets/images/shoucan.png" alt="" />
                  </div>
                  <div class="button" @click="jumpDetail(item.id)">立即抢购</div>
                </div>
                <div class="content">
                  <div class="time-down">下架倒计时</div>
                  <div class="time">00：00：00</div>
                  <div><img /></div>
                  <div class="center">特卖价 kd168</div>

                  <div class="limit">限量抢，抢完恢复kd200</div>
                  <div class="title">Modern MINIMALIST</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/redstart.png" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                    </div>
                    <img src="../assets/images/shoucan.png" alt="" />
                  </div>
                  <div class="button">立即抢购</div>
                </div>
                <div class="content">
                  <div class="time-down">下架倒计时</div>
                  <div class="time">00：00：00</div>
                  <div><img /></div>
                  <div class="center">特卖价 kd168</div>

                  <div class="limit">限量抢，抢完恢复kd200</div>
                  <div class="title">Modern MINIMALIST</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/redstart.png" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                    </div>
                    <img src="../assets/images/shoucan.png" alt="" />
                  </div>
                  <div class="button">立即抢购</div>
                </div>
                <div class="content">
                  <div class="time-down">下架倒计时</div>
                  <div class="time">00：00：00</div>
                  <div><img /></div>
                  <div class="center">特卖价 kd168</div>

                  <div class="limit">限量抢，抢完恢复kd200</div>
                  <div class="title">Modern MINIMALIST</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/redstart.png" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                    </div>
                    <img src="../assets/images/shoucan.png" alt="" />
                  </div>
                  <div class="button">立即抢购</div>
                </div>
                <div class="content">
                  <div class="time-down">下架倒计时</div>
                  <div class="time">00：00：00</div>
                  <div><img /></div>
                  <div class="center">特卖价 kd168</div>

                  <div class="limit">限量抢，抢完恢复kd200</div>
                  <div class="title">Modern MINIMALIST</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/redstart.png" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                    </div>
                    <img src="../assets/images/shoucan.png" alt="" />
                  </div>
                  <div class="button">立即抢购</div>
                </div>
              </div>
            </div>

            <!-- 第五层家具专场 -->
            <div class="furniture" >
              <div>
                <span class="fur">家具专场</span
                ><a href="/" class="more">查看更多</a>
              </div>
              <div class="photo"><img /></div>

              <div class="cfx">
                <div class="ctx">
                  <div class="img"><img /></div>
                  <div class="price">
                    <span class="sales">特卖价</span
                    ><span class="unit">kd:</span><span class="ju">200:00</span>
                  </div>
                  <div class="title">modernist munifnfnfn</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                    </div>
                    <img src="../assets/images/cel_shoucan.png" alt="" />
                  </div>
                  <div class="button">加入购物车</div>
                </div>
              </div>
            </div>

            <!-- 第六层厨具专场 -->
            <div class="furniture">
              <div>
                <span class="fur">厨具专场</span
                ><a href="/" class="more">查看更多</a>
              </div>
              <div class="photo"><img /></div>

              <div class="cfx">
                <div class="ctx" v-for="(item,index) in bar" :key="index">
                  <div class="img" ><img :src="item.pic" style="width: 193px;
              height: 131px;" /></div>
                  <div class="price">
                    <span class="sales">特卖价</span
                    ><span class="unit">kd:</span><span class="ju">200:00</span>
                  </div>
                  <div class="title">{{item.cate_name}}</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                    </div>
                    <img src="../assets/images/cel_shoucan.png" alt="" />
                  </div>
                  <div class="button">加入购物车</div>
                </div>
              </div>
            </div>

            <!-- 第七层猜你喜欢 -->

            <div class="furniture">
              <div>
                <span class="fur">猜你喜欢</span
                ><a href="/" class="more">查看更多</a>
              </div>
              <div class="photo"><img /></div>

              <div class="cfx">
                <div class="ctx">
                  <div class="img"><img /></div>
                  <div class="price">
                    <span class="sales">特卖价</span
                    ><span class="unit">kd:</span><span class="ju">200:00</span>
                  </div>
                  <div class="title">modernist munifnfnfn</div>
                  <div class="score">
                    <div class="start">
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
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
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                      <img src="../assets/images/redstart.png" alt="" />
                    </div>
                    <img src="../assets/images/cel_shoucan.png" alt="" />
                  </div>
                  <div class="button">加入购物车</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 切换面板厨房用具 -->
        <div v-show="1 == currentIndex">
          <div class="top">
            <span>排序：</span>
            <span>综合</span>
            <span>价格</span>
            <span>销量</span>
          </div>
          <div class="fex">
            <div class="item">
              <div><img src="" alt="" /></div>
              <div>
                <span class="unit">kd </span
                ><span class="price"> item.price </span>
              </div>
              <div class="title">item.goods_name</div>

              <div class="score">
                <span class="star">
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                </span>
                <span class="wuj">
                  <img src="../assets/images/cel_shoucan.png" alt=""
                /></span>
              </div>

              <div class="button">立即购买</div>
            </div>

            <div class="item">
              <div><img src="" alt="" /></div>
              <div>
                <span class="unit">kd </span
                ><span class="price"> item.price </span>
              </div>
              <div class="title">item.goods_name</div>

              <div class="score">
                <span class="star">
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                </span>
                <span class="wuj">
                  <img src="../assets/images/cel_shoucan.png" alt=""
                /></span>
              </div>

              <div class="button">立即购买</div>
            </div>

            <div class="item">
              <div><img src="" alt="" /></div>
              <div>
                <span class="unit">kd </span
                ><span class="price"> item.price </span>
              </div>
              <div class="title">item.goods_name</div>

              <div class="score">
                <span class="star">
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                </span>
                <span class="wuj">
                  <img src="../assets/images/cel_shoucan.png" alt=""
                /></span>
              </div>

              <div class="button">立即购买</div>
            </div>

            <div class="item">
              <div><img src="" alt="" /></div>
              <div>
                <span class="unit">kd </span
                ><span class="price"> item.price </span>
              </div>
              <div class="title">item.goods_name</div>

              <div class="score">
                <span class="star">
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                </span>
                <span class="wuj">
                  <img src="../assets/images/cel_shoucan.png" alt=""
                /></span>
              </div>

              <div class="button">立即购买</div>
            </div>

            <div class="item">
              <div><img src="" alt="" /></div>
              <div>
                <span class="unit">kd </span
                ><span class="price"> item.price </span>
              </div>
              <div class="title">item.goods_name</div>

              <div class="score">
                <span class="star">
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                  <img src="../assets/images/redstart.png" alt="" />
                </span>
                <span class="wuj">
                  <img src="../assets/images/cel_shoucan.png" alt=""
                /></span>
              </div>

              <div class="button">立即购买</div>
            </div>
          </div>

          <!-- 分页 -->
          <div class="pagination_section">
            <ul>
              <li>
                <a class="pre" href="#"><span  >前一页</span></a>
              </li>
              <li>
                <a class="one active" href="#"><span>1</span></a>
              </li>
              <li>
                <a class="one" href="#"><span>2</span></a>
              </li>
              <li>
                <a class="one" href="#"><span>3</span></a>
              </li>
              <li>
                <a class="one" href="#"><span>4</span></a>
              </li>
              <li>
                <a class="one" href="#"><span>5</span></a>
              </li>
              <li>
                <a class="last" href="#"><span >后一页</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myaxios from "@/http/Myaxios.js";
import httpApi from "@/http/index.js";
export default {
  data() {
    return {
      category: "", //分列列表
      ProductInsideLeft:'',//专区分类左内页
      ProductInsideRight:'',//专区分类右边页
      menu:"",
      bar: "", //导航，
      data1: [], //新品上线
      data2: [], //热卖好物
      currentIndex: 1, //当前默认选中
      isActive1:false,
      isActive2:false,
      swiperOptions: {
        // effect: "cube",
        loop: true,
        autoplay: true,
      },
    };
  },
  mounted() {
    this.init();

  },
  created(){
    this.changeMenu(1)
  },
  methods: {
    changeMenu(menu){
      if(menu===1){
        this.isActive1=true
        this.isActive2=false
      }else{
        this.isActive1=false
        this.isActive2=true
      }
this.menu = menu
    let data = {
      page:1,
      limit:20,
      type:menu,
    };
    // console.log(data);
httpApi.homepageApi.queryNewProductsInside(data ).then((res)=>{
          console.log('专区新品抢购，热销，空运，积分',res);
          this.ProductInsideLeft = res.data.data
        })

    },
    updateMenu(menu){
      this.menu = menu
      let data = {
      page:1,
      limit:20,
      type:menu,
      }
      httpApi.homepageApi.queryNewProductsInside(data ).then((res)=>{
          console.log('专区新品抢购，热销，空运，积分',res);
          this.ProductInsideRight = res.data.data
        })
    
    },
    handleClick(index) {
      this.currentIndex = index;
    },
    //跳转
    jumpDetail(val1) {
      console.log(val1);
      this.$router.push({
        path: "/detail",
        query: {
          id: val1,
        },
      });
    },
    init() {
      httpApi.homepageApi.queryCategory().then((res) => {
        console.log("分列列表", res);
        this.bar = res.data.data;
      });
      httpApi.homepageApi
        .querySectionCategoryInside({
          page: 1,
          limit: 20,
          sort: 1,
          // order:DESC,
          cid: 291,
        })
        .then((res) => {
          console.log("专区分类内页cate", res);
          this.category = res.data.data;
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
    .nav {
      margin-top: 23px;
      display: flex;
      span {
        margin-left: 10px;
        width: 86px;
        height: 25px;
        font-size: 16px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
        margin-top: 10px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span.active {
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
      .fontColor{
        color: #ed1b35 !important;
      }
      .campaign {
        width: 1200px;
        margin: 0 auto;
        display: flex;

        .launch {
          width: 587px;
          height: 341px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          .new {
            .xinp {
              width: 112px;
              height: 40px;
              font-size: 28px;
              font-family: PingFang SC-Heavy, PingFang SC;
              font-weight: 800;
              line-height: 0px;
              margin-right: 10px;
              cursor:pointer
            }
            .division {
              width: 0px;
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
              cursor:pointer;
            }
            .more {
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
          width: 600px;
          display: flex;
          overflow: hidden;

          .pic {
            margin-top: 30px;
            margin-left: 10px;
            img {
              width: 175px;
              height: 177px;
            }
            .price {
              margin-left: 30px;
              height: 26px;
              background: #ed1b35;
              border-radius: 13px 13px 13px 13px;
              opacity: 1;
            }
            .del-price {
              width: 73px;
              height: 30px;
              font-size: 22px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #333333;
              line-height: 0px;
              .unit {
                margin-left: 10px;
                font-size: 12px;
              }
            }
            .button {
              width: 176px;
              height: 35px;
              margin-left: 12px;
              margin-top: 22px;
              opacity: 1;
              background-color: #f2f2f2;
              line-height: 35px;
              text-align: center;
            }
          }
        }

        .launch {
          width: 587px;
          height: 341px;
          background: #ffffff;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          .new {
            .hot {
              width: 112px;
              height: 40px;
              font-size: 28px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #d68b07;
              line-height: 0px;
              margin-right: 10px;
            }
            .division {
              width: 0px;
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
        .pic-content {
          width: 600px;
          display: flex;
          overflow: hidden;
          .pic2 {
            width: 175px;
            height: 242px;
            margin-right: 30px;
            img {
              margin-top: 30px;
              width: 175px;
              height: 159px;
            }
            .re {
              width: 175px;
              background: #f2f2f2;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
              .re1 {
                margin-left: 20px;
                width: 120px;
                height: 22px;
                background: #d9b77a;
                border-radius: 13px 13px 13px 13px;
                opacity: 1;
              }
              .re2 {
                margin-left: 20px;
                margin-top: 10px;
                width: 56px;
                height: 20px;
                font-size: 14px;
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                color: #333333;
                line-height: 0px;
              }
            }
          }
        }
      }

      // 限时抢购
      .time-limit {
        margin-top: 60px;
        .xianshi {
          width: 112px;
          height: 40px;
          font-size: 28px;
          font-family: PingFang SC-Heavy, PingFang SC;
          font-weight: 800;
          color: #333333;
          line-height: 0px;
        }
        .more {
          text-decoration: none;
          margin-left: 800px;
          width: 60px;
          height: 21px;
          font-size: 15px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 0px;
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
          flex-direction: row;
          flex-wrap: wrap;
          white-space: wrap;
          // overflow: hidden;

          .content {
            display: inline-block;
            margin-right: 46px;
            margin-top: 40px;
            width: 193px;
            height: 328px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;

            .time-down {
              width: 60px;
              height: 14px;
              font-size: 10px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #ed1b35;
              line-height: 0px;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
            .time {
              width: 41px;
              height: 14px;
              font-size: 10px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: #ed1b35;
              line-height: 0px;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
            img {
              width: 193px;
              height: 131px;
            }
            .center {
              width: 193px;
              height: 31px;
              background: linear-gradient(90deg, #f9001f 0%, #ff3d78 100%);
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
            }
            .limit {
              margin-top: 10px;
              width: 162px;
              height: 20px;
              font-size: 14px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #ed1b35;
              line-height: 0px;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }
            .title {
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

            .button {
              width: 176px;
              height: 35px;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
              border: 1px solid #ed1b35;
              line-height: 35px;
              text-align: center;
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
          }
        }
      }

      //家具专场
      .furniture {
        margin-top: 100px;
        width: 1200px;
        .fur {
          width: 112px;
          height: 40px;
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
          margin-left: 800px;
          width: 60px;
          height: 21px;
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
          flex-wrap:wrap;
          .ctx {
            margin-right: 60px;
            margin-top: 20px;
            width: 193px;
            height: 328px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            .img {
              width: 193px;
              height: 131px;
            }
            .sales {
              width: 35px;
              height: 15px;
              background: #ed1b35;
              border-radius: 8px 8px 8px 8px;
              opacity: 1;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
              margin-right: 10px;
            }
            .unit {
              font-size: 14px;
            }
            .ju {
              width: 103px;
              margin-left: 10px;
              height: 28px;
              font-size: 20px;
              font-family: PingFang SC-Heavy, PingFang SC;
              font-weight: 800;
              color: #333333;
              line-height: 0px;
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
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
    }

    //  切换面板1
    .top {
      width: 1200px;
      height: 44px;
      background: #ffffff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      display: flex;
      span {
        height: 44px;
        line-height: 44px;
        margin-left: 70px;
        font-size: 16px;
      }
      .item {
        width: 217px;
        height: 329px;
        background: #ffffff;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        img {
          width: 217px;
          height: 131px;
        }
        .unit {
          font-size: 14px;
        }
        .price {
          width: 103px;
          height: 28px;
          font-size: 20px;
          font-family: PingFang SC-Heavy, PingFang SC;
          font-weight: 800;
          color: #333333;
          line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .title {
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
          margin-top: 240px;
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
    .fex {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .item {
        margin-top: 20px;
        margin-left: 10px;
        width: 217px;
        height: 329px;
        background: #ffffff;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        img {
          width: 100px;
          height: 100px;
        }
        div .unit {
          margin-top: 189px;
          font-size: 14px;
        }
        div .price {
          margin-top: 189px;
          width: 103px;
          height: 28px;
          font-size: 20px;
          font-family: PingFang SC-Heavy, PingFang SC;
          font-weight: 800;
          color: #333333;
          line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .title {
          margin-top: 20px;
          width: 159px;
          height: 22px;
          font-size: 16px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #333333;
          line-height: 0px;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }
        .score {
          width: 217px;
          height: 18px;
          .star {
            width: 329px;
            img {
              width: 12px;
              height: 11px;
            }
          }
          .wuj {
            margin-left: 134px;
            img {
              width: 12px;
              height: 11px;
            }
          }
        }
        .button {
          margin-left: 8px;
          margin-top: 86px;
          width: 200px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          background: #ed1b35;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
        }
      }
    }
    .pagination_section {
      margin-left: 737px;
      width: 381px;
      height: 43px;
      background: #ffffff;
      opacity: 1;
      ul {
        width: 381px;
        display: flex;
        list-style: none;
        height: 43px;
        li {
          margin-left: 20px;
          .pre {
            width: 94px;
            height: 43px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            border: 1px solid #ebebeb;
            line-height: 43px;
            text-decoration: none;
          }
          .one {
            text-decoration: none;
            width: 39px;
            height: 43px;
            line-height: 43px;
            .active {
              text-decoration: none;
              width: 39px;
              height: 43px;
              line-height: 43px;
              background: #ed1b35;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
            }
          }
          .last {
            width: 94px;
            height: 43px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            border: 1px solid #ebebeb;
            line-height: 43px;
            text-decoration: none;
          }
        }
      }
    }
    //厨具专场

    //猜你喜欢
  }
}
</style>
