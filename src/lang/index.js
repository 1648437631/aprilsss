import Vue from 'vue'
// import {token} from '../store/index'
import VueI18n from 'vue-i18n'
import elementZH from 'element-ui/lib/locale/lang/zh-CN' // 中文包
import elementEN from 'element-ui/lib/locale/lang/en' // 英文报
import elementAR from 'element-ui/lib/locale/lang/ar' // 阿拉伯报
import customZH from './zh' 
import customEN from './en'
import customAR from './ar'
Vue.use(VueI18n) // 完成全局注册
export default new VueI18n({
  locale: localStorage.getItem('language')||'en',
//   token.get('accept-language') ||
    messages:{
        zh:{
            ...elementZH,
            ...customZH
        },
        en:{
            ...elementEN,
            ...customEN
        },
        ar:{
            ...elementAR,
            ...customAR,
        }
    }
})