//index.js
//获取应用实例
const app = getApp()
const WXAPI = require('apifm-wxapi')
Page({
  data: {
   banners:[]
  },
  //事件处理函数

  onLoad: function () {
   //启动滑屏效果
   //图片数据哪里来？
   WXAPI
        .banners({//头图 banner 位
          type:'app'
        })
        .then(res=>{
          this.setData({
            banners:res.data
          })
        })
 
  },
  getUserInfo: function(e) {

  }
})
