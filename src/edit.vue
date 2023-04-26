httpApi.homepageApi.querySecKill().then((res) => {
    console.log("加载秒杀结果", res);
         // 将res.data.data中存储的演员列表存入this.productdata中
         this.data = res.data.data;
  });
  httpApi.homepageApi.querySecKillDetails().then((res) => {
    console.log("加载秒杀商品详情结果", res);
         // 将res.data.data中存储的演员列表存入this.productdata中
         this.data = res.data.data;
  });

  httpApi.homepageApi.queryActivityList().then((res) => {
    console.log("加载爆款推荐列表", res);
         // 将res.data.data中存储的演员列表存入this.productdata中
         this.data = res.data.data;
  });
  httpApi.homepageApi.queryActivityList().then((res) => {
    console.log("加载预售商品列表", res);
         // 将res.data.data中存储的演员列表存入this.productdata中
         this.data = res.data.data;
  });
  httpApi.homepageApi.queryAllList().then((res) => {
    console.log("加载全部商品列表", res);
         // 将res.data.data中存储的演员列表存入this.productdata中
         this.data = res.data.data;
  });