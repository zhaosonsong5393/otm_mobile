//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
   
    userInfo: {}
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    // //内容解析
    // var content = res.data.content
    // WxParse.wxParse('content', 'html', content, that, 3);
    wx.setNavigationBarTitle({
      title: '妈妈课堂'
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
