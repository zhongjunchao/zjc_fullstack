//index.js
//获取应用实例
const WXAPI = require('apifm-wxapi');
const app = getApp()

Page({
  data: {
    banners: []
  },
  // 生命周期
  onLoad: function () {
    // 启用滑屏效果
    // 图片数据从哪里？
    console.log('dddd');
    WXAPI
      .banners({ // 头图 banner 位
        type: 'app'
      })
      .then(res =>{
        this.setData({
          banners: res.data
        })
      })

  },
  getUserInfo: function(e) {
    
  }
})
