import Vue from 'vue'
import App from './App'
import './css/app.css'
import '../static/weui/weui.css'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main', '^pages/index/main', 'pages/actionsheet/main',
      'pages/article/main', 'pages/badge/main', 'pages/componentsTest/main',
      'pages/dislog/main', 'pages/counter/main', 'pages/flex/main', 'pages/footer/main',
      'pages/gallery/main', 'pages/gird/main', 'pages/icon/main',
      'pages/input/main', 'pages/list/main', 'pages/message/main',
      'pages/msg-fail/main','pages/msg-success/main', 'pages/mulinkagePicker/main',
      'pages/navbar/main', 'pages/panel/main', 'pages/picker/main',
      'pages/progress/main', 'pages/requset/main', 'pages/searchbar/main',
      'pages/silder/main', 'pages/swiper/main', 'pages/tabbar/main',
      'pages/test/main', 'pages/toast/main', 'pages/uploader/main',
      'pages/preview/main'
     
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
      tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/logs/main',
          text: '微信',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '朋友圈',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '时间',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        }
      ]
    } 
  }
}
