<template>
  <div class="content">
        <div class="order-title">个人中心/我的订单</div>
        <!-- 订单状态 -->
        <div class="order-status">
            <div class="myorder"><span>我的订单</span></div>
            <div class="status-bottom">
                <ul>
                    <li >全部</li>
                    <li>待付款</li>
                    <li>待发货</li>
                    <li>运输中</li>
                    <li>已入库</li>
                    <li>待自提</li>
                    <li>申请送货中</li>
                    <li>待付运费</li>
                    <li>已完成</li>
                </ul>
            </div>
        </div>

        <!-- 订单列表 -->
        <div class="order-list">
            <!-- 信息 -->
            <div class="list-head">
                <p></p>
                <p>三天内可取消订单</p>
                <p>三天内可取消订单</p>
                <p>三天内可取消订单</p>
                <!-- <p :class="lang=='zh'?'p1':lang=='en'?'e1':'r1'">{{$t('order.more10')}}</p>
                <p :class="lang=='zh'?'p2':lang=='en'?'e2':'r2'">{{$t('order.more11')}}</p>
                <p :class="lang=='zh'?'p3':lang=='en'?'e3':'r3'">{{$t('order.more12')}}</p>
                <p :class="lang=='zh'?'p4':lang=='en'?'e4':'r4'">{{$t('order.more13')}}</p> -->
            </div>
            <!-- 列表 -->
            <div class="list">
                <ul class="list-ul">
                    <li>
                        <div class="single-time">
                            <div class="d0">2022-02-22  12:00:00</div>
                            <div class="d1">订单号:2345677</div>
                            <div class="d2">数量</div>
                            <div class="d3">三天内可取消订单</div>
                        </div>
                        
                        <div class="single-content">
                            <div class="single-right">
                                <img src="" alt="">
                                <div class="single-name">
                                    <p class="pp1">商品名称</p>
                                    <p class="pp2">商品参数</p>
                                    <p class="pp3">单价:100.000KW</p>
                                </div>
                            </div>
                        
                            <div class="single-num">x2</div>
                            
                            <div class="single-total">
                                <div class="total-price"><p>实付款：</p>USD 200.000</div>
                                <div class="freight-price">订单:USD 200.000</div>
                            </div>
                          
                            <div class="cancel">取消订单</div>
                        </div>
                    </li>
                    <li>
                        <div class="single-time">
                            <div class="d0">2022-02-22  12:00:00</div>
                            <div class="d1">订单号:2345677</div>
                            <div class="d2">数量</div>
                            <div class="d3">三天内可取消订单</div>
                        </div>
                        
                        <div class="single-content">
                            <div class="single-right">
                                <img src="" alt="">
                                <div class="single-name">
                                    <p class="pp1">商品名称</p>
                                    <p class="pp2">商品参数</p>
                                    <p class="pp3">单价:100.000KW</p>
                                </div>
                            </div>
                        
                            <div class="single-num">x2</div>
                            
                            <div class="single-total">
                                <div class="total-price"><p>实付款：</p>USD 200.000</div>
                                <div class="freight-price">订单:USD 200.000</div>
                            </div>
                          
                            <div class="cancel">取消订单</div>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- 底部页数跳转  数组遍历需要控制超过5页隐藏  -->
            <!-- <div class="page-change">
                <div class="previous"></div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="next" ></div>
            </div> -->
            <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
        </div>

      
   

    </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
    export default {
       name:"order",
       components:{
        OrderHeader,
       },
       data(){
        return{
            title:"",
            tip:""
        }
       },


    }
</script>

<style lang="less" scoped>
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #F9FAFC;
    margin-top: 165px;
    .order-title{
        width: 1188px;
        padding-left: 12px;
        margin-top: 20px;
        margin-bottom: 15px;
        display: flex;
        font-size: 14px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
    }
    .order-status{
        width: 1200px;
        height: 131px;
        background: #FFFFFF;
        .myorder{
            width: 1155px;
            margin: 0 auto;
            display: flex;
            border-bottom: 1px solid #E9E9E9;
            span{
                margin: 0;
                padding: 16px 0;
                font-size: 16px;
                font-family: PingFang SC-Heavy, PingFang SC;
                font-weight: 800;
                color: #333333;
            }
        }
        .status-bottom{
            width: 1155px;
            margin: 0 auto;
            ul{
                margin: 0;
                padding: 0;
                display: flex;
                .select{
                    background: #01C5C4;
                    color: #FFFFFF;
                }
                li{
                    list-style: none;
                    // width: 71px;
                    height: 30px;
                    padding: 0px 24px;
                    border-radius: 6px 6px 6px 6px;
                    border: 1px solid #E2E2E2;
                    font-size: 12px;
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #000000;
                    text-align: center;
                    line-height: 30px;
                    margin: 21px 0;
                    margin-right: 25px;
                }
            }
        }

    }

    //订单列表
    .order-list{
        width: 1200px;
        margin-bottom: 120px;
        background: #FFFFFF;
        .list-head{
            width: 1200px;
            height: 40px;
            background: #F8F6F6;
            display: flex;
            align-items: center;
            p{
                font-size: 12px;
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                color: #333333;
            }
            .p1{
                margin-left: 171px;
            }
            .p2{
                margin-left: 431px;
            }
            .p3{
                margin-left: 216px;
            }
            .p4{
                margin-left: 215px;
            }
            .e1{
                margin-left: 153px;
            }
            .e2{
                margin-left: 390px;
            }
            .e3{
                margin-left: 200px;
            }
            .e4{
                margin-left: 172px;
            }
            .r1{
                margin-left: 170px;
            }
            .r2{
                margin-left: 410px;
            }
            .r3{
                margin-left: 200px;
            }
            .r4{
                margin-left: 174px;
            }
        }

        //列表
        .list{
            width: 1200px;
            background: #FFFFFF;
            .list-ul{
                margin: 0;
                padding: 0;
                width: 1200px;
                padding-top: 18px;
                display: flex;
                flex-direction: column;
                align-items: center;
                li{
                    list-style: none;
                    width: 1152px;
                    // height: 159px;
                    margin-bottom: 20px;
                    background: #FFFFFF;
                    border: 1px solid #E2E2E2;
                    .single-time{
                        width: 1152px;
                        height: 31px;
                        background: #F2FFFF;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        div{
                            font-size: 12px;
                            font-family: PingFang SC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #333333;
                        }
                        .single-left{
                            display: flex;
                            .d0{
                                margin-left: 15px;
                            }
                            .d1{
                                margin-left: -385px;
                            }
                            .d2{
                                margin-left: 94px;
                            }
                        }
                        
                        .d3{
                            // margin-left: 687px;
                            margin-right: 35px;
                        }
                    }

                    //content
                    .single-content{
                        width: 1152px;
                        height: 128px;
                        display: flex;
                        align-items: center;
                       .cancel{
                        margin-left: 138px;

                        }
                        .single-right{
                            display: flex;
                            margin-left: 13px;
                            img{
                                width: 98px;
                                height: 101px;
                            }
                            .single-name{
                                width: 297px;
                                height: 101px;
                                margin-left: 12px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                align-items: flex-start;
                                p{
                                    margin: 0;
                                    padding: 0;
                                    font-size: 13px;
                                    font-family: PingFang SC-Regular, PingFang SC;
                                    font-weight: 400;
                                }
                                .pp1{
                                    color: #000000;
                                    word-wrap: break-word;
                                    text-align: left;                               
                                    overflow-wrap: break-word;  
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    /*！autoprefixer: on */ 
                                    -webkit-line-clamp:3;
                                    -webkit-box-orient: vertical;
                                    /*！autoprefixer: off */
                                }
                                .pp2{
                                    color: #999999;
                                    text-align: left;
                                }
                                .pp3{
                                    font-family: PingFang SC-Bold, PingFang SC;
                                    font-weight: bold;
                                    color: #333333;
                                }
                            }
                        }      .single-right{
                            display: flex;
                            margin-left: 13px;
                            img{
                                width: 98px;
                                height: 101px;
                            }
                            .single-name{
                                width: 297px;
                                height: 101px;
                                margin-left: 12px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                align-items: flex-start;
                                p{
                                    margin: 0;
                                    padding: 0;
                                    font-size: 13px;
                                    font-family: PingFang SC-Regular, PingFang SC;
                                    font-weight: 400;
                                }
                                .pp1{
                                    color: #000000;
                                    word-wrap: break-word;
                                    text-align: left;                               
                                    overflow-wrap: break-word;  
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    /*！autoprefixer: on */ 
                                    -webkit-line-clamp:3;
                                    -webkit-box-orient: vertical;
                                    /*！autoprefixer: off */
                                }
                                .pp2{
                                    color: #999999;
                                    text-align: left;
                                }
                                .pp3{
                                    font-family: PingFang SC-Bold, PingFang SC;
                                    font-weight: bold;
                                    color: #333333;
                                }
                            }
                        }

                        //数量
                        .single-num{
                            margin-left: 188px;
                            font-size: 14px;
                            font-family: PingFang SC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #707070;
                        }

                        //总价
                        .en-total{
                            margin-left: 155px !important;
                        }
                        .ar-total{
                            margin-left: 150px !important;
                        }
                        .single-total{
                            // width: 128px;
                            margin-left: 175px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .total-price{
                                display: flex;
                                font-size: 13px;
                                font-family: PingFang SC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FF0000;
                                p{
                                    padding: 0;
                                    margin: 0;
                                    color: #131313;
                                }

                            }
                            // .freight-price{
                            //     font-size: 12px;
                            //     font-family: PingFang SC-Regular, PingFang SC;
                            //     font-weight: 400;
                            //     color: #131313;
                            // }
                        }

                        //查看
                        .en-see{
                            margin-left: 68px !important;
                        }
                        .ar-see{
                            margin-left: 80px !important;
                        }
                        .single-see{
                            margin-left: 146px;
                            font-size: 12px;
                            font-family: PingFang SC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #333333;
                        }
                    }

                }
            }
        }

        //底部页数跳转
        .page-change{
            width: 1152px;
            height: 43px;
            margin: 0 auto;
            margin-top: 77px;
            margin-bottom: 72px;
            display: flex;
            justify-content: flex-end;
            .ar-previous{
                width: 105px !important;
            }
            .previous{
                width: 94px;
                height: 43px;
                margin-right: 15px;
                background: #FFFFFF;
                border: 1px solid #EBEBEB;
                text-align: center;
                line-height: 43px;
                font-size: 14px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #999999;
            }
            .previous:hover{
                border: 1px solid #01C5C4;
                color: aqua;
            }
            ul{
                margin: 0;
                padding: 0;
                display: flex;
                .nav{
                    background: #01C5C4;
                    color: #FFFFFF;
                }
                li{
                    list-style: none;
                    width: 39px;
                    height: 43px;
                    background: #FFFFFF;
                    border: 1px solid #EBEBEB;
                    text-align: center;
                    line-height: 43px;
                    font-size: 14px;
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                    margin-right: 5px;
                }
            }
            .next:hover{
                border: 1px solid #01C5C4;
                color: aqua;
            }
            .ar-next{
                width: 105px !important;
            }
            .next{
                width: 94px;
                height: 43px;
                margin-left: 10px;
                background: #FFFFFF;
                border: 1px solid #EBEBEB;
                text-align: center;
                line-height: 43px;
                font-size: 14px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #999999;
            }
        }

    }

    .bar{
        width: 100%;
        background: #FFFFFF;
    }

}
</style>