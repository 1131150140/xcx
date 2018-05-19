<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex11</a>
    <a href="/pages/button/main" class="counter">去往按钮</a>
    <a href="/pages/actionsheet/main" class="counter">弹出上啦框</a>
     <a href="/pages/article/main" class="counter">文章card</a>
      <a href="/pages/badge/main" class="counter">多行文本框</a>
      <a href="/pages/componentsTest/main" class="counter">组件测试</a>
      <a href="/pages/dislog/main" class="counter">弹出窗口</a>
      <a href="/pages/flex/main" class="counter">flex</a>
      <a href="/pages/footer/main" class="counter">底部footer</a>
      <a href="/pages/gallery/main" class="counter">画廊</a>
      <a href="/pages/gird/main" class="counter">九宫格</a>
      <a href="/pages/icon/main" class="counter">图标</a>
      <a href="/pages/input/main" class="counter">输入框</a>
      <a href="/pages/list/main" class="counter">列表</a>
      <a href="/pages/loadMore/main" class="counter">加载更多</a>
      <a href="/pages/message/main" class="counter">成功失败提示页</a>
      <a href="/pages/mulinkagePicker/main" class="counter">多级联动</a>
      <a href="/pages/navbar/main" class="counter">选项卡</a>
      <a href="/pages/panel/main" class="counter">图文内容</a>
      <a href="/pages/picker/main" class="counter">多种选择器</a>
       <a href="/pages/progress/main" class="counter">进度条</a>
       <a href="/pages/requset/main" class="counter">api请求</a>
       <a href="/pages/searchbar/main" class="counter">搜索框</a>
       <a href="/pages/silder/main" class="counter">滑块</a>
       <a href="/pages/swiper/main" class="counter">轮播</a>
        <a href="/pages/tabbar/main" class="counter">底部导航</a>
         <a href="/pages/test/main" class="counter">测试</a>
         <a href="/pages/toast/main" class="counter">成功和加载中</a>
         <a href="/pages/uploader/main" class="counter">图片上传</a>
         <a href="/pages/preview/main" class="counter">fuku</a>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
