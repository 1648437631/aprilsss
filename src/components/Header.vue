<template>
  <div>
    <div class="container">
        <!-- 顶部导航栏 -->
        <div class="top-bar">
            <!-- 语言切换 收藏数量显示 -->
            <div class="left">
                     <!-- 搜索欄語言 -->
                     <img src="../assets/images/alabo@2.png"/>
        <el-dropdown  @command="changeLang">
          <span class="el-dropdown-link"  >
            {{$t('index.tar.more30')}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown"  >
           
            <el-dropdown-item icon="el-icon-edit"  command="zh" :split-button="true" :disabled="this.$i18n.locale === 'zh'" @command="changeLang ('zh')">中文</el-dropdown-item>
            
            <el-dropdown-item icon="el-icon-edit"  command="en" :disabled="this.$i18n.locale === 'en'" @click="changeLang ('en')">英文</el-dropdown-item>
         
            <el-dropdown-item icon="el-icon-edit"  command="ar" :disabled="this.$i18n.locale === 'ar'"  @click="changeLang ('ar')" >阿拉伯语</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    <!-- 搜索欄語言 -->
                <!-- 语言切换 -->
                <!-- <div class="language">
                  <img src="../assets/images/alabo@2.png" alt="" class="icon">
                   
                    <p>中文</p>
                    <img src="../assets/images/arrow-down-bold.png" alt="" class="down">

               
               
                </div> -->
                <!-- 收藏数量 -->
                <div class="collection">
                    <img src="../assets/images/cel_shoucan.png" alt="">
                    <p> {{$t('index.home.more12')}}</p>
                </div>
            </div>
             <!-- 首页导航栏 -->
             <div class="right">
                <div class="home">{{$t('index.tar.more1')}}</div>
                <div class="person">
                    <img src="../assets/images/icon_geren_n.png" alt="">
                    <p>{{$t('index.tar.more31')}}</p>
                </div>
                <div class="news">
                    <img src="../assets/images/tip.png" alt="">
                    <p>{{$t('index.tar.more32')}}</p>
                </div>
                <div class="currency">
                    <img src="" alt="">
                    <p>KWD</p>
                </div>
                <div class="car">
                    <img src="../assets/images/icon_gouwu.png" alt="">
                    <p>{{$t('index.home.more13')}}</p>
                </div>
            </div>

        </div>

        <!-- logol图标 搜索框 -->
        <div class="top-title">
            <div class="top-content">
                <!-- 图标文字是否跟随语言切换 需要三个不同语言版本图标 -->
                <img src="../assets/images/logol.png" alt="">
                <div class="search">
                    <img src="" alt="">
                    <input type="text" placeholder="请输入您想要搜索的商品">
                    <div class="buttom">{{$t('index.home.more19')}}</div>
                </div>
            </div>
        </div>



      </div>
    </div>
</template>

<script>
import store from '../store'
export default {
    methods: {
        changeLang(command){
       // 改变当前的多语言 
       console.log(command);
       localStorage.setItem('language',command)
       this.$i18n.locale = command // 替换之前的locale
       this.$message.success('success')
     window.location.reload()
   },


    },
};
</script>


<style lang="less" scoped>
.container{
    width: 100%;
    .top-bar{
        margin: 0 auto;
        width: 1200px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        .left{
            display: flex;
            .language{
                display: flex;
                align-items: center;
                .icon{
                    width: 20px;
                    height: 20px;
                }
                p{
                    margin: 0 8px;
                    padding: 0;
                    font-size: 14px;
                    color: #707070;  
                }
                .down{
                    width: 8px;
                    height: 5px;
                }
            }
            //收藏
            .collection{
                margin-left: 35px;
                display: flex;
                align-items: center;
                img{
                    width: 20px;
                    height: 18px;
                }
                p{
                    margin: 0;
                    padding: 0;
                    margin-left: 8px;
                    font-size: 14px;
                    color: #707070;  
                }
            }

        }

        //首页导航栏
        .right{
            display: flex;
            align-items: center;
            .home{
                font-size: 14px;
                color: #333333;
            }
            .person{
                margin-left: 36px;
                display: flex;
                align-items: center;
                img{
                    width: 15px;
                    height: 17px;
                }
                p{
                    margin: 0;
                    padding: 0;
                    margin-left: 9px;
                    font-size: 14px;
                    color: #333333;
                }
            }
            .news{
                margin-left: 36px;
                display: flex;
                align-items: center;
                img{
                    width: 17px;
                    height: 19px;
                }
                p{
                    margin: 0;
                    padding: 0;
                    margin-left: 9px;
                    font-size: 14px;
                    color: #333333;
                }
            }
            .currency{
                margin-left: 36px;
                display: flex;
                align-items: center;
                img{
                    width: 18px;
                    height: 18px;
                }
                p{
                    margin: 0;
                    padding: 0;
                    margin-left: 9px;
                    font-size: 14px;
                    color: #333333;
                }
            }
            .car{
                margin-left: 36px;
                display: flex;
                align-items: center;
                img{
                    width: 19px;
                    height: 17px;
                }
                p{
                    margin: 0;
                    padding: 0;
                    margin-left: 9px;
                    font-size: 14px;
                    color: #333333;
                }
            }

        }

    }

    .top-title{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        .top-content{
            width: 1200px;
            display: flex;
            align-items: center;
            img{
                width: 264px;
                height: 64px;
            }
            .search{
                margin-left: 120px;
                display: flex;
                height: 48px;
                width: 664px;
                border: 1px solid #ed1b35;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                img{
                    margin-left: 10px;
                    width: 16px;
                    height: 16px;
                }
                input{
                    width: 520px;
                    height: 30px;
                    border: none;

                }
                .buttom{
                    width: 86px;
                    height: 48px;
                    background: #ed1b35;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    font-size: 22px;
                }

            }
        }
    }

}
</style>


