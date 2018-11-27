var appInstance = getApp();
var WxParse = require('../../components/wxParse/wxParse.js');
var util = require('../../utils/util.js');
import defaultData from 'data';
var pageData = {
  data: defaultData.data,

  onLoad: function (e) {
    console.log(getApp().globalData.userInfo)
  },
  
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {

  },
  detail_click: function (event){
    let id = event.currentTarget.dataset.id
    console.log("收到新闻列表参数:" + JSON.stringify(event.currentTarget.dataset.id))
    console.log(wx);
      wx.navigateTo({
        url: '../../pages/news/detail?id=' + id,
      })
  }
};
Page(pageData);

